---
title: 萤石UIKit跨域问题
icon: Javascript
date: 2024-01-08
category: 踩坑
tag:
  - 监控
---

## Web Worker 跨源访问问题

使用萤石开放平台的 `ezopen JS SDK` 接入 web 页面的监控视频时，代码打包后部署到服务器上出现这个 `DOMException: Failed to construct 'Worker'...` 错误。

<!-- more -->

![cannot be accessed from origin '..'](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/202401082104545.png)

[Mozilla 文档说](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Spawning_a_worker)，Web Worker 必须遵守同源策略，并使用 CORS 来允许跨源访问。

我实际测试的结果是：使用域名 + https 协议访问部署的网站没有问题，萤石的视频流正常获取，但是使用 ip 地址访问就出现上面的错误。

让甲方提供域名，甲方不愿意，说只就用 ip 访问网站。

好吧，查询文档，UIKit 的[旧版文档](https://open.ys7.com/doc/zh/uikit/uikit_javascript.html)里的监控模式配置说明里提到一个`decoderPath`属性，填写解码器绝对路径，就是说部署的时候要把 ezuikit 的源码放入服务器，然后将文件路径作为属性值，那么调用的时候就 是同源的了。

但是我开发时 是按照[新版文档](https://open.ys7.com/help/1772)开发的，文档里的初始化参数说明里根本没有`decoderPath`字段，也没有类似含义的字段，node_modules 里找源码搜索也搜不到这个变量。

最终在 EZUIKit-JavaScript-npm 的 github 仓库里找到了[本地解码库示例](https://github.com/Ezviz-OpenBiz/EZUIKit-JavaScript-npm/blob/master/demos/base-demo/localDecoder.html)。

```js
var playr;
fetch("https://open.ys7.com/jssdk/ezopen/demo/token")
  .then((response) => response.json())
  .then((res) => {
    var accessToken = res.data.accessToken;
    playr = new EZUIKit.EZUIKitPlayer({
      id: "video-container", // 视频容器ID
      accessToken: accessToken,
      url: "ezopen://open.ys7.com/G39444019/1.live",
      template: "simple", // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版; theme-可配置主题；
      plugin: ["talk"], // 加载插件，talk-对讲
      staticPath: "/ezuikit_static/v65",
      width: 600,
      height: 400,
    });
  });
```

也就是说字段名称变成了`staticPath`...😅😅😅，**要把这个 demo 的 ezuikit_static 文件夹复制到服务器上，然后在 staticPath 里填链接，指定一个版本**，比如 v65。

我选择放入项目的 public 文件夹里然后配置 vite 的环境变量读取，最终解决了这个问题。

## 打包运行异常

还有一个坑就是 `vite` 使用 `terser` 方式打包后萤石视频组件无法使用，提示 `xe.log is not a function`，改用`esbuild` 方式打包后页面正常。

## 最佳实践

最后附上我的 vue + EZUIKit 的最佳实践。

```zsh
pnpm add ezuikit-js
```

```vue
<template>
  <div id="video-container" class="video"></div>
</template>
<script lang="ts" setup>
import EZUIKit from "ezuikit-js";
import { useUserStore } from "@/stores/modules/user";

const userStore = useUserStore();
let player: any = null;

onMounted(async () => {
  let aToken = await userStore.getYsToken;
  player = new EZUIKit.EZUIKitPlayer({
    id: "video-container", // 视频容器ID
    template: "pcLive",
    width: 380,
    height: 230,
    accessToken: aToken,
    staticPath: EZUIKIY_STATIC_PATH,
    url: `ezopen://open.ys7.com/${设备序列号}/1.hd.live`,
    handleError: (err: Error) => {
      console.log("获取直播流错误 :>> ", err);
    },
  });
});
onBeforeUnmount(() => {
  player.stop();
});

/** 切换视频地址 */
const handleClick = (xlh: string) => {
  player.stop(); // 执行stop方法停止上次取流
  // 切换播放地址场景
  player.play({
    url: `ezopen://open.ys7.com/${xlh}/1.hd.live`,
  });
};
</script>
```

荧石的每个 token 具备独立的 7 天生命周期，不要频繁调用避免占用过多接口调用次数，所以讲它存到本地，到期后重新请求。

```ts
// src/store/modules/user.ts
import { defineStore } from "pinia";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore({
  id: "user-store",
  state: () => ({ ysToken: "", ysExpireTime: 0 }),
  getters: {
    // 获取荧石 AccessToken
    async getYsToken(): Promise<string> {
      // 如果已经有了，根据时间戳判断是否过期
      if (this.ysToken && this.ysExpireTime > Date.now()) return this.ysToken;
      // 如果没有，就去请求
      const { data } = await getYsAccessToken();
      this.ysToken = data.accessToken;
      this.ysExpireTime = data.expireTime;
      return this.ysToken;
    },
  },
  persist: piniaPersistConfig("user-store"),
});
```

如果不想使用 EZUIKitPlayer 里提供的几种默认的模版，那么就删掉 `template`，改用 `themeData`，参考[自定义主题 demo](https://github.com/Ezviz-OpenBiz/EZUIKit-JavaScript-npm/blob/master/demos/base-demo/themeData.html)

---
title: Web端PostObject直传阿里云OSS
icon: vue
date: 2022-08-08
category:
  - utils
tag:
  - OSS
---

:::tip
Web 端常见的上传方法是用户在浏览器或 App 端上传文件到应用服务器，应用服务器再把文件上传到 OSS。这种方式需通过应用服务器中转，传输效率明显低于数据直传至 OSS 的方式。

数据直传至 OSS 是利用 OSS 的 PostObject 接口，使用表单上传方式上传文件至 OSS。
:::

## Demo: Vue 项目上传图片到 OSS

[阿里云文档：JavaScript 客户端签名直传](https://help.aliyun.com/document_detail/31925.htm?spm=a2c4g.11186623.0.0.4e5f43d3YpqQOt#concept-frd-4gy-5db)  
[OSS Browser.js SDK 的安装](https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1028.70652f08sBl5jq)

### 准备工作

- 设置跨域资源共享
  在 OSS 的`Bucket - 权限管理 - 跨域设置 - 创建规则`
  :::center
  <img src="https://riddler.oss-cn-shanghai.aliyuncs.com/blog/20220808231525.png" style="height:400px;"/>
  :::

- 安装 SDK 开发包

```
pnpm add ali-oss
```

- 获取 AccessKey
  打开阿里云 OSS，鼠标移到用户头像处，出现`AccessKey管理`入口，验证后获取`accessKeyId`和`accessKeySecret`

### 代码实现

我的使用场景是在 vue 项目中结合 Naive-ui 框架的上传组件来实现功能。

```vue
<template>
  <NUpload
    action=""
    :default-upload="false"
    multiple
    @change="handleChange"
    file-list-style="display:none"
  >
    <NButton>修改头像</NButton>
  </NUpload>
  <img :src="imgurl" />
</template>

<script setup>
import OSS from "ali-oss";
import { ref } from "vue";
import { NUpload, NButton } from "naive-ui";
const imgurl = ref(
  "https://riddler.oss-cn-shanghai.aliyuncs.com/upload/1659968470000.png"
);
const handleChange = (options) => {
  let file = options.fileList[0].file;
  // sdk提供的创建客户端实例方法
  const client = new OSS({
    region: "oss-cn-shanghai", // 创建Bucket时会选择不同地区，根据自己的选择填入对应名称
    accessKeyId: "***************", // 填入你的accessKeyId
    accessKeySecret: "***************", // 填入你的accessKeySecret
    bucket: "****", // 填入你的bucket名
  });

  const Name = file.name;
  const suffix = Name.substr(Name.indexOf(".")); // 文件后缀
  const filename = Date.parse(new Date()) + suffix; // 组成新文件名
  // 上传文件到bucket的指定文件夹:【upload】
  client
    .multipartUpload(`upload/${filename}`, file)
    .then((res) => {
      console.log("上传成功：", res);
      // ... 你的操作，可以拼接图片url，用于显示等...
      imgurl.value = `https://riddler.oss-cn-shanghai.aliyuncs.com/${res.name}`;
    })
    .catch((err) => {
      console.log("上传失败：", err);
    });
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
```

![上传图片到oss](https://riddler.oss-cn-shanghai.aliyuncs.com/blog/1659968721000.gif)

### 自己封装上传工具

也可以不安装`ali-oss`，自己封装上传工具,定制 policy。
[代码仓库](https://github.com/wardendon/uploadFileToOSS)

## 服务端签名后直传

在客户端通过 JavaScript 代码完成签名，无需过多配置，即可实现直传，非常方便。但是客户端通过 JavaScript 把 AccesssKey ID 和 AccessKey Secret 写在代码里面有泄露的风险，强烈建议使用[服务端签名后直传](https://help.aliyun.com/document_detail/31926.htm?spm=a2c4g.11186623.0.0.1b9e4f77HUmpYT#concept-en4-sjy-5db)或者[使用 STS 临时访问凭证访问 OSS](https://help.aliyun.com/document_detail/100624.htm?spm=a2c4g.11186623.0.0.1b9e344enBNbM0#concept-xzh-nzk-2gb)

> 还没尝试，代码暂无，待续

## 参考

- [OSS Browser.js SDK 的安装](https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1028.70652f08sBl5jq)
- [vue 中图片上传到阿里云 oss 记录](https://juejin.cn/post/6844903799945953287)
- [vue 上传图片到 oss / uniapp 上传图片到 oss](https://codeantenna.com/a/wuAMIhSFIQ)

---
title: 油猴脚本简单使用
icon: 
date: 2022-08-10
category:
  - utils
---
:::info 油猴脚本是什么？
油猴脚本（Tampermonkey）是一个流行的浏览器扩展，可以运行用户编写的扩展脚本，来实现各式各样的功能，比如去广告、修改样式、下载视频等。
:::


## 安装
[Chrome应用商店：Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

安装完成后，点击浏览器右上角出现的油猴插件，添加新脚本

![模版内容](https://img-blog.csdnimg.cn/img_convert/b3bcbb7ca7880a042998f8643e8994a4.png)

模板中会预设部分元数据，用于定义脚本的名称、版本号、更新方式、运行页面、权限等功能

常见的元数据包含：
```js
// @name - 油猴脚本的名称
// @namespace 脚本的命名空间，用于确定脚本的唯一性
// @version 脚本的版本号，用于脚本的更新
// @description 脚本的描述信息
// @author 作者
// @require 定义脚本运行之前需要引入的外部 JS，比如：jQuery
// @match  使用通配符执行需要匹配运行的网站地址
// @exclude  排除匹配到的网站
// @grant  指定脚本运行所属的权限
// @connect  用于跨域访问时指定的目标网站域名
// @run-at  指定脚本的运行时机
// @icon 用于指定脚本的图标，可以设置为图片 URL 地址或 base64 的字符串
```
## 简单入门

### 定时刷新
```js
function randomNum(start, end) {
  return Math.round(1000 * (Math.random() * (end - start) + start));
}

(function () {
  "use strict";

  let time = randomNum(3, 6);
  console.log("time:", time);

  setTimeout(() => {
    location.reload();
  }, time);
})();
```
### 自动答题
```js
// ==UserScript==
// @name         百度题库答题：自动点击选项做题
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tiku.baidu.com/gaokaogufen/paperdetail/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function () {
  "use strict";
  // jQuery 提供了 noConflict 的加载方式
  // window.jq = $.noConflict(true);

  let monitor = setInterval(() => {
    // 检测页面是否渲染完成
    console.log($(".question-box").length);

    if ($(".question-box").length) {
      clearInterval(monitor); // 清除定时器

      $(() => {
        console.log("引入jquery: 完成");

        $(".question-box").each(function (index, ele) {
          let options = $(ele).find(
            ".question-bottom .options-select .options-wrap .option"
          );

          let answer = $(ele).find(".que-answer .answer-item span").text();

          options.each(function (index, element) {
            let data = $(element).attr("data-value");
            if (data == answer) {
              $(element).click();
              return false;
            }
          });
        });
      });
    }
  }, 500);
})();
```

## 好用的脚本推荐

- [计时器掌控者](https://timer.palerock.cn/)： 用于各种视频网站的倍速播放，可快速跳过上百秒的广告🪧，或用于网课刷课


## Vue3 + tampermonkey
- [vue3+tampermonkey+vercel 開發部署油猴腳本](https://hypergrowths.com/software-engineering/headless-cms/40074/topic-406071729/)

## 参考
- [jquery-APi中文文档](https://jquery.cuishifeng.cn/)
- [油猴脚本实战教程：模拟鼠标点击](https://www.bilibili.com/video/BV1UK4y1s7TX?share_source=copy_web&vd_source=d60aad17dd8df0012b62c7ee6899bf96)
- [我是如何用这3个小工具，助力小姐姐提升100%开发效率的](https://juejin.cn/post/7001998089938534437#heading-17)
- [速编写一个油猴脚本](https://blog.csdn.net/Dome_/article/details/124792380)
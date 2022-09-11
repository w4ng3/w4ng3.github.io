<template><div><div class="custom-container info"><p class="custom-container-title">油猴脚本是什么？</p>
<p>油猴脚本（Tampermonkey）是一个流行的浏览器扩展，可以运行用户编写的扩展脚本，来实现各式各样的功能，比如去广告、修改样式、下载视频等。</p>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p><a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank" rel="noopener noreferrer">Chrome应用商店：Tampermonkey<ExternalLinkIcon/></a></p>
<p>安装完成后，点击浏览器右上角出现的油猴插件，添加新脚本</p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/b3bcbb7ca7880a042998f8643e8994a4.png" alt="模版内容"></p>
<p>模板中会预设部分元数据，用于定义脚本的名称、版本号、更新方式、运行页面、权限等功能</p>
<p>常见的元数据包含：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// @name - 油猴脚本的名称</span>
<span class="token comment">// @namespace 脚本的命名空间，用于确定脚本的唯一性</span>
<span class="token comment">// @version 脚本的版本号，用于脚本的更新</span>
<span class="token comment">// @description 脚本的描述信息</span>
<span class="token comment">// @author 作者</span>
<span class="token comment">// @require 定义脚本运行之前需要引入的外部 JS，比如：jQuery</span>
<span class="token comment">// @match  使用通配符执行需要匹配运行的网站地址</span>
<span class="token comment">// @exclude  排除匹配到的网站</span>
<span class="token comment">// @grant  指定脚本运行所属的权限</span>
<span class="token comment">// @connect  用于跨域访问时指定的目标网站域名</span>
<span class="token comment">// @run-at  指定脚本的运行时机</span>
<span class="token comment">// @icon 用于指定脚本的图标，可以设置为图片 URL 地址或 base64 的字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单入门" tabindex="-1"><a class="header-anchor" href="#简单入门" aria-hidden="true">#</a> 简单入门</h2>
<h3 id="定时刷新" tabindex="-1"><a class="header-anchor" href="#定时刷新" aria-hidden="true">#</a> 定时刷新</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">randomNum</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">"use strict"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token function">randomNum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"time:"</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动答题" tabindex="-1"><a class="header-anchor" href="#自动答题" aria-hidden="true">#</a> 自动答题</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         百度题库答题：自动点击选项做题</span>
<span class="token comment">// @namespace    http://tampermonkey.net/</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @match        https://tiku.baidu.com/gaokaogufen/paperdetail/*</span>
<span class="token comment">// @icon         https://www.google.com/s2/favicons?sz=64&amp;domain=baidu.com</span>
<span class="token comment">// @require      https://code.jquery.com/jquery-3.4.1.min.js</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">"use strict"</span><span class="token punctuation">;</span>
  <span class="token comment">// jQuery 提供了 noConflict 的加载方式</span>
  <span class="token comment">// window.jq = $.noConflict(true);</span>

  <span class="token keyword">let</span> monitor <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 检测页面是否渲染完成</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".question-box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".question-box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>monitor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除定时器</span>

      <span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"引入jquery: 完成"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".question-box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
            <span class="token string">".question-bottom .options-select .options-wrap .option"</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">let</span> answer <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">".que-answer .answer-item span"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          options<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"data-value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="好用的脚本推荐" tabindex="-1"><a class="header-anchor" href="#好用的脚本推荐" aria-hidden="true">#</a> 好用的脚本推荐</h2>
<ul>
<li><a href="https://timer.palerock.cn/" target="_blank" rel="noopener noreferrer">计时器掌控者<ExternalLinkIcon/></a>： 用于各种视频网站的倍速播放，可快速跳过上百秒的广告🪧，或用于网课刷课</li>
</ul>
<h2 id="vue3-tampermonkey" tabindex="-1"><a class="header-anchor" href="#vue3-tampermonkey" aria-hidden="true">#</a> Vue3 + tampermonkey</h2>
<ul>
<li><a href="https://hypergrowths.com/software-engineering/headless-cms/40074/topic-406071729/" target="_blank" rel="noopener noreferrer">vue3+tampermonkey+vercel 開發部署油猴腳本<ExternalLinkIcon/></a></li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://jquery.cuishifeng.cn/" target="_blank" rel="noopener noreferrer">jquery-APi中文文档<ExternalLinkIcon/></a></li>
<li><a href="https://www.bilibili.com/video/BV1UK4y1s7TX?share_source=copy_web&amp;vd_source=d60aad17dd8df0012b62c7ee6899bf96" target="_blank" rel="noopener noreferrer">油猴脚本实战教程：模拟鼠标点击<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7001998089938534437#heading-17" target="_blank" rel="noopener noreferrer">我是如何用这3个小工具，助力小姐姐提升100%开发效率的<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/Dome_/article/details/124792380" target="_blank" rel="noopener noreferrer">速编写一个油猴脚本<ExternalLinkIcon/></a></li>
</ul>
</div></template>

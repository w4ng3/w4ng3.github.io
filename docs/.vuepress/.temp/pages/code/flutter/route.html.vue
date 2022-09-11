<template><div><h1 id="普通路由、命名路由、路由传值" tabindex="-1"><a class="header-anchor" href="#普通路由、命名路由、路由传值" aria-hidden="true">#</a> 普通路由、命名路由、路由传值</h1>
<h2 id="一、flutter-中的路由" tabindex="-1"><a class="header-anchor" href="#一、flutter-中的路由" aria-hidden="true">#</a> 一、Flutter 中的路由</h2>
<p>Flutter 中的路由通俗地讲就是页面跳转。在 Flutter 中通过 Navigator 组件管理路由导航。并提供了管理堆栈的方法。如:Navigator.push 和 Navigator.pop。</p>
<p>Flutter 中给我们提供了两种配置路由跳转的方式:1、基本路由 2、命名路由。</p>
<h2 id="二、基本路由使用" tabindex="-1"><a class="header-anchor" href="#二、基本路由使用" aria-hidden="true">#</a> 二、基本路由使用</h2>
<p>我们现在想从 HomePage 组件跳转到 SearchPage 组件。</p>
<p>1、编写SearchPage页面，并在 HomPage 中引入</p>
<p>2、在 HomePage 中通过下面方法跳转</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/ebefd6b2.png" alt="img" loading="lazy"></p>
<h2 id="三、基本路由跳转传值" tabindex="-1"><a class="header-anchor" href="#三、基本路由跳转传值" aria-hidden="true">#</a> 三、基本路由跳转传值</h2>
<p>从 HomePage 组件跳转到 SearchPage 组件，并传值。</p>
<p>给SearchPage类添加可选参数</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/a4e757e8.png" alt="img" loading="lazy"></p>
<p>HomePage跳转的时候，通过构造方法传值。
<img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/e43a511d.png" alt="img" loading="lazy"></p>
<p>运行效果</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/b0a4415a.gif" alt="2022-09-02 08.40.15.gif" loading="lazy"></p>
<h2 id="四、命名路由" tabindex="-1"><a class="header-anchor" href="#四、命名路由" aria-hidden="true">#</a> 四、命名路由</h2>
<h3 id="_1、配置路由" tabindex="-1"><a class="header-anchor" href="#_1、配置路由" aria-hidden="true">#</a> 1、配置路由</h3>
<p>在main中配置路由</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/033fee64.png" alt="img" loading="lazy"></p>
<h3 id="_2、路由跳转" tabindex="-1"><a class="header-anchor" href="#_2、路由跳转" aria-hidden="true">#</a> 2、路由跳转</h3>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/a10d70c6.png" alt="img" loading="lazy"></p>
<h2 id="五、命名路由跳转传值" tabindex="-1"><a class="header-anchor" href="#五、命名路由跳转传值" aria-hidden="true">#</a> 五、命名路由跳转传值</h2>
<p>官方文档：<a href="https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments?_from_=227020040_59851621_233928268_4aeb228b6d4078d6b5e2a90705729d99&amp;_from_=227020040_59851621_233928268_4aeb228b6d4078d6b5e2a90705729d99" target="_blank" rel="noopener noreferrer">https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments<ExternalLinkIcon/></a></p>
<h3 id="_1、配置路由-1" tabindex="-1"><a class="header-anchor" href="#_1、配置路由-1" aria-hidden="true">#</a> 1、配置路由:</h3>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/b1ef33f4.png" alt="carbon (3).png" loading="lazy"></p>
<h3 id="_2、路由跳转-1" tabindex="-1"><a class="header-anchor" href="#_2、路由跳转-1" aria-hidden="true">#</a> 2、路由跳转</h3>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/993891c5.png" alt="img" loading="lazy"></p>
<h3 id="_3、接收参数" tabindex="-1"><a class="header-anchor" href="#_3、接收参数" aria-hidden="true">#</a> 3、接收参数</h3>
<p>FormPage 页面接收参数</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/5a9214c0.png" alt="img" loading="lazy"></p>
<h3 id="_4、运行效果" tabindex="-1"><a class="header-anchor" href="#_4、运行效果" aria-hidden="true">#</a> 4、运行效果</h3>
<img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/84bfdaaa.gif" alt="2022-09-02 09.04.07.gif" />
<h2 id="六、将命名路由单独抽离到一个文件" tabindex="-1"><a class="header-anchor" href="#六、将命名路由单独抽离到一个文件" aria-hidden="true">#</a> 六、将命名路由单独抽离到一个文件</h2>
<p>新建一个 routes.dart 文件，将命名路由抽取到里面，写入以下代码，统一维护路由。</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/f61f77db.png" alt="img" loading="lazy"></p>
<p>在main.dart 中调用：</p>
<p><img src="@source/code/flutter/FILES/1.16-pu-tong-lu-you-ming-ming-lu-you-lu-you-chuan-zhi.md/b3d1b57c.png" alt="img" loading="lazy"></p>
<h2 id="七、给特定的-route-传参" tabindex="-1"><a class="header-anchor" href="#七、给特定的-route-传参" aria-hidden="true">#</a> 七、给特定的 route 传参</h2>
<blockquote>
<ol>
<li>定义需要传递的参数，也可以直接用包含这些参数的 Widget</li>
</ol>
</blockquote>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">AppListItem</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> subTitle<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> bgImg<span class="token punctuation">;</span>

  <span class="token class-name">AppListItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subTitle<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bgImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol start="2">
<li>传递参数到目标路由</li>
</ol>
</blockquote>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pushNamed</span><span class="token punctuation">(</span>
    context<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'/detail'</span></span><span class="token punctuation">,</span>
    arguments<span class="token punctuation">:</span> <span class="token class-name">AppListItem</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'title'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'subTitle'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'http://img/lem2.png'</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol start="3">
<li>在目标页面获取参数</li>
</ol>
</blockquote>
<p>ModalRoute.of() 方法，这个方法返回的是当前路由及其携带的参数。</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// settings and cast them as AppListItem.</span>
    <span class="token keyword">final</span> args <span class="token operator">=</span> <span class="token class-name">ModalRoute</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span>settings<span class="token punctuation">.</span>arguments <span class="token operator">as</span> <span class="token class-name">AppListItem</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>subTitle<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<ul>
<li><a href="https://flutter.cn/docs/cookbook/navigation/named-routes" target="_blank" rel="noopener noreferrer">导航到对应名称的 routes 里<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6844904017655496717" target="_blank" rel="noopener noreferrer">Flutter当前路由属性详解 - 简书<ExternalLinkIcon/></a></li>
<li><a href="https://flutter.cn/docs/cookbook/navigation/navigate-with-arguments" target="_blank" rel="noopener noreferrer">给特定的 route 传参<ExternalLinkIcon/></a></li>
<li><a href="https://cloud.tencent.com/developer/article/1858183" target="_blank" rel="noopener noreferrer">Navigator&amp;页面传值Flutter<ExternalLinkIcon/></a></li>
</ul>
</div></template>

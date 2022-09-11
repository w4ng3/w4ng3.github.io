<template><div><h1 id="go-router声明式路由" tabindex="-1"><a class="header-anchor" href="#go-router声明式路由" aria-hidden="true">#</a> go_router声明式路由</h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<h3 id="声明路由" tabindex="-1"><a class="header-anchor" href="#声明路由" aria-hidden="true">#</a> 声明路由</h3>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:go_router/go_router.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span>
      routeInformationProvider<span class="token punctuation">:</span> _router<span class="token punctuation">.</span>routeInformationProvider<span class="token punctuation">,</span>
      routeInformationParser<span class="token punctuation">:</span> _router<span class="token punctuation">.</span>routeInformationParser<span class="token punctuation">,</span>
      routerDelegate<span class="token punctuation">:</span> _router<span class="token punctuation">.</span>routerDelegate<span class="token punctuation">,</span>
      title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'GoRouter Example'</span></span><span class="token punctuation">,</span>
      debugShowCheckedModeBanner<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      theme<span class="token punctuation">:</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
        primarySwatch<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>lightGreen<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/// 定义声明式路由</span>
  <span class="token keyword">final</span> <span class="token class-name">GoRouter</span> _router <span class="token operator">=</span> <span class="token class-name">GoRouter</span><span class="token punctuation">(</span>
    errorBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token class-name">Page404</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 替换默认的错误</span>
    <span class="token comment">// initialLocation: '/', // 初始化位置</span>
    routes<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoRoute</span><span class="token punctuation">></span></span><span class="token punctuation">[</span>
      <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
        path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/'</span></span><span class="token punctuation">,</span>
        builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Flutter Demo'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
            path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'about'</span></span><span class="token punctuation">,</span>
            builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token class-name">AboutPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
            path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'setting'</span></span><span class="token punctuation">,</span>
            name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Setting'</span></span><span class="token punctuation">,</span>
            builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token class-name">SettingPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
        path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/index'</span></span><span class="token punctuation">,</span>
        name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Home'</span></span><span class="token punctuation">,</span>
        builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">GoRouterState</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token class-name">IndexPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ul>
<li>go</li>
<li>push</li>
<li>pushName</li>
<li>goName</li>
</ul>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">OutlinedButton</span><span class="token punctuation">(</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">GoRouter</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'/about'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'图片占位'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token class-name">OutlinedButton</span><span class="token punctuation">(</span>
    <span class="token comment">// onPressed: () => context.goNamed('Home'),</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">pushNamed</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Home'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Home'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token class-name">OutlinedButton</span><span class="token punctuation">(</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">GoRouter</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'/404'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'404'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token class-name">OutlinedButton</span><span class="token punctuation">(</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">goNamed</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Setting'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'设置'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h3>
<p><a href="https://gorouter.dev/named-routes" target="_blank" rel="noopener noreferrer">Link<ExternalLinkIcon/></a></p>
<h2 id="页面传参" tabindex="-1"><a class="header-anchor" href="#页面传参" aria-hidden="true">#</a> 页面传参</h2>
<p><a href="https://gorouter.dev/parameters" target="_blank" rel="noopener noreferrer">go_router：params<ExternalLinkIcon/></a>
<a href="https://pub.dev/documentation/path_to_regexp/latest/" target="_blank" rel="noopener noreferrer">path_to_regexp 文档<ExternalLinkIcon/></a></p>
<h3 id="params-动态链接" tabindex="-1"><a class="header-anchor" href="#params-动态链接" aria-hidden="true">#</a> params 动态链接</h3>
<blockquote>
<p>动态链接的想法是用户可以为应用添加这样的对象，每个对象获得一个自身的链接，例如，一个新的 family 获得一个新的链接。这正是路由参数能做到的，例如，一个新的 family 有它自身的 ID，可以在 family 路由中变量化时使用，例：路径：/family/:fid 。</p>
</blockquote>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token comment">/// 路由声明</span>
<span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
  path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'user_center/:avatar&amp;:name'</span></span><span class="token punctuation">,</span>
  name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'UserCenter'</span></span><span class="token punctuation">,</span>
  builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> name <span class="token operator">=</span> state<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'name'</span></span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> avatar <span class="token operator">=</span> state<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'avatar'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">UserCenter</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
      avatar<span class="token punctuation">:</span> avatar<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">/// 路由传参</span>
onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">goNamed</span><span class="token punctuation">(</span>
  <span class="token string-literal"><span class="token string">'UserCenter'</span></span><span class="token punctuation">,</span>
  params<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">'name'</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'lanyj'</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'avatar'</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'http://img.w2gd.top/up/lem2.png'</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">/// 参数获取</span>
<span class="token keyword">class</span> <span class="token class-name">UserCenter</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> avatar<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">UserCenter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span> required <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>avatar<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/// 当前位置</span>
    <span class="token keyword">final</span> router <span class="token operator">=</span> <span class="token class-name">GoRouter</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>location<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'用户中心'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">network</span><span class="token punctuation">(</span>avatar<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

            <span class="token comment">// image: NetworkImage(avatar!),</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'用户名：</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'当前位置: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">router</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align: center"><img src="@source/code/flutter/FILES/go_router.md/img-20220911003122.png" style="width:400px"/>
</div>
<h3 id="queryparams-查询参数" tabindex="-1"><a class="header-anchor" href="#queryparams-查询参数" aria-hidden="true">#</a> queryParams 查询参数</h3>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token comment">/// 路由声明</span>
<span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
    path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'setting'</span></span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Setting'</span></span><span class="token punctuation">,</span>
    builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> query <span class="token operator">=</span> state<span class="token punctuation">.</span>queryParams<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'query'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">SettingPage</span><span class="token punctuation">(</span>query<span class="token punctuation">:</span> query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>，

<span class="token comment">/// 路由传参</span>
onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'/setting?query=柳三变'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token comment">/// 参数获取</span>
<span class="token keyword">class</span> <span class="token class-name">SettingPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> query<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">SettingPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'appbarTitle'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
          <span class="token string-literal"><span class="token string">'Setting Page: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">query</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
          style<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> fontSize<span class="token punctuation">:</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extra-附加参数" tabindex="-1"><a class="header-anchor" href="#extra-附加参数" aria-hidden="true">#</a> extra 附加参数</h3>
<p>除了传递路径参数和查询参数之外，也可以传递附加的对象作为导航的一部分。</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token comment">/// 对象类</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> avatar<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int age<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> location<span class="token punctuation">;</span>

  <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>avatar<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token comment">/// 路由声明</span>
<span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
  path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'user_data'</span></span><span class="token punctuation">,</span>
  name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'UserData'</span></span><span class="token punctuation">,</span>
  builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">UserData</span><span class="token punctuation">(</span>user<span class="token punctuation">:</span> state<span class="token punctuation">.</span>extra<span class="token operator">!</span> <span class="token operator">as</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">/// 路由传对象</span>
<span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">pushNamed</span><span class="token punctuation">(</span>
    <span class="token string-literal"><span class="token string">'UserData'</span></span><span class="token punctuation">,</span>
    extra<span class="token punctuation">:</span>
        <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'LanYJ'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'http://img.w2gd.top/up/lem2.png'</span></span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'异世界'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'个人资料'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">/// 获取对象</span>
<span class="token keyword">class</span> <span class="token class-name">UserData</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">UserData</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span> required <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'个人资料'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
            leading<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
              height<span class="token punctuation">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
              width<span class="token punctuation">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
              decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
                shape<span class="token punctuation">:</span> <span class="token class-name">BoxShape</span><span class="token punctuation">.</span>circle<span class="token punctuation">,</span>
                image<span class="token punctuation">:</span> <span class="token class-name">DecorationImage</span><span class="token punctuation">(</span>
                  image<span class="token punctuation">:</span> <span class="token class-name">NetworkImage</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>avatar<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  fit<span class="token punctuation">:</span> <span class="token class-name">BoxFit</span><span class="token punctuation">.</span>fill<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
            subtitle<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
            leading<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>map<span class="token punctuation">)</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>age<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align: center"><p><img src="@source/code/flutter/FILES/go_router.md/userdata.png" alt="Img" loading="lazy"></p>
</div>
<h2 id="go-与-push的区别" tabindex="-1"><a class="header-anchor" href="#go-与-push的区别" aria-hidden="true">#</a> Go 与 Push的区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-| root
  -| detail
  -| modal 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/code/flutter/FILES/go_router.md/img-20220910005314.png" alt="Img" loading="lazy"></p>
<p>将 go 视为跳到新路线的一种方式。 如果新路由不是旧路由的子路由，这将修改底层导航堆栈。</p>
<p>另一方面，push 将始终将目标路由推送到现有导航堆栈的顶部</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://pub.dev/packages/go_router" target="_blank" rel="noopener noreferrer">pub.dev: go_router<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7047035390003249189" target="_blank" rel="noopener noreferrer">[译]Flutter Favorite之路由包go_router - 基础篇<ExternalLinkIcon/></a></li>
<li><a href="https://gorouter.dev/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://blog.51cto.com/jianguo/5258729" target="_blank" rel="noopener noreferrer">使用 GoRouter ：Go 与 Push的区别<ExternalLinkIcon/></a></li>
</ul>
</div></template>

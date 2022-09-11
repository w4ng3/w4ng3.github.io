<template><div><blockquote>
<p>Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。</p>
</blockquote>
<p>在深入渲染函数之前，了解一些浏览器的工作原理是很重要的。
<a href="https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91" target="_blank" rel="noopener noreferrer">DOM树🌲<ExternalLinkIcon/></a>
<a href="https://v3.cn.vuejs.org/guide/render-function.html#%E8%99%9A%E6%8B%9F-dom-%E6%A0%91" target="_blank" rel="noopener noreferrer">虚拟DOM树<ExternalLinkIcon/></a></p>
<h2 id="虚拟dom的性能到底如何" tabindex="-1"><a class="header-anchor" href="#虚拟dom的性能到底如何" aria-hidden="true">#</a> 虚拟DOM的性能到底如何？</h2>
<p>《Vue.js设计与实现》第 4～11 页</p>
<blockquote>
<p>总而言之，虚拟DOM更新技术的性能理论上不可能比原生JavaScript操作DOM性能要高，但在大部分情况下，菜鸡🐔很难写出绝对优化的命令式代码，而虚拟DOM能够保证程序性能的下限。</p>
</blockquote>
<h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2>
<h3 id="h-函数" tabindex="-1"><a class="header-anchor" href="#h-函数" aria-hidden="true">#</a> h 函数</h3>
<details class="custom-container details"><summary>h() 参数</summary>
<p><code v-pre>h()</code> 函数是一个用于创建 <code v-pre>VNode</code> 的实用程序。也许可以更准确地将其命名为 <code v-pre>createVNode()</code>，但由于频繁使用和简洁，它被称为 <code v-pre>h()</code> 。它接受三个参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// @returns {VNode}</span>
<span class="token function">h</span><span class="token punctuation">(</span>
  <span class="token comment">// {String | Object | Function} tag</span>
  <span class="token comment">// 一个 HTML 标签名、一个组件、一个异步组件、或</span>
  <span class="token comment">// 一个函数式组件。</span>
  <span class="token comment">//</span>
  <span class="token comment">// 必需的。</span>
  <span class="token string">'div'</span><span class="token punctuation">,</span>

  <span class="token comment">// {Object} props</span>
  <span class="token comment">// 与 attribute、prop 和事件相对应的对象。</span>
  <span class="token comment">// 这会在模板中用到。</span>
  <span class="token comment">//</span>
  <span class="token comment">// 可选的。</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onClick</span><span class="token operator">:</span> foo<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// {String | Array | Object} children</span>
  <span class="token comment">// 子 VNodes, 使用 `h()` 构建,</span>
  <span class="token comment">// 或使用字符串获取 "文本 VNode" 或者</span>
  <span class="token comment">// 有插槽的对象。</span>
  <span class="token comment">//</span>
  <span class="token comment">// 可选的。</span>
  <span class="token punctuation">[</span>
    <span class="token string">'Some text comes first.'</span><span class="token punctuation">,</span>
    <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token string">'A headline'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">h</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">someProp</span><span class="token operator">:</span> <span class="token string">'foobar'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="使用-javascript-代替模板功能" tabindex="-1"><a class="header-anchor" href="#使用-javascript-代替模板功能" aria-hidden="true">#</a> 使用 JavaScript 代替模板功能</h3>
<p><a href="https://v3.cn.vuejs.org/guide/render-function.html#%E4%BD%BF%E7%94%A8-javascript-%E4%BB%A3%E6%9B%BF%E6%A8%A1%E6%9D%BF%E5%8A%9F%E8%83%BD" target="_blank" rel="noopener noreferrer">🔎官方文档<ExternalLinkIcon/></a></p>
<h2 id="demo-锚点标题-js" tabindex="-1"><a class="header-anchor" href="#demo-锚点标题-js" aria-hidden="true">#</a> Demo 锚点标题.js</h2>
<p><img src="https://oss.w2gd.top/blog/render.gif" alt="锚点标题"></p>
<CodeTabs :data='[{"title":"AnchoredHeading.js"},{"title":"h.scss"},{"title":"RenderView.vue"}]' tab-id="language">

<template #tab0="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> h<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token comment">// 引入样式文件 </span>
<span class="token keyword">import</span> <span class="token string">"../style/h.scss"</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 递归地从子节点获取文本 */</span>
<span class="token keyword">function</span> <span class="token function">getChildrenTextContent</span><span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> children
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">typeof</span> node<span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token string">"string"</span>
        <span class="token operator">?</span> node<span class="token punctuation">.</span>children
        <span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">getChildrenTextContent</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"AnchoredHeading"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从 children 的文本内容中创建短横线分隔 (kebab-case) id。</span>
    <span class="token keyword">const</span> headingId <span class="token operator">=</span> <span class="token function">getChildrenTextContent</span><span class="token punctuation">(</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// .toLowerCase()</span>
    <span class="token comment">// .replace(/\W+/g, "-") // 用短横线替换非单词字符</span>
    <span class="token comment">// .replace(/(^-|-$)/g, ""); // 删除前后短横线</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">"h"</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>level<span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">h</span><span class="token punctuation">(</span>
          <span class="token string">"a"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> headingId<span class="token punctuation">,</span>
            <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">"#"</span> <span class="token operator">+</span> headingId<span class="token punctuation">,</span>
            <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token variable">$header</span><span class="token punctuation">,</span> <span class="token variable">$size</span> in <span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">,</span> <span class="token property">h2</span><span class="token punctuation">:</span> 4em<span class="token punctuation">,</span> <span class="token property">h3</span><span class="token punctuation">:</span> 3em<span class="token punctuation">,</span> <span class="token property">h4</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">,</span> <span class="token property">h5</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token variable">#{$header}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.yellow </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnchoredHeading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>如果在冬夜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AnchoredHeading</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnchoredHeading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>一个旅人<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AnchoredHeading</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnchoredHeading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>走在马尔堡市郊外<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AnchoredHeading</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnchoredHeading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>从陡壁的悬崖上探出身躯<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AnchoredHeading</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnchoredHeading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>向着黑黢黢的下边观看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AnchoredHeading</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AnchoredHeading <span class="token keyword">from</span> <span class="token string">'../components/AnchoredHeading.js'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="demo-在setup-surge-里使用" tabindex="-1"><a class="header-anchor" href="#demo-在setup-surge-里使用" aria-hidden="true">#</a> Demo 在setup surge 里使用</h2>
<RenderComp />
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">dynode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dynode</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用jsx" tabindex="-1"><a class="header-anchor" href="#使用jsx" aria-hidden="true">#</a> 使用JSX</h2>
<p>移步另一篇：<a href="https://w2gd.top/code/vue/%E5%9C%A8Vue%E4%B8%AD%E4%BD%BF%E7%94%A8JSX%E8%AF%AD%E6%B3%95.html" target="_blank" rel="noopener noreferrer">在Vue中使用JSX语法<ExternalLinkIcon/></a></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://v3.cn.vuejs.org/guide/render-function.html" target="_blank" rel="noopener noreferrer">Vue.js官网——渲染函数<ExternalLinkIcon/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E4%BD%BF%E7%94%A8%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">Vue.js官网——setup里使用渲染函数<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000022277663" target="_blank" rel="noopener noreferrer">对虚拟DOM和Dom-Diff的理解？<ExternalLinkIcon/></a></li>
<li><a href="https://www.yisu.com/zixun/154392.html" target="_blank" rel="noopener noreferrer">vue中render函数的作用是什么<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/6949829240330125325" target="_blank" rel="noopener noreferrer">记一个Vue渲染函数render的使用场景<ExternalLinkIcon/></a></li>
<li><a href="https://www.zhihu.com/question/436260027/answer/1647182157" target="_blank" rel="noopener noreferrer">为什么 Vue3 的组件库都在使用 jsx/tsx？<ExternalLinkIcon/></a></li>
</ul>
</div></template>

<script setup>
  import RenderComp from '@MyComponent/RenderComp.vue'
</script>

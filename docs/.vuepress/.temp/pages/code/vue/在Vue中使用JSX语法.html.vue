<template><div><p>渲染函数在代码易读性上比模版差很多，代码写起来很痛苦，
这就是为什么会有一个 <a href="https://github.com/vuejs/babel-plugin-jsx">Babel</a> 插件，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。</p>
<blockquote>
<p>naive-ui组件库的源码就是使用tsx写的</p>
</blockquote>
<h2 id="对比-template-和-jsx-tsx-的优缺点" tabindex="-1"><a class="header-anchor" href="#对比-template-和-jsx-tsx-的优缺点" aria-hidden="true">#</a> 对比 template 和 jsx/tsx 的优缺点</h2>
<p>来源：<a href="https://www.zhihu.com/question/436260027/answer/1661092534" target="_blank" rel="noopener noreferrer">为什么 Vue3 的组件库都在使用 jsx/tsx？ - 阿崔cxr的回答 - 知乎 <ExternalLinkIcon/></a></p>
<div class="custom-container info"><p class="custom-container-title">template：</p>
<p><span class="pink">优点：</span>可读性高</p>
<p>基于 dom 结构，很容易就可以看清楚代码要表达的意图（当然，写的一窝粥的除外)<br>
通过 vue 的指令和语法，一眼就能确定逻辑在哪里</p>
<p><span class="blh">缺点：</span>不够灵活</p>
<p>也是一直被大家吐槽的点，过于笨重
SFC 享受不到 props 类型提示,受限于 SFC，组件在外部使用时 vscode 无法做出 props 的类型提示,这一点对于组件库来讲是个痛点</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">jsx</p>
<p><span class="pink">优点：</span>灵活</p>
<p>可以利用 js 来表达各种各样的逻辑，十分灵活
可享受 props 类型提示
如果是用 tsx 编写的组件，用户是可以享受到 props 的类型提示的</p>
<p><span class="blh">缺点：</span>可读性差</p>
<p>这个其实也是过于灵活带来的后遗症，就是因为太灵活了，大家怎么写的都有，很容易出现坏味道<br>
要不就在 setup 中通过函数返回，要不就在 render 函数中实现。
但是如果你在 setup 中直接返回的话，其实是破坏了 setup 返回对象作为 view 和 model 层的接口，而且如果是 ref 类型的响应式对象的话，你还必须使用 .value ,享受不到结构 ref 了,你会发现你的代码可读性极差。</p>
<p>我更推荐在 render 中实现<br>
但是你调用的时候必须要加个 render(ctx), ctx 相当于是 this，还是不如在 template 中干净</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// setup 直接返回一个函数</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> 
    
    <span class="token comment">// 返回一个函数</span>
    <span class="token comment">// 如果是返回一个对象的话，这个对象其实可以看做 view 和 model 之间的接口层，但是返回一个函数的话，就破坏了</span>
    <span class="token comment">// 必须对 ref 类型的响应式对象使用 .value</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// render 中实现</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// 必须调用 ctx</span>
     <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>ctx<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="jsx简明语法" tabindex="-1"><a class="header-anchor" href="#jsx简明语法" aria-hidden="true">#</a> JSX简明语法</h2>
<p><a href="https://juejin.cn/post/7114063575122984973" target="_blank" rel="noopener noreferrer">《Vue3中使用JSX简明语法》<ExternalLinkIcon/></a></p>
<h2 id="demo-vite-vue-jsx" tabindex="-1"><a class="header-anchor" href="#demo-vite-vue-jsx" aria-hidden="true">#</a> Demo Vite + Vue + JSX</h2>
<p><img src="https://oss.w2gd.top/blog/20220731000050.png" alt="demo-jsx" loading="lazy"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm add @vitejs/plugin-vue-jsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><CodeTabs :data='[{"title":"JsxComp.jsx"},{"title":"Hello.vue"},{"title":"vite.config.js"}]' tab-id="language">

<template #tab0="{ title, value, isActive }">
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AnchoredHeading <span class="token keyword">from</span> <span class="token string">"./AnchoredHeading"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">月光照耀在落叶上</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">在墓穴的周围</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnchoredHeading</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">一条条相互交叉</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text"> 的线
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AnchoredHeading</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JsxComp</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AnchoredHeading <span class="token keyword">from</span> <span class="token string">'../components/AnchoredHeading'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token comment">// JSX组件</span>
<span class="token keyword">import</span> JsxComp <span class="token keyword">from</span> <span class="token string">'../components/JsxComp'</span>
<span class="token comment">// 原本的渲染函数组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">Bar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>AnchoredHeading<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'-world!'</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-vue-jsx"</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">refTransform</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="demo-在setup-surge-中使用jsx" tabindex="-1"><a class="header-anchor" href="#demo-在setup-surge-中使用jsx" aria-hidden="true">#</a> Demo 在setup surge 中使用jsx</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Jsxtest</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jsx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> vueSvg <span class="token keyword">from</span> <span class="token string">'../assets/vue.svg'</span>
<span class="token keyword">const</span> Jsxtest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token comment">/* 一张图片 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>vueSvg<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"Vue logo"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<p><a href="https://juejin.cn/post/7114063575122984973" target="_blank" rel="noopener noreferrer">《Vue3中使用JSX简明语法》<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/436260027/answer/1661092534" target="_blank" rel="noopener noreferrer">为什么 Vue3 的组件库都在使用 jsx/tsx？ - 阿崔cxr的回答 - 知乎 <ExternalLinkIcon/></a></p>
<p><a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx" target="_blank" rel="noopener noreferrer">github:@vitejs/plugin-vue-jsx<ExternalLinkIcon/></a></p>
<p><a href="https://cn.vitejs.dev/plugins/" target="_blank" rel="noopener noreferrer">vite官方插件<ExternalLinkIcon/></a></p>
</div></template>

<style>
  .pink {
    color: pink;
    font-weight: bolder;
  }
  .blh{
    color: #fc7930;
  }
</style>
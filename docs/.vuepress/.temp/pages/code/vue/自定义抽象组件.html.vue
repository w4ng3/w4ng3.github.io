<template><div><p>诸如 <code v-pre>&lt;keep-alive&gt;</code>、<code v-pre>&lt;transition&gt;</code>、<code v-pre>&lt;transition-group&gt;</code> 和 <code v-pre>&lt;teleport&gt;</code> 等组件是Vue的内置组件，也可称为抽象组件，组件的实现是一个对象。</p>
<blockquote>
<p>Vue 的文档没有提这个概念，在抽象组件的生命周期过程中，我们可以对包裹的子组件监听的事件进行拦截，也可以对子组件进行 Dom 操作，从而可以对我们需要的功能进行封装，而不需要关心子组件的具体实现。</p>
</blockquote>
<h2 id="实现一个-debounce-组件-对子组件的-click-事件进行拦截" tabindex="-1"><a class="header-anchor" href="#实现一个-debounce-组件-对子组件的-click-事件进行拦截" aria-hidden="true">#</a> 实现一个 debounce 组件，对子组件的 click 事件进行拦截</h2>
<p>防抖依靠 lodash.js 的debounce（防抖动）函数来实现</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ pnpm add --save lodash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效<br>
防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时</p>
</div>
<p>接下来是将它封装为一个抽象组件</p>
<CodeTabs :data='[{"title":"debounce.js"},{"title":"Abstract.vue"}]' tab-id="language">

<template #tab0="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> debounce<span class="token punctuation">,</span> set <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lodash"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"debounce"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">abstract</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//标记为抽象组件</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> vnode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 子组件的vnode</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"子组件的vnode"</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">props.onClick</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 子组件绑定的click事件</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"event"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> event <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">set</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">props.onClick</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vnode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>自定义抽象组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>debounce</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>++count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>防抖计数: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NButton</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>debounce</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>++count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>普通计数: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'../components/debounce'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="https://oss.w2gd.top/blog/debounce.gif" alt="防抖">
如上图所示，被防抖组件包裹的节点，无论连续点击多少次，都只在结束点击的一秒后触发一次
<img
  src="https://oss.w2gd.top/blog/20220731175122.png"
  alt="子组件的vnode"
  width="400"
  height="341"
/></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://juejin.cn/post/6844903838470635528" target="_blank" rel="noopener noreferrer">用 Vue 编写抽象组件<ExternalLinkIcon/></a></li>
<li><a href="https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E9%9D%A2%E8%AF%95%E5%AE%98-%E4%BB%80%E4%B9%88%E6%98%AF%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" target="_blank" rel="noopener noreferrer">什么是防抖和节流？<ExternalLinkIcon/></a></li>
</ul>
</div></template>

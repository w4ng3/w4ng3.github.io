<template><div><div class="custom-container info"><p class="custom-container-title">hook(钩子🪝)</p>
<p>hook本质上是一个函数，是一种编程机制<br>
作用是将setup函数中使用的<code v-pre>Composition API</code>(ref、reactive、computed、watch、生命周期)进行了封装，提供了一种更明确的方式来组织代码，使得代码能重用，更重要的是，它允许不同的逻辑部分进行通信、协同工作。</p>
</div>
<h2 id="一般使用" tabindex="-1"><a class="header-anchor" href="#一般使用" aria-hidden="true">#</a> 一般使用</h2>
<ul>
<li>将可复用功能抽离为外部js文件</li>
<li>函数名文件名以<code v-pre>use</code>开头，形如useXXX</li>
<li>引用时，在setup中解构出自定义hooks的变量和方法，如: <code v-pre>const { name } = useXXX()</code></li>
</ul>
<h2 id="hook的意义" tabindex="-1"><a class="header-anchor" href="#hook的意义" aria-hidden="true">#</a> Hook的意义</h2>
<ul>
<li>提取重复逻辑，优化代码结构</li>
<li>代替Mixin</li>
<li>体现编程思想</li>
</ul>
<h2 id="demo-自定义hook函数" tabindex="-1"><a class="header-anchor" href="#demo-自定义hook函数" aria-hidden="true">#</a> Demo 自定义hook函数</h2>
<h3 id="收集用户鼠标点击的页面坐标" tabindex="-1"><a class="header-anchor" href="#收集用户鼠标点击的页面坐标" aria-hidden="true">#</a> 收集用户鼠标点击的页面坐标</h3>
<h2 style="color:pink">X: {{ x }} 💚 Y: {{ y }}</h2>
<CodeTabs :data='[{"title":"useMousePosition.js"},{"title":"HomeView.vue"}]' tab-id="language">

<template #tab0="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// hooks/useMousePosition.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化坐标数据</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">// 用于收集点击事件坐标的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span>

  <span class="token comment">// 挂载后绑定点击监听</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 卸载前解绑点击监听</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../assets/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>x: {{ x }}, y: {{ y }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useMousePosition <span class="token keyword">from</span> <span class="token string">'@/hooks/useMousePosition'</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="demo-逻辑关注点分离" tabindex="-1"><a class="header-anchor" href="#demo-逻辑关注点分离" aria-hidden="true">#</a> Demo 逻辑关注点分离</h3>
<blockquote>
<p>Compostion API最核心要解决的问题并不是逻辑复用，而是<mark>逻辑关注点分离</mark>。因为应用生命周期60%时间都是在维护的，而维护性体现在代码是否符合单一职责原则，单一职责就是把相同的业务代码内聚到一个地方。</p>
<p>所以你不要过于纠结代码是否需要复用，应用适当的冗余反而增加应用的维护性，《架构整洁之道》书中提到：对于大多数应用，可维护性比可重用性更加重要。</p>
</blockquote>
<p>可参考另一篇的<RouterLink to="/code/ts/vue%2Bts%E5%AE%9E%E7%8E%B0TodoList.html">TodoList Demo</RouterLink>,将承载具体的业务逻辑分离到<code v-pre>todoAction.ts</code>里。</p>
<h2 id="vueuse" tabindex="-1"><a class="header-anchor" href="#vueuse" aria-hidden="true">#</a> VueUse</h2>
<p>VueUse是vue3的一个hook库，帮我们封装了一些常用的功能。
<a href="https://vueuse.org/guide/" target="_blank" rel="noopener noreferrer">官网指南<ExternalLinkIcon/></a></p>
<p>这里也是使用了一个<code v-pre>VueUse</code>中的获取鼠标坐标的hook: <code v-pre>useMouse</code>，并且用<code v-pre>useTransition</code>给响应性变量施加过度动画。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../assets/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>x: {{ Math.round(pointX) }}, y: {{ Math.round(pointY) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransitionPresets<span class="token punctuation">,</span> useTransition<span class="token punctuation">,</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pointX <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> TransitionPresets<span class="token punctuation">.</span>easeInOutCubic
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pointY <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> TransitionPresets<span class="token punctuation">.</span>easeInOutCubic
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://oss.w2gd.top/blog/vue-use.gif" alt="demo:vue-use.gif" loading="lazy"></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/462631261" target="_blank" rel="noopener noreferrer">简单理解VUE3 hook<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.cn/post/7016955285784756255" target="_blank" rel="noopener noreferrer">Vue 3 中的 Hook 特性<ExternalLinkIcon/></a></li>
<li><a href="https://qdmana.com/2022/207/202207261252551584.html#1_hooks_5" target="_blank" rel="noopener noreferrer">Vue3学习笔记4 自定义hooks<ExternalLinkIcon/></a></li>
<li><a href="https://www.vue-js.com/topic/6114829f120d99003158dad7" target="_blank" rel="noopener noreferrer">VueUse中的这5个函数，也太好用了吧<ExternalLinkIcon/></a></li>
</ul>
</div></template>

<script setup>
import useMousePosition from '@Hooks/useMousePosition'
const { x, y } = useMousePosition()
</script>

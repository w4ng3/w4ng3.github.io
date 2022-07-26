<template><div><h1 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h1>
<h2 id="组件最基本的使用方式" tabindex="-1"><a class="header-anchor" href="#组件最基本的使用方式" aria-hidden="true">#</a> 组件最基本的使用方式</h2>
<p>此种方式在打包时，会将子组件的内容一起打包进同一个文件中，影响大型、复杂应用的性能</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>As</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>As</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> As <span class="token keyword">from</span> <span class="token string">'./async.vue'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步组件-普通使用方式" tabindex="-1"><a class="header-anchor" href="#异步组件-普通使用方式" aria-hidden="true">#</a> 异步组件（普通使用方式）</h2>
<p>在打包时，异步组件会被单独抽离出来，打成一个单独的chunk</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Async</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Async</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Async <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./async.vue'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-按需异步加载不同组件" tabindex="-1"><a class="header-anchor" href="#demo-按需异步加载不同组件" aria-hidden="true">#</a> Demo 按需异步加载不同组件</h2>
<blockquote>
<p>HelloWord.vue</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 异步组件</span>
<span class="token keyword">const</span> AsyncComponent <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./CompA.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./CompB.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pug<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
div
  AsyncComponent
  h1 {{ msg }}
  div.card
    button(type="button" @click="count++")
      | count is {{ count }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>CompA</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pug<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
a(href="https://vuejs.org/" target="_blank")
  img.logo.vue(src="../assets/vue.svg" alt="Vue logo")
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>CompB</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pug<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
a(href="https://vitejs.dev" target="_blank")
  img.logo(src="/vite.svg" alt="Vite logo")
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>App.vue</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 同步渲染的组件</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">"./components/HelloWorld.vue"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pug<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
div.flex
  HelloWorld(msg="异步组件A" :type="1") 
  HelloWorld(msg="异步组件B" :type="0")
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://oss.w2gd.top/blog/asyncComp.png" alt="asyncComp.png" loading="lazy"></p>
<p>以“异步”的方式加载并渲染一个组件。
通常在异步加载组件时，我们要考虑以下几个方面：</p>
<ul>
<li>如果组件加载失败或超时，是否要渲染Error组件？</li>
<li>组件在加载时，是否要展示占位内容？例如渲染一个Loading组件</li>
<li>组件加载的速度可能很快，也可能很慢，是否要设置一个延迟展示Loading组件的时间？如果组件在200ms内没有加载成功才展示Loading组件，这样可以避免由组件加载过快导致的闪烁。</li>
<li>组件加载失败后，是否需要重试？</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://blog.csdn.net/m0_47135993/article/details/124308491" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_47135993/article/details/124308491<ExternalLinkIcon/></a></li>
</ul>
</div></template>

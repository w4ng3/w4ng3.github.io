<template><div><CodeTabs :data='[{"title":"index.js"},{"title":"server.js"},{"title":"requestHandles.js"},{"title":"router.js"}]' tab-id="language">

<template #tab0="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./utils/server"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./router"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> requestHandlers <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./utils/requestHandlers"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
handle<span class="token punctuation">[</span><span class="token string">"/"</span><span class="token punctuation">]</span> <span class="token operator">=</span> requestHandlers<span class="token punctuation">.</span>start<span class="token punctuation">;</span>
handle<span class="token punctuation">[</span><span class="token string">"/start"</span><span class="token punctuation">]</span> <span class="token operator">=</span> requestHandlers<span class="token punctuation">.</span>start<span class="token punctuation">;</span>
handle<span class="token punctuation">[</span><span class="token string">"/upload"</span><span class="token punctuation">]</span> <span class="token operator">=</span> requestHandlers<span class="token punctuation">.</span>upload<span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span>route<span class="token punctuation">,</span> handle<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> handle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">onRequest</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> postData <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Request for "</span> <span class="token operator">+</span> pathname <span class="token operator">+</span> <span class="token string">" received."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"utf8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">postDataChunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      postData <span class="token operator">+=</span> postDataChunk<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Received POST data chunk '"</span> <span class="token operator">+</span> postDataChunk <span class="token operator">+</span> <span class="token string">"'."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">route</span><span class="token punctuation">(</span>handle<span class="token punctuation">,</span> pathname<span class="token punctuation">,</span> response<span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>onRequest<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server has started."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>start <span class="token operator">=</span> start<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> exec <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"child_process"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>exec<span class="token punctuation">;</span>
<span class="token keyword">let</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"querystring"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理POST请求</span>
<span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> postData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Request handler 'start' was called."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  &lt;html>
    &lt;head>
      &lt;meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    &lt;/head>
    &lt;body>
      &lt;form action="/upload" method="post">
        &lt;textarea name="text" rows="20" cols="60">&lt;/textarea>
        &lt;input type="submit" value="Submit text" />
      &lt;/form>
    &lt;/body>
  &lt;/html>;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/html"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> postData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Request handler 'upload' was called."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"You've sent the text: "</span> <span class="token operator">+</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>postData<span class="token punctuation">)</span><span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>start <span class="token operator">=</span> start<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>upload <span class="token operator">=</span> upload<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">handle<span class="token punctuation">,</span> pathname<span class="token punctuation">,</span> response<span class="token punctuation">,</span> postData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"About to route a request for "</span> <span class="token operator">+</span> pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handle<span class="token punctuation">[</span>pathname<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handle<span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"No request handler found for "</span> <span class="token operator">+</span> pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"404 Not found"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>route <span class="token operator">=</span> route<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><img src="https://oss.w2gd.top/blog/httpserver.gif" alt="post请求" loading="lazy"></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://www.nodebeginner.org/index-zh-cn.html" target="_blank" rel="noopener noreferrer">Node入门<ExternalLinkIcon/></a></li>
<li><a href="https://cloud.tencent.com/developer/article/1410703" target="_blank" rel="noopener noreferrer">module.exports 、exports、export、export default的区别<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises" target="_blank" rel="noopener noreferrer">如何使用 Promise<ExternalLinkIcon/></a></li>
</ul>
</div></template>

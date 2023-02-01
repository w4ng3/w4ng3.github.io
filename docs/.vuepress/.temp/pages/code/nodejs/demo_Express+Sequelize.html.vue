<template><div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>使用 Express + Sequelize + MySQL 写一个简单的接口</p>
</div>
<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2>
<p>首先，创建数据库</p>
<p><img src="http://img.w2gd.top/up/20230201191627.png" alt="创建数据库"></p>
<p>然后创建 node 项目，配置 package.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"one_app_node"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"server.js"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"node server.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"w2gd"</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"cookie-parser"</span><span class="token operator">:</span> <span class="token string">"^1.4.6"</span><span class="token punctuation">,</span>
    <span class="token property">"express"</span><span class="token operator">:</span> <span class="token string">"^4.18.2"</span><span class="token punctuation">,</span>
    <span class="token property">"multer"</span><span class="token operator">:</span> <span class="token string">"1.4.5-lts.1"</span><span class="token punctuation">,</span>
    <span class="token property">"mysql2"</span><span class="token operator">:</span> <span class="token string">"^3.1.0"</span><span class="token punctuation">,</span>
    <span class="token property">"sequelize"</span><span class="token operator">:</span> <span class="token string">"^6.28.0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目结构如下</p>
<div style="text-align: center"><p><img src="http://img.w2gd.top/up/20230201211233.png" alt="项目结构"></p>
</div>
<h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h2>
<h3 id="先定义数据模型" tabindex="-1"><a class="header-anchor" href="#先定义数据模型" aria-hidden="true">#</a> 先定义数据模型</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// idea.controller.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sequelize<span class="token punctuation">,</span> DataTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sequelize"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">sequelize</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> Idea <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">"idea"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">likeNum</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLiked</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">BOOLEAN</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imageHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">DOUBLE</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Idea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// modules/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sequelize"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ideaModel <span class="token keyword">from</span> <span class="token string">"./idea.model.js"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">"wd_txy"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"mysql@1212"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"124.221.138.97"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">"mysql"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">acquire</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>Sequelize <span class="token operator">=</span> Sequelize<span class="token punctuation">;</span>
db<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> sequelize<span class="token punctuation">;</span>

db<span class="token punctuation">.</span>ideas <span class="token operator">=</span> <span class="token function">ideaModel</span><span class="token punctuation">(</span>sequelize<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> db<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统一响应-json-格式" tabindex="-1"><a class="header-anchor" href="#统一响应-json-格式" aria-hidden="true">#</a> 统一响应 JSON 格式</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * utils/unifyResFormat.js
 * 中间件 --- 统一响应 JSON 格式
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>setUnifyResFormat <span class="token operator">=</span> <span class="token punctuation">(</span>code<span class="token punctuation">,</span> data<span class="token punctuation">,</span> msg <span class="token operator">=</span> <span class="token string">"success"</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> <span class="token punctuation">{</span>
        code<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        msg<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> <span class="token punctuation">{</span>
        code<span class="token punctuation">,</span>
        msg<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-server-数据同步" tabindex="-1"><a class="header-anchor" href="#启动-server-数据同步" aria-hidden="true">#</a> 启动 server ,数据同步</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> resextra <span class="token keyword">from</span> <span class="token string">"./utils/unifyResFormat.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ideaRouter <span class="token keyword">from</span> <span class="token string">"./routes/ideas.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> db <span class="token keyword">from</span> <span class="token string">"./modules/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> __dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前路径的绝对路径</span>

<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/json;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>resextra<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/ideas"</span><span class="token punctuation">,</span> ideaRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/html;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> <span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 启动server</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4312</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// @ts-ignore</span>
  <span class="token keyword">let</span> port <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>port<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">应用实例，访问地址为 http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"准备同步数据库"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span>sequelize
  <span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Synced db"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Failed to sync db:"</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// routes/ideas.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createIdea<span class="token punctuation">,</span>
  findAllIdea<span class="token punctuation">,</span>
  findIdeaById<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../controllers/idea.controller.js"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> ideaRouter <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * api
 * 路由前缀  /ideas
 */</span>
<span class="token comment">// 获取想法列表</span>
ideaRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/list"</span><span class="token punctuation">,</span> findAllIdea<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 想法详情</span>
ideaRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/find/:id"</span><span class="token punctuation">,</span> findIdeaById<span class="token punctuation">)</span><span class="token punctuation">;</span>
ideaRouter<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/add"</span><span class="token punctuation">,</span> createIdea<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//导出该路由</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ideaRouter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制层" tabindex="-1"><a class="header-anchor" href="#控制层" aria-hidden="true">#</a> 控制层</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> db <span class="token keyword">from</span> <span class="token string">"../modules/index.js"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Idea <span class="token operator">=</span> db<span class="token punctuation">.</span>ideas<span class="token punctuation">;</span>

<span class="token comment">// 根据ID 查询想法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findIdeaById</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> Idea<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> err<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">"Some error occurred while retrieving ideas."</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">setUnifyResFormat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">setUnifyResFormat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token string">"查询不到该用户"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 查询所有想法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findAllIdea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  Idea<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// attributes: { exclude: ["createdAt"] }, // 去除一些字段</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"DESC"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// id 倒序排列</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">setUnifyResFormat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 增</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createIdea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> imageHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">220</span> <span class="token operator">-</span> <span class="token number">150</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Idea<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>imageUrl<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>content<span class="token punctuation">,</span>
    <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">,</span>
    imageHeight<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ecs-部署" tabindex="-1"><a class="header-anchor" href="#ecs-部署" aria-hidden="true">#</a> ECS 部署</h2>
<p>将文件上传到 git 仓库后下载压缩包，或者在服务器上用 git 拉取，解压后，用宝塔面板的侧边栏的网站模块，添加 Node 项目即可。</p>
<div style="text-align: center"><img src="http://img.w2gd.top/up/20230201213043.png" height="500"/>
</div>
</div></template>

<template><div><p>使用 Next 写CRUD接口，探索TS全栈框架。</p>
<!-- more -->
<p><a href="https://github.com/wardendon/next-server-demo" target="_blank" rel="noopener noreferrer">next-server-demo 仓库<ExternalLinkIcon/></a></p>
<h2 id="next-api" tabindex="-1"><a class="header-anchor" href="#next-api" aria-hidden="true">#</a> Next api</h2>
<ul>
<li><a href="https://next.nodejs.cn/" target="_blank" rel="noopener noreferrer">Next.js 中文网: 用于 Web 的全栈 React 框架<ExternalLinkIcon/></a></li>
<li><a href="https://next.nodejs.cn/docs/app/building-your-application/routing/route-handlers" target="_blank" rel="noopener noreferrer">Next 应用路由/api 路由<ExternalLinkIcon/></a></li>
</ul>
<h2 id="use-prisma-in-next" tabindex="-1"><a class="header-anchor" href="#use-prisma-in-next" aria-hidden="true">#</a> use Prisma in Next</h2>
<ul>
<li><a href="https://www.prisma.io/docs/orm/prisma-schema/data-model/models" target="_blank" rel="noopener noreferrer">Prisma<ExternalLinkIcon/></a></li>
<li><a href="https://prisma.nodejs.cn/getting-started/quickstart" target="_blank" rel="noopener noreferrer">Prisma 中文<ExternalLinkIcon/></a></li>
</ul>
<h3 id="简单-crud" tabindex="-1"><a class="header-anchor" href="#简单-crud" aria-hidden="true">#</a> 简单 CRUD</h3>
<ul>
<li>src/app/api/car/route.ts</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/** <span class="token keyword">@api</span> <span class="token punctuation">{</span>get<span class="token punctuation">}</span> /api/car?id=$<span class="token punctuation">{</span>cid<span class="token punctuation">}</span> 查询汽车 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取 Query 参数</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cars <span class="token operator">=</span> id
    <span class="token operator">?</span> <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">findMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> cars <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** <span class="token keyword">@api</span> <span class="token punctuation">{</span>post<span class="token punctuation">}</span> /api/car 新增汽车 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取 Body 参数</span>
  <span class="token comment">// request 接口的 json() 方法读取请求体病将其作为一个 promise 返回，结果是一个JS对象</span>
  <span class="token keyword">const</span> carData<span class="token operator">:</span> Prisma<span class="token punctuation">.</span>CarCreateInput <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> carData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** <span class="token keyword">@api</span> <span class="token punctuation">{</span>delete<span class="token punctuation">}</span> /api/car?id=$<span class="token punctuation">{</span>cid<span class="token punctuation">}</span> 删除汽车 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">DELETE</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span> where<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">已删除ID=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的数据</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>src/app/api/car/[id]/route.ts</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/** <span class="token keyword">@api</span> <span class="token punctuation">{</span>PATCH<span class="token punctuation">}</span> /api/car/:id 编辑汽车 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">PATCH</span><span class="token punctuation">(</span>
  req<span class="token operator">:</span> NextRequest<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> car<span class="token operator">:</span> Prisma<span class="token punctuation">.</span>CarCreateInput <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    where<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> car<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">"修改成功"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-apidoc-in-next" tabindex="-1"><a class="header-anchor" href="#use-apidoc-in-next" aria-hidden="true">#</a> use apidoc in Next</h2>
<p>尝试了 swagger 和 apidoc 后，选择了 apidoc。（实在是无法接受在jsDoc里写yaml）</p>
<ul>
<li><a href="https://apidocjs.com/#param-api" target="_blank" rel="noopener noreferrer">apiDoc<ExternalLinkIcon/></a>
按照文档在jsdoc写接口注解，就能生成api文档了</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/202401110035062.png" alt="apidoc文档" tabindex="0" loading="lazy"><figcaption>apidoc文档</figcaption></figure>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@api</span> <span class="token punctuation">{</span>post<span class="token punctuation">}</span> /api/car 新增汽车
 * <span class="token keyword">@apiVersion</span>  1.0.0
 * <span class="token keyword">@apiHeader</span> <span class="token punctuation">{</span>String<span class="token punctuation">}</span> Authorization 用户授权token.
 * <span class="token keyword">@apiName</span> AddCar
 * <span class="token keyword">@apiGroup</span> Car
 * <span class="token keyword">@apiDescription</span> 新增汽车
 *
 * <span class="token keyword">@apiBody</span>  <span class="token punctuation">{</span>String<span class="token punctuation">}</span> name 汽车名称
 * <span class="token keyword">@apiBody</span>  <span class="token punctuation">{</span>String<span class="token punctuation">}</span> brand 汽车品牌
 * <span class="token keyword">@apiBody</span>  <span class="token punctuation">{</span>Number<span class="token punctuation">}</span> price 汽车价格
 * <span class="token keyword">@apiBody</span>  <span class="token punctuation">{</span>String<span class="token punctuation">}</span> imageUrl 汽车图片
 * <span class="token keyword">@apiSuccess</span> (200) <span class="token punctuation">{</span>Object<span class="token punctuation">}</span> data 汽车数据
 * <span class="token keyword">@apiSuccess</span> (200) <span class="token punctuation">{</span>number<span class="token punctuation">}</span> code 操作码
 * <span class="token keyword">@apiSuccess</span> (200) <span class="token punctuation">{</span>String<span class="token punctuation">}</span> msg 描述信息
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取 Body 参数</span>
  <span class="token comment">// request 接口的 json() 方法读取请求体病将其作为一个 promise 返回，结果是一个JS对象</span>
  <span class="token keyword">const</span> carData<span class="token operator">:</span> Prisma<span class="token punctuation">.</span>CarCreateInput <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> carData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最好在<code v-pre>.vscode</code> 里配置了 apidoc 注解的代码片段</p>
<p>还可以安装拓展插件<code v-pre>apidoc-markdown</code>，生成markdown文档，方便交付。
在 package.json 里添加命令 <code v-pre>api:doc</code>，方便同时更新html文档和md文档</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"next dev"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"prisma generate &amp;&amp; next build"</span><span class="token punctuation">,</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span><span class="token punctuation">,</span>
    <span class="token property">"api:doc"</span><span class="token operator">:</span> <span class="token string">"apidoc -i src/app/api/ -o doc/ &amp;&amp; apidoc-markdown -i src/app/api/ -o doc/api.md"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<ul>
<li><a href="https://next.nodejs.cn/docs/app/building-your-application/deploying/" target="_blank" rel="noopener noreferrer">Next 部署<ExternalLinkIcon/></a></li>
<li><a href="https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue" target="_blank" rel="noopener noreferrer">Prisma 在 Vercel 的部署注意事项<ExternalLinkIcon/></a></li>
</ul>
</div></template>



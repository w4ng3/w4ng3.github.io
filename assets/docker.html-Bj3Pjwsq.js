import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as a}from"./app-gs2C4yoU.js";const i={},c=a(`<h2 id="dockerfile-指令" tabindex="-1"><a class="header-anchor" href="#dockerfile-指令" aria-hidden="true">#</a> Dockerfile 指令</h2><p>在 Dockerfile 中，有多个常用的指令，每个指令都有不同的作用。以下是一些常见的 Dockerfile 指令以及它们的简要介绍：</p><ol><li><code>FROM</code>：指定基础镜像，用于构建当前镜像。</li><li><code>MAINTAINER</code>：指定镜像的维护者信息，已经被废弃，推荐使用 LABEL 代替。</li><li><code>RUN</code>：在镜像中执行命令，用于安装软件包、执行编译等操作。</li><li><code>CMD</code>：指定容器启动时执行的命令，每个 Dockerfile 只能有一个 CMD 指令。</li><li><code>LABEL</code>：为镜像添加元数据，如作者、版本号等信息。</li><li><code>EXPOSE</code>：声明容器运行时监听的端口，供外部连接使用。</li><li><code>ENV</code>：设置环境变量。</li><li><code>ADD</code>：复制文件或目录到镜像中，支持 URL 资源复制和解压缩。</li><li><code>COPY</code>：复制本地文件到镜像中。</li><li><code>ENTRYPOINT</code>：配置容器启动时执行的命令，可以与 CMD 指令一起使用。</li><li><code>VOLUME</code>：声明容器中的目录为持久化存储卷。</li><li><code>WORKDIR</code>：设置容器内的工作目录。</li><li><code>USER</code>：指定运行容器的用户或用户组。</li></ol><h2 id="部署前端项目" tabindex="-1"><a class="header-anchor" href="#部署前端项目" aria-hidden="true">#</a> 部署前端项目</h2><ol><li><p><code>npm run build</code>打包，在项目根目录生成<code>dist</code>目录。</p></li><li><p>项⽬根⽬录下新建⽂件 <code>nginx.conf</code></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>\`\`server <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html/v3tsh5</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html</span><span class="token punctuation">;</span>
    <span class="token comment"># 对于vue或者React项目，使用 history路由需要</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置⽂件定义了⾸⻚为<code> /usr/share/nginx/html/v3tsh5/index.html</code>，所以可以⼀会把构建出 来的 <code>index.html</code> ⽂件和相关的静态资源放到 <code>/usr/share/nginx/html/v3tsh5</code> ⽬录下。</p></li><li><p>项⽬根⽬录创建 <code>Dockerfile</code> ⽂件</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 指定基础镜像为最新版 nginx</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:latest</span>
<span class="token comment"># 拷贝文件,将上面定义的 nginx.conf 文件复制到nginx的conf.d文件夹内，这里的 default 可以设置为任何名称</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./nginx.conf /etc/nginx/conf.d/default.conf</span>
<span class="token comment"># 拷贝dist到 nginx目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;拷贝dist到nginx目录&#39;</span></span>
<span class="token instruction"><span class="token keyword">COPY</span> ./dist /usr/share/nginx/html/v3tsh5/</span>
<span class="token comment"># 声明容器运行时监听的端口，供外部连接使用</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80/tcp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>EXPOSE 并不会真正将宿主机上的端口暴露出来，它只是一个元数据，方便用户了解容器的网络设置</p></blockquote></li><li><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> v3tsh5 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-t</code> 后表示指定镜像名称 <code>v3tsh5</code>，<code>. </code>表示指定 Dockerfile 所在目录</p></li><li><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">-p</span> <span class="token number">8001</span>:80 <span class="token parameter variable">--name</span> vue3ts-h5 v3tsh5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li><p>docker run: 这是 Docker 命令行中运行新容器的命令。</p></li><li><p>-itd: 这是 docker run 命令的三个标志组合的缩写。</p><ul><li><p>-i 或 --interactive：保持容器的标准输入（STDIN）打开，即使没有附加也是如此。</p></li><li><p>-t 或 --tty：为容器分配一个伪终端或伪 TTY。这通常用于让容器表现得像是一个真实的终端。</p></li><li><p>-d 或 --detach：在后台运行容器，并打印容器的 ID。</p></li></ul></li><li><p>-p 8001:80: 这是端口映射参数，<code>-p 或 --publish</code>将容器的端口映射到主机的端口，在这个例子中，容器内部的 80 端口被映射到运行 Docker 的主机上的 8001 端口。</p></li><li><p>--name vue3ts-h5: 这是用于指定容器名称的参数。</p></li><li><p>末尾的 v3tsh5: 这是要运行的 Docker 镜像的名称。</p></li></ul></blockquote></li><li><p>访问</p><ul><li><p><code>docker ps</code>查看docker 进程</p></li><li><p>打开<code>http://localhost:8001/</code>访问网页</p></li></ul></li><li><p>关闭容器</p><p><code>docker stop vue3ts-h5</code></p></li></ol><h3 id="nginx设置反向代理" tabindex="-1"><a class="header-anchor" href="#nginx设置反向代理" aria-hidden="true">#</a> Nginx设置反向代理</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
  <span class="token comment"># 接口地址反代</span>
  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend_server_ip:port</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，当访问<code>localhost/api</code>时，请求会被反向代理到<code>http://backend_server_ip:port</code>的地址。</p><p>如果有需要，还可以配置其他反向代理相关的选项，比如设置代理头部信息、设置代理超时时间等。例如：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend_server_ip:port</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">60s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">60s</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">60s</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装node-js" tabindex="-1"><a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a> 安装Node.js</h2><p>如果不想在本地打包，而是上传到docker里，则需要安装node环境。</p><p>在<code>dockerfile</code>文件里添加以下内容，注意运行顺序：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 安装Node.js，若要指定版本则 node:18.17.0</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:latest</span>
<span class="token comment"># 创建工作目录</span>
<span class="token comment"># WORKDIR /app</span>
<span class="token comment"># 将node_modules添加到工作目录</span>
<span class="token instruction"><span class="token keyword">COPY</span> package.json .</span>
<span class="token comment"># 设置npm国内镜像源</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm config set registry https://registry.npmmirror.com</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;依赖安装完成...&quot;</span></span>
<span class="token comment"># 将所有文件复制到工作目录</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token comment"># 编译前端项目</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;开始build&#39;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;---build 完成---&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以定义不需要复制的文件<code>.dockerignore</code></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>node_modules
.git
scripts
README.md
dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[c];function o(d,p){return s(),e("div",null,l)}const u=n(i,[["render",o],["__file","docker.html.vue"]]);export{u as default};

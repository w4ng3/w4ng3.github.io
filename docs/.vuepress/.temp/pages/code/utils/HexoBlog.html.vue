<template><div><p>我并不是⼀个前端程序员，有些东⻄不是很了解，能拥有⾃⼰的⾼质量博客吗？
这世界上90%的问题已经有⼈解决了，你只要知道如何找到这个正确⾼效的解放⽅法。</p>
<h1 id="一-hexo" tabindex="-1"><a class="header-anchor" href="#一-hexo" aria-hidden="true">#</a> ⼀ Hexo</h1>
<p>Hexo是⾼效的静态站点⽣成框架，它基于Node.js。通过Hexo，你可以直接使⽤Markdown语法来撰写 博客。相信你肯定写过<code v-pre>README.md</code>⽂件吧，对，就是这个格式的！写完后只需两三条命令即可将⽣成的⽹⻚上传到你的github上，然后别⼈就可以看到你的⽹⻚啦。是不是很简单？你⽆需关⼼⽹⻚源代码的具体细节，你只需要⽤⼼写好你的博客内容就⾏。</p>
<p><a href="https://hexo.io/zh-cn/" target="_blank" rel="noopener noreferrer">https://hexo.io/zh-cn/<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581277859-d3dd1c34-203b-4bde-a6f0-89722fb7a42a.png" alt="hexo"></p>
<h1 id="二-hexo-github博客小白教程" tabindex="-1"><a class="header-anchor" href="#二-hexo-github博客小白教程" aria-hidden="true">#</a> ⼆ Hexo+Github博客⼩⽩教程</h1>
<p>以下步骤如果已经操作过，可跳过</p>
<blockquote>
<p>步骤⼀览</p>
<ul>
<li>安装Node.js</li>
<li>添加国内镜像源</li>
<li>安装Git</li>
<li>注册Github账号</li>
<li>安装Hexo</li>
<li>连接Github与本地</li>
<li>写⽂章、发布⽂章</li>
<li>绑定域名 (非必需)</li>
<li>个性化设置（matery主题）</li>
</ul>
</blockquote>
<h2 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h2>
<p>⾸先下载稳定版 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/<ExternalLinkIcon/></a>
下载最新的64位的LTS稳定版，安装选项全部默认，⼀路点击Next。
最后安装好之后，按Win+R打开命令提示符，输⼊node -v 和 npm -v，如果出现版本号，那么就安装成功了。</p>
<h2 id="添加国内镜像源" tabindex="-1"><a class="header-anchor" href="#添加国内镜像源" aria-hidden="true">#</a> 添加国内镜像源</h2>
<p>如果没有梯⼦的话，可以使⽤阿⾥的国内镜像进⾏加速，终端执⾏命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装Git</h2>
<p>为了把本地的⽹⻚⽂件上传到github上⾯去，我们需要⽤到分布式版本控制⼯具 —— Git
<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">https://git-scm.com/downloads<ExternalLinkIcon/></a>
安装选项还是全部默认，只不过最后⼀步添加路径时选择<code v-pre>Use Git from the Windows Command Prompt</code>，这样我们就可以直接在命令提示符⾥打开 git了。
安装完成后在命令提示符中输⼊<code v-pre>git --version</code>验证是否安装成功。</p>
<h2 id="安装hexo" tabindex="-1"><a class="header-anchor" href="#安装hexo" aria-hidden="true">#</a> 安装Hexo</h2>
<p>全局安装hexo，任意地⽅打开终端，输⼊<code v-pre>npm i hexo-cli -g</code> 安装Hexo</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581281340-6524d33a-c1f4-4165-b801-607d51776733.png" alt="img2"></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581282153-2bb91245-e380-4be1-856a-a83078ae4cbc.png" alt="img3"></p>
<p>安装完后输⼊hexo -v验证是否安装成功。
然后在合适的地⽅新建⼀个⽂件夹，⽤来存放⾃⼰的博客⽂件，⽐如存放在<code v-pre>D:\study\blog</code>⽬录下，在这⾥初始化我们的⽹站，输⼊hexo init初始化博客⽬录，有⼀些warning可以忽略。</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581282892-3493a07d-3053-47e2-80f6-1e875647e83c-20231110113438379.png" alt="img4"></p>
<p>接着输⼊ <code v-pre>npm install</code>安装必备的组件（有警告没关系）
这样本地的⽹站配置就弄好了，在命令⾏输⼊ <code v-pre>hexo g</code> ⽣成静态⽹⻚</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581283552-7fb6c151-c98a-4f31-872d-b1026e42ddb5.png" alt="img5"></p>
<p>然后输⼊ <code v-pre>hexo s</code>启动⼀个本地服务器，端⼝默认4000</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581284374-93223036-2189-4e52-a5ef-f68348ab9a1e.png" alt="img6"></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581284846-5471b18e-348e-4d8c-b837-2697d44ae862.png" alt="i7"></p>
<p>浏览器打开 http://localhost:4000/，就可以看到我们的博客啦，效果如下：
按<code v-pre>ctrl+c</code>关闭本地服务器！</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581285490-5b0720f1-94b4-4d02-91f9-48a3f23ededb.png" alt=""></p>
<h2 id="注册github账号" tabindex="-1"><a class="header-anchor" href="#注册github账号" aria-hidden="true">#</a> 注册Github账号</h2>
<p>接下来就去注册⼀个github账号，⽤来存放我们的⽹站。⼤多数⼩伙伴应该都有了吧，作为⼀个合格的程序猿（媛）还是要有⼀个的。
<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a></p>
<h1 id="连接github与本地" tabindex="-1"><a class="header-anchor" href="#连接github与本地" aria-hidden="true">#</a> 连接Github与本地</h1>
<p>⾸先右键打开git   bash，然后输⼊下⾯命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">"你的githb⽤户名"</span>
<span class="token function">git</span> config --global user.email <span class="token string">"你的github邮箱"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后⽣成密钥SSH key：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">"你的github邮箱"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开 github，在头像下⾯点击<code v-pre>settings</code>，再点击<code v-pre>SSH and GPG keys</code>，新建⼀个 SSH，名字随便，把⽤户⽬录下<code v-pre>.ssh/id_rsa.pub</code>的内容复制进去，确定 Add SSH key保存。</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581286715-a7b2694a-78a3-4104-8591-2ff17bb2c271.png" alt=""></p>
<p>本地命令⾏输⼊ <code v-pre>ssh -T git@github.com</code> ，如果如下图所示，出现你的⽤户名，那就成功了。</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581287052-8447b7cf-a542-4112-ae0a-44fead582a28.png" alt=""></p>
<h2 id="部署到-github-pages" tabindex="-1"><a class="header-anchor" href="#部署到-github-pages" aria-hidden="true">#</a> 部署到 github pages</h2>
<p>使用 GitHub Actions 部署至 GitHub Pages，此方法适用于公开或私人储存库。</p>
<ol>
<li>建立名为 <code v-pre>&lt;你的 GitHub 用户名&gt;.github.io</code> 的储存库，若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。</li>
<li>将 Hexo 文件夹中的文件 push 到储存库的默认分支，默认分支通常名为 main</li>
</ol>
<p>我们新建⼀个项⽬，如下所示：</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581279220-810a47db-eba7-4197-ba79-7f6ddeea94c0.png" alt=""></p>
<p>然后如下图所示，输⼊⾃⼰的项⽬名字，后⾯⼀定要加<code v-pre>.github.io</code>后缀，⽤⾃⼰的github⽤户名作为前   缀，访问的地址就和⼆级域名⼀致了</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699584945563-6293b49b-111e-42d5-8865-a3b5631ffedb.png" alt="image.png"></p>
<p>然后可以看到这个页面</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699584974104-f7085eec-4d41-45d0-a9ac-b9b80c9920ea.png" alt="image.png"></p>
<p>然后在你刚才的博客文件夹下，打开终端，依此输入以下命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>你的仓库地址<span class="token operator">></span>
<span class="token function">git</span> branch -M main
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">"first commit"</span>
<span class="token function">git</span> push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就成功将提交到你的 <a href="http://github.io/" target="_blank" rel="noopener noreferrer">github.io<ExternalLinkIcon/></a> 仓库了</p>
<p>打开博客根⽬录下的 <code v-pre>_config.yml</code>⽂件，这是博客的配置⽂件，在这⾥你可以修改与博客相关的各种信息。
修改最后⼀⾏的配置： <code v-pre>repo 里改成你自己的仓库地址</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> git
  <span class="token key atrule">repo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/&lt;username<span class="token punctuation">></span>/&lt;project<span class="token punctuation">></span>
  <span class="token comment"># example, https://github.com/hexojs/hexojs.github.io</span>
  <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>tips: 下面两张图里的 deploy 配置里的 repository 是旧版配置，新版的改为 repo</p>
</blockquote>
<h2 id="写文章、发布文章" tabindex="-1"><a class="header-anchor" href="#写文章、发布文章" aria-hidden="true">#</a> 写⽂章、发布⽂章</h2>
<p>⽤ VSCode 打开 blog ⽬录。
⽤命令安装⼀个扩展<code v-pre>npm i hexo-deployer-git </code>，⽤于向git仓库发布内容</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288028-829c6c7e-c3dd-48ed-8f6a-c38e1dc9f3cc.png" alt=""></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288439-0ebb8390-a229-4805-9d6f-3c3b57f3dd31.png" alt=""></p>
<p>然后输⼊命令 <code v-pre>hexo new post &quot;hello&quot;</code>，新建⼀篇⽂章，就会在博客的<code v-pre>source/_posts</code>⽬录多出⼀个<code v-pre>hello.md</code>⽂件，就可以写⾃⼰的内容了。
简单编辑⼀下<code v-pre>hello.md</code></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288814-70c6827b-07de-4204-8882-7a99f7536fc8.png" alt=""></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289108-7f8dcc4c-926e-4519-8ed7-6c98d0b3fc80.png" alt=""></p>
<p>根⽬录命令⾏，输⼊<code v-pre>hexo g</code>⽣成静态⽹⻚
输⼊<code v-pre>hexo s</code> ，然后本地浏览器预览效果</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289407-d70a77c3-b5af-4358-b0e4-aa2bc33051f8.png" alt=""></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289854-7d9961f9-4866-414f-babf-26ecf1c43003.png" alt=""></p>
<p>最后输⼊<code v-pre>hexo d</code>上传到github上 （会在github上看到多了一个 gh-pages 分支）</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581290384-ea8c7c25-aaa5-4330-b52e-6ddcdd416bbb.png" alt=""></p>
<p>等待一分钟，这时打开你的 github.io 主⻚就能看到发布的⽂章啦</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581290881-75ffc664-0ba1-41b6-9a6a-dde980125a17.png" alt=""></p>
<p>如果失败，那么检查下 github 的仓库设置，
登入 Github，请在库设置（Repository Settings）中将默认分支设置为_config.yml 配置中的分支名称<code v-pre>gh-pages</code>。稍等片刻，您的站点就会显示在您的 Github Pages 中。</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585675005-9c4c472d-99c9-4957-96c4-3e0ca5c62309.png" alt="image.png"></p>
<p>在 设置的 Pages 里，设置 Branch 为 gh-pages</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585697791-8f53747b-877b-447c-b293-cb754aa18e32.png" alt="image.png"></p>
<p>稍等片刻，刷新后就会出现上方的链接，点击打开博客
现在总结下需要使用的命令，新建一篇博文后，用<code v-pre>hexo g</code>生成将md文档转换成网页html文件，
然后<code v-pre>hexo d</code>发布</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585761768-5b6ac712-f225-4726-8eef-8ab9a55535eb.png" alt="image.png"></p>
<h2 id="博客个性化主题设置-matery主题" tabindex="-1"><a class="header-anchor" href="#博客个性化主题设置-matery主题" aria-hidden="true">#</a> 博客个性化主题设置（matery主题）</h2>
<p>下⾯的个性化设置主要针对的是matery主题
<strong>更换主题</strong>
这个主题⽐较炫酷，并且响应式更友好，点起来很舒服，功能也多很多。主题的原地址在这⾥：
<a href="https://github.com/blinkfox/hexo-theme-matery" target="_blank" rel="noopener noreferrer">https://github.com/blinkfox/hexo-theme-matery <ExternalLinkIcon/></a>
预览效果</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581291663-5e228f77-7e45-45ed-b004-651ed8cf6d20.png" alt=""></p>
<p>你照着它的⽂档应该就可以⾮常简单弄出来。
<a href="https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md" target="_blank" rel="noopener noreferrer">https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581292203-2d93d479-624e-4963-b75a-5f10daaf6e90.png" alt=""></p>
<p>themes⽂件夹在你的博客⽬录⾥，建议使⽤第⼀种⽅法，下载后解压改名，放到这个位置,
使用第二种方法的时候记得删除掉它里面的 .git 隐藏文件夹</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581292675-b8d07ac8-3c9e-423d-a1db-281ccade5656.png" alt=""></p>
<p>照着官⽅⽂档做即可</p>
<hr>
<h2 id="友情建议操作" tabindex="-1"><a class="header-anchor" href="#友情建议操作" aria-hidden="true">#</a> 友情建议操作</h2>
<p>⽂章头设置
为了新建⽂章⽅便，建议将<code v-pre>/scaffolds/post.md</code>修改为如下代码：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token key atrule">top</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">cover</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">password</span><span class="token punctuation">:</span>
<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">mathjax</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">summary</span><span class="token punctuation">:</span>
<span class="token key atrule">tags</span><span class="token punctuation">:</span>
<span class="token key atrule">categories</span><span class="token punctuation">:</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样新建⽂章后不⽤你⾃⼰补充了，修改信息就⾏。</p>
<p>执⾏<code v-pre>hexo g</code>⽣成，<code v-pre>hexo s</code>预览
以上也可以合并为 <code v-pre>hexo g &amp; hexo s</code></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581293625-4e8c9e1b-2070-4fc7-91d3-83e214470927.png" alt=""></p>
<p><code v-pre>hexo d </code>发布到 github，然后查看你的 github.io 博客主⻚，搞定。</p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581294839-756712d5-f54d-41fd-b45c-512bd48840d6.png" alt=""></p>
<p>越来越简单了，不是么，其他主题做法⼀样，⾃⼰挑⼀个喜欢的hexo主题，动起来吧，别挑花眼。<a href="https://hexo.io/themes/" target="_blank" rel="noopener noreferrer">https://hexo.io/themes/<ExternalLinkIcon/></a></p>
<p><img src="https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581295861-5d5e1980-3bee-4671-9f33-a16a30e1de4c.png" alt=""></p>
<hr>
<p>本教程参考自<a href="https://github.com/mqxu" target="_blank" rel="noopener noreferrer">mqxu 许老师👍🏻<ExternalLinkIcon/></a></p>
</div></template>

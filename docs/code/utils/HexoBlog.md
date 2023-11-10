---
title: Hexo搭建个人博客
icon: icon-tool
date: 2023-11-10
category:
  - utils
tag:
  - Blog
---

我并不是⼀个前端程序员，有些东⻄不是很了解，能拥有⾃⼰的⾼质量博客吗？
这世界上90%的问题已经有⼈解决了，你只要知道如何找到这个正确⾼效的解放⽅法。

# ⼀ Hexo
Hexo是⾼效的静态站点⽣成框架，它基于Node.js。通过Hexo，你可以直接使⽤Markdown语法来撰写 博客。相信你肯定写过`README.md`⽂件吧，对，就是这个格式的！写完后只需两三条命令即可将⽣成的⽹⻚上传到你的github上，然后别⼈就可以看到你的⽹⻚啦。是不是很简单？你⽆需关⼼⽹⻚源代码的具体细节，你只需要⽤⼼写好你的博客内容就⾏。

[https://hexo.io/zh-cn/](https://hexo.io/zh-cn/)

![hexo](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581277859-d3dd1c34-203b-4bde-a6f0-89722fb7a42a.png)

# ⼆ Hexo+Github博客⼩⽩教程

以下步骤如果已经操作过，可跳过
> 步骤⼀览
> - 安装Node.js
> - 添加国内镜像源
> - 安装Git
> - 注册Github账号
> - 安装Hexo
> - 连接Github与本地
> - 写⽂章、发布⽂章
> - 绑定域名 (非必需)
> - 个性化设置（matery主题）

## 安装 Node.js
⾸先下载稳定版 [https://nodejs.org/](https://nodejs.org/) 
下载最新的64位的LTS稳定版，安装选项全部默认，⼀路点击Next。
最后安装好之后，按Win+R打开命令提示符，输⼊node -v 和 npm -v，如果出现版本号，那么就安装成功了。

## 添加国内镜像源
如果没有梯⼦的话，可以使⽤阿⾥的国内镜像进⾏加速，终端执⾏命令
```bash
npm config set registry https://registry.npmmirror.com
```
## 安装Git
为了把本地的⽹⻚⽂件上传到github上⾯去，我们需要⽤到分布式版本控制⼯具 —— Git 
[https://git-scm.com/downloads](https://git-scm.com/downloads)
安装选项还是全部默认，只不过最后⼀步添加路径时选择`Use Git from the Windows Command Prompt`，这样我们就可以直接在命令提示符⾥打开 git了。
安装完成后在命令提示符中输⼊`git --version`验证是否安装成功。

## 安装Hexo
全局安装hexo，任意地⽅打开终端，输⼊`npm i hexo-cli -g` 安装Hexo

![img2](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581281340-6524d33a-c1f4-4165-b801-607d51776733.png)

![img3](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581282153-2bb91245-e380-4be1-856a-a83078ae4cbc.png)

安装完后输⼊hexo -v验证是否安装成功。
然后在合适的地⽅新建⼀个⽂件夹，⽤来存放⾃⼰的博客⽂件，⽐如存放在`D:\study\blog`⽬录下，在这⾥初始化我们的⽹站，输⼊hexo init初始化博客⽬录，有⼀些warning可以忽略。

![img4](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581282892-3493a07d-3053-47e2-80f6-1e875647e83c-20231110113438379.png)

接着输⼊ `npm install`安装必备的组件（有警告没关系）
这样本地的⽹站配置就弄好了，在命令⾏输⼊ `hexo g` ⽣成静态⽹⻚

![img5](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581283552-7fb6c151-c98a-4f31-872d-b1026e42ddb5.png)

然后输⼊ `hexo s`启动⼀个本地服务器，端⼝默认4000

![img6](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581284374-93223036-2189-4e52-a5ef-f68348ab9a1e.png)

![i7](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581284846-5471b18e-348e-4d8c-b837-2697d44ae862.png)

浏览器打开 http://localhost:4000/，就可以看到我们的博客啦，效果如下：
按`ctrl+c`关闭本地服务器！

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581285490-5b0720f1-94b4-4d02-91f9-48a3f23ededb.png)

## 注册Github账号
接下来就去注册⼀个github账号，⽤来存放我们的⽹站。⼤多数⼩伙伴应该都有了吧，作为⼀个合格的程序猿（媛）还是要有⼀个的。
[https://github.com/](https://github.com/)

# 连接Github与本地
⾸先右键打开git   bash，然后输⼊下⾯命令：
```bash
git config --global user.name "你的githb⽤户名"
git config --global user.email "你的github邮箱"
```
然后⽣成密钥SSH key：
```bash
ssh-keygen -t rsa -C "你的github邮箱"
```

打开 github，在头像下⾯点击`settings`，再点击`SSH and GPG keys`，新建⼀个 SSH，名字随便，把⽤户⽬录下`.ssh/id_rsa.pub`的内容复制进去，确定 Add SSH key保存。

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581286715-a7b2694a-78a3-4104-8591-2ff17bb2c271.png)

本地命令⾏输⼊ `ssh -T git@github.com` ，如果如下图所示，出现你的⽤户名，那就成功了。

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581287052-8447b7cf-a542-4112-ae0a-44fead582a28.png)

## 部署到 github pages
使用 GitHub Actions 部署至 GitHub Pages，此方法适用于公开或私人储存库。

1. 建立名为 `<你的 GitHub 用户名>.github.io` 的储存库，若之前已将 Hexo 上传至其他储存库，将该储存库重命名即可。
2. 将 Hexo 文件夹中的文件 push 到储存库的默认分支，默认分支通常名为 main

我们新建⼀个项⽬，如下所示：

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581279220-810a47db-eba7-4197-ba79-7f6ddeea94c0.png)

然后如下图所示，输⼊⾃⼰的项⽬名字，后⾯⼀定要加`.github.io`后缀，⽤⾃⼰的github⽤户名作为前   缀，访问的地址就和⼆级域名⼀致了

![image.png](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699584945563-6293b49b-111e-42d5-8865-a3b5631ffedb.png)

然后可以看到这个页面

![image.png](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699584974104-f7085eec-4d41-45d0-a9ac-b9b80c9920ea.png)

然后在你刚才的博客文件夹下，打开终端，依此输入以下命令
```bash
git init
git remote add origin <你的仓库地址>
git branch -M main
git add .
git commit -m "first commit"
git push -u origin main
```
就成功将提交到你的 [github.io](http://github.io/) 仓库了

打开博客根⽬录下的 `_config.yml`⽂件，这是博客的配置⽂件，在这⾥你可以修改与博客相关的各种信息。
修改最后⼀⾏的配置： `repo 里改成你自己的仓库地址`
```yaml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
```
> tips: 下面两张图里的 deploy 配置里的 repository 是旧版配置，新版的改为 repo

## 写⽂章、发布⽂章
⽤ VSCode 打开 blog ⽬录。
⽤命令安装⼀个扩展`npm i hexo-deployer-git `，⽤于向git仓库发布内容

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288028-829c6c7e-c3dd-48ed-8f6a-c38e1dc9f3cc.png)

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288439-0ebb8390-a229-4805-9d6f-3c3b57f3dd31.png)

然后输⼊命令 `hexo new post "hello"`，新建⼀篇⽂章，就会在博客的`source/_posts`⽬录多出⼀个`hello.md`⽂件，就可以写⾃⼰的内容了。
简单编辑⼀下`hello.md`

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581288814-70c6827b-07de-4204-8882-7a99f7536fc8.png)

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289108-7f8dcc4c-926e-4519-8ed7-6c98d0b3fc80.png)

根⽬录命令⾏，输⼊`hexo g`⽣成静态⽹⻚
输⼊`hexo s` ，然后本地浏览器预览效果

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289407-d70a77c3-b5af-4358-b0e4-aa2bc33051f8.png)

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581289854-7d9961f9-4866-414f-babf-26ecf1c43003.png)

最后输⼊`hexo d`上传到github上 （会在github上看到多了一个 gh-pages 分支）

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581290384-ea8c7c25-aaa5-4330-b52e-6ddcdd416bbb.png)

等待一分钟，这时打开你的 github.io 主⻚就能看到发布的⽂章啦

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581290881-75ffc664-0ba1-41b6-9a6a-dde980125a17.png)

如果失败，那么检查下 github 的仓库设置，
登入 Github，请在库设置（Repository Settings）中将默认分支设置为_config.yml 配置中的分支名称`gh-pages`。稍等片刻，您的站点就会显示在您的 Github Pages 中。

![image.png](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585675005-9c4c472d-99c9-4957-96c4-3e0ca5c62309.png)

在 设置的 Pages 里，设置 Branch 为 gh-pages

![image.png](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585697791-8f53747b-877b-447c-b293-cb754aa18e32.png)

稍等片刻，刷新后就会出现上方的链接，点击打开博客
现在总结下需要使用的命令，新建一篇博文后，用`hexo g`生成将md文档转换成网页html文件，
然后`hexo d`发布

![image.png](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699585761768-5b6ac712-f225-4726-8eef-8ab9a55535eb.png)

## 博客个性化主题设置（matery主题）
下⾯的个性化设置主要针对的是matery主题
**更换主题**
这个主题⽐较炫酷，并且响应式更友好，点起来很舒服，功能也多很多。主题的原地址在这⾥：
[https://github.com/blinkfox/hexo-theme-matery ](https://github.com/blinkfox/hexo-theme-matery)
预览效果

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581291663-5e228f77-7e45-45ed-b004-651ed8cf6d20.png)

你照着它的⽂档应该就可以⾮常简单弄出来。
[https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md) 

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581292203-2d93d479-624e-4963-b75a-5f10daaf6e90.png)

themes⽂件夹在你的博客⽬录⾥，建议使⽤第⼀种⽅法，下载后解压改名，放到这个位置, 
使用第二种方法的时候记得删除掉它里面的 .git 隐藏文件夹

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581292675-b8d07ac8-3c9e-423d-a1db-281ccade5656.png)

照着官⽅⽂档做即可

---

## 友情建议操作
⽂章头设置
为了新建⽂章⽅便，建议将`/scaffolds/post.md`修改为如下代码：

```yaml
---
title: {{ title }}
date: {{ date }}
top: false
cover: false
password:
toc: true
mathjax: true
summary:
tags:
categories:
---
```
这样新建⽂章后不⽤你⾃⼰补充了，修改信息就⾏。

执⾏`hexo g`⽣成，`hexo s`预览
以上也可以合并为 `hexo g & hexo s` 

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581293625-4e8c9e1b-2070-4fc7-91d3-83e214470927.png)

`hexo d `发布到 github，然后查看你的 github.io 博客主⻚，搞定。

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581294839-756712d5-f54d-41fd-b45c-512bd48840d6.png)

越来越简单了，不是么，其他主题做法⼀样，⾃⼰挑⼀个喜欢的hexo主题，动起来吧，别挑花眼。[https://hexo.io/themes/](https://hexo.io/themes/)

![](https://cdn.jsdelivr.net/gh/wardendon/wiki-image@main/img/1699581295861-5d5e1980-3bee-4671-9f33-a16a30e1de4c.png)

---
本教程参考自[mqxu 许老师👍🏻](https://github.com/mqxu)
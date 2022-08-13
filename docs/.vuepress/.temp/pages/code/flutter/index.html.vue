<template><div><h2 id="_1-1、跨平台开发对比" tabindex="-1"><a class="header-anchor" href="#_1-1、跨平台开发对比" aria-hidden="true">#</a> 1.1、跨平台开发对比</h2>
<ul>
<li><strong>Web 容器 ：Cordova  Ionic</strong></li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Cordova  ionic.png" alt="Cordova  ionic" loading="lazy"></p>
<ul>
<li><strong>泛 Web 容器: React Native</strong></li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/ReactNative.png" alt="React Native" loading="lazy"></p>
<ul>
<li><strong>自绘引擎：Flutter</strong></li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/JIT.png" alt="JIT" loading="lazy"></p>
<blockquote>
<p><strong>自己去了解一下：AOT和 JIT</strong></p>
</blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/方案对比.png" alt="方案对比" loading="lazy"></p>
<h2 id="_1-2、flutter介绍" tabindex="-1"><a class="header-anchor" href="#_1-2、flutter介绍" aria-hidden="true">#</a> 1.2、Flutter介绍</h2>
<blockquote>
<p>Flutter 是 Google 推出并开源的移动应用开发UI框架，主打跨平台、高保真、高性能。开发者可以通过 Dart 语言开发 App，一套代码同时运行在多个平台。 Flutter 提供了丰富的组件、接口，开发者可以很快地为 Flutter 添加 Native 扩展。</p>
</blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Flutter介绍.png" alt="Flutter介绍" loading="lazy"></p>
<p><strong>Flutter架构分层</strong></p>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Flutter架构分层.png" alt="Flutter架构分层" loading="lazy"></p>
<h1 id="_2、flutter环境" tabindex="-1"><a class="header-anchor" href="#_2、flutter环境" aria-hidden="true">#</a> 2、Flutter环境</h1>
<h2 id="_2-1、环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-1、环境搭建" aria-hidden="true">#</a> 2.1、环境搭建</h2>
<p>参考：</p>
<ul>
<li><a href="https://book.flutterchina.club/chapter1/install_flutter.html#_1-3-1-%E5%AE%89%E8%A3%85flutter" target="_blank" rel="noopener noreferrer">https://book.flutterchina.club/chapter1/install_flutter.html#_1-3-1-安装flutter<ExternalLinkIcon/></a></li>
<li><a href="https://doc.flutterchina.club/get-started/install/" target="_blank" rel="noopener noreferrer">https://doc.flutterchina.club/get-started/install/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_2-2、常用命令" tabindex="-1"><a class="header-anchor" href="#_2-2、常用命令" aria-hidden="true">#</a> 2.2、常用命令</h2>
<ul>
<li>查询环境配置：flutter doctor</li>
<li>获取模拟器：flutter emulators</li>
<li>启动模拟器：flutter emulators --launch 模拟器名</li>
<li>获取所有真机设备列表：flutter devices</li>
<li>运行在所有设备：flutter run -d all</li>
<li>运行在指定设备：<code v-pre>flutter run -d &lt;device Id&gt;</code></li>
<li>打包apk：flutter build apk</li>
<li>打包ipa：flutter build ios</li>
<li>打包exe：flutter build windows</li>
<li>打包pkg：flutter build mac</li>
<li>拉取flutter项目中的第三方包，不包括flutter的sdk：flutter packages get</li>
<li>更新flutter项目所有依赖包，不包括flutter sdk：flutter packages upgrade</li>
<li>配置打包信息：flutter config -x</li>
<li>查看flutter sdk的所有分支：flutter channel</li>
<li>切换sdk分支：flutter channel stable</li>
<li>分析代码：flutter analyze</li>
<li>获取flutter所有命令: flutter</li>
<li>查看命令的帮助信息: flutter help</li>
<li>查看Flutter版本: flutter --version</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">常用命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">--version</td>
<td style="text-align:center">查看Flutter版本</td>
</tr>
<tr>
<td style="text-align:center">-h或者--help</td>
<td style="text-align:center">打印所有命令行用法信息</td>
</tr>
<tr>
<td style="text-align:center">analyze</td>
<td style="text-align:center">分析项目的Dart代码</td>
</tr>
<tr>
<td style="text-align:center">build</td>
<td style="text-align:center">Flutter构建命令</td>
</tr>
<tr>
<td style="text-align:center">channel</td>
<td style="text-align:center">列表或开关Flutter通道</td>
</tr>
<tr>
<td style="text-align:center">clean</td>
<td style="text-align:center">删除构建/目录</td>
</tr>
<tr>
<td style="text-align:center">config</td>
<td style="text-align:center">配置Flutter</td>
</tr>
<tr>
<td style="text-align:center">create</td>
<td style="text-align:center">创建一个新的Flutter项目</td>
</tr>
<tr>
<td style="text-align:center">devices</td>
<td style="text-align:center">列出所有连接的设备</td>
</tr>
<tr>
<td style="text-align:center">doctor</td>
<td style="text-align:center">展示有关安装工具的信息</td>
</tr>
<tr>
<td style="text-align:center">drive</td>
<td style="text-align:center">为当前项目运行Flutter驱动程序测试</td>
</tr>
<tr>
<td style="text-align:center">format</td>
<td style="text-align:center">格式一个或多个Dart文件</td>
</tr>
<tr>
<td style="text-align:center">fuchsia_reload</td>
<td style="text-align:center">在Fuchsia上进行热重载</td>
</tr>
<tr>
<td style="text-align:center">help</td>
<td style="text-align:center">显示Flutter帮助信息</td>
</tr>
<tr>
<td style="text-align:center">install</td>
<td style="text-align:center">在附加设备上安装Flutter应用程序</td>
</tr>
<tr>
<td style="text-align:center">logs</td>
<td style="text-align:center">显示用于运行Flutter应用程序的日志输出</td>
</tr>
<tr>
<td style="text-align:center">packages</td>
<td style="text-align:center">用于管理Flutter包</td>
</tr>
<tr>
<td style="text-align:center">precache</td>
<td style="text-align:center">填充Flutter工具的二进制工件缓存</td>
</tr>
<tr>
<td style="text-align:center">run</td>
<td style="text-align:center">在附加设备上运行Flutter应用程序</td>
</tr>
<tr>
<td style="text-align:center">screenshot</td>
<td style="text-align:center">从一个连接的设备截图</td>
</tr>
<tr>
<td style="text-align:center">stop</td>
<td style="text-align:center">停止在附加设备上的Flutter应用</td>
</tr>
<tr>
<td style="text-align:center">test</td>
<td style="text-align:center">对当前项目的Flutter单元测试</td>
</tr>
<tr>
<td style="text-align:center">trace</td>
<td style="text-align:center">开始并停止跟踪运行的Flutter应用程序</td>
</tr>
<tr>
<td style="text-align:center">upgrade</td>
<td style="text-align:center">升级Flutter副本</td>
</tr>
</tbody>
</table>
<h1 id="_3、android-studio开发flutter实用技巧" tabindex="-1"><a class="header-anchor" href="#_3、android-studio开发flutter实用技巧" aria-hidden="true">#</a> 3、Android Studio开发Flutter实用技巧</h1>
<blockquote>
<p>初次使用AS的小伙伴可以看下Flutter官方的这篇<a href="https://flutter.cn/docs/development/tools/android-studio" target="_blank" rel="noopener noreferrer">在 Android Studio 或 IntelliJ 里开发 Flutter 应用<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_3-1-快捷键" tabindex="-1"><a class="header-anchor" href="#_3-1-快捷键" aria-hidden="true">#</a> 3.1 快捷键</h2>
<p><strong>以Android Studio + Mac为例：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- 快速创建Widget：在dart文件中输入stf或stl出现提示后按回车即可  
- 快速修复：command + .  
- 自动生成构造函数：选中 final 参数，快捷键：option + 回车  
- 添加父组件、变为子组件、删除子组件：option+回车  
- 万能的搜索：双击shift  
- 查看最近打开的文件：command + E  
- 重命名：fn+shift+f6  
- 查看当前类结构：command + fn + f12  
- 查看源码：将光标放到要查看源码的类名或方法名上，长按command 然后的点击  
- 查看类的子类：选中要查看的类，然后：command + B 或 option + command + B  
- 将代码更新到模拟器上：选中模拟器然后 command + R  
- 导入类的快捷键：将光标放在要导入类的上面，然后按 option + enter  
- 前进后退：当跟踪代码的时候，经常跳转到其他类，后退快捷键：option+command+方向左键，前进快捷键：option+command+方向右键  
- 全局搜索：command + shift + F  
- 全局替换：command + shift + R  
- 查找引用： option + shift + F7  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>以上快捷键是 Android Studio 的macOS的keymap，如果是Windows系统，将command 换成Ctrl，option 换成 Alt即可。</p>
</blockquote>
<p>更多快捷键可参考：<a href="https://developer.android.com/studio/intro/keyboard-shortcuts?hl=zh-CN" target="_blank" rel="noopener noreferrer">keyboard-shortcuts<ExternalLinkIcon/></a></p>
<h2 id="_3-2-自动补全" tabindex="-1"><a class="header-anchor" href="#_3-2-自动补全" aria-hidden="true">#</a> 3.2 自动补全</h2>
<blockquote>
<p>通过自动补全功能能够让开发效率提升不少，那么如何使用自动补全功能呢？</p>
</blockquote>
<p>可以在Android Studio的Plugin中搜索<code v-pre>Flutter Snippets</code>这个插件然后进行安装：</p>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622132735043.png" alt="image-20220622132735043" loading="lazy"></p>
<p>有了这个插件后，Android Studio 可以帮你自动补全主流widget 的代码。以下是触发自动补全各种widget 的缩写：</p>
<ul>
<li>stful: 创建一个有状态的 Widget</li>
<li>stless：创建一个无状态的Widget</li>
<li>column：创建一个Column Widget</li>
<li>container：创建一个Container Widget</li>
<li>row：创建一个Row Widget</li>
<li>showDialog：创建一个AlertDialog</li>
</ul>
<p>更多自动补全快捷键可查阅：<a href="https://github.com/georgeherby/flutter-snippets/blob/master/README.md" target="_blank" rel="noopener noreferrer">flutter-snippets<ExternalLinkIcon/></a>。</p>
<h2 id="_3-3-代码自动格式化" tabindex="-1"><a class="header-anchor" href="#_3-3-代码自动格式化" aria-hidden="true">#</a> 3.3 代码自动格式化</h2>
<p>虽然我们可以通过快捷键<code v-pre>option(alt)+command(ctrl)+L</code>来在提交代码是格式化，但是这种手动的方式显然不够效率。</p>
<p>可以借助AS的保存时代码自动格式化功能来释放我们的双手：</p>
<p>在 Settings &gt; Language &amp; Frameworks &gt; Flutter 中勾选 &quot;Format Code on Save&quot;这个选项：</p>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622131711130.png" alt="image-20220622131711130" loading="lazy"></p>
<p>另外建议勾选<code v-pre>Organize imports on save</code>这个选项，它会帮你移除没有使用的导入。</p>
<h2 id="_3-4-提取flutter代码" tabindex="-1"><a class="header-anchor" href="#_3-4-提取flutter代码" aria-hidden="true">#</a> 3.4 提取Flutter代码</h2>
<p>Flutter最让人头疼的一点是的布局的嵌套，对于复杂的布局如果不进行任何重构的情况下会嵌套的非常深，从而降低代码的可读性不利于后期的维护。</p>
<p>推荐的做法是将复杂的布局提取成一个函数或者一个组件，这里分享一个提取Flutter代码的技巧：</p>
<p>选中一个比较复杂的widget，鼠标右键单击，选择 Refactor &gt; Extract Method ，然后给这个方法取一个名字，AS 可以自动把这块代码抽离出一个<code v-pre>Method</code>，并为它添加对于对应的参数：</p>
<p><img src="https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622131925784.png" alt="image-20220622131925784" loading="lazy"></p>
<blockquote>
<p>除此之外，我们还可以借助AS来将符合条件的代码块提取成一个Widget，只需要在Refactor中选择 <strong>Extract Flutter Widget</strong>即可。</p>
</blockquote>
</div></template>

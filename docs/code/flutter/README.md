---
title: Flutter
icon: dart
index: true
category:
  - flutter
---

## 1.1、跨平台开发对比

- **Web 容器 ：Cordova  Ionic**

![Cordova  ionic](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Cordova%20%20ionic.png)

- **泛 Web 容器: React Native**

![React Native](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/ReactNative.png)

- **自绘引擎：Flutter**

![JIT](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/JIT.png)

> **自己去了解一下：AOT和 JIT**

![方案对比](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94.png)


## 1.2、Flutter介绍

> Flutter 是 Google 推出并开源的移动应用开发UI框架，主打跨平台、高保真、高性能。开发者可以通过 Dart 语言开发 App，一套代码同时运行在多个平台。 Flutter 提供了丰富的组件、接口，开发者可以很快地为 Flutter 添加 Native 扩展。

![Flutter介绍](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Flutter%E4%BB%8B%E7%BB%8D.png)

**Flutter架构分层**

![Flutter架构分层](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/Flutter%E6%9E%B6%E6%9E%84%E5%88%86%E5%B1%82.png)

# 2、Flutter环境

##  2.1、环境搭建

参考：

- https://book.flutterchina.club/chapter1/install_flutter.html#_1-3-1-%E5%AE%89%E8%A3%85flutter
- https://doc.flutterchina.club/get-started/install/

## 2.2、常用命令

- 查询环境配置：flutter doctor
- 获取模拟器：flutter emulators
- 启动模拟器：flutter emulators --launch 模拟器名
- 获取所有真机设备列表：flutter devices
- 运行在所有设备：flutter run -d all
- 运行在指定设备：`flutter run -d <device Id>`
- 打包apk：flutter build apk
- 打包ipa：flutter build ios
- 打包exe：flutter build windows
- 打包pkg：flutter build mac
- 拉取flutter项目中的第三方包，不包括flutter的sdk：flutter packages get
- 更新flutter项目所有依赖包，不包括flutter sdk：flutter packages upgrade
- 配置打包信息：flutter config -x
- 查看flutter sdk的所有分支：flutter channel
- 切换sdk分支：flutter channel stable
- 分析代码：flutter analyze
- 获取flutter所有命令: flutter
- 查看命令的帮助信息: flutter help
- 查看Flutter版本: flutter --version


|    常用命令    |                 说明                  |
| :------------: | :-----------------------------------: |
|   --version    |            查看Flutter版本            |
|  -h或者--help  |        打印所有命令行用法信息         |
|    analyze     |          分析项目的Dart代码           |
|     build      |            Flutter构建命令            |
|    channel     |         列表或开关Flutter通道         |
|     clean      |             删除构建/目录             |
|     config     |              配置Flutter              |
|     create     |        创建一个新的Flutter项目        |
|    devices     |          列出所有连接的设备           |
|     doctor     |        展示有关安装工具的信息         |
|     drive      |   为当前项目运行Flutter驱动程序测试   |
|     format     |        格式一个或多个Dart文件         |
| fuchsia_reload |         在Fuchsia上进行热重载         |
|      help      |          显示Flutter帮助信息          |
|    install     |    在附加设备上安装Flutter应用程序    |
|      logs      | 显示用于运行Flutter应用程序的日志输出 |
|    packages    |           用于管理Flutter包           |
|    precache    |    填充Flutter工具的二进制工件缓存    |
|      run       |    在附加设备上运行Flutter应用程序    |
|   screenshot   |         从一个连接的设备截图          |
|      stop      |     停止在附加设备上的Flutter应用     |
|      test      |      对当前项目的Flutter单元测试      |
|     trace      |  开始并停止跟踪运行的Flutter应用程序  |
|    upgrade     |            升级Flutter副本            |




# 3、Android Studio开发Flutter实用技巧

> 初次使用AS的小伙伴可以看下Flutter官方的这篇[在 Android Studio 或 IntelliJ 里开发 Flutter 应用](https://flutter.cn/docs/development/tools/android-studio)

## 3.1 快捷键

**以Android Studio + Mac为例：**

```
- 快速创建Widget：在dart文件中输入stf或stl出现提示后按回车即可  
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
```

> 以上快捷键是 Android Studio 的macOS的keymap，如果是Windows系统，将command 换成Ctrl，option 换成 Alt即可。

更多快捷键可参考：[keyboard-shortcuts](https://developer.android.com/studio/intro/keyboard-shortcuts?hl=zh-CN)

## 3.2 自动补全

> 通过自动补全功能能够让开发效率提升不少，那么如何使用自动补全功能呢？

可以在Android Studio的Plugin中搜索`Flutter Snippets`这个插件然后进行安装：

![image-20220622132735043](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622132735043.png)

有了这个插件后，Android Studio 可以帮你自动补全主流widget 的代码。以下是触发自动补全各种widget 的缩写：

- stful: 创建一个有状态的 Widget
- stless：创建一个无状态的Widget
- column：创建一个Column Widget
- container：创建一个Container Widget
- row：创建一个Row Widget
- showDialog：创建一个AlertDialog

更多自动补全快捷键可查阅：[flutter-snippets](https://github.com/georgeherby/flutter-snippets/blob/master/README.md)。

## 3.3 代码自动格式化

虽然我们可以通过快捷键`option(alt)+command(ctrl)+L`来在提交代码是格式化，但是这种手动的方式显然不够效率。

可以借助AS的保存时代码自动格式化功能来释放我们的双手：

在 Settings > Language & Frameworks > Flutter 中勾选 "Format Code on Save"这个选项：

![image-20220622131711130](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622131711130.png)

另外建议勾选`Organize imports on save`这个选项，它会帮你移除没有使用的导入。



## 3.4 提取Flutter代码

Flutter最让人头疼的一点是的布局的嵌套，对于复杂的布局如果不进行任何重构的情况下会嵌套的非常深，从而降低代码的可读性不利于后期的维护。

推荐的做法是将复杂的布局提取成一个函数或者一个组件，这里分享一个提取Flutter代码的技巧：

选中一个比较复杂的widget，鼠标右键单击，选择 Refactor > Extract Method ，然后给这个方法取一个名字，AS 可以自动把这块代码抽离出一个`Method`，并为它添加对于对应的参数：

![image-20220622131925784](https://cdn.jsdelivr.net/gh/mqxu/wiki-image@master/uPic/image-20220622131925784.png)

> 除此之外，我们还可以借助AS来将符合条件的代码块提取成一个Widget，只需要在Refactor中选择 **Extract Flutter Widget**即可。


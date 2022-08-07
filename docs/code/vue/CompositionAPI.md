---
title: Componsition API
icon: vue
date: 2022-08-07
category:
  - Vue
tag:
  - api
order: 15
---
组合式API更加关注代码的`逻辑关注点`

## 参考
- [Vue3.2单文件组件setup的语法糖总结](https://qdmana.com/2022/130/202205100242536297.html#)
- [不要再用vue2的思维写vue3了](https://juejin.cn/post/6946387745208172558)
- [composition-api-demo](https://github.com/barnett617/composition-api-demo)


## 尤雨溪的看法
[「摘至」](https://juejin.cn/post/6946387745208172558)  
compostion API在提案的时候，就有很多人持有不同意见，有反对有支持，实际上都没有错，只是大家碰到的场景不同而导致不同观点。通过阅读compostion API的RFC，找到了作者对一些问题的解答，整理了一些关键问题，内容不是完全翻译，完整内容建议查看原文。[原文地址](https://github.com/vuejs/rfcs/issues/55)
:::tip 问题一：compostion api根本没有解决任何问题，只是追逐新玩意的东西

`尤雨溪`： 不同意这个观点。Vue最开始很小，但是现在被广泛应用到不同级别复杂度的业务领域，有些可以基于option API很轻松处理，但是有些不可以。例如下面的场景：

有很多逻辑的大型组件（数百行）  
在多个组件可复用的逻辑

对于问题1，你需要把每个逻辑拆分到不同选项，例如，一段逻辑需要一些响应数据，一个计算属性，一些监听属性还有方法。你去了解这段逻辑时，需要不断上下移动阅读，虽然你知道一些属性是什么类型，但是你并不知道他具体的作用。当一个组件包含多个逻辑，情况就更糟糕了。
如果用新的API，可以将数据和逻辑组合在一起，最重要的是，你可以干净的把这些逻辑提取到一个函数，甚至一个单独的文件中。
:::

:::tip 问题二：使用新API导致逻辑分散到不同地方，违背"关注点分离"

`尤雨溪`： 这个问题和项目文件组织方式问题类似。我们很多人都同意按文件类型组织（布局放HTML，样式CSS，逻辑JS）并不是正确的方式，因为强制把相关代码分割到三个文件，只是给人一种“关注点分离”的错觉。这里的关键是“关注点”不是由文件类型定义。相反，我们大多数选择以功能或者职责来组织文件，这正是人们喜欢Vue单文件组件的原因。SFC就是按功能组织代码的方法，但讽刺的是当首次引入SFC时，许多人也是拒绝的，认为它违反了关注点分离。
:::
:::tip 问题三：新的语法让Vue失去简单性，导致"意大利面条式代码"的出现，降低项目维护性。

`尤雨溪`： 正好相反，新的API就是为了提高项目长期维护性的。  
如果我们查看任何javascript项目，都会从入口文件开始阅读，该文件的本质是你的应用启动时被隐式调用的"main"函数。如果只有一个函数入口，会导致意大利面条代码，那所有的js项目都是意大利面条代码。显然不是的，因为开发人员通过代码模块化或者较小的函数来组织代码。  

另外，我同意新的API理论上会降低代码质量的最低门槛。但是我们可以使用以往防止代码变成意大利面条的手段缓解这种情况。另一方面，新的API可以提升代码质量的最高上限，相比option api，你可以重构为质量更高的代码。而且，基于Option api 你还得解决类似mixins的问题。  

很多人认为"Vue失去简单性"，实际上只是失去组件内代码类型检查能力（就是你不知道一个变量时data、method、还是computed）。但是用新的API，实现一个类型检测器也是非常容易实现以前的特性的。也就是说，你不应该被option api限制思维，而更多关注逻辑内聚问题。
:::
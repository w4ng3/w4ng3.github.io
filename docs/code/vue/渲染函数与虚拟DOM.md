---
title: 渲染函数与虚拟DOM
icon: vue
date: 2022-07-29
author: 王東
category:
  - Vue
tag:
  - 组件优化
order: 12
---
> Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。

在深入渲染函数之前，了解一些浏览器的工作原理是很重要的。
[DOM树🌲](https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91)
[虚拟DOM树](https://v3.cn.vuejs.org/guide/render-function.html#%E8%99%9A%E6%8B%9F-dom-%E6%A0%91)

## 虚拟DOM的性能到底如何？
《Vue.js设计与实现》第 4～11 页
> 总而言之，虚拟DOM更新技术的性能理论上不可能比原生JavaScript操作DOM性能要高，但在大部分情况下，菜鸡🐔很难写出绝对优化的命令式代码，而虚拟DOM能够保证程序性能的下限。

## About
### h 函数
::: details h() 参数
`h()` 函数是一个用于创建 `VNode` 的实用程序。也许可以更准确地将其命名为 `createVNode()`，但由于频繁使用和简洁，它被称为 `h()` 。它接受三个参数：
```js
// @returns {VNode}
h(
  // {String | Object | Function} tag
  // 一个 HTML 标签名、一个组件、一个异步组件、或
  // 一个函数式组件。
  //
  // 必需的。
  'div',

  // {Object} props
  // 与 attribute、prop 和事件相对应的对象。
  // 这会在模板中用到。
  //
  // 可选的。
  {
    class: ['foo', 'bar'],
    style: { color: 'red' },
    id: 'foo',
    innerHTML: '',
    onClick: foo,
    key: 'foo',
    ......
  },

  // {String | Array | Object} children
  // 子 VNodes, 使用 `h()` 构建,
  // 或使用字符串获取 "文本 VNode" 或者
  // 有插槽的对象。
  //
  // 可选的。
  [
    'Some text comes first.',
    h('h1', 'A headline'),
    h(MyComponent, {
      someProp: 'foobar'
    })
  ]
)
```
:::

### 使用 JavaScript 代替模板功能
[🔎官方文档](https://v3.cn.vuejs.org/guide/render-function.html#%E4%BD%BF%E7%94%A8-javascript-%E4%BB%A3%E6%9B%BF%E6%A8%A1%E6%9D%BF%E5%8A%9F%E8%83%BD)

## Demo 锚点标题.js
![锚点标题]( https://oss.w2gd.top/blog/render.gif)
::: code-tabs#language
@tab AnchoredHeading.js
```js
import { ref, h, defineComponent } from "vue";
// 引入样式文件 
import "../style/h.scss";
/** 递归地从子节点获取文本 */
function getChildrenTextContent(children) {
  return children
    .map((node) => {
      return typeof node.children === "string"
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : "";
    })
    .join("");
}
export default defineComponent({
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    // 从 children 的文本内容中创建短横线分隔 (kebab-case) id。
    const headingId = getChildrenTextContent(slots.default());
    // .toLowerCase()
    // .replace(/\W+/g, "-") // 用短横线替换非单词字符
    // .replace(/(^-|-$)/g, ""); // 删除前后短横线

    return () =>
      h("h" + props.level, [
        h(
          "a",
          {
            name: headingId,
            href: "#" + headingId,
            class: "yellow",
          },
          slots.default()
        ),
      ]);
  },
});
```
@tab h.scss
```scss
@each $header, $size in (h1: 5rem, h2: 4em, h3: 3em, h4: 2rem, h5: 1rem) {
  #{$header} {
    font-size: $size;
    line-height: 30px;
  }
}

.yellow {
  color: yellowgreen;
}
```
@tab RenderView.vue
```vue
<template>
  <AnchoredHeading :level="1">如果在冬夜</AnchoredHeading>
  <AnchoredHeading :level="2">一个旅人</AnchoredHeading>
  <AnchoredHeading :level="3">走在马尔堡市郊外</AnchoredHeading>
  <AnchoredHeading :level="4">从陡壁的悬崖上探出身躯</AnchoredHeading>
  <AnchoredHeading :level="5">向着黑黢黢的下边观看</AnchoredHeading>
</template>
<script setup>
import AnchoredHeading from '../components/AnchoredHeading.js';
</script>
```
:::

## Demo 在setup surge 里使用
<script setup>
  import RenderComp from '@MyComponent/RenderComp.vue'
</script>
<RenderComp />

```vue
<script setup>
import { ref, h } from 'vue'

const msg = ref('Hello World!')
const dynode = () => h('div', msg.value);

</script>

<template>
  <dynode />
  <input v-model="msg">
</template>
```
## 使用JSX
移步另一篇：[在Vue中使用JSX语法](./%E5%9C%A8Vue%E4%B8%AD%E4%BD%BF%E7%94%A8JSX%E8%AF%AD%E6%B3%95.md)
## 参考
- [Vue.js官网——渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- [Vue.js官网——setup里使用渲染函数](https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E4%BD%BF%E7%94%A8%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0)
- [对虚拟DOM和Dom-Diff的理解？](https://segmentfault.com/a/1190000022277663)
- [vue中render函数的作用是什么](https://www.yisu.com/zixun/154392.html)
- [记一个Vue渲染函数render的使用场景](https://juejin.cn/post/6949829240330125325)
- [为什么 Vue3 的组件库都在使用 jsx/tsx？](https://www.zhihu.com/question/436260027/answer/1647182157)
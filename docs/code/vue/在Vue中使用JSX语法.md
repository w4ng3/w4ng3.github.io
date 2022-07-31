---
title: 在Vue中使用JSX语法
icon: vue
date: 2022-07-30
author: 王東
category:
  - Vue
tag:
  - 吃饱撑的
order: 13
---
渲染函数在代码易读性上比模版差很多，代码写起来很痛苦，
这就是为什么会有一个 <a href="https://github.com/vuejs/babel-plugin-jsx">Babel</a> 插件，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。
> naive-ui组件库的源码就是使用tsx写的

## 对比 template 和 jsx/tsx 的优缺点
来源：[为什么 Vue3 的组件库都在使用 jsx/tsx？ - 阿崔cxr的回答 - 知乎 ](https://www.zhihu.com/question/436260027/answer/1661092534)
::: info template：
<span class="pink">优点：</span>可读性高  

基于 dom 结构，很容易就可以看清楚代码要表达的意图（当然，写的一窝粥的除外)  
通过 vue 的指令和语法，一眼就能确定逻辑在哪里

<span class="blh">缺点：</span>不够灵活

也是一直被大家吐槽的点，过于笨重
SFC 享受不到 props 类型提示,受限于 SFC，组件在外部使用时 vscode 无法做出 props 的类型提示,这一点对于组件库来讲是个痛点
:::
::: tip jsx
<span class="pink">优点：</span>灵活

可以利用 js 来表达各种各样的逻辑，十分灵活
可享受 props 类型提示
如果是用 tsx 编写的组件，用户是可以享受到 props 的类型提示的

<span class="blh">缺点：</span>可读性差

这个其实也是过于灵活带来的后遗症，就是因为太灵活了，大家怎么写的都有，很容易出现坏味道  
要不就在 setup 中通过函数返回，要不就在 render 函数中实现。 
但是如果你在 setup 中直接返回的话，其实是破坏了 setup 返回对象作为 view 和 model 层的接口，而且如果是 ref 类型的响应式对象的话，你还必须使用 .value ,享受不到结构 ref 了,你会发现你的代码可读性极差。  

我更推荐在 render 中实现  
但是你调用的时候必须要加个 render(ctx), ctx 相当于是 this，还是不如在 template 中干净

```js
// setup 直接返回一个函数
const Foo = {
   setup(){
    const count = ref(0) 
    
    // 返回一个函数
    // 如果是返回一个对象的话，这个对象其实可以看做 view 和 model 之间的接口层，但是返回一个函数的话，就破坏了
    // 必须对 ref 类型的响应式对象使用 .value
    return ()=>{
      <div>{count.value}</div>
    }
   }
}
```
```js
// render 中实现
const Foo = {
   setup(){
    const count = ref(0) 
    return {count}
   },
   render(ctx){
     // 必须调用 ctx
     return <div>{ctx.count}</div>
   }
}
```
:::

## JSX简明语法
[《Vue3中使用JSX简明语法》](https://juejin.cn/post/7114063575122984973)

## Demo Vite + Vue + JSX
![demo-jsx](https://oss.w2gd.top/blog/20220731000050.png)
```
pnpm add @vitejs/plugin-vue-jsx
```
::: code-tabs#language
@tab JsxComp.jsx
```jsx
import { defineComponent } from "vue";
import AnchoredHeading from "./AnchoredHeading";

export default defineComponent({
  render() {
    return (
      <>
        <p>月光照耀在落叶上</p>
        <h2>在墓穴的周围</h2>
        <AnchoredHeading level={1}>
          <span>一条条相互交叉</span> 的线
        </AnchoredHeading>
      </>
    );
  },
});

```
@tab Hello.vue
```vue
<template>
  <Bar />
  <hr>
  <JsxComp />
</template>
<script setup>
import AnchoredHeading from '../components/AnchoredHeading';
import { h } from 'vue';
// JSX组件
import JsxComp from '../components/JsxComp'
// 原本的渲染函数组件
const Bar = () => h(AnchoredHeading, { level: 1 },
  [h('span', 'Hello'), '-world!']
)
</script>
```
@tab vite.config.js
```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ refTransform: true }), vueJsx({})],
});
```
:::

## Demo 在setup surge 中使用jsx

```vue
<template>
  <Jsxtest />
</template>
<script setup lang="jsx">
import vueSvg from '../assets/vue.svg'
const Jsxtest = (<>
  {/* 一张图片 */}
  <img src={vueSvg} alt="Vue logo" />
</>)
</script>
```
## 参考
[《Vue3中使用JSX简明语法》](https://juejin.cn/post/7114063575122984973)

[为什么 Vue3 的组件库都在使用 jsx/tsx？ - 阿崔cxr的回答 - 知乎 ](https://www.zhihu.com/question/436260027/answer/1661092534)

[github:@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

[vite官方插件](https://cn.vitejs.dev/plugins/)


<style>
  .pink {
    color: pink;
    font-weight: bolder;
  }
  .blh{
    color: #fc7930;
  }
</style>
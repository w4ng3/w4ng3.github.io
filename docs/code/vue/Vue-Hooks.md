---
title: 了解Vue中的Hooks
icon: vue
date: 2022-08-07
category:
  - Vue
tag:
  - hook
order: 16
---
<script setup>
import useMousePosition from '@Hooks/useMousePosition'
const { x, y } = useMousePosition()
</script>

:::info hook(钩子🪝)
hook本质上是一个函数，是一种编程机制  
作用是将setup函数中使用的`Composition API`(ref、reactive、computed、watch、生命周期)进行了封装，提供了一种更明确的方式来组织代码，使得代码能重用，更重要的是，它允许不同的逻辑部分进行通信、协同工作。
:::


## 一般使用

- 将可复用功能抽离为外部js文件
- 函数名文件名以`use`开头，形如useXXX
- 引用时，在setup中解构出自定义hooks的变量和方法，如: `const { name } = useXXX()`

## Hook的意义
- 提取重复逻辑，优化代码结构
- 代替Mixin
- 体现编程思想

## Demo 自定义hook函数
### 收集用户鼠标点击的页面坐标

<h2 style="color:pink">X: {{ x }} 💚 Y: {{ y }}</h2>

::: code-tabs#language
@tab useMousePosition.js
```js
// hooks/useMousePosition.js
import { ref, onMounted, onUnmounted } from 'vue'
export default () => {
  // 初始化坐标数据
  const x = ref(-1)
  const y = ref(-1)

  // 用于收集点击事件坐标的函数
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 挂载后绑定点击监听
  onMounted(() => {
    document.addEventListener('click', updatePosition)
  })

  // 卸载前解绑点击监听
  onUnmounted(() => {
    document.removeEventListener('click', updatePosition)
  })

  return { x, y }
}
```
@tab HomeView.vue
```vue
<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h2>x: {{ x }}, y: {{ y }}</h2>
</template>

<script setup>
import useMousePosition from '@/hooks/useMousePosition'
const { x, y } = useMousePosition()
</script>
```
:::

### Demo 逻辑关注点分离
> Compostion API最核心要解决的问题并不是逻辑复用，而是==逻辑关注点分离==。因为应用生命周期60%时间都是在维护的，而维护性体现在代码是否符合单一职责原则，单一职责就是把相同的业务代码内聚到一个地方。
>
> 所以你不要过于纠结代码是否需要复用，应用适当的冗余反而增加应用的维护性，《架构整洁之道》书中提到：对于大多数应用，可维护性比可重用性更加重要。

可参考另一篇的[TodoList Demo](../ts/vue%2Bts%E5%AE%9E%E7%8E%B0TodoList.md),将承载具体的业务逻辑分离到`todoAction.ts`里。

## VueUse
VueUse是vue3的一个hook库，帮我们封装了一些常用的功能。
[官网指南](https://vueuse.org/guide/)

这里也是使用了一个`VueUse`中的获取鼠标坐标的hook: `useMouse`，并且用`useTransition`给响应性变量施加过度动画。
```vue
<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h2>x: {{ Math.round(pointX) }}, y: {{ Math.round(pointY) }}</h2>
</template>

<script lang="ts" setup>
import { TransitionPresets, useTransition, useMouse } from '@vueuse/core'
const { x, y } = useMouse()
const pointX = useTransition(x, {
  duration: 2000,
  transition: TransitionPresets.easeInOutCubic
})
const pointY = useTransition(y, {
  duration: 2000,
  transition: TransitionPresets.easeInOutCubic
})
</script>
```
![demo:vue-use.gif](https://oss.w2gd.top/blog/vue-use.gif)

## 参考
- [简单理解VUE3 hook](https://zhuanlan.zhihu.com/p/462631261)
- [Vue 3 中的 Hook 特性](https://juejin.cn/post/7016955285784756255)
- [Vue3学习笔记4 自定义hooks](https://qdmana.com/2022/207/202207261252551584.html#1_hooks_5)
- [VueUse中的这5个函数，也太好用了吧](https://www.vue-js.com/topic/6114829f120d99003158dad7)
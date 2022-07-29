---
title: 内置组件 KeepAlive
icon: vue
date: 2022-07-25
author: 王東
category:
  - Vue
tag:
  - 组件优化
---
HTTP中的KeepAlive可以避免连接频繁地销毁/创建，与HTTP中的keepAlive类似，Vue.js内建的KeepAlive组件可以避免一个组件被频繁创建地销毁/重建。  
假设我们的页面中有一组`<Tab>组件`，如下面的代码所示：
```vue
<template>
  <Tab v-if="currentTab === 1"></Tab>
  <Tab v-else-if="currentTab === 2"></Tab>
  <Tab v-else></Tab>
</template>
```
可以看到，根据变量 `currentTab` 值的不同，会渲染不同的`<Tab>组件`。当用户频繁地切换 Tab时，会导致不停地卸载并重建对应的 Tab组件。为了避免因此产生的性能开销，可以使用`KeepAlive 组件`来解决这个问题，如下面的代码所示：
```vue
<template>
  <!-- 使用 KeepAlive 组件包裹-->
  <KeepAlive>
    <Tab v-if="currentTab === 1"></Tab>
    <Tab v-else-if="currentTab === 2"></Tab>
    <Tab v-else></Tab>
  </KeepAlive>
</template>
```
这样，无论用户怎样切换Tab组件，都不会发生频繁的创建和销毀，因而会极大地优化对用户操作的响应，尤其是在大组件场景下，优势会更加明显。那么，KeepAlive 组件的实现原理是怎样的呢？其实 KeepAlive 的本质是缓存管理，再加上特殊的挂载/卸载逻辑。

首先，KeepAlive 组件的实现需要渲染器层面的支持。这是因为被 KeepAlive 的组件在卸载时，我们不能真的将其卸载，否则就无法维持组件的当前状态了。正确的做法是，将被 KeepAlive 的组件从原容器搬运到另外一个隐藏的容器中，实现“假卸载”。当被搬运到隐藏容器中的组件需要再次被 “挂载”时，我们也不能执行真正的挂载逻辑，而应该把该组件从隐藏容器中再搬运到原容器。这个过程对应到组件的生命周期，其实就是 `activated` 和 `deactivated`。
> 所以，如果被 KeepAlive 包裹的组件若要重新发起网络请求，需要写入 activated 周期里


## Props：
- `include` - `string | RegExp | Array`。只有名称匹配的组件会被缓存。
- `exclude` - `string | RegExp | Array`。任何名称匹配的组件都不会被缓存。
- `max` - `number | string`。最多可以缓存多少组件实例。
```vue
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- regex (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- Array (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```
最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
```vue
<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```
:::warning
`<keep-alive>` 是用在其一个直属的子组件被切换的情形。如果你在其中有`v-for` 则不会工作。如果有上述的多个条件性的子元素，`<keep-alive>` 要求同时只有一个子元素被渲染。
:::
## Demo Tab切换
实现效果：在 keepalive 包裹的输入框组件输入字符，切换到其他tab，返回，输入内容还在。  
令`v-if`达到`v-show`的效果
:::center
![keepalive-tab切换](https://oss.w2gd.top/blog/keepalive.gif)
:::

```vue
<template>
  <n-tabs type="line" @update:value="handleUpdateValue">
    <n-tab name="0">
      寂寞围绕着电视
    </n-tab>
    <n-tab name="1">
      垂死坚持
    </n-tab>
    <n-tab name="2">
      在两点半消失
    </n-tab>
  </n-tabs>
  <keep-alive>
    <n-input type="textarea" v-if="tabIndex == 0" placeholder="KeepAlive" />
  </keep-alive>
  <NButton type="primary" v-if="tabIndex == 1">KeepAlive</NButton>
  <n-input type="textarea" v-if="tabIndex == 2" placeholder="NoKeep" />
</template>
<script setup>
import { NTabs, NTab, NInput } from 'naive-ui';
import { ref } from 'vue';
const tabIndex = ref(0)
const handleUpdateValue = (value) => {
  console.log(value);
  tabIndex.value = value
}
</script>
```

## Demo 回退页面不刷新
实现效果：切换路由，保证回退的时候不刷新页面，类似状态保持的效果。如下动图所示，首页的异步组件只请求了一次，`/alive`的输入框内容也被缓存。
:::center
![keepalive-tab切换](https://oss.w2gd.top/blog/keepalive_route.gif)
:::

::: code-tabs#language
@tab App.vue
```vue
<template>
  <div style="margin-bottom: 20px;">
    <router-link to="/">
      <NButton type="error">home</NButton>
    </router-link>
    <router-link to="/alive">
      <NButton type="warning">Alive</NButton>
    </router-link>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView,KeepAlive" :max="10">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
```
@tab router/index.js
```js
......
const routes = [
  {
    name: "HomeView",
    path: "/",
    component: HomeView,
  },
  {
    name: "KeepAlive",
    path: "/alive",
    component: () => import("../view/KeepAlive.vue"),
  },
];
......
```
:::

## 参考
- 《Vue.js设计与实现》——霍春阳
- [Vue.js官方文档-KeepAlive](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive)
- [vue keep-alive(1)：vue router如何保证页面回退页面不刷新](https://blog.51cto.com/zhoulujun/2961743)
- [vue问题--[Vue Router warn]](https://blog.csdn.net/tjj3027/article/details/109597720)
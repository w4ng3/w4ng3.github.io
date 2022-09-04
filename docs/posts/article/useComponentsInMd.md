---
icon: edit
date: 2022-07-26
category:
  - vuepress
title: 在markdown里使用自定义Vue组件
---

<MyComponent/>

![lem](https://w2gd.oss-cn-nanjing.aliyuncs.com/up/lem.png)

## .vuepress/config.js

```js
import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  theme,
  alias: {
    // 给组件路径创建别名
    "@MyComponent": path.resolve(__dirname, "components"),
    // 替换组件：将别名定向到自己的组件
    // "@theme-hope/module/blog/components/BlogHero": path.resolve(__dirname,"components/BlogHero.vue")
  },
});

```

### MyComponent.vue
```vue
<template>
  <div class="gg">{{ content }}</div>
</template>
<script setup>
defineProps({
  content: {
    type: String,
    default: '王東的自定义组件'
  }
})
</script>
<style lang="scss" scoped>
.gg {
  color: red;
}
</style>
```

## md
```md
<MyComponent/>
<script setup>
import MyComponent from "@MyComponent/MyComponent.vue";
</script>
```


<script setup>
import MyComponent from "@MyComponent/MyComponent.vue";
</script>
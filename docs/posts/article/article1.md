---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
sticky: true
---

# 在markdown里使用自定义Vue组件

<MyComponent content="在markdown里使用自定义Vue组件"/>

## 标题 2

这里是内容。

### 标题 3

这里是内容。
<script setup>
import MyComponent from "@MyComponent";
</script>
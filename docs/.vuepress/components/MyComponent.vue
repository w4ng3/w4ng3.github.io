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
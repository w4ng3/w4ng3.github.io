<script setup>
import { ref, h } from 'vue'

const msg = ref('Hello World!')
const dynode = () => h('div', msg.value);

</script>

<template>
  <dynode />
  <input v-model="msg">
</template>
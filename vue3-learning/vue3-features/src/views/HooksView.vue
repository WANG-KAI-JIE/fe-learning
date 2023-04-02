<script setup>
import useWindowResize from '../hooks/useWindowResize.js';
import { ref } from 'vue'
const { width, height } = useWindowResize();
const redColor = ref('red')
</script>

<template>
  <h3>屏幕尺寸（style v-bind CSS变量注入）</h3>
  <div>宽度：{{ width }}</div>
  <div>高度：{{ height }}</div>
</template>

<style scoped>
h3 {
    /* 使用 v-bind 绑定组件中定义的变量 */
    color: v-bind('redColor');
}

</style>
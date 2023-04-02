<script setup>
import { ref, reactive } from 'vue';

const title = ref('Vue 3 学习')

const project = reactive({
  name: 'Vue.js',
  author: {
    name: 'Evan You',
    age: 36
  },
})
</script>

<template>
  <h2>{{ title }}</h2>
  <h3>项目名称：{{ project.name }}</h3>
  <p>作者：{{ project.author.name }}</p>
  <p>年龄：{{ project.author.age }}</p>
</template>

<style scoped>

</style>
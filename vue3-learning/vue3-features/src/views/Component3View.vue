<script setup>
import { ref, provide } from 'vue';

import InjectProvider from '../components/InjectProvider.vue';

const msg = ref('hello world')

provide('msg', msg)

</script>

<template>
  <div>
    <InjectProvider></InjectProvider>
  </div>
</template>

<style scoped>
</style>
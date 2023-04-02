<script setup>
import { ref, computed } from 'vue';
const count = ref(10)

// 推导得到的类型：ComputedRef<number>
const result = computed(() => count.value * count.value)

</script>

<template>
  <div>
    <h2>count 的平方：{{ result }}</h2>
  </div>
</template>
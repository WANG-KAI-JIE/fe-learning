// src/components/TodoFilter.vue
<script setup lang="ts">
import { ref } from 'vue';
 
const filters = [
  {label: "全部", value: "all"},
  {label: "已完成", value: "done"},
  {label: "未完成", value: "todo"},
]
 
const props = defineProps<{
  selected: string
}>()
 
</script>
 
<template>
 <div class="filters">
    <span 
    v-for="filter in filters"
    :key="filter.value"
    class="filter"
    :class="{active: selected === filter.value}"
     @click="$emit('change-filter', filter.value)"
    >{{filter.label}}
    </span>
</div>
</template>
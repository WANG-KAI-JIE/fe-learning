// src/components/TodoListItem.vue
 
<script setup>
import { Todo } from "../composables/iTodo"
// 接收父组件 todo-item 的数据
const props = defineProps=>{todoItem: Todo}
 
</script>
 
// src/components/TodoListItem.vue
<template>
<!-- :class 动态添加done这个class -->
<div class="todo-item" :class="{done: todoItem.completed}">
 
<label>
    <!-- :checked 动态改变input是否可点击的状态 -->
    <input
     type="checkbox" 
    :checked="todoItem.completed"
    @click="$emit('change-state', $event)"
    />
     {{ todoItem.content }}
    <span class="check-button"></span>
</label>
</div>
</template>
 
<style>
  
  .todo-item.done label {
  /* 划线 */
  text-decoration: line-through;
  /* 斜体 */
  font-style: italic;
}
</style>
<script setup lang="ts">
import TodoListItem from './TodoListItem.vue';
import {Todo} from '../composables/iTodo'
 
const props = defineProps<{todos: Array<Todo>}>()
 
</script>
 
// src/components/TodoList.vue
<template>
<div class="todo-list">
    <TodoListItem 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo-item="todo"
    @change-state="todo.completed = $event.target.checked"
    >
    </TodoListItem>
</div>
</template>
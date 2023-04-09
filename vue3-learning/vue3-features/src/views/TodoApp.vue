<script setup lang="ts">
import {reactive , ref, computed, Ref} from "vue"
const todos = reactive<Array<Todo>>([])
const addTodo = (todo: any) => todos.push(todo)
 
 
const filter = ref<string>("all");
// 过滤
const filteredTodos = computed(() => {
  switch(filter.value) {
    case "done":
      return todos.filter((todo) => todo.completed);
    case "todo":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
})
</script>
 
<template>
<div class="main">
<div class="container">
    <h1>欢迎使用Todo List</h1>
    
    <TodoAdd :tid="todos.length" @add-todo="addTodo"/>
    <TodoFilter 
    :selected="filter"
     @change-filter="filter=$event"
     />
    <TodoList :todos="filteredTodos"/>
  </div>
</div>
  
</template>
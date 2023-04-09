<script setup lang="ts">
import {reactive , ref, computed, Ref} from "vue"
import TodoAdd from "../components/TodoAdd.vue"
import TodoFilter from "../components/TodoFilter.vue";
import TodoList from "../components/TodoList.vue"
import useTodos from "../composables/useTodos"
import useFilteredTodos from "../composables/useFilteredTodos"
import {Todo} from '../composables/iTodo'
 
const {todos , addTodo} = useTodos();
const {filter, filteredTodos} = useFilteredTodos(todos);
 
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
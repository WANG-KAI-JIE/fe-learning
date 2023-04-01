<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  
    <div class="wrapper">
      <nav>
        <RouterLink to="/reactive">响应式</RouterLink>
        <RouterLink to="/component">父子组件</RouterLink>
        <RouterLink to="/play">玩一玩</RouterLink>
        <RouterLink to="/time">时间</RouterLink>
        <RouterLink to="/css">样式切换</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


header {
  height: 70px;
  line-height: 70px;
  background-color: #b8d7f3;
}

main {
  width: 85%;
  margin: 10px auto;
  border: 1px solid #ccc;
  min-height: 70vh;
  border-radius: 4px;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #1ea6e6;
}
</style>

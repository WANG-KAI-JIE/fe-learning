<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  
    <div class="wrapper">
      <nav>
        <RouterLink to="/vue2">Vue2</RouterLink>
        <RouterLink to="/reactive">ref 和 reactive</RouterLink>
        <RouterLink to="/toref">toRef</RouterLink>
        <RouterLink to="/torefs">toRefs</RouterLink>
        <RouterLink to="/toraw">toRaw</RouterLink>
        <RouterLink to="/computed">computed</RouterLink>
        <RouterLink to="/watch">watch</RouterLink>
        <RouterLink to="/component">component</RouterLink>
        <RouterLink to="/component2">component2</RouterLink>
        <RouterLink to="/component3">component3</RouterLink>
        <RouterLink to="/component4">component4</RouterLink>
        <RouterLink to="/directive">自定义指令</RouterLink>
        <RouterLink to="/hooks">hooks</RouterLink>
        <RouterLink to="/find">发现</RouterLink>
        <RouterLink to="/play">玩一玩</RouterLink>
        <RouterLink to="/time">时间</RouterLink>
        <RouterLink to="/css">样式切换</RouterLink>
        <RouterLink to="/show">作业展示</RouterLink>
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
  width: 100%;
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

@media (max-width: 1964px) {
  header {
    height: 120px;
    line-height: 70px;
    background-color: #b8d7f3;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
  width: 100%;
  height: 30%;
  font-size: 4px;
  text-align: center;
  }

  nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  }
  
}

@media (max-width: 1200px) {
  header {
    height: 200px;
    line-height: 70px;
    background-color: #b8d7f3;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 3);
  }

  nav {
  width: 100%;
  height: 30%;
  font-size: 4px;
  text-align: center;
  }

  nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  }
  
}


@media (max-width: 800px) {
  header {
    height: 350px;
    line-height: 70px;
    background-color: #b8d7f3;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 4);
  }

  nav {
  width: 100%;
  height: 30%;
  font-size: 4px;
  text-align: center;
  }

  nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  }
  
}

</style>

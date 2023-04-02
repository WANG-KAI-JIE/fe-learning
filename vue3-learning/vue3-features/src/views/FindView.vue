<script setup>
import SlotComp from '../components/SlotComp.vue';
</script>

<template>
  <div>
    <SlotComp>
      <template v-slot:header>
        <ul class="nav">
          <li class="active">发现</li>
          <li>消息</li>
          <li>我的</li>
        </ul>
      </template>

      <template v-slot:main>
        <img src="https://i2.100024.xyz/2023/01/26/3krz9l.webp" class="img">
      </template>

      <template v-slot:footer>
        <h3>版权所有</h3>
      </template>
    </SlotComp>
      
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
}

.nav li {
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  background-color: #086b6e;
  color: #f6f6f6;
  padding: 0 50px;
  cursor: pointer;
  margin: 0 20px;
}

.img {
  width: 100%;
  height: 100%;
}
</style>
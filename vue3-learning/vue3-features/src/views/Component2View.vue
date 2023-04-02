<script setup>
import { ref } from 'vue';
import UserInfo from '../components/UserInfo.vue';

// 子组件 ref
const userInfoRef = ref()

const getName = () => {
  // 获取子组件 name
  console.log(userInfoRef.value.name)
  // 执行子组件方法
  userInfoRef.value.changeName()
  // 获取修改后的 name
  console.log(userInfoRef.value.name)
}
</script>

<template>
  <div>
    <UserInfo ref="userInfoRef"></UserInfo>
    <button @click="getName">获取子组件中的数据</button>
  </div>
</template>

<style scoped>
button{
    padding: 8px 25px;
    border: none;
    outline: none;
    background-color: #53a2d7;
    color: #fff;
    border-radius: 4px;
    margin-right: 10px;
    }
</style>
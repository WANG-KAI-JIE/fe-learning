<script setup>
import { inject, ref } from 'vue'

const msg = inject('msg', ref('hello world'))

const onChangeMsg = () => {
  msg.value = '你好，Vue3'
}
</script>

<template>
  <div>
    <p>msg：{{ msg }}</p>
    <button @click="onChangeMsg">改变 msg</button>
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
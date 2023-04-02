<template>
    <div>
        <p>main.js 实现一个激活文本框自定义指令，全局挂载。第二个文本框激活</p>
      <input type="text" placeholder="input">
      <input type="text" placeholder="input" v-focus>
      <input type="text" placeholder="input">
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  p {
    background-color:gainsboro;
    color: purple;
  }
  input {
    display: block;
    margin: 20px;
    width: 300px;
    height: 35px;
  }
  </style>
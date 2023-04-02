<script setup>
import { toRef, reactive } from 'vue'

// 把 obj 用 reactive 包裹，再使用 toRef，点击按钮时，可以看到视图和数据都变了
const obj = reactive({
  name: '张三',
  age: 18
})

const name = toRef(obj, 'name')
const age = toRef(obj, 'age')

const changeObj = () => {
  name.value = '李四'
  age.value++
  console.log('obj:', JSON.stringify(obj), 'name:', name.value, 'age:', age.value);
}

</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="changeObj">按钮</button>
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
}
</style>
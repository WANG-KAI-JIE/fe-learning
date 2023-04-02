<script  setup>
import { ref } from 'vue'

const name = ref('张三')
const changeName = () => {
  name.value = '张三丰'
}
// 将方法、变量暴露给父组件使用，父组件才可通过 ref API 拿到子组件暴露的数据
defineExpose({
  name,
  changeName
})
</script>

<template>
  <p>{{ name }}</p>
</template>
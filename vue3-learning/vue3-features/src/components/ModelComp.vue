<script setup>
defineProps({
  author: String,
  msg: String
})

const emit = defineEmits(['update-author', 'update-msg'])

const onChange = () => {
  // 触发父组件的值更新
  emit('update-author', '尤雨溪')
  emit('update-msg', 'Vue 3 中的 model 升级了')
}
</script>

<template>
  <div>
    <h3>{{ author }}</h3>
    <h3>{{ msg }}</h3>
    <button @click="onChange">改变</button>
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
<script setup>
import { reactive, toRefs } from 'vue'

const project = reactive({
  projName: 'Vue.js',
  projAuthor: '尤雨溪'
})

let { projName, projAuthor } = toRefs(project)

const changeProject = () => {
  projName.value = 'Vue3.js'
  projAuthor.value = 'Evan You'
  console.log('project:', JSON.stringify(project), 'projName:', projName.value, 'projAuthor:', projAuthor.value);
}

</script>

<template>
  <div>
    <h2>{{ projName }}</h2>
    <p>{{ projAuthor }}</p>
    <button @click="changeProject">改变</button>
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
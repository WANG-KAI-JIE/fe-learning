<script setup>
import { ref } from 'vue';
import ModelComp from '../components/ModelComp.vue';

const author = ref('张三')
const msg = ref('hello Vue3')

const onUpdateAuthor = (val) => {
  author.value = val
}

const onUpdateMsg = (val) => {
  msg.value = val
}
</script>

<template>
  <div>
    <!-- 绑定多个 v-model -->
    <ModelComp v-model:author="author" 
      v-model:msg="msg" 
      @update-author="onUpdateAuthor" 
      @update-msg="onUpdateMsg">
    </ModelComp>
  </div>
</template>

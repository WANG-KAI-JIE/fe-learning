<!-- 父组件传参 -->
<script setup>
import { ref, reactive, toRaw } from 'vue';
import ChildComp from '../components/ChildComponent.vue';

const msg = ref('你好')
const list = reactive([1, 2, 3])

const changeMsg = (str) => {
  msg.value = str
}

const changeList = (arr) => {
  list.splice(0, list.length, ...arr)
}

</script>

<template>
  <div>
    <ChildComp :msg="msg" :list="list" @change-msg="changeMsg" @change-list="changeList">
    </ChildComp>
  </div>
</template>

<style scoped></style>
<script setup>
import { reactive } from 'vue';

defineProps({
    msg: String,
    list: Array,
})

const emits = defineEmits(['change-msg','change-list'])

const onchangeMsg = () => {
    emits('change-msg','hello-world！')
}

const onchangeList = () => {
    emits('change-list',[4,5,6])
}
</script>

<template>
    <div>
        <p>msg：{{ msg }}</p>
        <button @click="onchangeMsg">改msg</button>
        <p>list：{{ list }}</p>
        <button @click="onchangeList">改list</button>
    </div>
</template>



<style scoped>

</style>
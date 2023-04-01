<script setup>
import { ref, reactive} from 'vue';
import ChildComponent from '../components/ChildComponent.vue';


const msg = ref('你好')
const list = reactive([1,2,3])


const changeMsg = (str) => {
    msg.value = str
}

const changeList = (arr) => {
    list.splice(0,list.length,...arr)    
}

const red = ref('#f00')

const changeColor = () => {
    red.value = '#0f0'
}
</script>

<template>
    <div>
        <h2>父子组件</h2>
        <p @click="changeColor">父组件传参，自组件接受值，子组件派发事件</p>
        <ChildComponent :msg="msg" :list="list" @change-msg="changeMsg" @change-list="changeList"></ChildComponent>
    </div>



</template>


<style scoped>
p {
    color: v-bind('red');
}
</style>
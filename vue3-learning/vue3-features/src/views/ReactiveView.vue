<!-- <script setup>
import { reactive, toRefs, watch } from 'vue'
const person = {
  author: '孙',
  age: 23
}
let { author, age } = toRefs(person)
const changValue = () => {
  age.value++
  console.log(age.value)
}

const count = ref(0)
const changCount=()=>{
    count.value ++
}
//计算属性
const add = computed(() => count.value + 2)

const str=ref('此时此刻')
const age1=ref(18)

let info=reactive({
    id:1,
    title:'2232'
})

//2秒后会改变str的值
setTimeout(()=>{
    // str.value='彼时彼刻'
    info.id=2,
    info.title='2231'
},2000);

// watch(str,newValue,oldValue)=>{
//     console.log(newValue+','+oldValue)
// }
watch(()=>info.id,(newValue,oldValue)=>{
    console.log(newValue+','+oldValue);
})

</script>

<template>
  <div>
    <h1>响应式</h1>
    <h2>作者:{{ author }}?</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="changValue">修改值</button>
  </div>
  <div>
    <h1>非响应式</h1>
  </div>
  <div>
    <h1>计算属性</h1>
    <h2>{{ add }}</h2>
    <button @click="changCount"></button>
  </div>
</template>

<style></style> -->

<script setup>
import { toRefs } from 'vue';
const person= {
  author: '肥猫啊',
  age: 66
}
let {author,age} = toRefs(person)
const change = () =>{
  author.value
  age.value++
  console.log(person)
}

</script>
<template>
  <div>
    <h1>作者：{{ author }}，年龄：{{age}}</h1>
    <button @click="change">点一点</button>
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
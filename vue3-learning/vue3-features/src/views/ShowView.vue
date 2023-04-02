<template>
    <div>firstName：{{ person.firstName }}</div>
    <div>lastName：{{ person.lastName }}</div>
    <div>姓名：{{ fullName }}</div>

    <div>
        姓名2：{{ fullName2 }}
    </div>

    <div>
       姓名3：{{ fullName3 }}
    </div>

    <div>
        <p>{{ message }}</p>
        <button @click="changeMsg">更改 message</button>
        <button @click="countAdd">加加加</button>
    </div>

</template>

<script setup>
import { reactive,computed,watchEffect, ref, watch } from 'vue';
const person = reactive({
    firstName: '安妮',
    lastName: '海瑟薇'
});
const fullName = computed(() =>{
    return `${person.firstName}·${person.lastName}`;
});
console.log('fullName',fullName);  

const fullName2 = ref('');
watch(() => {
    fullName2.value = person.firstName + '@' + person.lastName;
    console.log(fullName2.value);
})

const fullName3 = ref('');
watchEffect(() =>{
    fullName3.value = person.firstName + '+' + person.lastName;
    console.log(fullName3.value);
})

const message = ref("猜猜我是谁？");
  watch(message, (newValue, oldValue) => {
    console.log("旧的值:", oldValue);
    console.log("新的值:", newValue);
  });
  const changeMsg = () => {
    message.value = "肥猫猫";
  };


  const number = reactive({ count: 0 });
  const countAdd = () => {
    number.count++;
  };
  watchEffect(()=>{
  console.log("新的值:", number.count);
})

</script>


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
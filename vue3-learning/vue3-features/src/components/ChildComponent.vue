<!-- 子组件接受值 -->
<script setup>
defineProps({
  msg: String,
  list: Array,
})

// 通过 defineEmits 注册自定义事件 change-msg  和 change-list
const emits = defineEmits(['change-msg', 'change-list'])

// 点击按钮的时候，触发 emit 调用我们注册的事件 change-msg，同时传递参数 'hello world'
const onChangeMsg = () => {
  emits('change-msg', 'hello world')
}

const onChangeList = () => {
  emits('change-list', [4, 5, 6])
}
</script>

<template>
  <div>
    <h3>msg：{{ msg }}</h3>
    <!-- 子组件绑定了 click 事件，执行 onChangeMsg 方法  -->
    <button @click="onChangeMsg">改变 msg</button>
    <h3>list 数据</h3>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
    <!-- 子组件绑定了 click 事件，执行 onChangeList 方法  -->
    <button @click="onChangeList">改变 list</button>
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
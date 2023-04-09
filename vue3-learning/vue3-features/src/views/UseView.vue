<script setup>
import useTodoList from '@/use/useList'
import { reactive, ref } from 'vue';

import All from '../components/All.vue'
import IsFinished from '../components/IsFinished.vue'
import WaitFinished from '../components/WaitFinished.vue'
import DeleteFinished from '../components/DeleteFinished.vue'

const {todoItems,addItem,finishedCount,deleteItem,isfinished,waitfinished,all} = useTodoList()

const inputValue = ref('')

const style = reactive({
    color: '#65686a',
    fontStyle: 'italic',
    textDecoration: 'line-through',
    statusbar:'checked'
})


// 选项卡
const currentTab = ref('All')
const tabs={
    All,
    IsFinished,
    WaitFinished,
    DeleteFinished
}
</script>

<template>
    <div class="flex-1 justify-right">
        <h2>todoList</h2>
        <h3>{{ finishedCount }}/{{ todoItems.length }}</h3>
        <input type="text" placeholder="请输入待办事项，并敲回车！" v-model="inputValue" @keydown.enter="addItem(inputValue)">
        <li v-for="(item,index) in todoItems" :key="item.id" :index="index" :class="{'finished': item.finished}">
            
        <input type="checkbox" :key="item.id" :index="index" :class="{'finished': item.finished}" 
        @click="item.finished = !item.finished">
        
        <span>{{ item.title }}</span>


            <button class="sc" @click="deleteItem(index)">删除</button>
        </li>
        <div class="xxk flex-4 justify-around">

        <button v-for="(index,tab) in tabs" :key="tab" :class="['tab-button',{active:currentTab ===tab}]"
            @click="currentTab = tab">
            {{ tab }}
        </button>

        <!-- 插槽 -->
<!-- 
        <slot text={{ isfinished }}>
        </slot> -->

        <component :is="tabs[currentTab]" class="tab"></component>
            <!-- <button >全部</button>
            <button @click="isfinished()">已完成</button>
            
            <button>待完成</button>
            <button>清除已完成</button> -->
            <h5>已完成：{{ isfinished }}</h5>
            <h5>待完成：{{ waitfinished }}</h5>
            <h5>全部：{{ all }}</h5>
        </div>
        <!-- <button class="sc" @click="deleteAll(index)">删除</button> -->
    </div>
</template>



<style scoped>
.finished {
    text-decoration: v-bind('style.textDecoration');
    font-style: v-bind('style.fontStyle');
    color: v-bind('style.color');
    
}


button.sc{
    padding: 8px 25px;
    border: none;
    outline: none;
    background-color: pink;
    color: #fff;
    border-radius: 4px;
}

button {
    padding: 8px 25px;
    border: none;
    outline: none;
    background-color: #53a2d7;
    color: #fff;
    border-radius: 4px;
    margin-right: 10px;
}



/* 选项卡样式 */

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: blue;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #53a2d7;
}
.tab-button.active {
  background: purple;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
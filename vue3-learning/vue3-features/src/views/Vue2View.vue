<template>
    <div>
      <p>count: {{ count }}</p>   
      <p>倍数： {{ multiple }}</p>        
      <div>
        <button style="margin-right: 10px" @click="increase">加1</button>
        <button @click="decrease">减一</button>    
      </div>      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { count: 0 };
    },
    computed: {
      multiple() {
        return 2 * this.count;
      },
    },
    methods: {
      increase() {
        this.count++;
      },
      decrease() {
        this.count--;
      },
    },
  };
  </script>
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
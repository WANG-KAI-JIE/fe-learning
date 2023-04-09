<!-- <script setup>
   import { reactive, ref } from 'vue';
   import ProductDisplayVue from '../components/ProductDisplay.vue';
   const vip = ref(true)
   const cart = reactive([])

   const handleClick = (id) =>{
    cart.push(id)
   }
</script>

<template>
    <div class="h-16 mb-6 bg-gradient-to-r from-ocean to-leaf">
    </div>
    <div class="my-6 mx-24 p-7 border border-solid border-mist bg-cloud float-right">
        Cart {{ cart.length }}
    </div>
    <ProductDisplayVue :vip="vip" @add-to-cart="handleClick"></ProductDisplayVue>
</template>



<style scoped>

</style> -->
<!-- <script>
import { reactive, ref } from 'vue';

import socksGreenImage from '../assets/images/socks_green.jpg';
import socksBuleImage from '../assets/images/socks_blue.jpg';
import PrettyButton from './PrettyButton.vue';

const props = defineProps({
    vip: {
        type: Boolean,
        required: true,
        default: false
    }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue3')
const selectedIndex = ref(0)
const details = reactive([
    '50% cotton','30% wool','20% polyester'
])

const variants = reactive([
    {
        id: 1001,
        color: 'green',
        image: socksGreenImage,
        quantity: 50
    },
    {
        id: 1002,
        color: 'blue',
        image: socksBuleImage,
        quantity: 0
    }
])

const title = computed(() =>{
    return brand.value+' '+product.value
})

const image = computed(()=>{
    return variants.value(selectedIndex.value).image
})

const inSock = computed(() =>{
    return variants.value[selectedIndex.value].quantity>0
})

const info =computed(() =>{
    if(props.vip){
        return 'free'
    }
    return '99.99'
})

const addToCart = () =>{
    emit('add-to-cart',variants.value[selectedIndex.value].id)
}

const changeIndex = (index) =>{
    selectedIndex.value = index
}
</script>

<template>
    <div class="flex justify-around">
        <div class="flex-1">
            <img :src="image" alt="" class="w-[70%] border-4 border-solid border-ocean rounded-xl">
        </div>

        <div class="flex-1 text-2xl text-left">
            <p class="text-purple">{{ title }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>price:{{ price }}</p>

            <div v-for="(variant,index) in variants" 
        class="w-12 h-12 my-2 rounded-full border-4 border-solid border-purple cursor-pointer" 
        :class="{
            green: 'bg-[green]',
            blue: 'bg-[blue]'
        }[variant.color]"
        :style="{backgroundColor: variant.color}"
        @mouseover="changeIndex(index)"
        :key="variant.id" 
        :index="index">
            </div>
            <PrettyButton>
                <template #left>
                    <p>Add To Cart</p>
                </template>
            </PrettyButton>
        </div>
    </div>
</template>



<style scoped>

</style> -->
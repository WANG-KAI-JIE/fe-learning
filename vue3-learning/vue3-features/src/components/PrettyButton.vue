<!-- <script setup>
const {isActive} = defineProps({
    isActive:{
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['btn-click'])
</script>

<template>
    <button class="w-40 h-16 p-5 text-center text-cloud bg-purple rounded-[5px] scale-110 duration-500"
            :class="inStock ? ['bg-midnight','cursor-pointer'] : ['bg-mist','cursor-not-allowed']"
            @click="emit('btn-click')"
            :disabled="!inStock">
            <slot name="left"></slot>
            <slot name="right">
                <span>+</span>
            </slot>
    </button>
</template>


<style scoped>

</style> -->
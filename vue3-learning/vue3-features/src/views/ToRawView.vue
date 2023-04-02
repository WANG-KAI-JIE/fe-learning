<script setup>
import { reactive, toRaw } from 'vue'

const book = reactive({
  bookName: '前端工程化开发体验版',
  bookPrice: 66.6
})

const data = toRaw(book)

const changeBook = () => {
  data.bookName = '前端工程化开发正式版'
  data.bookPrice = 88.8
  console.log('book:', data, 'bookName:', data.bookName, 'bookPrice:', data.bookPrice);
}

</script>

<template>
  <div>
    <h3>书名：{{ data.bookName }}</h3>
    <h4>价格：{{ data.bookPrice }}</h4>
    <button @click="changeBook">改变</button>
  </div>
</template>

<style scoped></style>
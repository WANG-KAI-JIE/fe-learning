app.component('product-display', {
    props: {
        free: {
            type: Boolean,
            required: true
        }
    },

    template: 

      /*html*/ 
      `<div class="product-display">
      <p>{{msg}}</p>
      <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCartChild">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
    data() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 111, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 222, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          ],
          reviews:[],
      }
    },
    methods: {
        // 传值到父组件 main.js中
        addToCartChild(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant])
        },
        addReview(review){
            this.reviews.push(review)
        },
        
        
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        msg(){
            if(this.free){
                return '免费'
            }
            return '99.99'
        },
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
  })
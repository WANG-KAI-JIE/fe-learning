const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
              ],
            cart: 0,
            isActive: true,
            cartColor:'gray',
            progressColor:'red',
            cost:50,
            selectedVariant:0,
        };
    },
    methods: {
        addToCart(){
            this.cart += 1
            if(this.cart < 0){
                this.cartColor = 'red'
                this.progressColor = 'red'
            }else if(this.cart > 0 && this.cart <= 10){
                this.cartColor = 'gray'
                this.progressColor = 'yello' 
            }else{
                this.cartColor = 'green'
                this.progressColor = 'green'
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        fullCost: {
            //getter
            get(){
                return this.cart * this.cost;
            },
        },
    },
});
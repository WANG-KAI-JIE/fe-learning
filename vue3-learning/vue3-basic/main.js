const app = Vue.createApp({
    data() {
        return {
            cart:0,
            vip:true,
        };
    },
    methods: {
        updateCartParent(obj) {
            this.cart += 1;
            console.log(JSON.stringify(obj));
        }
    },
});
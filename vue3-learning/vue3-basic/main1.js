const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            author: {
                name: "John",
                books: ["Vue2-Advanced","Vue3-Basic","Vue4-Future"]
            },
            firstName:'张',
            lastName:'三',

            productName: "茉莉乌龙茶",
            cost: 5,
            number: 3,
        };
    },
    methos: {
        handle() {
            console.log("调用 handle 方法");
            return this.author.books.length > 2 ? "yes" : "no";
        }
    },
    computed: {
// 1.computed计算属性依赖于他的属性变化而变化 也就是依赖于data中的属性 只要依赖的data发生变化 就会触发调用一次计算属性

// 2.computed计算属性拥有缓存性 值可以直接从缓存中获取 而不是重新编译执行一次 所以说computed计算属性性能高一些 尤其是data中依赖的属性没有发生改变时 而重复触发computed计算属性也是如此

// computed的缓存性

// 计算属性 执行会把结果(return 的值)放在缓存中

// 依赖项不变 多次调用都是从缓存中取值

// 依赖项改变,函数会自动重新执行 并缓存新的值

        title() {
            return this.brand + " " +this.product;
        },
        publishMsg() {
            console.log("调用 publishMsg 计算属性");
            return this.author.books.length > 2 ? "yes" : "no";
        },
        fullName: {
            // getter
            get() {
                return this.firstName + '-' + this.lastName;
            },
            //setter
            set(newValue){
                //解构赋值
                // let res = newValue.split("-");
                // this.firstName = res[0];
                // this.lastName = res[1];
                [this.firstName,this.lastName] = newValue.split("-")
            },
        },
        fullCost: {
            //getter
            get() {
                return this.cost * this.number;
            }
        }
    },
});
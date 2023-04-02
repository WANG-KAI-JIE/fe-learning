// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// import './assets/main.css'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')


// 实现一个激活文本框自定义指令，全局挂载
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.use(router)

app.mount('#app')
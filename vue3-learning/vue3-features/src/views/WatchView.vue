<!-- 1、监听 ref 定义的一个响应式数据 -->
<!-- <script setup>
import { ref, watch } from 'vue';

const str = ref('此时此刻')

//3s后改变str的值
setTimeout(() => { str.value = '恰如此时此刻' }, 3000)

//监听 ref 定义的一个响应式数据
watch(str, (newV, oldV) => {
  console.log(newV, oldV) //恰如此时此刻 此时此刻
})

</script>

<template>
  <h2>{{ str }}</h2>
</template> -->




<!-- 2、监听多个 ref -->
<!-- <script setup>
import { ref, watch } from 'vue';

const str = ref('此时此刻')
const age = ref(18)

// 3s后改变值
setTimeout(() => {
  str.value = '恰如此时此刻'
  age.value = 19
}, 3000)

// 监听多个 ref
watch([str, age], (newV, oldV) => {
  console.log(newV, oldV)
})

</script>

<template>
  <h2>{{ str }}</h2>
  <h2>{{ age }}</h2>
</template> -->




<!-- **3、监听 reactive 定义的响应式对象** -->
<!-- <script setup>
import { watch, reactive } from 'vue';

let info = reactive({
  name: '张三',
  age: 18
})

//3s后改变值
setTimeout(() => {
  info.name='李四'
  info.age = 28
}, 3000)

// 监听 reactive 定义的响应式对象
watch(info, (newV, oldV) => {
  console.log(newV, oldV)
})

</script>

<template>
  <h3>姓名：{{ info.name }} 年龄：{{ info.age }}</h3>
</template> -->





<!-- 4、监听 reactive 定义响应式对象的单一属性 -->
<!-- <script setup>
import { watch, reactive } from 'vue';

let info = reactive({
  name: '张三',
  age: 18
})

//3s后改变值
setTimeout(() => {
  info.age = 28
}, 3000)

// 监听 reactive 定义响应式对象的单一属性
watch(() => info.age, (newV, oldV) => {
  console.log(newV, oldV)
})

</script>

<template>
  <h3>姓名：{{ info.name }} 年龄：{{ info.age }}</h3>
</template> -->




<!-- 5、监听 reactive 定义的引用数据 -->
<!-- <script setup>
import { watch, reactive } from 'vue';

// 监听响应式对象（含有引用类型），深度监听
let game = reactive({
  title: '权利的游戏',
  player: {
    name: '肥猫猫',
    age: 22
  }
})

setTimeout(() => {
  game.player.name = 'Fatcat'
  game.player.age = 21
}, 2000);

watch(
  () => [game.player.name, game.player.age],
  (newV, oldV) => {
    console.log(newV, oldV);
  },
  {
    deep: true
  }
)

</script>

<template>
  <h2>{{ game.player.name }}</h2>
  <h3>{{ game.player.age }}</h3>
</template> -->





<!-- watchEffect -->
<!-- <script setup>
import { ref, watchEffect } from 'vue';

let num = ref(1)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect(() => {
  console.log('num 值改变：', num.value)
})

</script>

<template>
  <h2>num 的值：{{ num }}</h2>
</template> -->




<!-- 停止监听 -->
<!-- <script setup>
import { ref,watchEffect } from 'vue'
  
let num = ref(1)
  
// 这个监听器不会自动停止
setTimeout(() => {
  num.value++
  watchEffect(() => { console.log('num 的值：', num.value) })
}, 3000)

const stop = watchEffect(() => {
  console.log('num 的值：', num.value)
})

//显式调用
stop()
</script>  -->





<!-- 清除副作用（onInvalidate） -->
<!-- <script>
import { ref, watchEffect } from 'vue';

let num = ref(0)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect((onInvalidate) => {
  console.log(num.value)
  onInvalidate(() => {
    console.log('执行');
  });
})
</script> -->




<!-- 配置选项 -->
<script setup>
import { ref, watchEffect, onUpdated } from 'vue';

let num = ref(1)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

// 配置选项
watchEffect((onInvalidate) => {
  console.log(num.value)
  onInvalidate(() => {
    console.log('执行');
  });
}, {
  flush: onUpdated, //此时这个函数会在组件更新之后去执行
  onTrigger(e) {   //作为一个调试工具，可在开发中方便调试
    console.log('触发', e);
  },
})

</script>

<template>
  <h2>num 的值：{{ num }}</h2>
</template>


<!-- <script setup>
import { onMounted } from 'vue';

const getUserInfo = () => {
  console.log('获取用户信息');
};
  
onMounted(getUserInfo);
  
</script> -->
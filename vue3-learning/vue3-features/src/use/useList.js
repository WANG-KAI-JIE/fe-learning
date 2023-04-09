import { computed, reactive } from "vue";


export default function useTodoList() {
    // 定义了响应式数据
    const todoItems = reactive([
        {
            id: 1,
            title: '吃饭',
            finished: false
        },
        {
            id: 2,
            title: '上课',
            finished: false
        },
        {
            id: 3,
            title: '运动',
            finished: true
        },
        {
            id: 4,
            title: '编程',
            finished: true
        }
    ])



    // 封装了逻辑
    const addItem = (val) => {
        todoItems.push({
            id: todoItems.length + 1,
            title: val,
            finished: false
        })
    }


    const finishedCount = computed(() => {
        return todoItems.filter((item) => item.finished === true).length
    })

    const deleteItem = (index) => {
        todoItems.splice(index, 1)
    }

    const isfinished = computed(() => {
        return todoItems.filter((item) => item.finished === true)
    })

    const waitfinished = computed(() => {
        return todoItems.filter((item) => !item.finished === true)
    })

    const all = computed(() => {
        return todoItems
    })

    return { todoItems, addItem, finishedCount, deleteItem, isfinished, waitfinished, all }



}
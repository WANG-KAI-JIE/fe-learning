import { onMounted, reactive } from "vue"
import TodoListItemVue from "../components/TodoListItem.vue"

import { Todo } from "./iTodo"

export default function useTodos() {
    const todos = reactive<Array<Todo>>([])
    const addTodo = (todo: any) => todos.push(todo)

    // 请求数据
    const fetchTodos = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/todos"
        )
        const rawTodos = await response.json()
        // 数据添加到todos中
        for (let i = 0; i < rawTodos.length; i++) {
            let rawtodo = rawTodos[i]
            todos.push(
                {
                    id: rawtodo.id,
                    content: rawtodo.content,
                    completed: rawtodo.completed
                }
            )
        }
    }
    // 生命周期函数 - 组件加载后，Vue会自动调用onMounted()
    onMounted(() => {
        fetchTodos();
    })

    return {
        todos,
        addTodo
    }

}
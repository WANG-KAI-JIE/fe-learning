import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '../views/ReactiveView.vue'
import ComponentView from '../views/ComponentView.vue'
import PlayView from '../views/PlayView.vue'
import TimeView from '../views/TimeView.vue'
import CssVarView from '../views/CssVarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/todo',
      children: [
        {
          path: 'reactive',
          name: 'reactive',
          component: ReactiveView,
        },
        {
          path: 'component',
          name: 'component',
          component: ComponentView,
        },
        {
          path: 'play',
          name: 'play',
          component: PlayView,
        },
        {
          path: 'time',
          name: 'time',
          component: TimeView,
        },
        {
          path: 'css',
          name: 'css',
          component: CssVarView,
        },
      ],
    },
  ],
})

export default router
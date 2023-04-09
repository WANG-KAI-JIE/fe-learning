import { createRouter, createWebHistory } from 'vue-router'
import ReactiveView from '../views/ReactiveView.vue'
import ComponentView from '../views/ComponentView.vue'
import PlayView from '../views/PlayView.vue'
import TimeView from '../views/TimeView.vue'
import CssVarView from '../views/CssVarView.vue'
import ShowView from '../views/ShowView.vue'
import Vue2View from '../views/Vue2View.vue'
import ToRefView from '../views/ToRefView.vue'
import ToRefsView from '../views/ToRefsView.vue'
import ToRawView from '../views/ToRawView.vue'
import ComputedView from '../views/ComputedView.vue'
import WatchView from '../views/WatchView.vue'
import Component2View from '../views/Component2View.vue'
import FindView from '../views/FindView.vue'
import Component3View from '../views/Component3View.vue'
import Component4View from '../views/Component4View.vue'
import DirectiveView from '../views/DirectiveView.vue'
import HooksView from '../views/HooksView.vue'
import UseView from '../views/UseView.vue'
// import SocksView from '../views/SocksView.vue'

import TodoApp from '../views/TodoApp.vue'

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
        {
          path: 'show',
          name: 'show',
          component: ShowView,
        },
        {
          path: 'vue2',
          name: 'vue2',
          component: Vue2View,
        },
        {
          path: 'toref',
          name: 'toref',
          component: ToRefView,
        },
        {
          path: 'torefs',
          name: 'torefs',
          component: ToRefsView,
        },
        {
          path: 'toraw',
          name: 'toraw',
          component: ToRawView,
        },
        {
          path: 'computed',
          name: 'computed',
          component: ComputedView,
        },
        {
          path: 'watch',
          name: 'watch',
          component: WatchView,
        },
        {
          path: 'component2',
          name: 'component2',
          component: Component2View,
        },
        {
          path: 'find',
          name: 'find',
          component: FindView,
        },
        {
          path: 'component3',
          name: 'component3',
          component: Component3View
        },
        {
          path: 'component4',
          name: 'component4',
          component: Component4View,
        },
        {
          path: 'directive',
          name: 'directive',
          component: DirectiveView,
        },
        {
          path: 'hooks',
          name: 'hooks',
          component: HooksView,
        },
        {
          path: 'use',
          name: 'use',
          component: UseView,
        },
        // {
        //   path: 'socks',
        //   name: 'socks',
        //   component: SocksView,
        // }
        {
          path: 'todolist',
          name: 'todolist',
          component: TodoApp

        },
      ],
    },
  ],
})

export default router
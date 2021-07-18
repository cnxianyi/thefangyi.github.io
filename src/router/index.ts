import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

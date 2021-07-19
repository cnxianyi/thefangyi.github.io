import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'
const flex = ()=> import('../views/css/flex.vue')
const html_demo = ()=> import('../views/html/html_demo.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    }
  },

  // HTML 
  {
    path: '/html/demo',
    name: 'html_demo',
    component: html_demo,
    meta: {
      title: 'html_demo'
    }
  },

  //CSS
  {
    path: '/css/flex/md',
    name: 'flex',
    component: flex,
    meta: {
      title: '浮动flex'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

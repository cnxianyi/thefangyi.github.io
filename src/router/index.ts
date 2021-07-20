import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const html = ()=> import('../study/html-view/html.vue')
const words = ()=> import('../study/english-view/words.vue')
const show = ()=> import('../views/show.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show',
    name: 'show',
    component: show,
    meta: {
      title: 'show'
    }
  },
  

  //html
  {
    path: '/html',
    name: 'html',
    component: html,
    meta: {
      title: 'html'
    }
  },

  //english
  {
    path: '/english/words',
    name: 'words',
    component: words,
    meta: {
      title: 'words'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

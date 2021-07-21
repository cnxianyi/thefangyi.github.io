import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const html = ()=> import('../study/html-view/html.vue')
const words = ()=> import('../study/english-view/words.vue')
const show = ()=> import('../views/show.vue')
const css = ()=> import('../study/css-view/css.vue')
const mediaScreen = ()=> import('../study/css-view/mediaScreen.vue')
const bootstrapDemo = ()=> import('../study/css-view/bootstrapDemo.vue')
const sass = ()=> import('../study/css-view/sass.vue')
const baseJs = ()=> import('../study/js-view/baseJs.vue')


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
  

// - - - HTML - - -
  {
    path: '/html',
    name: 'html',
    component: html,
    meta: {
      title: 'html'
    }
  },

// - - - CSS - - -
  {
    path: '/css',
    name: 'css',
    component: css,
    meta: {
      title: 'css'
    }
  },
  {
    path: '/css/mediaScreen',
    name: 'mediaScreen',
    component: mediaScreen,
    meta: {
      title: 'mediaScreen'
    }
  },
  {
    path: '/css/bootstrapDemo',
    name: 'bootstrapDemo',
    component: bootstrapDemo,
    meta: {
      title: 'bootstrapDemo'
    }
  },
  {
    path: '/css/sass',
    name: 'sass',
    component: sass,
    meta: {
      title: 'sass'
    }
  },

// - - - JS - - -

  {
    path: '/js/base',
    name: 'baseJs',
    component: baseJs,
    meta: {
      title: 'baseJs'
    }
  },

// - - - English - - -
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

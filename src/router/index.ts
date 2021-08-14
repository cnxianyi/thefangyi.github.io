import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const html = ()=> import('../study/html/html.vue')
const words = ()=> import('../study/english/words.vue')
const show = ()=> import('../views/show.vue')
const css = ()=> import('../study/css/css.vue')
const mediaScreen = ()=> import('../study/css/mediaScreen.vue')
const bootstrapDemo = ()=> import('../study/css/bootstrapDemo.vue')
const sass = ()=> import('../study/css/sass.vue')
const baseJs = ()=> import('../study/js/baseJs.vue')
const protoInherit = ()=> import('../study/js/protoInherit.vue')
const tsBasis = ()=> import('../study/TypeScript/TSbasis.vue')
const dataTypes = ()=> import('../study/js/dataTypes.vue')
const npmBasis = ()=> import('../study/npm/npmBasis.vue')
const webpackBasis = ()=> import('../study/webpack/webpackBasis.vue')
const axiosBasis = ()=> import('../study/axios/axios.vue')
const jsPromise = ()=> import('../study/js/promise.vue')
const vueBasis = ()=> import('../study/vue/vueBasis.vue')

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
  {
    path: '/js/protoInherit',
    name: 'protoInherit',
    component: protoInherit,
    meta: {
      title: 'protoInherit'
    }
  },
  {
    path: '/js/dataTypes',
    name: 'dataTypes',
    component: dataTypes,
    meta: {
      title: 'dataTypes'
    }
  },
  {
    path: '/ts/tsBasis',
    name: 'tsBasis',
    component: tsBasis,
    meta: {
      title: 'tsBasis'
    }
  },
  {
    path: '/js/promise',
    name: 'jsPromise',
    component: jsPromise,
    meta: {
      title: 'jsPromise'
    }
  },

// - - - vue - - - 
  {
    path: '/vue/vueBasis',
    name: 'vueBasis',
    component: vueBasis,
    meta: {
      title: 'vueBasis'
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


// npm
  {
    path: '/npm/basis',
    name: 'npmBasis',
    component: npmBasis,
    meta: {
      title: 'npmBasis'
    }
  },

// Webpack
  {
    path: '/webpack/basis',
    name: 'webpackBasis',
    component: webpackBasis,
    meta: {
      title: 'webpackBasis'
    }
  },
  {
    path: '/axios/basis',
    name: 'axiosBasis',
    component: axiosBasis,
    meta: {
      title: 'axiosBasis'
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

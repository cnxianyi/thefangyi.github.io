import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/base.scss'
// import './assets/css/prism.css'
// import './assets/js/prism.js'
import './assets/css/code.scss'

createApp(App).use(store).use(router).mount('#app')

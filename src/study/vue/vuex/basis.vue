<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                VueX Basis
            </template>
            <template v-slot:time>
                2021年8月16日10:43:52
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>VueX</h2>
            <sidebarR></sidebarR>
            <p>状态管理模式 + 库 ， 采用集中式存储管理应用的所有组件的状态</p>
            <p>一般用于开发大型单页应用，能够更好的在组件外部管理状态</p>
            <img src="https://vuex.vuejs.org/vuex.png" alt="" style="width: 100%">
            <small>当需要对State 进行修改时。推荐在组件内进行，当需要向后台异步请求数据源修改数据时，通过 Dispatch 使用 Actions ， 否则直接使用 commit 在 Mutations 中修改数据。而不是直接修改 State 中的数据</small>
            <hr>
            <h2>核心概念</h2>
            <h4>State</h4>
            <ul>
                <li>vuex使用单一状态树</li>
                <li>相当于一个全局的 data</li>
                <li>通过 <span>$store.state.any</span> 访问</li>
            </ul>
            <hr>

            <h4>Getter</h4>
            <ul>
                <li>相当于 store 的计算属性</li>
                <li>in store <span> anyFun(state[, getters)=> [(id)=>] { return any}</span></li>
                <li>in vue<span> { {$store.getters.anyFun} } / fun(){return $store.getters.anyFun}</span></li>
                <pre>thr: (state , getters) => (id:number) => {
      return getters.test * state.ten * id 
    },</pre>
            </ul>
            <hr>

            <h4>Mutations</h4>
            <ul>
                <li>更改 store 的状态的唯一方法</li>
                <li>必须同步执行</li>
                <li>要唤醒一个 Mutation 处理函数。需要调用 store.commit 方法</li>
                <li><span>store.commit('fun')</span></li>
                <li>支持 提交载荷(payload) 与 对象风格的提交方式</li>
                <pre><small>in store</small>
test(state [, payload]){
      state.count++ [ +=payload.any]
    }
<small>in Vue</small>
store.commit('test', {
  amount: 10
})
    <small>or</small>
store.commit({
  type: 'test',
  amount: 10
})
</pre>
                
            </ul>
            <hr>

            <h4><a href="https://next.vuex.vuejs.org/zh/guide/actions.html">Actions</a></h4>
            <ul>
                <li>提交Mutation</li>
                <li>支持异步</li>
            </ul>
            <hr>

            <h4><a href="https://next.vuex.vuejs.org/zh/guide/modules.html">Modules</a> </h4>
            <ul>
                <li>将 store 分割成各个模块</li>
            </ul>
            <hr>
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import store from '@/store';
export default {
    data() {
        return {
            
        }
    },
    components: {
        navBar,
        sidebarR
    },
    methods: {
        GoSection(str){
            document.getElementById(`${str}`).scrollIntoView({behavior: 'smooth'});
        },
        
    },
    computed: {

    }

    
}
</script>

<style lang="scss" scoped>
    
</style>
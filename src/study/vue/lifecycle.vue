<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Lifecycle hooks
            </template>
            <template v-slot:time>
                2021年8月15日08:53:00
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>生命周期钩子</h2>
            <sidebarR></sidebarR>
            <img style="width:100%" src="https://vue3js.cn/docs/zh/images/lifecycle.png" alt="">
        <p>所有的生命周期钩子自动绑定this上下文到实例中。<small>不能使用箭头函数来定义一个生命周期方法</small></p>
        <hr>
        <h4>beforeCreate()</h4>
        <ul>
            <li>实例初始化之后</li>
            <li>data() , event / watcher 事件配置之前被调用</li>
        </ul>
        <hr>

        <h4>created()</h4>
        <ul>
            <li>在实例创建完成后调用</li>
            <li>已完成 data() , property方法 ， watch / event</li>
            <li>挂载还未开始 ， $el 尚未开始</li>
        </ul>
        <hr>
        <h4>beforeMount()</h4>
        <ul>
            <li>挂载之前被调用 <small>相关的render函数首次调用</small></li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>

        <h4>mounted()</h4>
        <ul>
            <li>实例被挂载后</li>
            <li>mounted 不会保证所有子组件都被挂载，可以使用 $nextTick 解决</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>
        <h4>beforeUpdate()</h4>
        <ul>
            <li>数据更新时调用</li>
            <li>在服务器端渲染期间不被调用。只有初次渲染会在服务器端进行</li>
        </ul>
        <hr>

        <h4>update()</h4>
        <ul>
            <li>数据更新完毕调用</li>
            <li>不会保证所有子组件都被重绘，可以 $nextTick 解决</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>
        <h4>activated()</h4>
        <ul>
            <li>被 <span>keep-alive</span>缓存的组件 激活 时调用</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>

        <h4>deactivated()</h4>
        <ul>
            <li>被 <span>keep-alive</span>缓存的组件 停用 时调用</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>

        <h4>beforeUnmount()</h4>
        <ul>
            <li>卸载组件实例之前调用</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>

        <h4>unmounted()</h4>
        <ul>
            <li>卸载组件实例后调用， 此时实例不能访问</li>
            <li>在服务器端渲染期间不被调用</li>
        </ul>
        <hr>
        
        <h4><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured">errorCaptured() ... </a></h4>
        <ul>
            <li>当捕获一个来自子孙组件的错误时被调用。...</li>
        </ul>
        <hr>

        <h4><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured">renderTracked ... </a></h4>
        <ul>
            <li>跟踪虚拟DOM 重新渲染时调用</li>
        </ul>
        <hr>

        <h4><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#rendertriggered">renderTriggered ... </a></h4>
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from '../../components/common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import Prism from 'prismjs';
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
}
</script>

<style lang="scss" scoped>
    
</style>
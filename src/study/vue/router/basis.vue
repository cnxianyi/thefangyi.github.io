<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Router 
            </template>
            <template v-slot:time>
                2021年8月15日10:34:35
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>动态路由匹配</h2>
            <sidebarR></sidebarR>
            <h4>参数传递</h4>
            <pre><code class="language-js">in router 
{
    path: '/str/:id',
    name: 'str',
    component: str, 
  }

in son 
{ { $route.params.id } }
// { {$route.query.id } } // 两种传值方式

in parent
&#60;li v-for="item in value" &#62;&#60;router-link :to="'/str/' + item.id"&#62;&#60;{ { item.title} }&#62; &#60;/li&#62;
// &#60;li v-for="item in value" &#62;&#60;router-link :to={ path: '/str' , query: {id: 1}}&#62;&#60;{ { item.title} }&#62; &#60;/li&#62;

自定义 router
&#60;button @click="$router.push( {path: '' , query: {}} )"&#62;&#60;/button&#62;
  </code></pre>
  <hr>
    <h4>编程式导航</h4>
    <ul>
        <li>通过 this.$router.push() 来访问路由 ， 会向 history 栈添加一个新的记录</li>
        <li>&#60;router-link :to='...' replace&#62; / router.replace() / router.push({path: '' , replace: true})<br>
        导航时不会向 history 添加记录</li>
        <li>window.history.go(number) 表示在 history 栈中前进或后退多少步</li>
    </ul>
    <hr>

    <h2>命名路由</h2>
    <ul> 优点
        <li>没有硬编码的 URL</li>
        <li>params 的自动编码/解码</li>
        <li>防止在URL 中出错</li>
        <li>绕过路径排序</li>
    </ul>
    <h4>命名 导航</h4>
    <ul>
        <li>&#60;router-link :to="{name: '命名路由' , params: {...}}"&#62; ... &#60;/router-link&#62;</li>
        <li>router.push({ name: '命名路由' , params: {...}})</li>
    </ul>
    <hr>
    <h4><a href="https://next.router.vuejs.org/zh/guide/essentials/named-views.html"></a> 命名 视图</h4>
    <p>一个页面显示多个导航区域，仅需设置命名视图</p>
    <hr>

    <h2><a href="https://next.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html"></a> 重定向和别名</h2>
    <h4>重定向</h4>
    <ul>
        <li>将/a 重定向 到 /b</li>
        
    </ul>
    <hr>

    <h4>别名</h4>
    <ul>
        <li>url 不同，但是访问的目标相同</li>
    </ul>
    <hr>

    <h2>路由组件传参</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>历史模式</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>导航守卫</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>路由元信息</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>数据获取</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>setup()中</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>过渡动效</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>滚动效果</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>路由懒加载</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>扩展 router-link </h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>导航故障</h2>
    <ul>
        <li></li>
    </ul>
    <hr>

    <h2>动态路由</h2>
    <ul>
        <li></li>
    </ul>
    <hr>
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import Prism from 'prismjs';
import axios from 'axios';
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
h1{
  color: #00000000;  
}    
</style>


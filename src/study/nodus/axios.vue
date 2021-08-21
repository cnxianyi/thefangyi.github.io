<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Axios  Nodus
            </template>
            <template v-slot:time>
                2021年8月21日21:53:25
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>axios</h2>
            <sidebarR></sidebarR>

            <h4>响应拦截器</h4>
            <small>在 ewshop 中，添加响应拦截器，用于对后端接口报错的错误信息进行整理。<br>对登录时接口返回的错误信息的处理</small>
            <pre>export function ... {

instance.interceptors. <strong>1</strong> response.use( (response) => {
        return response;
    }, (error) => {
        let err = <strong>2</strong> error.response.data.errors <strong>3</strong> [Object.keys(error.response.data.errors)[0]]
        Toast(err[0]);
        return Promise.reject(error);
    });    

                }</pre>
        <ol>
            <li>response ：请求的响应结果，在拦截器中对结果进行操作。</li>
            <li>error.response.data.errors = 错误的请求返回的 响应结果 的数据中的错误信息 </li>
            <li>obj[Object.keys(obj)[0]] 语法 ，在未知键的情况下访问当前对象的 '第一个值'</li>
        </ol>
        <hr>

        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
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
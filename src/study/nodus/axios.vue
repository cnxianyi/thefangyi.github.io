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
            <small>在 xyshop 中，添加响应拦截器，用于对后端接口报错的错误信息进行整理。<br>对登录时接口返回的错误信息的处理</small>
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

        <h4>请求拦截器 / 登录操作</h4>
        <small>在 xyshop 中，进行登录验证功能开发。 </small>
        <pre><small>in request.js</small> 
     <strong>1</strong> instance.interceptors.request.use(function (config) {
        const token = window.localStorage.getItem('token')
        if (token) {
             <strong>2</strong> config.headers.Authorization = 'Bearer '+token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    <hr>
 <small>in login.vue</small> 
login(state).then((result) => {
        // 登录成功时 服务器会返回一个 授权 Token ，保存在本地 window.localStorage 
        window.localStorage.setItem('token' , result.data.access_token)
        Toast.success('登录成功')
        setTimeout(() => {
            router.go(-1)
        }, 1000);
    })
<hr>
 <small>in  router/index.js</small>
 <strong>3</strong> router.beforeEach(((to , next) => {
   <strong>4</strong> if (to.meta.isAuthRequired && window.localStorage.getItem('token') === ''){
    router.push('/user/login')
  }
...
{
    path: '/cart',
    name: 'cart',
    component: cart,
    meta: {
      isAuthRequired: true
    }
  },</pre>

  <ol>
      <li>请求拦截器： 请求发送之前做些什么</li>
      <li>xyshop JWT 认证，登录后得到 token , 需要添加到 请求头中。<br>
      getItem('...') 获取到保存的请求头， 将请求头添加到请求里。</li>
      <li></li>
  </ol>



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
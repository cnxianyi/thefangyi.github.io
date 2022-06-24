<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Axios
            </template>
            <template v-slot:time>
                2021年8月11日10:06:00
            </template>
        </nav-bar>
    
    <div class="xy">
        <div class="content">
        
        <h2>axios</h2>

        <button @click="cx">1</button>
        <sidebarR></sidebarR>
            <ul> 
                <li>axios是ajax的封装</li>
                <li>基于promise的HTTP库</li>
                <li>支持node端和浏览器</li>
                <li>promise管理异步</li>
                <li>支持请求/响应拦截器</li>
                <li>支持请求取消</li>
            </ul>
            <hr>
            <ul> 原生Ajax缺点
                <li>MVC编程 ， 不符合现在的 MVVM</li>
                <li>使用Ajax而引入整个 JQuery 不合理</li>
                <li>不符合关注分离(Separation of Concerns)原则</li>
                <li>配置和调用方式混乱， 基于事件的异步模型不友好</li>
            </ul>
            <hr>
            <ul> RestFul API 规范
                <li>GET(SELECT): 从服务器取出资源</li>
                <li>POST(CREATE) 在服务器新建一个资源</li>
                <li>PUT(UPDATE) 在服务器更新资源(客户端提供改变后的完整资源)</li>
                <li>PATCH(UPDATE) 在服务器更新资源(客户端提供改变的属性)</li>
                <li>DELETE(DELETE) 在服务器删除资源</li>
                <hr>
            </ul>
            <hr>
            <ul>常用语法
                <li>axios(config) | 发送任意请求</li>
                <li>axios(url[,config]) | 指定url发送 get 请求</li>
                <li>axios.request(config) | 等同于 axios(config)</li>
                <li>axios.get(url[,config]) | 发送 get 请求</li>
                <li>axios.delete(url[,config]) | 发送 delete 请求</li>
                <li>axios.post(url[,data , config]) | 发送 post 请求</li>
                <li>axios.put(url[, data , config]) | 发送 put 请求</li>
                <li>axios.defaults.xxx | 请求的默认全局配置</li>
                <li>axios.interceptors.request.use() | 添加请求拦截器</li>
                <li>axios.interceptors.response.use() | 添加响应拦截器</li>
                <li>axios,create([config]) | 创建一个新的 axios (没有下面的功能)</li>
                <li>axios.Cancel() | 创建取消请求的错误对象</li>
                <li>axios.CancelToken() | 创建取消请求的 token 对象</li>
                <li>axios.isCancel() | 是否是一个取消请求的错误</li>
                <li>axios.all(promises) | 批量执行多个异步请求</li>
                <li>axios.spread() | 指定接收所有成功数据的回调函数的方法</li>
            </ul>
            
            <ul>响应报文
                <li>响应头 : headers</li>
                <li>响应行</li>
                <li>响应体</li>
                <li>响应空行</li>
                <li>request: 原生的ajax请求对象</li>
                <li>status: 响应状态码</li>
                <hr>
            </ul>
        <h4>配置对象(config)</h4>
            <ul>
            <li>url : 请求地址</li>
            <li>method : 请求类型</li>
            <li>baseURL : 请求地址的基础地址</li>
            <li>transformRequest : 将请求数据进行处理，在进行发送</li>
            <li>transformResponse : 对响应的结果进行改变</li>
            <li>headers : 对请求头信息配置</li>
            <li>params ：设定url参数 添加属性</li>
            </ul>
            <hr>

        <pre>function get (){ // 获取
        // 发送Ajax请求
            axios({
            // 请求类型
                method: 'GET', // GET POST PUT DELETE
            // URL
                url: 'http:// ...posts'
            }).then((result) => { // 成功信息
                
            }).catch((err) => { // 失败信息
                    
            });
    }

    function post (){ // 新建
            axios({
                method: 'POST', // GET POST PUT DELETE
                url: 'http:// ...posts',
                // 设置请求体
                data: {
                        title: '请求数据',
                        author: '请求数据'
                }
            }).then((result) => { // 成功信息
                
            }).catch((err) => { // 失败信息
                    
            });
    }

    function put (){ // 更新
        axios({
            method: 'PUT', // GET POST PUT DELETE
            url: 'http:// ...posts/id',
            data: {
                    title: '请求数据',
                    author: '请求数据'
            }
        }).then((result) => { // 成功信息
            
        }).catch((err) => { // 失败信息
                
        });
    }   
        
    function Delete (){ // 删除
            axios({
            method: 'DELETE', // GET POST PUT DELETE
            url: 'http:// ...posts/id',
            }).then((result) => { // 成功信息
            
            }).catch((err) => { // 失败信息
                    
            });
        }</pre>

        <hr>
        <h2>实例</h2>
        <h4>POST ， 将JSON转化为字符串格式</h4>
        <ul>
            <li>transformRequest` 允许在向服务器发送前，修改请求数据,对 data 进行任意转换处理</li>
            <li>`headers` 是即将被发送的自定义请求头</li>
            <li>encodeURIComponent(str);  进行 URL 编码</li>
            <li>对应的解码为 decodeURIComponent()</li>
        </ul>
        <pre>fun(){
    axios.post('url: ...' , this.value , {
        transformRequest: [ 
            function(data){
                let str = '',
                for(let key in data){
                    str += encodeURIComponent(key)
                        + '='
                        + encodeURIComponent(data[key])
                        + '&'
                }
                return str
            }
        ],
        headers: {
            // 传入头信息
        },

    }).then((result) => {
        
    }).catch((err) => {
        
    });
}</pre>
<hr>
        <h4>封装网络请求</h4>
        <ol>
            <li>创建一个统一的接口目录</li>
            <li>新建一个 request.js 文件</li>
            <ul>
                <li>baseURL: 设置基础 URL</li>
                <li>timeout: 设置 请求超时上限，超时将中断请求</li>
                <li>headers: 自定义请求头</li>
            </ul>
            <pre>import axios from 'axios'

// 创建 axios 实例 
const instance = axios.create({
    baseURL: 'http:// ...',
    timeout: 1000 , 
    headers: {'':''}
})

// 封装方法 
export function get(url , params) {  // 封装 get 方法 
    return axios.get(url , {  // return axios 返回的是promise 值，可以 get.then()
    //     instance.get(... // 使用实例
        params
    })
}</pre>
        </ol>
        </div>
    </div>

    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import btn from 'common/btn.vue'
import axios from 'axios'
import sidebarR from 'common/SidebarR.vue'

export default {
    components: {
        navBar,
        btn,
        sidebarR
    },
    methods: {
        
    },
    created() {
    
}
}
</script>
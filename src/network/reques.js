import axios from 'axios'

// 创建 axios 实例 
const instance = axios.create({
    baseURL: '基础URL',
    timeout: 1000 , // 设置 请求超时上限，超时将中断请求
    headers: {'':''} // 自定义请求头
})

// 封装方法 
export function get(url , params) {  // 封装 get 方法 
    return axios.get(url , {  // return axios 返回的是promise 值，可以 get.then()
    //     instance.get(... // 使用实例
        params
    })
}

// 请求拦截器 
<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Promise 
            </template>
            <template v-slot:time>
                2021年8月11日15:43:57
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2 id="Promise">Promise</h2>
            <sidebarR>
                <h5 @click="GoSection('Promise')"><i class='bx bxs-label'></i> Promise</h5>
                <h5 @click="GoSection('TCF')"><i class='bx bxs-label'></i> T C F</h5>
                <h5 @click="GoSection('API')"><i class='bx bxs-label'></i> API</h5>
                <h5 @click="GoSection('AsyncAwait')"><i class='bx bxs-label'></i> AsyncAwait</h5>
            </sidebarR>
            <h4>宏任务</h4>
            <ol> 包括
                <li>script</li>
                <li>setTimeout</li>
                <li>setInterval</li>
                <li>setImmediate</li>
                <li>I/O</li>
                <li>UI rendering</li>
                <span>！ 任务开始 script 为第一轮 宏任务 ， set... 将在下一轮执行</span>
            </ol>
            <hr>
            <h4>微任务</h4>
            <ul> 包括
                <li>MutationObserver</li>
                <li>promise.then() / catch()</li>
                <li>promise开发的其他技术</li>
                <li>V8垃圾回收过程</li>
                <li>Node - process.nextTick</li>
            </ul>
            <hr>

            <h4>event Loop 执行顺序</h4>
            <ul>
                <li>一开始js脚本作为一个宏任务执行</li>
                <li>执行过程为 先执行宏任务，再检查微任务列表是否有任务</li>
                <li><small>执行浏览器UI线程的渲染工作</small></li>
                <li><small>检查是否有Web Worker任务，有则执行</small></li>
                <li>检查是否有下一个宏任务，往复</li>
            </ul>
            <hr>
            <h4>promise 状态(state)</h4>
            <ul>
                <li>pending 初始状态下<br>promise{<span class="code">&#60;pending&#62;</span>}</li>
                <li>fulfilled 成功<br><pre class="language-js">resolve('value')</pre>promise{<span class="code">&#60;fulfilled&#62;</span> : "value"}</li>
                <li>rejected 失败<br><pre class="language-js">reject(new Error("Err"))</pre>Promise {<span class="code">&#60;rejected&#62;</span>: Error: Err}</li>
            </ul>
            <hr>
            <h4>Promise 对象构造器语法</h4>
            <pre>const PT = new Promise((resolve , reject) => {
        // executor 生产者代码
     }) </pre>
            <ul>
                <li>传递给 new Promise 的函数为 executor , 将作为第一批宏任务执行</li>
                <li>resolve , reject(可以立即执行 与 异步) 是JS自身提供的回调 , executor成功运行resolve ...</li>
                <li>resolve ：成功情况下的值</li>
                <li>reject : 出现错误返回 error对象</li>
            </ul>
            <hr>
            <h2 id="TCF">then catch finally</h2>
            <p>promise 对象是 executor 与 消费函数之间的链接</p>
            <hr>
            <h4>.then</h4>
            <pre>PT.then((result) => {
         
     }, (error) => {
        
     })</pre>
            <ul> 传入两个 函数 参数
                <li>result : 在 Promise resolved 后运行并接收结果</li>
                <li>error : 在 Promise rejected 后运行并接收 error</li>
                <li>如果只对成功情况感兴趣 ：<span class="code">PT.then( ( resolve )=> { alert ( resolve )})</span></li>
                <li>同上效果 PT.then(alert)</li>
            </ul>
            <hr>
            <h4>.catch</h4>
            <p>.catch 是.then(null , fun) 的完全模拟,是一个简写形式</p>
            <ul>
                <li>只对 error 感兴趣</li>
                <li>.then(null , errorHandlingFunction)</li>
                <li>.catch(errorHandlingFunction)</li>
                <li>效果一致</li>
            </ul>
            <hr>
            <h4>.finally</h4>
            <ul>
                <li>.finally() 没有参数 总是运行 将处理结果传递给下一个程序</li>
                <li>是执行清理 很好的程序</li>
                <li><span class="code">PT.finally( ()=> { alert('any') })</span></li>
            </ul>
            <hr>
            <h4>Promise 链</h4>
            <p>在某些情况下，需要接连执行异步。</p>
            
            <pre>const PT = new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('1')
        }, 1000);
    }).then( (resolve)=> {
        console.log(resolve); // 1
        return resolve*2
    }).then( (resolve)=> {
        console.log(resolve); // 2
        return resolve*2
    }).then( (resolve)=> {
        console.log(resolve); // 4
        return resolve*2
    })</pre>
    <p>在.then 中所使用的程序，可以创建并返回一个Promise</p>
    <p>并由其构建一个 异步行为链</p>
    <pre>const PT = new Promise((resolve , reject) => {
        resolve(1)
    }).then( (res)=> { // 传入第一次的数值
        return new Promise( (resolve , reject) => {
            setTimeout(() => {
                resolve(res * 2) // 使用第一次的数值
            }, 1000);
        })
    }).then(alert) // 2</pre>
    <p>.catch 不必是立即的，可以在多个 .then 后出现，当其中一个.then 出现error,则会触发.catch</p>
    <hr>
    <h2 id="API">API</h2>
    <h4>Promise.all</h4>
    <p>并行执行多个 Promise</p>
    <hr>
    <h4>Promise.allSettled</h4>
    <p>获取所有 Promise 的状态(status) 和 value</p>
    <hr>
    <h4>Promise.race</h4>
    <p>与 Promise.all 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。</p>
    <hr>
    <h4>Promise.resolve / reject</h4>
    <hr>

    <h2 id="AsyncAwait">Async / await</h2>
    <h4>Async function</h4>
    <pre>async function f(){
        return 1;
    }
    f().then(alert) // 1</pre>
    <p>async 关键字使 f 函数始终返回一个 Promise</p>
    <h4>await</h4>
    <pre>async function f(){
        let promise = new Promise( (resolve , reject) => {
            setTimeout(() => {
                resolve(1)
            }, 1000);
        })
        let res = await promise; // 等待并获取 promise （*）
        alert(res) // 1
    }
    f()</pre>
    <p>函数执行时，暂停在 * 那一行，拿到resolve后继续执行</p>
    <p>关键字 await 让 JS 引擎等待直到 Promise状态变为 settled(稳定)</p>





        </div>
    </div>
    
    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import Prism from 'prismjs';
export default {
    components: {
        navBar,
        sidebarR
    },
     methods: {
        GoSection(str){
            document.getElementById(`${str}`).scrollIntoView({behavior: 'smooth'});
        }
    }
}
</script>

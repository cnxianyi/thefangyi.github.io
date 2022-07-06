(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e22f5"],{"7e2c":function(e,r,l){"use strict";l.r(r);var t=l("7a23"),n=Object(t["g"])(" Promise "),i=Object(t["g"])(" 2021年8月11日15:43:57 "),s={class:"xy"},o={class:"content"},c=Object(t["h"])("h2",{id:"Promise"},"Promise",-1),a=Object(t["h"])("i",{class:"bx bxs-label"},null,-1),h=Object(t["g"])(" Promise"),u=Object(t["h"])("i",{class:"bx bxs-label"},null,-1),p=Object(t["g"])(" T C F"),m=Object(t["h"])("i",{class:"bx bxs-label"},null,-1),b=Object(t["g"])(" API"),d=Object(t["h"])("i",{class:"bx bxs-label"},null,-1),j=Object(t["g"])(" AsyncAwait"),v=Object(t["f"])('<h4>宏任务</h4><ol> 包括 <li>script</li><li>setTimeout</li><li>setInterval</li><li>setImmediate</li><li>I/O</li><li>UI rendering</li><span>！ 任务开始 script 为第一轮 宏任务 ， set... 将在下一轮执行</span></ol><hr><h4>微任务</h4><ul> 包括 <li>MutationObserver</li><li>promise.then() / catch()</li><li>promise开发的其他技术</li><li>V8垃圾回收过程</li><li>Node - process.nextTick</li></ul><hr><h4>event Loop 执行顺序</h4><ul><li>一开始js脚本作为一个宏任务执行</li><li>执行过程为 先执行宏任务，再检查微任务列表是否有任务</li><li><small>执行浏览器UI线程的渲染工作</small></li><li><small>检查是否有Web Worker任务，有则执行</small></li><li>检查是否有下一个宏任务，往复</li></ul><hr><h4>promise 状态(state)</h4><ul><li>pending 初始状态下<br>promise{<span class="code">&lt;pending&gt;</span>}</li><li>fulfilled 成功<br><pre class="language-js">resolve(&#39;value&#39;)</pre>promise{<span class="code">&lt;fulfilled&gt;</span> : &quot;value&quot;}</li><li>rejected 失败<br><pre class="language-js">reject(new Error(&quot;Err&quot;))</pre>Promise {<span class="code">&lt;rejected&gt;</span>: Error: Err}</li></ul><hr><h4>Promise 对象构造器语法</h4><pre>const PT = new Promise((resolve , reject) =&gt; {\r\n        // executor 生产者代码\r\n     }) </pre><ul><li>传递给 new Promise 的函数为 executor , 将作为第一批宏任务执行</li><li>resolve , reject(可以立即执行 与 异步) 是JS自身提供的回调 , executor成功运行resolve ...</li><li>resolve ：成功情况下的值</li><li>reject : 出现错误返回 error对象</li></ul><hr><h2 id="TCF">then catch finally</h2><p>promise 对象是 executor 与 消费函数之间的链接</p><hr><h4>.then</h4><pre>PT.then((result) =&gt; {\r\n         \r\n     }, (error) =&gt; {\r\n        \r\n     })</pre><ul> 传入两个 函数 参数 <li>result : 在 Promise resolved 后运行并接收结果</li><li>error : 在 Promise rejected 后运行并接收 error</li><li>如果只对成功情况感兴趣 ：<span class="code">PT.then( ( resolve )=&gt; { alert ( resolve )})</span></li><li>同上效果 PT.then(alert)</li></ul><hr><h4>.catch</h4><p>.catch 是.then(null , fun) 的完全模拟,是一个简写形式</p><ul><li>只对 error 感兴趣</li><li>.then(null , errorHandlingFunction)</li><li>.catch(errorHandlingFunction)</li><li>效果一致</li></ul><hr><h4>.finally</h4><ul><li>.finally() 没有参数 总是运行 将处理结果传递给下一个程序</li><li>是执行清理 很好的程序</li><li><span class="code">PT.finally( ()=&gt; { alert(&#39;any&#39;) })</span></li></ul><hr><h4>Promise 链</h4><p>在某些情况下，需要接连执行异步。</p><pre>const PT = new Promise((resolve , reject) =&gt; {\r\n        setTimeout(() =&gt; {\r\n            resolve(&#39;1&#39;)\r\n        }, 1000);\r\n    }).then( (resolve)=&gt; {\r\n        console.log(resolve); // 1\r\n        return resolve*2\r\n    }).then( (resolve)=&gt; {\r\n        console.log(resolve); // 2\r\n        return resolve*2\r\n    }).then( (resolve)=&gt; {\r\n        console.log(resolve); // 4\r\n        return resolve*2\r\n    })</pre><p>在.then 中所使用的程序，可以创建并返回一个Promise</p><p>并由其构建一个 异步行为链</p><pre>const PT = new Promise((resolve , reject) =&gt; {\r\n        resolve(1)\r\n    }).then( (res)=&gt; { // 传入第一次的数值\r\n        return new Promise( (resolve , reject) =&gt; {\r\n            setTimeout(() =&gt; {\r\n                resolve(res * 2) // 使用第一次的数值\r\n            }, 1000);\r\n        })\r\n    }).then(alert) // 2</pre><p>.catch 不必是立即的，可以在多个 .then 后出现，当其中一个.then 出现error,则会触发.catch</p><hr><h2 id="API">API</h2><h4>Promise.all</h4><p>并行执行多个 Promise</p><hr><h4>Promise.allSettled</h4><p>获取所有 Promise 的状态(status) 和 value</p><hr><h4>Promise.race</h4><p>与 Promise.all 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。</p><hr><h4>Promise.resolve / reject</h4><hr><h2 id="AsyncAwait">Async / await</h2><h4>Async function</h4><pre>async function f(){\r\n        return 1;\r\n    }\r\n    f().then(alert) // 1</pre><p>async 关键字使 f 函数始终返回一个 Promise</p><h4>await</h4><pre>async function f(){\r\n        let promise = new Promise( (resolve , reject) =&gt; {\r\n            setTimeout(() =&gt; {\r\n                resolve(1)\r\n            }, 1000);\r\n        })\r\n        let res = await promise; // 等待并获取 promise （*）\r\n        alert(res) // 1\r\n    }\r\n    f()</pre><p>函数执行时，暂停在 * 那一行，拿到resolve后继续执行</p><p>关键字 await 让 JS 引擎等待直到 Promise状态变为 settled(稳定)</p>',58);function g(e,r,l,g,P,f){var O=Object(t["z"])("nav-bar"),w=Object(t["z"])("sidebarR");return Object(t["q"])(),Object(t["d"])("div",null,[Object(t["h"])(O,null,{default:Object(t["H"])((function(){return[n]})),time:Object(t["H"])((function(){return[i]})),_:1}),Object(t["h"])("div",s,[Object(t["h"])("div",o,[c,Object(t["h"])(w,null,{default:Object(t["H"])((function(){return[Object(t["h"])("h5",{onClick:r[1]||(r[1]=function(e){return f.GoSection("Promise")})},[a,h]),Object(t["h"])("h5",{onClick:r[2]||(r[2]=function(e){return f.GoSection("TCF")})},[u,p]),Object(t["h"])("h5",{onClick:r[3]||(r[3]=function(e){return f.GoSection("API")})},[m,b]),Object(t["h"])("h5",{onClick:r[4]||(r[4]=function(e){return f.GoSection("AsyncAwait")})},[d,j])]})),_:1}),v])])])}var P=l("d968"),f=l("1906"),O={components:{navBar:P["a"],sidebarR:f["a"]},methods:{GoSection:function(e){document.getElementById("".concat(e)).scrollIntoView({behavior:"smooth"})}}},w=l("6b0d"),y=l.n(w);const T=y()(O,[["render",g]]);r["default"]=T}}]);
//# sourceMappingURL=chunk-2d0e22f5.5e0fda69.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230c66"],{ee5e:function(r,t,e){"use strict";e.r(t);var n=e("7a23"),a=Object(n["K"])("data-v-08cd94b1");Object(n["t"])("data-v-08cd94b1");var o=Object(n["g"])(" Axios Nodus "),c=Object(n["g"])(" 2021年8月21日21:53:25 "),d={class:"xy"},s={class:"content"},i=Object(n["h"])("h2",null,"axios",-1),l=Object(n["f"])("<h4 data-v-08cd94b1>响应拦截器</h4><small data-v-08cd94b1>在 xyshop 中，添加响应拦截器，用于对后端接口报错的错误信息进行整理。<br data-v-08cd94b1>对登录时接口返回的错误信息的处理</small><pre data-v-08cd94b1>export function ... {\r\n\r\ninstance.interceptors. <strong data-v-08cd94b1>1</strong> response.use( (response) =&gt; {\r\n        return response;\r\n    }, (error) =&gt; {\r\n        let err = <strong data-v-08cd94b1>2</strong> error.response.data.errors <strong data-v-08cd94b1>3</strong> [Object.keys(error.response.data.errors)[0]]\r\n        Toast(err[0]);\r\n        return Promise.reject(error);\r\n    });    \r\n\r\n            }</pre><ol data-v-08cd94b1><li data-v-08cd94b1>response ：请求的响应结果，在拦截器中对结果进行操作。</li><li data-v-08cd94b1>error.response.data.errors = 错误的请求返回的 响应结果 的数据中的错误信息 </li><li data-v-08cd94b1>obj[Object.keys(obj)[0]] 语法 ，在未知键的情况下访问当前对象的 &#39;第一个值&#39;</li></ol><hr data-v-08cd94b1><h4 data-v-08cd94b1>请求拦截器 / 登录操作</h4><small data-v-08cd94b1>在 xyshop 中，进行登录验证功能开发。 </small><pre data-v-08cd94b1><small data-v-08cd94b1>in request.js</small> \r\n     <strong data-v-08cd94b1>1</strong> instance.interceptors.request.use(function (config) {\r\n        const token = window.localStorage.getItem(&#39;token&#39;)\r\n        if (token) {\r\n             <strong data-v-08cd94b1>2</strong> config.headers.Authorization = &#39;Bearer &#39;+token;\r\n        }\r\n        return config;\r\n    }, function (error) {\r\n        return Promise.reject(error);\r\n    });\r\n    <hr data-v-08cd94b1>\r\n <small data-v-08cd94b1>in login.vue</small> \r\nlogin(state).then((result) =&gt; {\r\n        // 登录成功时 服务器会返回一个 授权 Token ，保存在本地 window.localStorage \r\n        window.localStorage.setItem(&#39;token&#39; , result.data.access_token)\r\n        Toast.success(&#39;登录成功&#39;)\r\n        setTimeout(() =&gt; {\r\n            router.go(-1)\r\n        }, 1000);\r\n    })\r\n<hr data-v-08cd94b1>\r\n <small data-v-08cd94b1>in  router/index.js</small>\r\n <strong data-v-08cd94b1>3</strong> router.beforeEach(((to , next) =&gt; {\r\n   <strong data-v-08cd94b1>4</strong> if (to.meta.isAuthRequired &amp;&amp; window.localStorage.getItem(&#39;token&#39;) === &#39;&#39;){\r\n    router.push(&#39;/user/login&#39;)\r\n  }\r\n...\r\n{\r\n    path: &#39;/cart&#39;,\r\n    name: &#39;cart&#39;,\r\n    component: cart,\r\n    meta: {\r\n      isAuthRequired: true\r\n    }\r\n  },</pre><ol data-v-08cd94b1><li data-v-08cd94b1>请求拦截器： 请求发送之前做些什么</li><li data-v-08cd94b1>xyshop JWT 认证，登录后得到 token , 需要添加到 请求头中。<br data-v-08cd94b1> getItem(&#39;...&#39;) 获取到保存的请求头， 将请求头添加到请求里。</li><li data-v-08cd94b1></li></ol>",9);Object(n["r"])();var b=a((function(r,t,e,b,u,v){var g=Object(n["z"])("nav-bar"),h=Object(n["z"])("sidebarR");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])(g,null,{default:a((function(){return[o]})),time:a((function(){return[c]})),_:1}),Object(n["h"])("div",d,[Object(n["h"])("div",s,[i,Object(n["h"])(h),l])])])})),u=e("d968"),v=e("1906"),g={data:function(){return{}},components:{navBar:u["a"],sidebarR:v["a"]},methods:{GoSection:function(r){document.getElementById("".concat(r)).scrollIntoView({behavior:"smooth"})}}},h=e("6b0d"),m=e.n(h);const p=m()(g,[["render",b],["__scopeId","data-v-08cd94b1"]]);t["default"]=p}}]);
//# sourceMappingURL=chunk-2d230c66.4ad03f7c.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab47e"],{1537:function(a,c,d){"use strict";d.r(c);var t=d("7a23"),e=Object(t["K"])("data-v-6c64ac8d");Object(t["t"])("data-v-6c64ac8d");var l=Object(t["g"])(" Lifecycle hooks "),v=Object(t["g"])(" 2021年8月15日08:53:00 "),i={class:"xy"},r={class:"content"},h=Object(t["h"])("h2",null,"生命周期钩子",-1),n=Object(t["f"])('<img style="width:100%;" src="https://vue3js.cn/docs/zh/images/lifecycle.png" alt="" data-v-6c64ac8d><p data-v-6c64ac8d>所有的生命周期钩子自动绑定this上下文到实例中。<small data-v-6c64ac8d>不能使用箭头函数来定义一个生命周期方法</small></p><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeCreate()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>实例初始化之后</li><li data-v-6c64ac8d>data() , event / watcher 事件配置之前被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>created()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>在实例创建完成后调用</li><li data-v-6c64ac8d>已完成 data() , property方法 ， watch / event</li><li data-v-6c64ac8d>挂载还未开始 ， $el 尚未开始</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeMount()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>挂载之前被调用 <small data-v-6c64ac8d>相关的render函数首次调用</small></li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>mounted()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>实例被挂载后</li><li data-v-6c64ac8d>mounted 不会保证所有子组件都被挂载，可以使用 $nextTick 解决</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeUpdate()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>数据更新时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用。只有初次渲染会在服务器端进行</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>update()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>数据更新完毕调用</li><li data-v-6c64ac8d>不会保证所有子组件都被重绘，可以 $nextTick 解决</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>activated()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>被 <span data-v-6c64ac8d>keep-alive</span>缓存的组件 激活 时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>deactivated()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>被 <span data-v-6c64ac8d>keep-alive</span>缓存的组件 停用 时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeUnmount()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>卸载组件实例之前调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>unmounted()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>卸载组件实例后调用， 此时实例不能访问</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-6c64ac8d>errorCaptured() ... </a></h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>当捕获一个来自子孙组件的错误时被调用。...</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-6c64ac8d>renderTracked ... </a></h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>跟踪虚拟DOM 重新渲染时调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#rendertriggered" data-v-6c64ac8d>renderTriggered ... </a></h4>',40);Object(t["r"])();var u=e((function(a,c,d,u,o,s){var p=Object(t["z"])("nav-bar"),b=Object(t["z"])("sidebarR");return Object(t["q"])(),Object(t["d"])("div",null,[Object(t["h"])(p,null,{default:e((function(){return[l]})),time:e((function(){return[v]})),_:1}),Object(t["h"])("div",i,[Object(t["h"])("div",r,[h,Object(t["h"])(b),n])])])})),o=d("d968"),s=d("1906"),p={data:function(){return{}},components:{navBar:o["a"],sidebarR:s["a"]},methods:{GoSection:function(a){document.getElementById("".concat(a)).scrollIntoView({behavior:"smooth"})}}},b=d("6b0d"),f=d.n(b);const j=f()(p,[["render",u],["__scopeId","data-v-6c64ac8d"]]);c["default"]=j}}]);
//# sourceMappingURL=chunk-2d0ab47e.31991c56.js.map
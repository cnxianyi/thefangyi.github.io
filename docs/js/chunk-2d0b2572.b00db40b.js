(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2572"],{2460:function(l,e,i){"use strict";i.r(e);var t=i("7a23"),o=Object(t["g"])(" Base JS "),r=Object(t["g"])(" 2021年7月21日18:55:51 "),c=Object(t["f"])('<div class="content"><div class="md"><h4>去除字符串空格</h4><ul><li>正则表达式</li><li>str.trim() -- 字符串中间的不行</li></ul><pre class="code"><code class="language-js">var str = &quot; 6 6 &quot;;\r\nvar str_1 = str.trim();\r\nconsole.log(str_1); //6 6//输出左右侧均无空格</code></pre><ul> 2 , 9 </ul><hr><h4>一.页面生命周期</h4><ol>事件 <li>DOMContentLoaded: 加载完HTML，部分(&lt;img&gt;...外部资源)尚未加载 -- 初始化接口</li><li>Load: 全部加载</li><li>beforeunload: 用户正在离开 -- 询问是否真的离开</li><li>unload: 用户已经离开 -- 发送统计数据</li></ol><pre class="code"><code class="language-js">document.addEventListener(&quot;DOMContentLoaded&quot;, ready);</code></pre><hr><h4>判断变量数据类型</h4><ol><li>typeof</li><li>constructor</li><li>Object.prototype</li></ol><h4>== &amp; === , 真值 &amp; 假值</h4><ul><li>== : 抽象相等运算符(进行类型转换后比较)</li><li>=== : 严格相等运算符(会比较数据类型)</li></ul><h4>操作节点</h4><ul><ol>创建节点 <li>createDocumentFragment() -- 创建一个DOM片段</li><li>createElement() -- 创建一个具体的元素</li><li>createTextNode() -- 创建一个文本节点</li></ol><ul><li>appendChild() -- 添加节点</li><li>removeChild() -- 移除</li><li>replaceChild() -- 替换</li><li>insertBefore() -- 插入</li></ul><ol>查找节点 <li>getElementByTagName() -- 通过标签名称</li><li>getElementByName() -- 元素的Name属性的值</li><li>getElementById() -- Id 唯一性</li></ol><ol><li>querySelectorAll(css) -- css 所有匹配的元素</li><li>querySelector(css) -- 返回给定css选择器的第一个元素</li></ol></ul><hr><h4>事件委托 &amp; 冒泡^捕获</h4><ul><li>事件委托: 将自己所触发的事件,让他的父元素代为执行</li></ul><hr><h4>继承</h4><ol><li>原型链继承</li><li>构造函数继承</li><li>组合继承</li><li>原型继承</li><li>寄生继承</li><li>寄生组合继承</li></ol></div></div>',1);function n(l,e,i,n,a,u){var d=Object(t["y"])("nav-bar");return Object(t["q"])(),Object(t["d"])("div",null,[Object(t["h"])(d,null,{default:Object(t["D"])((function(){return[o]})),time:Object(t["D"])((function(){return[r]})),_:1}),c])}var a=i("d968"),u=(i("c197"),{components:{navBar:a["a"]}});u.render=n;e["default"]=u}}]);
//# sourceMappingURL=chunk-2d0b2572.b00db40b.js.map
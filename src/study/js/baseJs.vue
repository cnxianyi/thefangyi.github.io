<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Base JS
            </template>
            <template v-slot:time>
                2021年7月21日
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">

            <h4>去除字符串空格</h4>
            <ul>
                <li>正则表达式</li>
                <li>str.trim() -- 字符串中间的不行</li>
            </ul>
            <pre>var str = " 6 6 ";
var str_1 = str.trim();
console.log(str_1); //6 6//输出左右侧均无空格</pre>
<ul>
    2 , 9 ， 12 ，15 ， 13 ，17， 20 ，24 43 79 85 86 87 99  111 133 141 182 183  197 196
</ul>
<hr>



            <h4>一.页面生命周期</h4>
            <ol>事件
                <li>DOMContentLoaded: 加载完HTML，部分(&#60;img&#62;...外部资源)尚未加载 -- 初始化接口</li>
                <li>Load: 全部加载</li>
                <li>beforeunload: 用户正在离开 -- 询问是否真的离开</li>
                <li>unload: 用户已经离开 -- 发送统计数据</li>
            </ol>
<pre>document.addEventListener("DOMContentLoaded", ready);</pre>



            <hr>
            <h4>判断变量数据类型</h4>
            <ol>
                <li>typeof</li>
                <li>constructor</li>
                <li>Object.prototype</li>
            </ol>
            
            

            <h4>== & === , 真值 & 假值</h4>
            <ul>
                <li>== : 抽象相等运算符(进行类型转换后比较)</li>
                <li>=== : 严格相等运算符(会比较数据类型)</li>
            </ul>

            <h4>操作节点</h4>
            <ul>
                <ol>创建节点
                    <li>createDocumentFragment() -- 创建一个DOM片段</li>
                    <li>createElement() -- 创建一个具体的元素</li>
                    <li>createTextNode() -- 创建一个文本节点</li>
                </ol>
                <ul>
                    <li>appendChild() -- 添加节点</li>
                    <li>removeChild() -- 移除</li>
                    <li>replaceChild() -- 替换</li>
                    <li>insertBefore() -- 插入</li>
                </ul>
                <ol>查找节点
                    <li>getElementByTagName() -- 通过标签名称</li>
                    <li>getElementByName() -- 元素的Name属性的值</li>
                    <li>getElementById() -- Id 唯一性</li>
                </ol>
                <ol>
                    <li>querySelectorAll(css) -- css 所有匹配的元素</li>
                    <li>querySelector(css) -- 返回给定css选择器的第一个元素</li>
                </ol>
            </ul>
            <hr>

            <h4>事件委托 & 冒泡^捕获</h4>
            <ul>
                <li>事件委托: 将自己所触发的事件,让他的父元素代为执行</li>
            </ul>
            <hr>

            <h4>继承</h4>
            <ol>
                <li>原型链继承</li>
                <li>构造函数继承</li>
                <li>组合继承</li>
                <li>原型继承</li>
                <li>寄生继承</li>
                <li>寄生组合继承</li>
            </ol>










        </div>
    </div>

    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
export default {
    components: {
        navBar
    }
}
</script>

<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Vue Basis
            </template>
            <template v-slot:time>
                2021年8月14日14:31:04
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h2>指令</h2>
            <sidebarR></sidebarR>
            <ol>
                <li>v-text : v-text="msg" == { {msg} }</li>
                <li>v-html : 将value转化为 HTML 插入</li>
                <li>v-show : 切换 CSS·display</li>
                <li>v-if : 根据 value 的真假值来切换</li>
                <li>v-else : 为 v-if / else-if 添加 else 模块</li>
                <li>v-else-if : v-if 的 else if 模块(可链式调用)</li>
                <li>v-for : 遍历value</li>
                <li>v-on[@] : 绑定事件监听器
                    <ul> 修饰符
                        <li>.stop : 调用 event.stopPropagation()</li>
                        <li>.prevent : 调用 event.preventDefault()</li>
                        <li>.capture : 添加事件侦听器时使用capture 模式</li>
                        <li>.self : 只当事件是从侦听器绑定的元素本身触发时才触发回调</li>
                        <li>.{keyAlias} : 仅当事件是从特定键触发时才触发回调</li>
                        <li>.once ：只触发一次回调</li>
                        <li>.left : 只当点击鼠标左键时触发</li>
                        <li>.right : 只当点击鼠标右键时触发</li>
                        <li>.middle : 只当点击鼠标中键时触发</li>
                        <li>.passive : { passive : true } 模式添加侦听器</li>
                    </ul>
                </li>
                <li>v-bind[:] : 动态绑定</li>
                <li>v-model : 双向绑定</li>
                <li>v-slot[#] : 插槽</li>
                <li>v-pre : 显示原始标签</li>
                <li>v-cloak : 隐藏未编译的标签 直到组件准备完毕</li>
                <li>v-once : 只渲染组件一次</li>
                <li>v-is : 修改HTML解析规则的限制,使某些标签能够在原本不能渲染的标签内渲染</li>
            </ol>
            <hr>
            <h2>Vue 关键词</h2>
            <h4>props</h4>
            <p>可以是数组或对象，接收来自<span>父组件</span>的数据</p>
            <ul> 基于<span>对象</span>的情况
                <li>type(String Number ...) : 用于检查传入值是否匹配</li>
                <li>default(any) : 指定一个默认值，当定义但未传入该值，使用默认值</li>
                <li>required(Boolean) : 设定该值是否必须传入</li>
                <li>validator(function) : 自定义验证函数，验证失败则返回 false ,控制台警告</li>
            </ul>

            <hr>
            <h4>computed 计算属性</h4>
            <p>计算属性的结果会被缓存</p>
            <hr>
            <h4>methods 方法</h4>
            <hr>
            <h4>watch 侦听</h4>
            <p>侦听组件实例上的响应式 Property 或函数计算结果的变化</p>
            <hr>
            <h4>emits</h4>
            
            <hr>

            <h2>组件之间的通信</h2>
            <h4>数据 父传子 @</h4>
            <pre>in parent
    &#60;son&#62; :str='s' :a='a'>&#60;/son&#62;
    data() {
        return {
            s : 'str'
            a : ['a' , 'r']
        }
    }


in son 
    props: {
        str: {
            type: String, // 类型
            required: true, // 是否必须传入
            default: 'string', // 默认值
            validator: (value)=> {
                return ['s' , 'str'].indexOf(value) !== -1
            } // 传入的值必须匹配 数组内的值
        },
        a: {
            type: Array;
        }
    }</pre>
    <hr>
    <h4>数据 子传父 $emit</h4>
    <pre>in son 
    data() {
        return {
            num : 10
        }
    },
    methods: {
        outPar(){
            this.$emit('par' , this.num)
        }
    },
    &#60;button @click='outPar'&#62;&#60;button&#62;


in par
    &#60;son @par='getson'&#62;&#60;son&#62;
    methods: {
        getson(value){
            console.log(value);
        }
    },</pre>
    <hr>
    <h4>调用父组件 $parent</h4>
    <pre>fun(){
    this.$parent.value, // 访问父组件的值
    this.$parent.method(), // 方法
    this.$parent.$parent..., // 父组件的父组件的...
    this.$root. ... // 根组件
}</pre>
    <hr>
    <h4>调用子组件 $children</h4>
    <pre>in par 
    &#60;son ref='name'&#62;&#60;/son&#62;
    fun(){
        this.refs.name . ... // 子组件
    }</pre>
    <hr>

    <h2>插槽</h2>
        <h4>默认插槽</h4>
        <pre>&#60;component&#62;
    插槽内容
&#60;/component&#62;

in component
    &#60;.&#62;
        &#60;slot&#62;&#60;/slot&#62;
        // &#60;slot&#62; 设置默认值 &#60;/slot&#62;
    &#60;/.&#62;

== &#60;button&#62;插槽内容&#60;/button&#60;&#62;/code&#60;&#62;/pre&#62;
</pre>
    <hr>
    <h4>具名插槽</h4>
    <pre>&#60;slot name='str'&#62;&#60;/slot&#62;

in component 
&#60;template v-slot:header&#62;
    any
&#60;/template&#62;
        </pre>
        <p>不具名的情况下自动为 default</p>
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
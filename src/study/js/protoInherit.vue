<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Proto & Inherit
            </template>
            <template v-slot:time>
                2021年7月23日
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            <h4>[[Prototype]] : 原型</h4>
            <p><span>原型继承:</span> 从一个对象中读取一个不存在的属性，js会自动从原型中读取该属性。</p>
            <pre class="code">let n = Object.create(null , { 
    name: {
        value: 'n'
    }
})</pre>
    <small>完全的数据字典对象 , 不具备原型</small><img class="s" src="~_img/01.png" alt="">
    <hr>
    
    <h4>方法优先级</h4>
    <small>在自己与原型都有一个同名方法时，优先调用自己的</small>
    <pre>let son = {
    show(){
        console.log('son');
    },
    render(){
        console.log('son.render');
    }
};
son.__proto__.render = ()=> {
    console.log('father.render');
} // son.render</pre>

<hr>

<h4>原型设置</h4>
<pre>let son ={name: 'son'}
let parent = {name: 'parent'}
Object.setPrototypeOf(son,parent);//设置原型为parent
Object.getPrototypeOf(son)//parent - 获取son的原型</pre>


    
    
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

<style lang="scss" scoped>
    
</style>

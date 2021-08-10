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
            
            <h1>数据类型</h1>
            <sidebarR>
                <h5><i class='bx bxs-label'></i> 原始类型</h5>
                <ol>
                    <li><a href="#String" @click="GoSection('String')">String</a></li>
                    <li><a href="#Number" @click="GoSection('Number')">Number</a></li>
                    <li><a href="#Bigint" @click="GoSection('Bigint')">Bigint</a></li>
                    <li><a href="#Boolean" @click="GoSection('Boolean')">Boolean</a></li>
                    
                    <li><a href="#Null" @click="GoSection('Null')">Null</a></li>
                    <li><a href="#Undefined" @click="GoSection('Undefined')">Undefined</a></li>
                    <li><a href="#Symbol" @click="GoSection('Symbol')">Symbol</a></li>
                </ol>
                <h5><i class='bx bxs-label'></i> 对象</h5>
                <ol><li><a href="#Object" @click="GoSection('Object')">Object</a></li></ol>
                
            </sidebarR>
            
            <h2 id="String">String</h2>
            <h5>1.访问字符串</h5>
                <pre><code class="language-js">    // 字符串长度
console.log(`123`.length);// 3 
console.log(`123`[2]); // 3 没有则返回 undefined
console.log(`123`.charAt(2)); // 3 没有则返回 ''
for (const char of `hello`) {
    console.log(char); // h , e , l , l , o
}
<hr>
</code></pre> <h5>2.大小写</h5><pre><code class="language-js">
console.log(`AAA`.toLowerCase()); // aaa
console.log(`aaa`.toUpperCase()); // AAA
<hr>
</code></pre> <h5>3.查找字符串</h5><pre><code class="language-js">
// str.indexOf(substr , pos) 查询第一个字符串所在位置
let str = `is a str`
console.log(str.indexOf(`a str`)); // 3
console.log(str.indexOf(`s` , 3)); // 5 从3开始查询
console.log(str.indexOf(`null`)); // -1
        // 运用取反 ~ 运算符 | ~n = -(N+1)
if (~str.indexOf(`is`)) {
    console.log(`0`);
    // 首次查询成功返回 0 , 假值导致if失效
}
str.includes(substr , pos) // 是否包含返回true/false
str.startsWith('str') // 是否以str开始
str.endsWith('str') // 是否以str结束
<hr>
</code></pre><h5>4.获取字符串</h5> <pre><code class="language-js">
 str.slice(start [, end]) // 返回start ~ end 之间的字符串
 str.substring(start [, end]) // 允许 start > end
 str.substr(start [, length]) // 指定获取的长度
console.log(str.slice(0 , 3)); // is

 str.trim() 删除字符串前后的空格
 str.repeat(n) 重复字符串N次</code></pre> 
<hr>
            <h2 id="Number">Number</h2>
                <h5>1.编写多个0000</h5>
                <pre><code class="language-js">let ms = 1e3; // 1000
let sm = 1e-3;// 0.001</code></pre>
<hr>
                <h5>2.Math</h5>
                <pre><code class="language-js">    // MATH
Math.floor(); // 向下舍入 3.1 > 3 | -1.1 > -2
Math.ceil(); // 向上舍入
Math.round(); // 四舍五入
Math.trunc(); // 去掉小数点后的内容

Math.random() // 返回 0~1 的随机数
Math.max/min (a , b ...) // 返回最值
Math.pow(n , power) // n的p次幂

// 不精确的计算
let num = 12.34;
num.toFixed(1);// '12.3' // 舍入到n位，类似 Math.round()

// IEEE-745 数字格式损失精度
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // 0.30

</code></pre>
    <hr>
                <h5>3.isFinite & isNaN</h5>
            <pre><code class="language-js">alert(isNaN('str')) // true 将参数转换为数字
alert(isNaN(NaN)) // true
alert(NaN === NaN) // false

alert(isFinite('12')) // true 将参数转换为数字，是数字则true
alert(isFinite(NaN)) // false</code></pre>
<hr>

                <h5>4.数字转换</h5>
                    <pre><code class="language-js">console.log(+'100'); // 100
console.log(Number('100')); // 100
console.log(parseInt('100px')); // 100 从头开始读取数字
console.log(parseFloat('1.5rem')); // 1.5 从头开始读取浮点数</code></pre>
             
            <h2 id="Bigint">Bigint</h2>
            <h2 id="Boolean">Boolean</h2>
            <h2 id="Object">Object</h2>
            <h2 id="Null">Null</h2>
            <h2 id="Undefined">Undefined</h2>
            <h2 id="Symbol">Symbol</h2>
            
        </div>
    </div>

    </div>
</template>

<script>
// document.getElementById("top").scrollIntoView();
import navBar from '../../components/common/navBar.vue'
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

<style lang="scss" scoped>
    
</style>
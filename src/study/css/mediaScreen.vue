<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                媒体查询 media
            </template>
            <template v-slot:time>
                2021年7月21日
            </template>
        </nav-bar>

        <div class="xy">
            <div class="content">
                <p>用一个父级作为布局容器，通过媒体查询改变布局</p>
                <ol> 响应式尺寸划分
                    <li>超小屏幕: (手机 , &#60;768px) , 宽度为 100%</li>
                    <li>小屏幕: (平板 , >= 768px) , 宽度为 750px</li>
                    <li>中等屏幕: (显示器 , >= 992px) , 宽度为 970px</li>
                    <li>大屏幕: (大显示器 , 大于1200px) , 宽度为 1170px</li>
                </ol>
<pre class="code"><code class="language-css">p { color: red }
@media screen and (max-width: 767px) {
    .container {
        width: 100%;
    } ...
}</code></pre>
            </div>
        </div>

        <div class="container">
            <ul>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
                <li>案例</li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .container {
        height: 150px;
        background-color: #f0a1a8;
        margin: 0 auto;
        width: 750px;
        ul {
            list-style: none;
        }
        li {
            float: left;
            height: 30px;
            padding: 5px;
            width: 93.75%;
            margin-right: 5%;
            background-color: aqua;
        }
    }
    // 超小屏幕 <768 
    @media screen and (max-width: 767px) {
        .container {
            width: 100%;
        }
    }
    // 小屏幕 >=768
    @media screen and (win-width: 768px) {
        .container {
            width: 750px;
        }
    }
    // 中屏幕 >=992
    @media screen and (min-width: 992px){
        .container{
            width: 970px;
        }
    }
    //大屏幕 >= 1200
    @media screen and (min-width: 1200px){
        .container {
            width: 1170px;
        }
    }
</style>

<script>
import Prism from 'prismjs';
import navBar from 'common/navBar.vue'

export default {
    components: {
        navBar
    }
}
</script>
<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                CSS Demo
            </template>
            <template v-slot:time>
                2021年7月21日
            </template>
        </nav-bar>

        <div class="xy">
            <div class="content">
                <div style="height:1px;overflow:hidden;background:red"></div>
                <code>style="height:1px;overflow:hidden;background:red"</code>

                <hr>

                <h4>CSS 隐藏元素方法</h4>
                <button @click="hidden">visibility</button>
                <ul id="hidden">
                    <li>display: none(取消加载)</li>
                    <li>visibility: hidden(透明)</li>
                    <li>Position</li>
                </ul>

                <hr>
                <h4>清除浮动</h4>
                    <ul>
                        <li>clear:both</li>
                        <li>overflow: hidden</li>
                        <li>伪元素 (:after(什么之后)  :before(什么之前))</li>
                        <code>给父元素添加一个类<br>.clearfix::after {content: "";display: block;clear: both;}</code>
                    </ul>

                <hr>
                <h4>transition</h4>
                <ul>
                    <li>property: 过渡的 CSS 属性的名称</li>
                    <li>duration: 动画花费时间</li>
                    <li>timing-function: 时间曲线。ease:默认 linear(匀速) ease-in(加速) ease-out(减速) ease-in-out(先快后慢) </li>
                    <li>delay: 过渡效果何时开始</li>
                    <li>简写按照顺序</li>
                </ul>




            </div>
        </div>
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
export default {
    components: {
        navBar
    },
    methods: {
        hidden(){
            document.getElementById('hidden').style ='visibility :hidden'
            setTimeout(() => {
                document.getElementById('hidden').style ='visibility :visible'
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
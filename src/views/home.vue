<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                首页
            </template>
        </nav-bar>

        <div class="content">
            <div class="one">
111
            </div>

            <div class="two">
222
            </div>
            <div class="two">
222
            </div>
            <div class="one">
222
            </div>
            <div class="md">
<h1 >Flex</h1>
<ul>
<li>Flexible Box (弹性布局)</li>
<li>Webkit 内核的浏览器，必须加上-webkit前缀</li>
<li>设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效</li>

</ul>
<h2 >基本语法</h2>
<ul>
<li><p>容器有两根主轴</p>
<ul>
<li>水平的主轴(main axis)</li>
<li>垂直交叉轴(cross axis)</li>

</ul>
</li>

</ul>
<h3 >flex-direction (项目排列方向)</h3>
<pre><code class='language-css' lang='css'>flex-direction:
  * row (默认) - 主轴水平,左侧开始
  * row-reverse - 主轴水平,右侧开始
  * column - 主轴垂直,上方开始
  * column-reverse - 主轴垂直,下方开始
</code></pre>
<p>&nbsp;</p>
<h3 >flex-wrap (换行)</h3>
<pre><code class='language-css' lang='css'>flex-wrap:
  * nowrap(默认) - 不换行
  * wrap - 向下换行
  * wrap-reverse - 向上换行(第一行在下方)
</code></pre>
<h3 >flex-flow (flex-direction属性和flex-wrap属性的简写)</h3>
<ul>
<li>默认值为 row nowrap</li>

</ul>
<h3 >justify-content (主轴对齐方式)</h3>
<pre><code class='language-css' lang='css'>justify-content:
  * flex-start(默认) - 左对齐
  * flex-end - 右对齐
  * center - 居中
  * space-between - 两端对齐 , 间距相等
  * space-around - 项目两侧相等
</code></pre>
<h3 >align-items (交叉轴对齐方式)</h3>
<pre><code class='language-css' lang='css'>align-items:
  * flex-start 起点对齐(上)
  * flex-end 终点对齐(下)
  * center  中点对齐(居中)
  * baseline 第一行文字为基线对齐
  * stretch (默认) 自动铺满
</code></pre>
<h3 >align-content (多线对齐)</h3>
<hr />
<h2 >项目的属性</h2>
<h3 >order(排序)</h3>
<pre><code class='language-css' lang='css'>.item {
    order: &lt;integer&gt; (-1 ~ 99)
}
设置优先级,依次显示
</code></pre>
<h3 >grow(行内分割)</h3>
<pre><code class='language-css' lang='css'>.item {
  flex-grow: &lt;number&gt;; /* default 0 */
}

</code></pre>
<h3 >flex-shrink(自动缩小)</h3>
<pre><code class='language-css' lang='css'>.item {
  flex-shrink: &lt;number&gt;; /* default 1 */
}
为0 则缩小优先级降低
</code></pre>
<h3 >flex（简写）</h3>
<ul>
<li>flex-grow, flex-shrink 和 flex-basis(默认 0 1 auto)</li>
<li>优先使用flex , 减轻负载</li>

</ul>
<h3 >align-self属性</h3>
<p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖  align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: left;
        position: relative;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 30px;
    }
</style>

<script>
import navBar from '../components/common/navBar.vue'

export default {
    components: {
        navBar
    },
}
</script>
<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Sass Demo
            </template>
            <template v-slot:time>
                2021年7月21日18:38:55
            </template>
        </nav-bar>

        <div class="content">
            <div class="md">
                <h4>父选择器</h4>
<pre class="code"><code class="language-css">a {
    &:hover {
        text-decoration: none;
    }
}&为嵌套规则外的父选择器</code></pre> 
        
            </div>
        </div>
    </div>
</template>


<script>
import Prism from 'prismjs';
import navBar from '../../components/common/navBar.vue'

export default {
     components: {
        navBar
    }

}
</script>
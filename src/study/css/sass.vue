<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Sass Demo
            </template>
            <template v-slot:time>
                2021年7月21日
            </template>
        </nav-bar>

        <div class="xy">
            <div class="content">
                <h4>父选择器</h4>
<pre>a {
    &:hover {
        text-decoration: none;
    }
}&为嵌套规则外的父选择器</pre> 
        
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
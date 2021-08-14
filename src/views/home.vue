<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Home &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </template>
            <template v-slot:time>
                2021年8月14日08:49:25
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            
            
        </div>
    </div>

    </div>
</template>

<script>

import navBar from 'common/navBar.vue'
import Prism from 'prismjs';
export default {
    components: {
        navBar,
        
    },
    
}
</script>
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

    <div class="content">
        <div class="md">
            
        </div>
    </div>

    </div>
</template>

<script>

import navBar from '../../components/common/navBar.vue'
import Prism from 'prismjs';
export default {
    components: {
        navBar
    }
}
</script>
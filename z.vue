<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                
            </template>
            <template v-slot:time>
                
            </template>
        </nav-bar>

    <div class="xy">
        <div class="content">
            
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from '../../components/common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
import Prism from 'prismjs';
import axios from 'axios';
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
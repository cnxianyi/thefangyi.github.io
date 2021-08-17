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
            <h2></h2>
            <sidebarR></sidebarR>
        </div>
    </div>
     
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
import sidebarR from 'common/SidebarR.vue'
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
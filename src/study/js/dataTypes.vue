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
            
            <h2 style="text-align: center">数据类型</h2>
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
            <h5 class="Anchor_point">String</h5>
            <h4 id="String">String</h4>
            <h4 id="Number">Number</h4>
            <h4 id="Bigint">Bigint</h4>
            <h4 id="Boolean">Boolean</h4>
            <h4 id="Object">Object</h4>
            <h4 id="Null">Null</h4>
            <h4 id="Undefined">Undefined</h4>
            <h4 id="Symbol">Symbol</h4>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
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
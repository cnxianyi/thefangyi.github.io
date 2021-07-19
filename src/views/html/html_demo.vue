<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                HTML Demo
            </template>
        </nav-bar>

        <div class="content">
            <div class="one">
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .one {
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>

<script>
import navBar from '../../components/common/navBar.vue'

export default {
    components: {
        navBar
    },
}
</script>
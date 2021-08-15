<template>
    <div>
        <nav-bar>
            <template v-slot:default>
                Bootstrap Demo
            </template>
            <template v-slot:time>
                2021年7月21日
            </template>
        </nav-bar>
    </div>
</template>

<script>
import navBar from 'common/navBar.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    components: {
        navBar
    }
}
</script>


<template lang="">
    <div>
        
    </div>
</template>
<script>
import { onMounted } from 'vue'
import { getHomeAllData } from './assets/network/home'
export default {
    
    setup(props) {
        onMounted(() => {
            getHomeAllData().then((result) => {
                console.log(result);
            }).catch((err) => {
                
            });
        })
    }
}
</script>
<style lang="scss">
@import './assets/base.scss';
    
</style>
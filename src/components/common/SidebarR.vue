<template>
<div>
    <div class="right_nav">
        <slot></slot>
    </div>
    <div class="icon" @click="goTop" v-if="top">
        <!-- <i class='bx bxs-to-top bx-fade-up' ></i> -->
        <i class='bx bx-arrow-to-top'></i>
    </div>
    
</div>
</template>

<script>
import {mounted} from 'vue'

export default {
    data() {
        return {
            height: 0,
            scrollTop: 0,
            top: false,
            
        }
    },
    methods: {
        watchScroll(){
                this.scrollTop = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop)       
                if (this.scrollTop > 500) {
                    this.top = true
                }else{
                    this.top = false
                }
                console.log(this.scrollTop);
        },
        goTop(){
//  https://zhuanlan.zhihu.com/p/97342844 白嫖
            this.scrollTop = (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop)
            if (this.scrollTop > 1) {
                window.requestAnimationFrame(this.goTop);
                scrollTo(0, Math.floor(this.scrollTop * 0.94));
            } else {
                scrollTo(0, 0);
            }
            console.log();
        },
        
        
        
        },
    mounted() {
        // window.addEventListener('scroll', this.watchScroll, true)
        window.addEventListener('scroll' , this.watchScroll)
        
    },
    destroyed () {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.watchScroll)
  }
}
</script>

<style lang="scss" scoped>

    @media screen and (min-width: 992px){
        .right_nav {
        position: fixed;
        right: -30px;
        top: 200px;
        width: 160px;
        height: auto;
        
    }
    }
    @media screen and (max-width: 991px){
        .right_nav {
        display: none;
    }
    }

    i {
        font-size: 40px;
        position: fixed;
        right: 5%;
        bottom: 10%;
        
    }
    
    
        
    
</style>
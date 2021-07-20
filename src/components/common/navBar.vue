<template>
    <div class="nav-bar">

        
        <div class="center">
            <i @click="goBack" id="left" class='bx bxs-chevrons-left' style='color:#22202e' ></i>
            <strong><slot>Thefangyi</slot></strong>
            <div class="right">
                <a href="https://twitter.com/NSZsj0XV79SQ8Yt"><i id="right" class='bx bxl-twitter' style='color:#1da1f2' ></i></a>
                <a href="https://www.facebook.com/profile.php?id=100049423839316"><i id="right" class='bx bxl-facebook-circle' style='color:#0f92f3'  ></i></a>
                </div>
        </div>

        <div class="left"></div>
            
        <hr/>
         
    </div>
</template>

<style lang="scss" scoped>
.nav-bar{
    margin-top: 45px;
    .center {
        margin-left: 7.5%;
        font-size: 28px;
        
        .right{
            display: inline;
            float: right;
            margin-right: 10%;
            a{
                padding: 3px;
            }
        }
    }
    
    hr {
        
        margin:0 auto;
        width: 90%;
        border: 3px solid #22202e;
        border-radius: 20px;
    }
}
    
#left {
    position: relative;
    right: 3%;
    top: 3px;
    
}
#right {
    position: relative;
    top: 5px;
}
</style>

<script>
import {useRouter} from 'vue-router'
export default {
    setup(props) {
        const router = useRouter()
            
        const goBack = () => { // 返回上个界面
            history.go(-1)
        }
        return {
            goBack
        }
    }
}
</script>
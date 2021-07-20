<template>
    <div class="nav-bar">

        
        <div class="center">
            <i @click="goBack" id="left" class='bx bxs-chevrons-left' style='color:#22202e' ></i>
            <strong><slot>Thefangyi</slot></strong><div class="by">by<slot name="time"></slot></div>
            <div class="right">
                <a href="https://twitter.com/NSZsj0XV79SQ8Yt"><i id="right" class='bx bxl-twitter'></i></a>
                <a href="https://www.facebook.com/profile.php?id=100049423839316"><i id="right" class='bx bxl-facebook'></i></a>
                
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
        margin-left: 12.5%;
        font-size: 28px;

        strong {
            padding-right: 25%;
            width: 50px;
        }
        .by {
            display: inline;
            font-size: 12px;
            font-weight: 100;
        }
        .right{
            display: inline;
            float: right;
            margin-right: 10%;
            a{
                padding: 3px;
                color: #22202E;
                :link {
                    color: #cf4813;
                }

                :visited {
                    color: pink;
                }

                :hover {
                    color: #1DA1F2;
                }


                :active {
                    color: #1DA1F2;
                }
            }
            
            
            
        }
    }
    
    hr {
        
        margin:0 auto;
        width: 90%;
        border: 2px solid #cf48137a;
        border-radius: 20px;

        // height: 3px;
        // background: #cf4813; /* For browsers that do not support gradients */ 
        // background: -webkit-linear-gradient(to right, #cf4813 , yellow); /*For Safari 5.1 to 6.0 */
        // background: -o-linear-gradient(to right, #cf4813, yellow); /* For Opera 11.1 to 12.0 */ 
        // background: -moz-linear-gradient(to right, #cf4813, yellow); /* For Firefox 3.6 to 15 */ 
        // background: linear-gradient(to right, #cf4813, yellow); /* Standard syntax */ 

        width:80%;
        margin:0 auto;
        border: 0;
        height: 4px;
        background: #333;
        background-image: linear-gradient(to right, #22202E, #cf4813, #f0a1a8);

 }
    }

    
#left {
    position: relative;
    right: 3%;
    top: 3px;
    
}
#right {
    position: relative;
    right: 20%;
    top: 7px;
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
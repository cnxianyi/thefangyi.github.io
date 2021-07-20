<template>
    <div id="getId" class="button click" @click="getId">
        <strong><slot>Go</slot></strong>
    </div>
</template>

<style lang="scss" scoped>
// 复用性有待优化



    .button {
        // margin-top: 2%;
        
        // margin-left: 3%;
        margin: 5px;
        border-radius: 10px;
        background-color: #ff4350;
        box-shadow: rgba(214, 30, 30, 0.767) -5px 5px 5px;
        min-width: 70px;
        min-height: 35px;
        transition: all 0.3s ease;
        text-align: center; // 文本水平居中
        display: table; // 
        strong {

            font-size: 16px;
            color: aliceblue;    
            padding-left: 15px;
            padding-right: 15px;
            display: table-cell;
            vertical-align: middle; // 元素放在父元素的中部

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
    }
</style>

<script>
export default {
    props: {
        type: String
    },
    methods: {
        
        getId(){
            if(this.type){
                
            }else{
                document.getElementById('getId').style = 'box-shadow: rgba(214, 30, 30, 0.900) 0px 5px 15px;'
                setTimeout(() => {
                    document.getElementById('getId').style = 'box-shadow: rgba(214, 30, 30, 0.300) 0px 5px 15px;'
                    setTimeout(() => {
                        document.getElementById('getId').style = 'box-shadow: rgba(214, 30, 30, 0.900) 0px 5px 15px;'
                        setTimeout(() => {
                            document.getElementById('getId').style = 'box-shadow: rgba(214, 30, 30, 0.767) -5px 5px 5px;'
                        }, 500);
                    }, 1000);
                }, 500);
            }
            
            
            
            
        }

    }
}
</script>
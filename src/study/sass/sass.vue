<template>
<div class="parent">
    <div class="father">
        <div class="son">
            <p>ppp</p>
        </div>
    </div>
</div>
    
</template>

<style lang="scss">
/* ! 多行注释会被编译进CSS文件中，首字符为 ！ 常用与添加版权信息 */

    // 嵌套
    .parent {
        .father {
            .son { // 属性嵌套
                    font: {
                        family: Consolas;
                        size: 30em;
                    }
            }
        }
        
        //运算
        height: 1in + 8pt;  
        padding: (8/2)px;
        color: #010203*2;
        content: "Foo" + ar;// "Foo Bar"
        content: Foo + "Bar" // Foo Bar
    }
    body{
        // 变量 $
        $width: 5em;
        width: $width;
    }
    
</style>
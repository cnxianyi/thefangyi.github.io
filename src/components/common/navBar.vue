<template>
    <div class="nav-bar">

        
        <div class="center"><strong><slot>Thefangyi</slot></strong></div>
        
        <hr/>
         
    </div>
</template>

<style lang="scss" scoped>

.nav-bar{
    margin-top: 45px;

    .center {
        margin-left: 7.5%;
        font-size: 20px;
    }

    hr {
        margin:0 auto;
        width: 90%;
        border: 3px solid #22202e;
        border-radius: 10px;
    }
}
    
    
</style>
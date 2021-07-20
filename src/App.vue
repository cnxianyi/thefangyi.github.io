<template>
<div>
  <div class="sidebar close" id="SidebarMenu">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <div class="logo-details" @click="getMenu">
      <i class='bx bxs-yin-yang'></i>
      <span class="logo_name">Thefangyi</span>
    </div>
    <ul class="nav-links">
        
      <li>
        <div class="icon-link">
          <a href="#">
            <router-link to="/">
          <i class='bx bxl-vuejs' style='color:#41b883'  ></i>
          <span class="link_name"> Vue</span></router-link>
          </a>
          <i class='bx bxs-chevron-down arrow' @click="getSon(1)"></i>
        </div>
        <ul class="sub-menu" :class="{truth1}">
            <li><a class="link_name" href="#">Vue</a></li>
            <li><a href="#">vuex</a></li>
            <li><a href="#">router</a></li>
          </ul>
      </li>
          <hr class="style-one">
      <li>
        <a href="#">
          <i class='bx bxs-book-content' style="color:#ee1c25ff"></i>
          <span class="link_name">汉语</span>
        </a>
        <ul class="sub-menu blank">
            <li><a class="link_name" href="#">汉语</a></li>
        </ul>
      </li>
          <hr class="style-one">
      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bxl-nodejs' style="color:#EFD81D"></i>
          <span class="link_name">JS</span>
          </a>
          <i class='bx bxs-chevron-down arrow' @click="getSon(2)"></i>
        </div>
            <ul class="sub-menu" :class="{truth2}">
            <li><a class="link_name" href="#">js</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web</a></li>
            <li><a href="#">Design</a></li>
          </ul>
      </li>
          <hr class="style-one">
      <li>
        <div class="icon-link">
          
          <a href="#">
          <i class='bx bxl-css3' style="color:#254BDD"></i>
          <span class="link_name">CSS</span>
          </a>
          <i class='bx bxs-chevron-down arrow' @click="getSon(3)"></i>
        </div>
        <ul class="sub-menu" :class="{truth3}">
            <li><a class="link_name" href="#">CSS</a></li>
            <router-link to="/"><li><a href="#">Flex</a></li></router-link>
            <li><a href="#">Sass</a></li>
            <li><a href="#">3333</a></li>
          </ul>
      </li>

      <hr class="style-one">
      <li>
        <a href="#">
          <i class='bx bxl-html5' style="color:#DD4D26"></i>
          <span class="link_name">HTML</span>
        </a>
        <ul class="sub-menu blank">
            <li><a class="link_name" href="#"><router-link to="/html">HTML</router-link></a></li>
        </ul>
      </li>
    <hr class="style-one">
      <li>
        <a href="#">
          <i class='bx bx-library'></i>
          <span class="link_name">英语</span>
        </a>
        
        <ul class="sub-menu blank">
            <li><a class="link_name" href="#"><router-link to="/english/words">Words</router-link></a></li>
        </ul>
      </li>
      <hr class="style-one">
      <li>
        <a href="#">
          
          <i class='bx bx-cog'></i>
          <span class="link_name">Element</span>
          
        </a>
        <ul class="sub-menu blank">
            <li><a class="link_name" href="#"><router-link to="/show">Show</router-link></a></li>
        </ul>
      </li>
      <hr class="style-one">

    </ul>

    </div>
    <div id="content">
      <router-view></router-view>
    </div>
    
    
</div>
</template>

<style lang="scss" >
</style>
  
<script>
// import 'boxicons' // icon 组件导入
// import 'normalize.css/normalize.css' // 初始化css 文件(normalize插件)
import './assets/css/App.scss'
import { computed } from '@vue/runtime-core'
import {created , mounted , watch} from 'vue'
export default {
  // setup(props) {
  //   const watchChangeSize = ()=> {
  //           //可视区的宽/高(DOM) 
  //           //offsetHeight（带边框）和clientHeight（不带边框）区别参考上一篇文章     
  //           this.data.offsetWid = document.documentElement.clientWidth;
  //           this.offsetHei = document.documentElement.clientHeight;
  //           console.log(offsetWid);
  //           console.log(offsetHei);
  //       },
  //       const onload = ()=> { window.onload
  //           console.log('页面加载完毕')
  //           watchChangeSize()
 
  //       },
  //       window.onresize=function(){  
  //           console.log('监听变化')
  //           watchChangeSize();
            
  //       }
  // },
  // setup(props) {
  //   const offsetWid =  document.documentElement.clientWidth
  //   window.onresize(function(){
  //     console.log(offsetWid);
  //   }) 
  // },
watch:{ //````
    screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                console.log(that.screenWidth)
                that.timer = false
            },400)
        }
    }
},
  data() {
    
      return {
      truth1: true,
      truth2: true,
      truth3: true,
      width: document.documentElement.clientWidth,
      screenWidth: document.body.clientWidth
      // offsetWid : document.documentElement.clientWidth,
      // offsetHei : document.documentElement.clientHeight,
      // onresize: window.onresize
    }
  },
  computed: {
    
  },
  methods: {
       
// 笨方法 获取id 来进行 class 的切换
    getMenu(){
      console.log(this.offsetWid);
      let name = document.getElementById('SidebarMenu').className
      // let width = document.documentElement.clientWidth
      let width = document.documentElement.clientWidth
      if(name == 'sidebar'){ // 缩回去
          // 不判断 全部为收缩状态
          this.truth1 = true
          this.truth2 = true
          this.truth3 = true
        document.getElementById('content').style = `width: ${width - 78}px`
        document.getElementById('SidebarMenu').className = 'sidebar close'
      }else{
        document.getElementById('content').style = `width: ${width - 260}px`
        document.getElementById('SidebarMenu').className = 'sidebar'
      }
    },
// 笨方法 获取id判断 是否为真值
    getSon(n){
      switch (n) {
        case 1:
          if (this.truth1  == true) {
            this.truth1 = false
          }else{
            this.truth1 = true
          }
          break;
          case 2:
          if (this.truth2  == true) {
            this.truth2 = false
          }else{
            this.truth2 = true
          }
          break;
          case 3:
          if (this.truth3  == true) {
            this.truth3 = false
          }else{
            this.truth3 = true
          }
          break;
      
        default:
          alert('bug is coming');
          break;
      }
    },
    
  },
    
  mounted() {
    document.getElementById('content').style = `width: ${this.width - 78}px`
    const that = this // ````
    window.onresize = () => {
        return (() => {
          document.getElementById('content').style = `width: ${document.body.clientWidth - 78}px`
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
            console.log(window.innerWidth+'WW');
            console.log(window.innerHeight+'HH');
        })()
    }
  }
        
    
  }
</script>
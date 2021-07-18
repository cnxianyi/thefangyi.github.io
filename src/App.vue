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
            <router-link to="/hom">
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
            <li><a href="#">1111</a></li>
            <li><a href="#">222</a></li>
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
            <li><a class="link_name" href="#">HTML</a></li>
        </ul>
      </li>
    <hr class="style-one">
      <li>
        <a href="#">
          <i class='bx bx-library'></i>
          <span class="link_name">英语</span>
        </a>
        
        <ul class="sub-menu blank">
            <li><a class="link_name" href="#">英语</a></li>
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
import 'boxicons' // icon 组件导入
import 'normalize.css/normalize.css' // 初始化css 文件(normalize插件)
import './assets/CSS/App.scss'

import { computed } from '@vue/runtime-core'
import {created , mounted} from 'vue'

export default {
  data() {
    

      return {
      truth1: true,
      truth2: true,
      truth3: true,
      width: document.documentElement.clientWidth
    }
  },
  computed: {
    
  },
  methods: {
// 笨方法 获取id 来进行 class 的切换
    getMenu(){
      
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
    }
  },
    
  mounted() {
    document.getElementById('content').style = `width: ${this.width - 78}px`
  },
    
  }



</script>
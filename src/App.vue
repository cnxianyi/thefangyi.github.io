<template>
<div>
  <div class="sidebar close nd" id="SidebarMenu">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <div class="logo-details" @click="getMenu()">
      <i id="yyIcon" class='bx bxs-yin-yang'></i>
      <span class="logo_name">Thefangyi</span>
    </div>
    <ul class="nav-links">
        
      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bxl-vuejs' style='color:#41b883'  ></i>
          <span class="link_name"> Vue</span>
          </a>
          <i class='bx bxs-chevron-down 1 arrow'  @click="getSon(1)"></i>
        </div>
        <ul class="sub-menu" :class="{truth1}">
            <li><a class="link_name" href="#">Vue</a></li>
            <li><a href="#">vuex</a></li>
            <li><a href="#">router</a></li>
          </ul>
      </li>
          <hr class="style-one">


      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bxs-book-content' style="color:#ee1c25ff"></i>
          <span class="link_name">汉语</span>
          </a>
          <i class='bx bxs-chevron-down 5 arrow'  @click="getSon(5)"></i>
        </div>
        <ul class="sub-menu" :class="{truth5}">
            <li><a class="link_name" href="#">CHN</a></li>
          </ul>
      </li>

          <hr class="style-one">
      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bxl-nodejs' style="color:#EFD81D"></i>
          <span class="link_name">JS</span>
          </a>
          <i class='bx bxs-chevron-down 2 arrow' @click="getSon(2)"></i>
        </div>
            <ul class="sub-menu" :class="{truth2}">
            <li><a class="link_name" href="#">JS</a></li>
            <router-link to="/js/base"><li><a href="#">base</a></li></router-link>
            <router-link to="/js/protoInherit"><li><a href="#">原型和继承</a></li></router-link>
            <router-link to="/ts/tsBasis"><li><a href="#">TypeScriptBasis</a></li></router-link>
            <router-link to="/js/dataTypes"><li><a href="#">dataTypes</a></li></router-link>
            <router-link to="/js/promise"><li><a href="#">promise</a></li></router-link>
          </ul>
      </li>
          <hr class="style-one">
      <li>
        <div class="icon-link">
          
          <a href="#">
          <i class='bx bxl-css3' style="color:#254BDD"></i>
          <span class="link_name">CSS</span>
          </a>
          <i class='bx bxs-chevron-down 3 arrow' @click="getSon(3)"></i>
        </div>
        <ul class="sub-menu" :class="{truth3}">
            <li><a class="link_name" href="#">CSS</a></li>
            <router-link to="/"><li><a href="#">Flex</a></li></router-link>
            <router-link to="/css"><li><a href="#">Demo</a></li></router-link>
            <router-link to="/css/mediaScreen"><li><a href="#">@mediaScreen</a></li></router-link>
            <router-link to="/css/bootstrapDemo"><li><a href="#">bootstrap</a></li></router-link>
            <router-link to="/css/sass"><li><a href="#">Sass</a></li></router-link>
          </ul>
      </li>

    <hr class="style-one">



      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bxl-html5' style="color:#DD4D26"></i>
          <span class="link_name">HTML</span>
          </a>
          <i class='bx bxs-chevron-down 6 arrow'  @click="getSon(6)"></i>
        </div>
        <ul class="sub-menu" :class="{truth6}">
            <li><a class="link_name" href="#">HTML</a></li>
            <router-link to="/english/words"><li><a href="#">Words</a></li></router-link>
          </ul>
      </li>

    <hr class="style-one">
    
      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bx-library'></i>
          <span class="link_name">ENG</span>
          </a>
          <i class='bx bxs-chevron-down 7 arrow'  @click="getSon(7)"></i>
        </div>
        <ul class="sub-menu" :class="{truth7}">
            <li><a class="link_name" href="#">ENG</a></li>
            <router-link to="/english/words"><li><a href="#">Words</a></li></router-link>
          </ul>
      </li>

      <hr class="style-one">
    
      <li>
        <div class="icon-link">
          <a href="#">
          <i class='bx bx-cog'></i>
          <span class="link_name">Element</span>
          </a>
          <i class='bx bxs-chevron-down 8 arrow'  @click="getSon(8)"></i>
        </div>
        <ul class="sub-menu" :class="{truth8}">
            <li><a class="link_name" href="#">ELE</a></li>
            <router-link to="/show"><li><a href="#">Show</a></li></router-link>
          </ul>
      </li>

      <hr class="style-one">


      <li>
        <div class="icon-link">
          <a href="#">
            
          <i class='bx bx-dots-horizontal-rounded'></i>
          <span class="link_name">setting</span>
          </a>
          <i class='bx bxs-chevron-down 9 arrow'  @click="getSon(9)"></i>
        </div>
        <ul class="sub-menu" :class="{truth9}">
            <li><a class="link_name" href="#">SET</a></li>
            <router-link to="/npm/basis"><li><a href="#">npmBasis</a></li></router-link>
            <router-link to="/webpack/basis"><li><a href="#">WebpackBasis</a></li></router-link>
            <router-link to="/axios/basis"><li><a href="#">axios</a></li></router-link>
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

<style lang="scss" scoped>


</style>
  
<script>
// import 'boxicons' // icon 组件导入
// import 'normalize.css/normalize.css' // 初始化css 文件(normalize插件)
import './assets/css/App.scss'
import { computed } from '@vue/runtime-core'
import {created , mounted , watch} from 'vue'
import { Throttle } from 'assets/js/utils.js' // 节流函数
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
                if (this.width > 991) {
          document.getElementById('content').style = `width: ${document.body.clientWidth - 62}px`
        }else{
          document.getElementById('content').style = `width: ${document.body.clientWidth - 0}px`
          document.getElementById('SidebarMenu').className = 'sidebar close nd'
        }
                that.timer = false
            },200)
        }
    }
},
  data() {
    
      return {
      truth1: true,
      truth2: true,
      truth3: true,
      //truth4: true,
      truth5: true,
      truth6: true,
      truth7: true,
      truth8: true,
      truth9: true,
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
      let name = document.getElementById('SidebarMenu').className
      // let width = document.documentElement.clientWidth
      let width = document.documentElement.clientWidth
      if(name == 'sidebar'){ // 缩回去
          // 不判断 全部为收缩状态 箭头自动恢复
          this.truth1 = true
          document.getElementsByClassName('1')[0].className = 'bx bxs-chevron-down 1 arrow'
          this.truth2 = true
          document.getElementsByClassName('2')[0].className = 'bx bxs-chevron-down 2 arrow'
          this.truth3 = true
          document.getElementsByClassName('3')[0].className = 'bx bxs-chevron-down 3 arrow'
          // this.truth4 = true
          // document.getElementsByClassName('4')[0].className = 'bx bxs-chevron-down 4 arrow'
          this.truth5 = true
          document.getElementsByClassName('5')[0].className = 'bx bxs-chevron-down 5 arrow'
          this.truth6 = true
          document.getElementsByClassName('6')[0].className = 'bx bxs-chevron-down 6 arrow'
          this.truth7 = true
          document.getElementsByClassName('7')[0].className = 'bx bxs-chevron-down 7 arrow'
          this.truth8 = true
          document.getElementsByClassName('8')[0].className = 'bx bxs-chevron-down 8 arrow'
          this.truth9 = true
          document.getElementsByClassName('9')[0].className = 'bx bxs-chevron-down 9 arrow'

        
        if (this.width > 991) {
          document.getElementById('content').style = `width: ${width - 62}px`
          document.getElementById('SidebarMenu').className = 'sidebar close'
        }else{
          document.getElementById('content').style = `width: ${width - 0}px`
          document.getElementById('SidebarMenu').className = 'sidebar close nd'
        }
        
        
        setTimeout(() => {
          document.getElementById('yyIcon').className = 'bx bxs-yin-yang bx-rotate'
          
        }, 300);
      }else{
        document.getElementById('content').style = `width: ${width - 204}px`
        document.getElementById('SidebarMenu').className = 'sidebar'
        setTimeout(() => {
          document.getElementById('yyIcon').className = 'bx bxs-yin-yang bx-tada'
        }, 300);
        
      }
    },//<i class='bx bxs-yin-yang bx-spin' ></i><i class='bx bxs-yin-yang bx-tada' ></i>
// 笨方法 获取id判断 是否为真值
    getSon(n){
      switch (n) {
        case 1:
          if (this.truth1  == true) {
            this.truth1 = false
            document.getElementsByClassName('bx bxs-chevron-down 1')[0].className = 'bx bxs-chevron-up 1 arrow'
          }else{
            this.truth1 = true
            document.getElementsByClassName('bx bxs-chevron-up 1')[0].className = 'bx bxs-chevron-down 1 arrow'
          }
          break;
          case 2:
          if (this.truth2  == true) {
            this.truth2 = false
            document.getElementsByClassName('bx bxs-chevron-down 2')[0].className = 'bx bxs-chevron-up 2 arrow'
          }else{
            this.truth2 = true
            document.getElementsByClassName('bx bxs-chevron-up 2')[0].className = 'bx bxs-chevron-down 2 arrow'
          }
          break;
          case 3:
          if (this.truth3  == true) {
            this.truth3 = false
            document.getElementsByClassName('bx bxs-chevron-down 3')[0].className = 'bx bxs-chevron-up 3 arrow'
          }else{
            this.truth3 = true
            document.getElementsByClassName('bx bxs-chevron-up 3')[0].className = 'bx bxs-chevron-down 3 arrow'
          }
          break;
          // case 4:
          // if (this.truth4  == true) {
          //   this.truth4 = false
          //   document.getElementsByClassName('bx bxs-chevron-down 4')[0].className = 'bx bxs-chevron-up 4 arrow'
          // }else{
          //   this.truth4 = true
          //   document.getElementsByClassName('bx bxs-chevron-up 4')[0].className = 'bx bxs-chevron-down 4 arrow'
          // }
          // break;
          case 5:
          if (this.truth5  == true) {
            this.truth5 = false
            document.getElementsByClassName('bx bxs-chevron-down 5')[0].className = 'bx bxs-chevron-up 5 arrow'
          }else{
            this.truth5 = true
            document.getElementsByClassName('bx bxs-chevron-up 5')[0].className = 'bx bxs-chevron-down 5 arrow'
          }
          break;
          case 6:
          if (this.truth6  == true) {
            this.truth6 = false
            document.getElementsByClassName('bx bxs-chevron-down 6')[0].className = 'bx bxs-chevron-up 6 arrow'

          }else{
            this.truth6 = true
            document.getElementsByClassName('bx bxs-chevron-up 6')[0].className = 'bx bxs-chevron-down 6 arrow'
          }
          break;
          case 7:
          if (this.truth7  == true) {
            this.truth7 = false
            document.getElementsByClassName('bx bxs-chevron-down 7')[0].className = 'bx bxs-chevron-up 7 arrow'
          }else{
            this.truth7 = true
            document.getElementsByClassName('bx bxs-chevron-up 7')[0].className = 'bx bxs-chevron-down 7 arrow'
          }
          break;
          case 8:
          if (this.truth8  == true) {
            this.truth8 = false
            document.getElementsByClassName('bx bxs-chevron-down 8')[0].className = 'bx bxs-chevron-up 8 arrow'
          }else{
            this.truth8 = true
            document.getElementsByClassName('bx bxs-chevron-up 8')[0].className = 'bx bxs-chevron-down 8 arrow'
          }
          break;
          case 9:
          if (this.truth9  == true) {
            this.truth9 = false
            document.getElementsByClassName('bx bxs-chevron-down 9')[0].className = 'bx bxs-chevron-up 9 arrow'
          }else{
            this.truth9 = true
            document.getElementsByClassName('bx bxs-chevron-up 9')[0].className = 'bx bxs-chevron-down 9 arrow'
          }
          break;
      
        default:
          alert('bug is coming');
          break;
      }
    },
    
  },
    
  mounted() {
    if (this.width > 991) {
      document.getElementById('content').style = `width: ${this.width - 62}px`
      document.getElementById('SidebarMenu').className = 'sidebar close'
      //document.getElementById('phone').style.display = 'none'
    }else {
      document.getElementById('SidebarMenu').className = 'sidebar close nd'
          // document.getElementsByClassName('sidebar')[0].style.display = 'none'
      //document.getElementsByClassName('close')[0].style.display = 'none'
    }
    
    const that = this // ````
    window.onresize = () => { // 浏览器被重置大小时发生事件
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
            
        })()
    }
    
  },
  destroyed () {
    // 离开该页面需要移除这个监听的事件，不然会报错
    
  }
        
    
  }
</script>
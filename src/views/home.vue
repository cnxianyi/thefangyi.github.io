<template>
  <div>
    <nav-bar>
        <template v-slot:default>
            Home &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
        </template>
        <template v-slot:time>
                2021年7月20日
        </template>
    </nav-bar>
    <div class="xy">
      
    
    <div class="content">
      1
      <br>
      {{inputRegExp('Is is the cost of of gasoline going up up',/\b([a-z]+) \1\b/ig)}}
    </div>
    </div>


  </div>
</template>

<script>
import navBar from 'common/navBar.vue'

export default {
  components: {
    navBar
  },
    methods: {
          inputRegExp(n,i){
            let str = n
            return str.match(i)
          }
        },
}
</script>


<template>
  <div>
    <nav-bar>
        <template v-slot:default>
            Home
        </template>
        <template v-slot:time>
                2021年7月20日
        </template>
    </nav-bar>

    <div class="content">

    </div>


  </div>
</template>

<script>
import navBar from '../components/common/navBar.vue'

export default {
  components: {
    navBar
  }
}
</script>


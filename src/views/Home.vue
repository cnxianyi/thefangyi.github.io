<template>
  <div>
    <sidebar></sidebar>
    <router-link to="/about"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import sidebar from '@/components/common/sidebar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    sidebar,
  },
});
</script>

<style lang="scss" scoped>
  sidebar {
    float: left;
  }
</style>

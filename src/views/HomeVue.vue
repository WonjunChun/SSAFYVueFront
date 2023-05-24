<template>
<div>
  <hero-view></hero-view>
</div>
</template>

<script>
import HeroVue from "@/views/componenets/HeroVue.vue";
export default {
  computed:{
    user(){
      return this.$store.state.userInfo;
    }
  },
  components: {
    "hero-view":HeroVue,
  }
}
</script>

<style scoped>
  
</style>
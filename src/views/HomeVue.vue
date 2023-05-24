<template>
<div>
  <main-swiper></main-swiper>
</div>
</template>

<script>
import MainSwiperVue from "./componenets/MainSwiperVue.vue";
export default {
  computed:{
    user(){
      return this.$store.state.userInfo;
    }
  },
  components: {
    "main-swiper":MainSwiperVue
  }
}
</script>

<style scoped>
  
</style>
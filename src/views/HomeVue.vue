<template>
<div>
  <!-- Swiper Section -->
  <main-swiper></main-swiper>
  <!-- Section Attraction Categories -->
  <main-category></main-category>
  <!-- Section Favorite Attractions -->
  <main-favorite></main-favorite>
</div>
</template>

<script>
import MainSwiperVue from "./components/main/MainSwiperVue.vue";
import MainCategoryVue from "./components/main/MainCategoryVue.vue"
import MainFavoriteVue from "./components/main/MainFavoriteVue.vue"

export default {
  
  computed:{
    user(){
      return this.$store.state.userInfo;
    }
  },
  components: {
    "main-swiper":MainSwiperVue,
    "main-category":MainCategoryVue,
    "main-favorite":MainFavoriteVue
  }
}
</script>

<style scoped>
  
</style>
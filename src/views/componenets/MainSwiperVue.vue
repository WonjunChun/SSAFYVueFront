<template>
  <swiper
      :slides-per-view="1"
      :loop="true"
      :pagination="true"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"  
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 3"
        :key="n"
        class="test"
        :class="{ test_2: true }"
      >
        <img
          :src="getImageUrl(29 + n)"
          
          height="30px"
          class="img-fluid"
          blank="true"
        />
      </swiper-slide>
    </swiper>
</template>
<script>
import {Pagination, Autoplay} from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([ Pagination, Autoplay]);

// Import Swiper styles
import "swiper/swiper-bundle.css";


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSwiper(){
      console.log("onSwiper중")
    },
    onSlideChange(){
      console.log("onSlideChange중 ")
    },
  },
  };
</script>

<style>


</style>
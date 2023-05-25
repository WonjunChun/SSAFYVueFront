<template>
  <swiper
      :slides-per-view="1"
      :loop="true"
      :pagination="true"
      :modules="modules"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"  
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(content, i) in swipercontents"
        :key="i"
        class="test"
        :class="{ test_2: true }"
      >
      <SwiperItem :content="content"></SwiperItem>
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

// Import Swiper Custom Item
import SwiperItem from './SwiperItem.vue';

  export default {
    data(){
      return{
        swipercontents:[
          {
            img:'main_img_1.jpg',
            title:'Main',
            desc:'Enjoy the Best Destinations with Our Travel Service',
            url:'/',
          },
          {
            img:'main_img_2.jpg',
            title:'Attraction',
            desc:'Enjoy the Best Destinations with Our Travel Service',
            url:'/attraction/search',
          },
          {
            img:'main_img_3.jpg',
            title:'RentalCar Service',
            desc:'Enjoy the Best Destinations with Carmore',
            url:'http://www.carmore.kr',
          },
          {
            img:'main_img_4.jpg',
            title:'Hotel Reservation',
            desc:'Enjoy the Best Destinations with Booking.com',
            url:'http://www.booking.com'
          },{
            img:'main_img_5.jpg',
            title:'Booking Airplane',
            desc:'Enjoy the Best Destinations with skyscanner',
            url:'http://www.skyscanner.co.kr'
          }
        ]
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      SwiperItem,
    },
    methods: {
    onSwiper(){
      console.log("onSwiper중")
    },
    onSlideChange(){
      console.log("onSlideChange중 ")
    },
  },
  };
</script>

<style scoped>


</style>
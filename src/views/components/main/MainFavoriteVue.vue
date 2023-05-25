<template>
  <section class="container-wrapper">
    <div class="container">
        <!-- Top 3 Attractions-->
          <h3 class="oh-desktop"><span class="d-inline-block wow slideInDown">Top 3 Attractions</span></h3>
          <div class="row row-sm row-40 row-md-50">
            <favorite-item 
              v-for="(popular, i) in populars"
              :key="i"
              :content="popular"
              :myClass="i%2==0?'fadeInLeft':'fadeInRight'"
            ></favorite-item>
          </div>
        </div>
  </section>
</template>

<script>
const url = "/attraction/top3";
import FavoriteItemVue from './FavoriteItem.vue';
export default {
  data(){
    return{
      populars:[]
    }
  },
  created(){
      this.$http.get(url).then(res=>{
        this.populars = res.data;
        console.log("요청중....")
        console.log(this.populars)
      }).catch(err=>{
        console.error(err);
      })
  },
  components:{
    "favorite-item":FavoriteItemVue,
  }
  
}
</script>
<style src="@/assets/css/style.css" scoped>
</style>
<style scoped>
    section.container-wrapper{
        padding-top: 110px;
        padding-bottom: 150px;
    }
</style>
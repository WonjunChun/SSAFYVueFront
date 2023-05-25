<template>
  <div class="container-wrapper ">
    <div class="container offset-negative-1">
          <div class="box-categories cta-box-wrap">
            <div class="box-categories-content">
              <div class="row justify-content-center">
                <!-- <div class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li><a href="#"><img src="@/assets/img/main/category/cta-1-368x420.jpg" alt="" width="368" height="420"/></a>
                      <h5 class="box-categories-title">Balloon Flights</h5>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li><a href="#"><img src="@/assets/img/main/category/cta-2-368x420.jpg" alt="" width="368" height="420"/></a>
                      <h5 class="box-categories-title">Mountain Holiday</h5>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li><a href="#"><img src="@/assets/img/main/category/cta-3-368x420.jpg" alt="" width="368" height="420"/></a>
                      <h5 class="box-categories-title">Beach Holidays</h5>
                    </li>
                  </ul>
                </div> -->
                <div v-for="(category, i) in categories" :key="i" class="col-md-4 wow fadeInDown col-9" data-wow-delay=".2s">
                  <ul class="list-marked-2 box-categories-list">
                    <li><a href="#"><img :src="getImgSrc(category.img)" alt="" class="category-img"/></a>
                      <h5 class="box-categories-title">{{category.title}}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div><a class="link-classic wow fadeInUp" href="#">Other Tours<span></span></a>
          <!-- Owl Carousel-->
        </div>
      </div>
</template>

<script scoped>
export default {
  data(){
    return{
      categories:[
        {
          // title:"축제, 공연, 행사",
          title:"Festival",
          id:15,
          img:"category_festival.jpg"
        },
        {
          title:"Reports",
          id:28,
          img:"category_reports.jpg"
        },
        {
          title:"Shopping",
          id:38,
          img:"category_shopping.jpg"
        }
      ]
    }
  },
  methods:{
    getImgSrc(img){
      return `${require('@/assets/img/main/category/'+img)}`;
    }
  }
}
</script>

<style src="@/assets/css/style.css" scoped>
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
  div.offset-negative-1{
    text-align: center;
    height: 500px;
  }
  div.container-wrapper{
    background-color: var(--main-background-color);
    overflow-y:auto;
		height:auto;
  }

  .box-categories-title{
  }

  img.category-img{
    width:368px;
    height:420px; 
    object-fit: cover;
    filter: brightness(70%); 
  }
</style>
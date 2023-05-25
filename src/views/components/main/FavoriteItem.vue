<template>
  <div class="col-sm-6 col-md-12 wow" :class="myClass">
        <!-- Product Big-->
        <article class="product-big">
        <div class="unit flex-column flex-md-row align-items-md-stretch">
            <div class="unit-left"><a class="product-big-figure" href="#"><img class="attraction-img" :src="content.img" alt=""/></a></div>
            <div class="unit-body">
            <div class="product-big-body">
                <h5 class="product-big-title"><a href="#">{{content.title}}</a></h5>
                <div class="group-sm group-middle justify-content-start">
                <div class="product-big-rating"><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star"></span><span class="icon material-icons-star_half"></span></div><a class="product-big-reviews" href="#">{{ content.readCount }} people read</a>
                </div>
                <p class="product-big-text">{{ content.overview }}</p><router-link class="button button-black-outline button-ujarak" :to="{ name: 'detail', params: { attractionId: content.id } }">Go Detail</router-link>
            </div>
            </div>
        </div>
        </article>
    </div>
</template>

<script>
export default {
    props:{
        myClass:String,
        content:Object
    }
}
</script>
<style src="@/assets/css/style.css" scoped>
</style>
<style scoped>
img.attraction-img{
    width:600px;
    height:366px; 
    object-fit: cover;
    filter: brightness(70%); 
}

p.product-big-text{
    overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;   
}
</style>
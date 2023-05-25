<template>
  <div class="col">
    <div class="card" @click="clickCard(content.id)">
      <img :src="content.img" class="card-img-top" alt="..." @error="replaceImg">
      <div class="card-body">
        <h5 class="card-title">{{content.title}}</h5>
        <p class="card-text">{{ content.overview }}</p>
        <p class="card-text"><small class="text-muted">{{content.addr}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      content:Object
    },
    methods: {
      replaceImg(e) {
          e.target.src = require('@/assets/img/errorImage.png');
      },
      clickCard(contentId){
        
        this.$router.replace({ name: 'detail', params: { attractionId: contentId } })
      }
  }
}
</script>

<style scoped>
  .card-img-top{
    height:15rem;
    object-fit: cover;
  }

  .card-text{
    text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  }

  .text-muted, .card-title{
    text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  }
</style>
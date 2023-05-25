<template>
  <div class="item" :style="backgroundImageInlineStyle">
    <div class="container" >
      <h6 class="item-desc">{{ content.desc }}</h6>
      <h1 class="item-title">{{ content.title }}</h1>
      <button class="item-click-btn" @click="clickItem(content.url)">Get In Touch</button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
      clickItem(url){
        window.open(url);
      }
    },
    props:{
        content:Object
    },
    computed:{
      backgroundImageInlineStyle(){
        return `background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require('@/assets/img/main/'+this.content.img)})`;
        // return `background-image: url("${this.content.img}");`;
      }
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
/**font-family: 'Lexend', sans-serif !important; */
div.item{
    width: 100%;
    height: 600px;
    background-repeat : no-repeat;
    background-size : cover ;
    background-position: center;
    /* background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url('~@/assets/img/main/main_img_1.jpg'); */
    color:white;
    font-family: 'Lexend', sans-serif !important; 
}

h6.item-desc{
  font-size: 100%;
  padding-top: 200px;
  color:white !important;
  font-family: 'Lexend', sans-serif !important; 
}

h1.item-title{
  font-size: 400%;
  font-weight: 700;
  color:white !important;
  font-family: 'Lexend', sans-serif !important; 
}

button.item-click-btn{
  
  margin-top: 40px;
  padding: 0.5rem 1rem;
  background-color:transparent;
  border: 0.5px white solid;
  font-family: 'Lexend', sans-serif !important; 
  font-size: large;
  font-weight: 200;
  color: inherit;
  
}
</style>
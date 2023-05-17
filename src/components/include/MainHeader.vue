<template>
<div>
  <nav id="main_nav">
    <router-link :to="{name:'home'}" id="logo" class="light"><img :src="require(`@/assets/img/logo_${thema}.svg`)"><span id="logo_text" :class="{'light':thema==='light', 'dark':thema==='dark'}">Enjoy Trip</span></router-link>
    <ul>
      <li><router-link :to="{name:'mypage'}" :class="{'light':thema==='light', 'dark':thema==='dark'}">여행지 찾기</router-link></li>
      <li><router-link :to="{name:'home'}" :class="{'light':thema==='light', 'dark':thema==='dark'}">여행 일정 만들기</router-link></li>
      <li><router-link :to="{name:'home'}" :class="{'light':thema==='light', 'dark':thema==='dark'}">여행기 쓰기</router-link></li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  data(){
    return {
      thema:'light',
    }
  },
  watch:{
    $route(to){
      if(to.name === 'home'){
        this.thema = 'light';
      }else{
        this.thema = 'dark';
      }
      alert(`${to.name}으로 이동, 현재 테마는 ${this.thema}`);

    }
  }
}
</script>

<style scoped>
div{
  position: relative;
  z-index: 2;
}
ul,ol{list-style:none}
#main_nav{
    width:100%;
    overflow:hidden;
    height:75px;
}
#main_nav>ul {
  float: right;
  margin-right: 100px;
}
#main_nav>ul li {
  float: left;
  padding: 0 10px;
  line-height: 80px;
}
#main_nav a{
      text-decoration : none;
}

#logo{
  display: block; /* a태그는 글자성격 = inline */
  float: left;
  height: 100%;
  padding-left: 100px;
  line-height: 75px;
}
#logo>img{
  vertical-align: middle;
}
#logo_text{
  font-size: 20px;
  font-family: 'Lexend', sans-serif;
  font-weight: bold;
  padding-left: 15px;
}

.dark{
  color: var(--text--dark--color);
}
.light{
  color:var(--text--light--color);
}

</style>
<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>
<script>
import MainHeader from '@/components/include/MainHeader.vue';
import MainFooter from '@/components/include/MainFooter.vue';

export default {
  name:'app',
  data(){
    return {
      path: '/'
    }
  },
  components: {
    'main-header':MainHeader,
    'main-footer':MainFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;400;900&family=Open+Sans:wght@300;400;500;600;700&display=swap');

:root{
  --main--color: #183FD5;
  --warning--color: #FF3737;
  --text--light--color: white;
  --text--dark--color:black;
  --text--gray--color:#A4A4A4;
  --input--background:#F6F6F6;
  --input--border:#E8E8E8;
  --background--dark--color:#F6F6F6;
}

*{
  padding:0;
  margin:0
}
</style>

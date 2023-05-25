<template>
  <div id="app">
    <div id="wrap">
      <app-header></app-header>
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'

export default {
  name:'app',
  data(){
    return {
      path: '/'
    }
  },
  components: {
    'app-header':AppHeader,
    'app-footer':AppFooter,
  },
};
</script>

<style scoped>
div#wrap{
  min-height:100%;
}
footer{
  position:relative;
  height: 200px;
  bottom:0;
}
</style>
<style>
  :root{
    --main-background-color:#F4F5F7;
  }
</style>
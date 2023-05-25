<template>
  <div class="row row-cols-4 g-4 pb-5">
      <list-item v-for="(item, i) in list" :key="i" :content="item"></list-item>
  </div>
</template>

<script>
import ListItemVue from './ListItemVue.vue';

export default {
  data(){
    return{
      list:[]
    }
  },
  created(){
      this.$EventBus.$on('getSearchResult',list=>{
        this.list = list
      });
  },
  components:{
    "list-item":ListItemVue,
  },
  watch:{

  }
}
</script>

<style scoped>

</style>
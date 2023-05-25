<template>
  <paginate
    v-model="page"
    :page-count="totalPage"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
    <span slot="prevContent">Changed previous button</span>
  <span slot="nextContent">Changed next button</span>
  <span slot="breakViewContent">
    <svg width="16" height="4" viewBox="0 0 16 4">
      <circle fill="#999999" cx="2" cy="2" r="2" />
      <circle fill="#999999" cx="8" cy="2" r="2" />
      <circle fill="#999999" cx="14" cy="2" r="2" />
    </svg>
  </span>
  </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
  data(){
    return{
      page:1,
      totalPage:0,
    }
  },
  created(){
      this.$EventBus.$on('getPages',pageObj=>{
        const { currentPage, totalPage } = pageObj;
        console.log(`현재 페이지: ${currentPage}, 전체 페이지: ${totalPage}`)
        this.page = currentPage;
        this.totalPage = totalPage;
      });
  },
  watch:{
    
  },
  methods:{
    clickCallback(pageNum){
      this.page = pageNum;
      console.log(`현재 누른 페이지: ${this.page}`)
      this.$router.replace({ name: 'search', params: {pageNum: this.page} })
    }
  },
  components:{
    "paginate":Paginate
  }
  
}
</script>

<style scoped>
  
</style>
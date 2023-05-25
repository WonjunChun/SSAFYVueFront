<template>
  <div class="py-5">
    <form class="form" @submit.prevent="submitSearch">
      <div class="row mb-3">
        <div class="col">
          <div class="form-floating">
            <select v-model.number="search.category" class="form-select" id="attraction-category" aria-label="Floating label select example" required>
              <option selected></option>
              <option :key="i" :value="category.contentId" v-for="(category, i) in categories">{{ category.name }}</option>            
            </select>
            <label for="attraction-category">카테고리를 선택해주세요</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating">
            <select v-model.number="search.sido" class="form-select" id="attraction-sido" aria-label="Floating label select example">
              <option selected></option>
              <option :key="i" :value="sido.sidoCode" v-for="(sido, i) in sidos">{{ sido.sidoName }}</option>            
            </select>
            <label for="attraction-sido">시도를 선택해주세요</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating">
            <select v-model.number="search.gugun" class="form-select" id="attraction-gugun" aria-label="Floating label select example" v-bind:disabled="sidoDisabled" >
              <option selected></option>
              <option :key="i" :value="gugun.gugunCode" v-for="(gugun, i) in guguns">{{ gugun.gugunName }}</option>            
            </select>
            <label for="attraction-gugun">구군을 선택해주세요</label>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <div class="form-floating">
              <input v-model="search.content" type="text" id="attraction-content" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              <label for="attraction-content">검색어를 입력해주세요</label>
            </div>
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">검색</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categories:[],
      sidos:[],
      guguns:[],
      search:{
        category:Number,
        sido:Number,
        gugun:Number,
        content:"",
      },
      sidoDisabled:true
    }
  },
  methods:{
    submitSearch(){
      const submitUrl = "/attraction";
      this.$http.post(submitUrl, this.search).then(res=>{
        console.log("submit됨")
        console.log(res);
        console.log(res.data);

        // 검색 결과로 받아온 리스트와 페이지를 
        // 각각 ../common/AttractionListVue.vue와 ../common/PaginationVue.vue에 전송

        const list = res.data;
        this.$EventBus.$emit('getSearchResult',list);
      
      }).catch(err=>{
        console.error(err);
      })
    }
  },
  watch:{
    'search.sido'(newSido){
      if(newSido){
        const url = `/search/gugun/${newSido}`
        this.$http.get(url).then(res=>{
          this.guguns = res.data;  
          this.sidoDisabled = false;
        })
      }else{
        this.guguns = [];
        delete this.search.sido;
        delete this.search.gugun;
        this.sidoDisabled = true;
      }
    },
    'search.gugun'(newGugun){
      if(!newGugun){
        delete this.search.gugun;
      }
    },
    'this.$route.query.pageNum'(newPageNum){
      this.pageNum = newPageNum;
      this.submitSearch();
    }
  },
  created(){
    const sidoUrl = "/search/sido";
    this.$http.get(sidoUrl).then(res=>{
        this.sidos = res.data;
      }).catch(err=>{
        console.error(err);
      })

    const categoryUrl = "/search/contentType";
    this.$http.get(categoryUrl).then(res=>{
        this.categories = res.data;
      }).catch(err=>{
        console.error(err);
      })

  }
}
</script>

<style scoped>
</style>
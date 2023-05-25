<template>
  <div class="container">
    <!-- Attraction Search Form -->
    <search-form></search-form>
    <!-- Attraction List -->
    <attraction-list ></attraction-list>
  </div>
</template>

<script scoped>
import SearchForm from '@/views/components/search/SearchFormVue.vue';
import AttractionList from '@/views/components/common/AttractionListView.vue';
export default {
  data(){
    return{
        page:100,
        record:100
    };
  },
  computed:{
    user(){
      return this.$store.state.userInfo;
    }
  },
  components: {
    "search-form":SearchForm,
    "attraction-list":AttractionList,
  },
  created(){
  }
}
</script>

<style>

</style>
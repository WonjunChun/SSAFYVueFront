<template>
  <div class="container">
    <!-- Attraction Search Form -->
    <search-form></search-form>
    <!-- Attraction List -->
    <attraction-list></attraction-list>
    <!-- pagination -->
    <pagination></pagination>
  </div>
</template>

<script>
import SearchForm from '@/views/components/search/SearchFormVue.vue';
import AttractionList from '@/views/components/common/AttractionListView.vue';
import Pagination from '@/views/components/common/PaginationVue.vue';
export default {
  computed:{
    user(){
      return this.$store.state.userInfo;
    }
  },
  components: {
    "search-form":SearchForm,
    "attraction-list":AttractionList,
    "pagination":Pagination
  }
}
</script>

<style>

</style>
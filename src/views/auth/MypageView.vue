<template>
  <div class="container pt-5 pb-5">
    <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">개인정보수정</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <userinfo-update></userinfo-update>
  </div>
</div>
  </div>
</template>

<script>
import UserInfoUpdateVue from './components/UserInfoUpdate.vue';
export default {
  components:{
    "userinfo-update":UserInfoUpdateVue,
  }
}
</script>

<style>

</style>
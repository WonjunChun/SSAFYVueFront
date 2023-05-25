<template>
  <div class="container">
    <div class="row">
      <h1> 마이페이지 </h1>
    </div>
    <div class="row">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><router-link :to="{name:'updateInfo'}">개인 정보 수정</router-link></li>
          </ul>
        </div>

    </div>
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
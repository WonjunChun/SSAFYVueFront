<template>
  <div id="app">
    <div class="sidebar">
      <TheSidebar />
    </div>
    <div class="view">
      <nav>
        <router-link to="/">Home</router-link> |
        <!-- <router-link to="/about">About</router-link> -->
      </nav>
      <router-view />
    </div>
  </div>
</template>
<script>
import TheSidebar from "./components/include/TheSidebar.vue";
//import sidebar

export default {
  components: {
    TheSidebar,
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  left: 0;
  top: 100px;
  display: flex;
}
/* 화면의 사이드바와 뷰 레이아웃 수정하기 */
.view {
  display: flex;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>

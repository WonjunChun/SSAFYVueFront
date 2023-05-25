import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap config
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// axios
// import axios from "axios";
import http from "@/util/http";

Vue.use(BootstrapVue);

// Vue.prototype.$http = axios;
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http";
//jwt 토큰 디코딩 모듈
import jwtDecode from "jwt-decode";
//state를 localstorage에 저장
import { createVuexPersistedState } from "vue-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  //state를 localStorage에 저장
  plugins: [createVuexPersistedState()],
  state: {
    userInfo: {},
    token: null,
  },

  mutations: {
    //payload = { userInfo: {...} }
    SET_USER_INFO(state, payload) {
      state.userInfo = payload.userInfo;
    },
    SET_TOKEN(state, payload) {
      state.token = payload.token;
    },
  },
  actions: {
    login(context, loginInfo) {
      //email, password 정보를 가지고 서버에 로그인 요청
      console.log("로그인정보", loginInfo);
      http
        .post("/auth/signin", loginInfo)
        .then((res) => {
          //로그인 성공 시, token, userInfo 정보 세팅됨
          console.log("로그인 응답 데이터:", res.data);
          let token = res.data.token;
          context.commit("SET_TOKEN", { token });
          //token을 decode해서 사용자정보 추출&세팅
          const decodedToken = jwtDecode(token);
          console.log("디코딩된 토큰", decodedToken);
          context.commit("SET_USER_INFO", {
            userInfo: {
              loginedUserId: decodedToken.id,
              name: decodedToken.name,
            },
          });
        })
        .catch((err) => {
          console.log("로그인 실패: ", err);
        });
    },
  },
});

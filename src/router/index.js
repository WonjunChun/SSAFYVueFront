import Vue from "vue";
import VueRouter from "vue-router";
import HomeVue from "@/views/HomeVue.vue";
import MyPageVue from "@/views/auth/MypageView.vue";
import AttractionSearchVue from "@/views/attraction/search/AttractionSearchVue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/attraction/search",
    name: "search",
    component: AttractionSearchVue,
  },
  {
    path: "/attraction/detail/:attractionId",
    name: "detail",
    component: () => import("@/views/attraction/AttractionDetailView.vue"),
  },
  {
    path: "/attraction/record",
    name: "record",
    children: [
      {
        path: "list",
        name: "recordList",
      },
      {
        path: "detail",
        name: "recordDetail",
      },
      {
        path: "regist",
        name: "recordRegist",
      },
      {
        path: "update",
        name: "recordUpdate",
      },
    ],
  },
  {
    path: "/attraction/schedule",
    name: "schedule",
    children: [
      {
        path: "regist",
        name: "scheduleRegist",
      },
      {
        path: "detail",
        name: "scheduleDetail",
      },
      {
        path: "update",
        name: "scheduleUpdate",
      },
    ],
  },
  {
    path: "/auth/signin",
    name: "signin",
    component: () => import("@/views/auth/LoginAndRegisterView.vue"),
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: () => import("@/views/auth/LoginAndRegisterView.vue"),
  },
  {
    path: "/auth/mypage",
    name: "mypage",
    component: MyPageVue,
    redirect: "",
    children: [
      {
        path: "update-info",
        name: "updateInfo",
      },
      {
        path: "schedule-manage",
        name: "scheduleManage",
      },
      {
        path: "record-manage",
        name: "recordManage",
      },
      {
        path: "attraction-bookmark",
        name: "attractionBookmark",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

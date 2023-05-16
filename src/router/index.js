import Vue from "vue";
import VueRouter from "vue-router";
import HomeVue from "@/views/HomeVue.vue";

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
  },
  {
    path: "/attraction/detail",
    name: "detail",
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
  },
  {
    path: "/auth/signup",
    name: "signup",
  },
  {
    path: "/auth/mypage",
    name: "mypage",
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

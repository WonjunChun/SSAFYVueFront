import axios from "axios";
import store from "@/store";

let instance = axios.create({
  // baseURL: "http://192.168.210.40:9000/api",
  baseURL: "http://localhost:9000",
});

//axios request마다 header Authorization 헤더 추가
instance.interceptors.request.use((config) => {
  console.log("요청 송신:", config);
  config.headers["Authorization"] = `Bearer ${store.state.token}`;
  return config;
});

export default instance;

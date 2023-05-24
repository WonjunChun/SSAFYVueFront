<template>
  <div
    class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7">
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          v-bind:style="backgroundImg">
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0px)">
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-1"><!-- <div class="container mx-auto px-4"> -->
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img
                      alt="..."
                      v-bind:src="attraction.img"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">

                    <i class="fas fa-bookmark mr-2 text-lg text-blueGray-400" style="color:#3e71f4"></i>
                    
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        >{{attraction.readCount}}</span
                      ><span class="text-sm text-blueGray-400">조회수</span>
                    </div>
                    <!--
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        >10</span
                      ><span class="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                        >89</span
                      ><span class="text-sm text-blueGray-400">Comments</span>
                    </div>
                    -->
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {{attraction.title}}
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase" style="color:#9d9d9d">
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" style="color:#9d9d9d"></i>
                  {{attraction.addr}}
                </div>
                <div class="mb-2 text-blueGray-600 font-bold" style="color:#9d9d9d">
                  <i class="fas fa-phone fa-rotate-180 mr-2 text-lg text-blueGray-400" style="color:#9d9d9d"></i>
                  {{attraction.tel}}
                </div>
                <!--
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i
                  >${info.tel}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                    class="fas fa-university mr-2 text-lg text-blueGray-400"></i
                  >University of Computer Science
                </div>
                -->
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p
                      class="mb-4 text-lg leading-relaxed text-blueGray-700 description">
                      {{attraction.overview}}
                    </p>
                    <!--
                    <a href="#pablo" class="font-normal text-pink-500" style="color: #3e71f4"
                      >Show more</a
                    >
                    -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--
        <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div
              class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Made with
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    class="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                    >Notus JS</a
                  >
                  by
                  <a
                    href="https://www.creative-tim.com"
                    class="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank">
                    Creative Tim</a
                  >.
                </div>
              </div>
            </div>
          </div>
        </footer>
        -->
      </section>
    </main>
  </div>
  
</template>

<script src="https://kit.fontawesome.com/eb9bc14114.js" crossorigin="anonymous"></script>
<script>
//일단은 더미 데이터. 나중에 axios로 데이터 받아오기
//import axios from "axios";
import http from "@/util/http"

export default {
  name: "AttractionDetailView",
  components: {},
  data() {
    return {
      // message: "",
      // img : `http://tong.visitkorea.or.kr/cms/resource/21/2657021_image2_1.jpg`,
      // img2 : `http://tong.visitkorea.or.kr/cms/resource/21/2657021_image3_1.jpg`,
      // backgroundImg : `background-image: url("`+this.img1+`")`,
      backgroundImg : "",
      // readcount : 10,
      // title : "한밭수목원",
      // addr : "대전 xx구 oo로 00",
      // tel : "010-0000-0000",
      // description : "한밭수목원은 정부대전청사와 과학공원의 녹지축이 연결된 도심형 수목원으로 둔산대공원 내에 위치하고 있다. 수목원의 규모는 39만㎡이며, 목본류 1,083종, 초본류 1,087종 등 총 2,170종의 식물종이 전시되고 있다. 이중 1,504종에 달하는 수목유전자원을 보유하고 있다. 한밭수목원은 정부대전청사와 과학공원의 녹지축이 연결된 도심형 수목원으로 둔산대공원 내에 위치하고 있다. 수목원의 규모는 39만㎡이며, 목본류 1,083종, 초본류 1,087종 등 총 2,170종의 식물종이 전시되고 있다. 이중 1,504종에 달하는 수목유전자원을 보유하고 있다.",
      attraction:{
        id:0,
        contentTypeId:0,
        title : "국립 청태산자연휴양림",
        addr : "강원도 횡성군 둔내면 청태산로 610",
        tel : "",
        img:`http://tong.visitkorea.or.kr/cms/resource/21/2657021_image2_1.jpg`,
        readCount:92309,
        sidoCode:0,
        gugunCode:0,
        latitude:0.0,
        longitude:0.0,
        overview:"해발 1,200m의 청태산을 주봉으로 하여 인공림과 천연림이 잘 조화된 울창한 산림을 바탕으로 한 국유림 경영 시범단지로서 숲속에는 온갖 야생 동식물이 고루 서식하고 있어 자연박물관을 찾은 기분을 느낄 수 있다. 영동고속도로 신갈기점 강릉방향 128km 지점에 위치하고 있어 여름철 동해안 피서객들이 잠시 쉬었다 가기에 편리하고, 청소년의 심신수련을 위한 숲속교실도 설치되어 있으며 울창한 잣나무 숲속의 산림욕장은 한번왔다간 사람은 누구나 매료되어 찾는 곳이기도 하다. * 구역면적 - 403 ha",
      }
    };
  },
  created() {
    const attractionId = this.$route.params.attractionId;
    console.log(attractionId);
    http.get(`/attraction/`+attractionId).then((res)=>{
      this.attraction = res.data;
      this.backgroundImg = `background-image: url("`+ this.attraction.img +`")`
    });
    //axios.get();
  },
  methods: {},
};
</script>

<style scoped></style>

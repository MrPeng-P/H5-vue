<script setup>
import { useRouter, useRoute } from "vue-router";
import bgTree from "@/assets/image-route/bg-tree.jpg";
import imgResult from "@/assets/image-route/result.png";
import imgStart from "@/assets/image-route/enter.png";
import imgHome from "@/assets/image-route/home.png";
import imgAgain from "@/assets/image-route/again.png";

const imageObj = {
  bgTree,
  imgStart,
  imgResult,
  imgHome,
  imgAgain
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/detail");
  }
  function goHome() {
    router.push("/");
  }
  return {
    goDetail,
    goHome
  };
}
const { goDetail,goHome } = routeAll();
</script>

<template>
  <div class="container">
    <div class="container-box">
      <div><img class="model-img" :src="imageObj.imgResult" alt="" /></div>
      <div class="button-list">
        <img
          class="start"
          @click="goHome()"
          :src="imageObj.imgHome"
          alt=""
        />
        <img
          class="start"
          @click="goDetail()"
          :src="imageObj.imgAgain"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.bgTree + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.container-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

}
.model-img{
    width: 300px;
}
.start {
  width: 150px;
}
.button-list{
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.button-list img{
    width: 100px;
}
</style>

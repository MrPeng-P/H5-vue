<script setup>
import { useRouter, useRoute } from "vue-router";
import bgBox from "@/assets/dial3/background-1.jpg";


import playImage from "@/assets/dial3/play.png";

const imageObj = {
  bgBox,
  playImage
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/dial");
  }
  return {
    goDetail,
  };
}
const { goDetail } = routeAll();
</script>

<template>
  <div class="container">
    <div class="playImage-box">
      <img class="playImage" @click="goDetail()" :src="imageObj.playImage" alt="">
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
  background: v-bind("'url(' + imageObj.bgBox + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.playImage-box{
  
}
.playImage{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

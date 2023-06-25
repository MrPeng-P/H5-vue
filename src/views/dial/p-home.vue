<script setup>
import { useRouter, useRoute } from "vue-router";
import bgBox from "@/assets/dial/back-1.jpg";


import start from "@/assets/dial/play.png";

const imageObj = {
  bgBox,
  start
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
    <div class="start-box">
      <img class="start" @click="goDetail()" :src="imageObj.start" alt="">
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
.start-box{
  
}
.start{
  margin-top: -60%;
  width: 150px;
}

</style>

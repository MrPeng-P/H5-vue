<script setup>
import { useRouter, useRoute } from "vue-router";
import diningBg from "@/assets/dial6/diningBg.jpg";


import diningPlay from "@/assets/dial6/diningPlay.png";

const imageObj = {
  diningBg,
  diningPlay
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
    <div class="diningPlay-box">
      <img class="diningPlay" @click="goDetail()" :src="imageObj.diningPlay" alt="">
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
  background: v-bind("'url(' + imageObj.diningBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.diningPlay-box{
  
}
.diningPlay{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

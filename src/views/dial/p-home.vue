<script setup>
import { useRouter, useRoute } from "vue-router";
import fruitBg from "@/assets/dial7/fruitBg.jpg";


import fruitPlay from "@/assets/dial7/fruitPlay.png";

const imageObj = {
  fruitBg,
  fruitPlay
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
    <div class="fruitPlay-box">
      <img class="fruitPlay" @click="goDetail()" :src="imageObj.fruitPlay" alt="">
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
  background: v-bind("'url(' + imageObj.fruitBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.fruitPlay-box{
  
}
.fruitPlay{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

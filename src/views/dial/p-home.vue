<script setup>
import { useRouter, useRoute } from "vue-router";
import fortressBg from "@/assets/dial4/fortressBg.jpg";


import fortressPlay from "@/assets/dial4/fortressPlay.png";

const imageObj = {
  fortressBg,
  fortressPlay
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
    <div class="fortressPlay-box">
      <img class="fortressPlay" @click="goDetail()" :src="imageObj.fortressPlay" alt="">
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
  background: v-bind("'url(' + imageObj.fortressBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.fortressPlay-box{
  
}
.fortressPlay{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

<script setup>
import { useRouter, useRoute } from "vue-router";
import originalBg from "@/assets/dial10/originalBg.jpg";


import originalPlay from "@/assets/dial10/originalPlay.png";

const imageObj = {
  originalBg,
  originalPlay
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/original");
  }
  return {
    goDetail,
  };
}
const { goDetail } = routeAll();
</script>

<template>
  <div class="container">
    <div class="originalPlay-box">
      <img class="originalPlay" @click="goDetail()" :src="imageObj.originalPlay" alt="">
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
  background: v-bind("'url(' + imageObj.originalBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.originalPlay-box{
  
}
.originalPlay{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

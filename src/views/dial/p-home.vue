<script setup>
import { useRouter, useRoute } from "vue-router";
import beachBg from "@/assets/dial5/beachBg.jpg";


import beachPlay from "@/assets/dial5/beachPlay.png";

const imageObj = {
  beachBg,
  beachPlay
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
    <div class="beachPlay-box">
      <img class="beachPlay" @click="goDetail()" :src="imageObj.beachPlay" alt="">
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
  background: v-bind("'url(' + imageObj.beachBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.beachPlay-box{
  
}
.beachPlay{
  /* margin-top: -60%; */
  width: 150px;
}

</style>

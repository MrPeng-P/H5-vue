<script setup>
import { useRouter, useRoute } from "vue-router";
import bgBox from "@/assets/flop/bg-1.jpg";


import start from "@/assets/flop/play.png";

const imageObj = {
  bgBox,
  start
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/flop");
  }
  return {
    goDetail,
  };
}
const { goDetail } = routeAll();
</script>

<template>
  <div class="container">
    <div >
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
.start{
  width: 150px;
}

</style>

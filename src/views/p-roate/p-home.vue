<script setup>
import { useRouter, useRoute } from "vue-router";
import magicBg from "@/assets/run5/magicBg.jpg";


import magicEnter from "@/assets/run5/magicEnter.png";

const imageObj = {
  magicBg,
  magicEnter
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/detail");
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
      <img class="start" @click="goDetail()" :src="imageObj.magicEnter" alt="">
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
  background: v-bind("'url(' + imageObj.magicBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.start{
  margin-top: -90%;
  width: 220px;
}

</style>

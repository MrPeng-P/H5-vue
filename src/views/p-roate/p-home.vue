<script setup>
import { useRouter, useRoute } from "vue-router";
import lampBg from "@/assets/run4/lampBg.jpg";


import lampEnter from "@/assets/run4/lampEnter.png";

const imageObj = {
  lampBg,
  lampEnter
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    console.log("%c ..........11.........", "color:#31ef0e", 11);
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
      <img class="start" @click="goDetail()" :src="imageObj.lampEnter" alt="">
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
  background: v-bind("'url(' + imageObj.lampBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.start{
  margin-top: -90%;
    width: 220px;
}

</style>

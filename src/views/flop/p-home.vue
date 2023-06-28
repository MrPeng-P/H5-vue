<script setup>
import { useRouter, useRoute } from "vue-router";
import bgBox from "@/assets/flop2/bg-1.jpg";


import begin from "@/assets/flop2/play.png";

const imageObj = {
  bgBox,
  begin
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
  <div class="content">
    <div >
      <img class="begin" @click="goDetail()" :src="imageObj.begin" alt="">
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.bgBox + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
}
.begin{
  width: 150px;
}

</style>

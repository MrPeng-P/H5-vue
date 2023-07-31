<script setup>
import { useRouter, useRoute } from "vue-router";
import assassinBg from "@/assets/flop4/assassinBg.jpg";


import assassinIn from "@/assets/flop4/assassinIn.png";

const imageObj = {
  assassinBg,
  assassinIn
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
      <img class="assassinIn" @click="goDetail()" :src="imageObj.assassinIn" alt="">
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
  background: v-bind("'url(' + imageObj.assassinBg + ')'") no-repeat;
  background-size: 100% 100%;
  background-position: 45%;
}
.assassinIn{
  width: 150px;
}

</style>

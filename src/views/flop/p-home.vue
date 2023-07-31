<script setup>
import { useRouter, useRoute } from "vue-router";
import weirdBg from "@/assets/flop6/weirdBg.jpg";


import weirdIn from "@/assets/flop6/weirdIn.png";

const imageObj = {
  weirdBg,
  weirdIn
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
      <img class="weirdIn" @click="goDetail()" :src="imageObj.weirdIn" alt="">
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
  background: v-bind("'url(' + imageObj.weirdBg + ')'") no-repeat;
  background-size: 100% 100%;
  background-position: 45%;
}
.weirdIn{
  width: 150px;
}

</style>

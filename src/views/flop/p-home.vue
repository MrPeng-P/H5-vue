<script setup>
import { useRouter, useRoute } from "vue-router";
import kingdomBg from "@/assets/flop5/kingdomBg.jpg";


import kingdomIn from "@/assets/flop5/kingdomIn.png";

const imageObj = {
  kingdomBg,
  kingdomIn
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
      <img class="kingdomIn" @click="goDetail()" :src="imageObj.kingdomIn" alt="">
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
  background: v-bind("'url(' + imageObj.kingdomBg + ')'") no-repeat;
  background-size: cover;
}
.kingdomIn{
  width: 150px;
}

</style>

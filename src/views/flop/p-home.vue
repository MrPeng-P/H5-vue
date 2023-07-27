<script setup>
import { useRouter, useRoute } from "vue-router";
import elvesBg from "@/assets/flop3/elvesBg.jpg";


import elvesStart from "@/assets/flop3/elvesStart.png";

const imageObj = {
  elvesBg,
  elvesStart
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
      <img class="elvesStart" @click="goDetail()" :src="imageObj.elvesStart" alt="">
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
  background: v-bind("'url(' + imageObj.elvesBg + ')'") no-repeat;
  background-size: 100% 100%;
  background-position: 45%;
}
.elvesStart{
  width: 150px;
}

</style>

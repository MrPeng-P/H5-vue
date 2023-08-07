<script setup>
import { useRouter, useRoute } from "vue-router";
import beachBg from "@/assets/flop10/beachBg.jpg";


import beachIn from "@/assets/flop10/beachIn.png";

const imageObj = {
  beachBg,
  beachIn
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
      <img class="beachIn" @click="goDetail()" :src="imageObj.beachIn" alt="">
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
  background: v-bind("'url(' + imageObj.beachBg + ')'") no-repeat;
  background-size: cover;
}
.beachIn{
  width: 254px;
}

</style>

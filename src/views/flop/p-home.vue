<script setup>
import { useRouter, useRoute } from "vue-router";
import fantasyBg from "@/assets/flop7/fantasyBg.jpg";


import fantasyIn from "@/assets/flop7/fantasyIn.png";

const imageObj = {
  fantasyBg,
  fantasyIn
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
      <img class="fantasyIn" @click="goDetail()" :src="imageObj.fantasyIn" alt="">
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
  background: v-bind("'url(' + imageObj.fantasyBg + ')'") no-repeat;
  background-size: cover;
}
.fantasyIn{
  width: 254px;
}

</style>

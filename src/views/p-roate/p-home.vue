<script setup>
import { useRouter, useRoute } from "vue-router";
import bgTree from "@/assets/route/bg-tree.jpg";
import imgStart from "@/assets/route/start.png";

const imageObj = {
  bgTree,
  imgStart
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
      <img @click="goDetail()" :src="imageObj.imgStart" alt="">
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
  background: v-bind("'url(' + imageObj.bgTree + ')'") no-repeat;
  background-size: 100% 100% ;
}


</style>

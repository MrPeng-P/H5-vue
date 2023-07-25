<script setup>
import { useRouter, useRoute } from "vue-router";
import magicBg from "@/assets/run5/magicBg.jpg";
import magicResult from "@/assets/run5/magicResult.png";
import magicEnter from "@/assets/run5/magicEnter.png";
import magicHome from "@/assets/run5/magicHome.png";
import magicAgain from "@/assets/run5/magicAgain.png";
// import magicStar from "@/assets/run5/magicStar.gif";

const imageObj = {
  magicBg,
  magicEnter,
  magicResult,
  magicHome,
  magicAgain,
  // magicStar
};
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/detail");
  }
  function goHome() {
    router.push("/");
  }
  return {
    goDetail,
    goHome
  };
}
const { goDetail,goHome } = routeAll();
</script>

<template>
  <div class="containermagic">
    <div class="containermagic-box">
      <div class="modelmagic"><img class="modelmagic-img" :src="imageObj.magicResult" alt="" />
        <!-- <img class="starmagic-img" :src="imageObj.magicStar" alt="" /> -->
      </div>
      <div class="button-list">
        <img
          class="start"
          @click="goHome()"
          :src="imageObj.magicHome"
          alt=""
        />
        <img
          class="start"
          @click="goDetail()"
          :src="imageObj.magicAgain"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.containermagic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.magicBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.containermagic-box{
  padding-top: 20vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

}
.modelmagic{
  position: relative;
}
.modelmagic-img{
    width: 350px;
}

.starmagic-img{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 50%;
}
.start {
  width: 150px;
}
.button-list{
  margin-top: 64px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.button-list img{
    width: 130px;
}
</style>

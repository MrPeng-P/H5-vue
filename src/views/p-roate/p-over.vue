<script setup>
import { useRouter, useRoute } from "vue-router";
import lampBg from "@/assets/run4/lampBg.jpg";
import lampResult from "@/assets/run4/lampResult.png";
import lampEnter from "@/assets/run4/lampEnter.png";
import lampHome from "@/assets/run4/lampHome.png";
import lampAgain from "@/assets/run4/lampAgain.png";
// import lampStar from "@/assets/run4/lampStar.gif";

const imageObj = {
  lampBg,
  lampEnter,
  lampResult,
  lampHome,
  lampAgain,
  // lampStar
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
  <div class="containerlamp">
    <div class="containerlamp-box">
      <div class="modellamp"><img class="modellamp-img" :src="imageObj.lampResult" alt="" />
        <!-- <img class="starlamp-img" :src="imageObj.lampStar" alt="" /> -->
      </div>
      <div class="button-list">
        <img
          class="start"
          @click="goHome()"
          :src="imageObj.lampHome"
          alt=""
        />
        <img
          class="start"
          @click="goDetail()"
          :src="imageObj.lampAgain"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.containerlamp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.lampBg + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.containerlamp-box{
  padding-top: 20vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

}
.modellamp{
  position: relative;
}
.modellamp-img{
    width: 350px;
}

.starlamp-img{
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

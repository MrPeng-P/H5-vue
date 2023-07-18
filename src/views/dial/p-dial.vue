<template>
  <div class="original-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.originalBack" alt=""></div>
      <div class="original">
        <span class="original-txt">{{ stateData.coin }}</span>
      </div>
    </header>
    <section>
      <dialWrap ref="dialWrap" @changeCoin="changeCoin" :stateData="stateData"></dialWrap>
    </section>
    <div></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

import dialWrap from "./components/dial.vue";
import originalBg from "@/assets/dial10/originalBg.jpg";
import originalBack from "@/assets/dial10/originalBack.png";
import originalBox from "@/assets/dial10/originalBox.png";
import originalTop from "@/assets/dial10/originalTop.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      originalBg,
      originalTop,
      originalBack
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: originalBox,
      
    });
    const allMethods={
      back:()=>{
        router.push("/");
      },
      changeCoin:(val)=>{
        stateData.coin=val.coin
        console.log('%c ..........val.........','color:#31ef0e',stateData.coin)
      }
    }
    return {
      stateData,
      imageObj,
      ...allMethods
    };
  },
};
</script>
<style scoped>
.original-container {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.originalBg + ')'") no-repeat;
  background-size: cover;
  display: inline-block;
}
header{
  display: flex;
  margin-top: 20px;

}
.back{
  display: flex;
    justify-content: center;
    margin-left: 25px;
    align-items: center;
    /* padding-left: 10px; */
    width: 20%;
}
.back img{
  width:70%;
}
.original{
  margin-left: 87px;
    display: flex;
    justify-content: center;
    line-height: 60px;
    /* align-items: center; */
    width: 50%;
    height: 76px;
    z-index: 999;
    color: #fff;
    font-size: 16px;
  background: v-bind("'url(' + imageObj.originalTop + ')'") no-repeat;
  background-position: center;
  background-size: 80%;

}

.original-txt{
  margin-top: 5.8%;
  margin-right: -8%;
}
section {
  width: 8.2rem;
    height: 8.2rem;
  margin: 0 auto 70px;
  z-index: 998;
  
}
</style>

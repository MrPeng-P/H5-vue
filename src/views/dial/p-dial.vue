<template>
  <div class="dining-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.diningBack" alt=""></div>
      <div class="dining">
        <span class="dining-txt">{{ stateData.coin }}</span>
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
import diningBg from "@/assets/dial6/diningBg.jpg";
import diningBack from "@/assets/dial6/diningBack.png";
import diningBox from "@/assets/dial6/diningBox.png";
import diningTop from "@/assets/dial6/diningTop.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      diningBg,
      diningTop,
      diningBack
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: diningBox,
      
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
.dining-container {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.diningBg + ')'") no-repeat;
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
.dining{
  margin-left: 87px;
    display: flex;
    justify-content: center;
    line-height: 58px;
    /* align-items: center; */
    width: 50%;
    height: 76px;
    z-index: 999;
    color: #fff;
    font-size: 16px;
  background: v-bind("'url(' + imageObj.diningTop + ')'") no-repeat;
  background-position: center;
  background-size: 80%;

}

.dining-txt{
  margin-top: 5.8%;
  margin-right: -8%;
}
section {
  width: 8.7rem;
  height: 8.7rem;
  margin: 70px auto;
  z-index: 998;
  
}
</style>

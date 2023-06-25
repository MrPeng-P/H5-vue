<template>
  <div class="dial-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.imgBack" alt=""></div>
      <div class="box">
        <span class="box-txt">{{ stateData.coin }}</span>
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
import bgBack from "@/assets/dial/back-2.jpg";
import imgBack from "@/assets/dial/back.png";
import prizeImg from "@/assets/dial/bg-box.png";
import headBox from "@/assets/dial/head-box.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      bgBack,
      headBox,
      imgBack
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: prizeImg,
      
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
.dial-container {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.bgBack + ')'") no-repeat;
  background-size: cover;
  display: inline-block;
}
header{
  display: flex;
  margin-top: 20px;

}
.back{
  padding-left: 10px;
  width: 20%;

}
.back img{
  width:70%;
}
.box{
  margin-bottom: 20px;
  display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    /* height: 80px; */
    z-index: 999;
    color: #fff;
  
    font-size: 16px;
 
  background: v-bind("'url(' + imageObj.headBox + ')'") no-repeat;
  background-size: 100%;

}

.box-txt{
  margin-top: 5.8%;
    margin-right: -30%;
}
section {
  width: 8.7rem;
  height: 8.7rem;
  margin: 0 auto;
  z-index: 998;
  
}
</style>

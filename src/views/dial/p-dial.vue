<template>
  <div class="dial-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.BackImage" alt=""></div>
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
import background from "@/assets/dial3/background-1.jpg";
import BackImage from "@/assets/dial3/back.png";
import bgBoxImage from "@/assets/dial3/bg-box.png";
import headImage from "@/assets/dial3/head-box.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      background,
      headImage,
      BackImage
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: bgBoxImage,
      
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
  background: v-bind("'url(' + imageObj.background + ')'") no-repeat;
  background-size: cover;
  display: inline-block;
}
header{
  display: flex;
  margin-top: 20px;

}
.back{
  margin-left: 50px;
  padding-left: 10px;
  width: 20%;

}
.back img{
  width:70%;
}
.box{
  margin-left:10px;
    display: flex;
    justify-content: center;
    line-height: 18px;
    /* align-items: center; */
    
    width: 60%;
    height: 43px;
    z-index: 999;
    color: #fff;
    font-size: 14px;
 
    padding-right: 20px;
  background: v-bind("'url(' + imageObj.headImage + ')'") no-repeat;
  background-position: center;
  background-size: 80%;

}

.box-txt{
  margin-top: 5.8%;
    margin-right: -30%;
}
section {
  width: 8.7rem;
  height: 8.7rem;
  margin: 70px auto;
  z-index: 998;
  
}
</style>

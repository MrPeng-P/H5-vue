<template>
  <div class="beach-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.beachBack" alt=""></div>
      <div class="beach">
        <span class="beach-txt">{{ stateData.coin }}</span>
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
import beachBg from "@/assets/dial5/beachBg.jpg";
import beachBack from "@/assets/dial5/beachBack.png";
import beachBox from "@/assets/dial5/beachBox.png";
import beachTop from "@/assets/dial5/beachTop.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      beachBg,
      beachTop,
      beachBack
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: beachBox,
      
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
.beach-container {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.beachBg + ')'") no-repeat;
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
.beach{
  margin-left:10px;
    display: flex;
    justify-content: center;
    line-height: 18px;
    /* align-items: center; */
    
    width: 60%;
    height: 40px;
    z-index: 999;
    color: #fff;
    font-size: 16px;
 
    padding-right: 20px;
  background: v-bind("'url(' + imageObj.beachTop + ')'") no-repeat;
  background-position: center;
  background-size: 80%;

}

.beach-txt{
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

<template>
  <div class="fruit-container">
    <header >
      <div class="back" @click="back"><img :src="imageObj.fruitBack" alt=""></div>
      <div class="fruit">
        <span class="fruit-txt">{{ stateData.coin }}</span>
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
import fruitBg from "@/assets/dial7/fruitBg.jpg";
import fruitBack from "@/assets/dial7/fruitBack.png";
import fruitBox from "@/assets/dial7/fruitBox.png";
import fruitTop from "@/assets/dial7/fruitTop.png";

export default {
  components: { dialWrap },
  setup() {
  const router = new useRouter();

    const imageObj=reactive({
      fruitBg,
      fruitTop,
      fruitBack
    })
    const stateData = reactive({
      coin: 10000,
      prize_img: fruitBox,
      
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
.fruit-container {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.fruitBg + ')'") no-repeat;
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
.fruit{
  margin-left: 87px;
    display: flex;
    justify-content: center;
    line-height: 48px;
    /* align-items: center; */
    width: 50%;
    height: 76px;
    z-index: 999;
    color: #fff;
    font-size: 16px;
  background: v-bind("'url(' + imageObj.fruitTop + ')'") no-repeat;
  background-position: center;
  background-size: 80%;

}

.fruit-txt{
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

<script>
import homeAlice from "@/assets/slotB1/homeAlice.png";
import againAlice from "@/assets/slotB1/againAlice.png";
import listAlice from "@/assets/slotB1/listboxAlice.png";
import boxAlice from "@/assets/slotB1/boxAlice.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const AliceConfig = reactive({
      listAlice,
      homeAlice,
      againAlice,
      boxAlice,
    });
    const list = reactive([
      {
        name: "Ivanildo Alice",
        count: "1101B",
      },
      {
        name: "Jonas Alice",
        count: "101B",
      },
      // {
      //   name: "Cássio Watanabe",
      //   count: "14B",
      // },
      {
        name: "me",
        count: sessionStorage.getItem('countValue')||1000,
      },
      {
        name: "Lúcio Alice",
        count: "150B",
      },
    ]);

    const allMethods = {
      goHome: () => {
        router.push("/");
      },
      goStAlice: () => {
        router.push("/home");
      },
      parseCount: (count) => {
        if (count.endsWith("B")) {
          return parseFloat(count.slice(0, -1)) * 1000000000;
        } else if (count.endsWith("M")) {
          return parseFloat(count.slice(0, -1)) * 1000000;
        } else if (count.endsWith("K")) {
          return parseFloat(count.slice(0, -1)) * 1000;
        } else {
          return parseInt(count);
        }
      },
      formatNumber(num) {
        const absNum = Math.abs(num);

        if (absNum >= 1e9) {
          return (num / 1e9).toFixed(2) + "B"; // 保留两位小数，表示十亿
        } else if (absNum >= 1e6) {
          return (num / 1e6).toFixed(2) + "M"; // 保留两位小数，表示百万
        } else if (absNum >= 1e3) {
          return (num / 1e3).toFixed(2) + "K"; // 保留两位小数，表示千
        } else {
          console.log('%c ..........num.........','color:#31ef0e',num)
          return num?num.toString():1000; // 小于千的数字直接返回原值
        }
      },
    };

    onMounted(() => {
      list.forEach((item)=>{
        if(item.name=="me"){
          item.count=allMethods.formatNumber(item.count)
        }
      })
      list.sort(
        (a, b) =>
          allMethods.parseCount(b.count) - allMethods.parseCount(a.count)
      );
    });
    return {
      list,
      className,
      AliceConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="Alice">
    <div :class="className">
    <div class="listAlice">
      <div class="itemAlice" v-for="(item, index) in list" :key="index">
        <div class="Alice-name">{{ item.name }}</div>
        <div class="Alice-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonAlice-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStAlice"></div>
    </div>

    <!-- <div class="stAlice" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.Alice{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + AliceConfig.boxAlice + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.container {
  position: relative;
  background: v-bind("'url(' + AliceConfig.listAlice + ')'") no-repeat;
  background-size: 62%;
  background-position: center 30%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #1d1d71;
  font-size: 14px;
}

.buttonAlice-box {
  position: absolute;
    top: 65%;
    left: 11.5%;
    width: 100%;
    height: 100%;

}
.buttons {
  width: 13%;
    height: 9.5%;
    position: absolute;
    left: 20.5%;
    top: 22.5%;
    z-index: 999;
  background: v-bind("'url(' + AliceConfig.homeAlice + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 18%;
    height: 9.5%;
    position: absolute;
    left: 39.5%;
    top: 22.5%;
    z-index: 999;
  background: v-bind("'url(' + AliceConfig.againAlice + ')'") no-repeat;

    background-size: 100% 100%;
}
.Alicep-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.Alicep-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Alicep-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + AliceConfig.anyAlice + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listAlice {
  position: absolute;
    top: 72%;
    left: 57%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.itemAlice {
  margin-top: 18px;
  display: flex;
}

.Alice-name {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Alice-count{
  width: 50px;
}
</style>



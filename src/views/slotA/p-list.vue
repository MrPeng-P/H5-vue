<script>
import homeglacier from "@/assets/slotA3/homeglacier.png";
import againglacier from "@/assets/slotA3/againglacier.png";
import listglacier from "@/assets/slotA3/listboxglacier.png";
import boxglacier from "@/assets/slotA3/boxglacier.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const glacierConfig = reactive({
      listglacier,
      homeglacier,
      againglacier,
      boxglacier,
    });
    const list = reactive([
      {
        name: "Ivanildo glacier",
        count: "1101B",
      },
      {
        name: "Jonas glacier",
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
        name: "Lúcio glacier",
        count: "150B",
      },
    ]);

    const allMethods = {
      goHome: () => {
        router.push("/");
      },
      goStart: () => {
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
      glacierConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="glacier">
    <div :class="className">
    <div class="listglacier">
      <div class="itemglacier" v-for="(item, index) in list" :key="index">
        <div class="glacier-name">{{ item.name }}</div>
        <div class="glacier-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonglacier-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStart"></div>
    </div>

    <!-- <div class="start" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.glacier{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + glacierConfig.boxglacier + ')'") no-repeat;
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
  background: v-bind("'url(' + glacierConfig.listglacier + ')'") no-repeat;
  background-size: 70%;
    background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #1d1d71;
  font-size: 14px;
}

.buttonglacier-box {
  position: absolute;
  top: 0%;
    left: 11.5%;
  width: 100%;
    height: 100%;

}
.buttons {
  width: 13%;
    height: 7.5%;
    position: absolute;
    left: -6.5%;
    top: 24.5%;
    z-index: 999;
  background: v-bind("'url(' + glacierConfig.homeglacier + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 18%;
    height: 8.5%;
    position: absolute;
    left: -11.5%;
    top: 40.5%;
    z-index: 999;
  background: v-bind("'url(' + glacierConfig.againglacier + ')'") no-repeat;

    background-size: 100% 100%;
}
.glacierp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.glacierp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.glacierp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + glacierConfig.anyglacier + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listglacier {
  position: absolute;
    top: 61%;
    left: 59%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.itemglacier {
  margin-top: 30px;
  display: flex;
}

.glacier-name {
  width: 177px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.glacier-count{
  width: 50px;
}
</style>



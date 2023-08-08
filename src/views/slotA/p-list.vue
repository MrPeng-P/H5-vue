<script>
import homeIndian from "@/assets/slotA1/homeIndian.png";
import againIndian from "@/assets/slotA1/againIndian.png";
import listIndian from "@/assets/slotA1/listboxIndian.png";
import boxIndian from "@/assets/slotA1/boxIndian.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const IndianConfig = reactive({
      listIndian,
      homeIndian,
      againIndian,
      boxIndian,
    });
    const list = reactive([
      {
        name: "Ivanildo Indian",
        count: "111B",
      },
      {
        name: "Jonas Indian",
        count: "11B",
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
        name: "Lúcio Indian",
        count: "15B",
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
      IndianConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="Indian">
    <div :class="className">
    <div class="listIndian">
      <div class="itemIndian" v-for="(item, index) in list" :key="index">
        <div class="Indian-name">{{ item.name }}</div>
        <div class="Indian-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonIndian-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStart"></div>
    </div>

    <!-- <div class="start" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.Indian{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + IndianConfig.boxIndian + ')'") no-repeat;
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
  background: v-bind("'url(' + IndianConfig.listIndian + ')'") no-repeat;
  background-size: 100% 100%;
  width: 77vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-size: 14px;
}

.buttonIndian-box {
  position: absolute;
  top: 0%;
    left: 11.5%;
  width: 100%;
    height: 100%;

}
.buttons {
  margin: 11% 0 0 10%;
    width: 13%;
    height: 5.5%;

    z-index: 999;
  background: v-bind("'url(' + IndianConfig.homeIndian + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 40.5%;
    position: absolute;
    left: 16.5%;
    top: 80%;
    height: 9%;
    z-index: 999;
  background: v-bind("'url(' + IndianConfig.againIndian + ')'") no-repeat;

    background-size: 100% 100%;
}
.Indianp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.Indianp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Indianp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + IndianConfig.anyIndian + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listIndian {
  position: absolute;
    top: 61%;
    left: 56%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.itemIndian {
  margin-top: 15px;
  display: flex;
}

.Indian-name {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Indian-count{
  width: 50px;
}
</style>



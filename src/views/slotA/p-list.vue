<script>
import homeleopard from "@/assets/slotN4/homeleopard.png";
import againleopard from "@/assets/slotN4/againleopard.png";
import listleopard from "@/assets/slotN4/listboxleopard.png";
import boxleopard from "@/assets/slotN4/boxleopard.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const leopardConfig = reactive({
      listleopard,
      homeleopard,
      againleopard,
      boxleopard,
    });
    const list = reactive([
      {
        name: "Ivanildo Marques",
        count: "108B",
      },
      {
        name: "Jonas Takeda",
        count: "16B",
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
        name: "Lúcio Canto",
        count: "12B",
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
      leopardConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="leopard">
    <div :class="className">
    <div class="listleopard">
      <div class="itemleopard" v-for="(item, index) in list" :key="index">
        <div class="leopard-name">{{ item.name }}</div>
        <div class="leopard-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonleopard-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStart"></div>
    </div>

    <!-- <div class="start" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.leopard{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + leopardConfig.boxleopard + ')'") no-repeat;
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
  background: v-bind("'url(' + leopardConfig.listleopard + ')'") no-repeat;
  background-size: 100% 100%;
  width: 77vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-size: 14px;
}

.buttonleopard-box {
  position: absolute;
  top: 0%;
    left: 11.5%;
  width: 100%;
    height: 100%;

}
.buttons {
  width: 17%;
    height: 13.5%;
    z-index: 999;
  background: v-bind("'url(' + leopardConfig.homeleopard + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 64.5%;
    position: absolute;
    left: 12.5%;
    top: 80%;
    height: 14%;
    z-index: 999;
  background: v-bind("'url(' + leopardConfig.againleopard + ')'") no-repeat;

    background-size: 100% 100%;
}
.leopardp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.leopardp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.leopardp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + leopardConfig.anyleopard + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listleopard {
    position: absolute;
    top: 53%;
    left: 56%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.itemleopard {
  margin-top: 25px;
  display: flex;
}

.leopard-name {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.leopard-count{
  width: 50px;
}
</style>



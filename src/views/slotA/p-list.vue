<script>
import homecircus from "@/assets/slotA2/homecircus.png";
import againcircus from "@/assets/slotA2/againcircus.png";
import listcircus from "@/assets/slotA2/listboxcircus.png";
import boxcircus from "@/assets/slotA2/boxcircus.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const circusConfig = reactive({
      listcircus,
      homecircus,
      againcircus,
      boxcircus,
    });
    const list = reactive([
      {
        name: "Ivanildo circus",
        count: "1101B",
      },
      {
        name: "Jonas circus",
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
        name: "Lúcio circus",
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
      circusConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="circus">
    <div :class="className">
    <div class="listcircus">
      <div class="itemcircus" v-for="(item, index) in list" :key="index">
        <div class="circus-name">{{ item.name }}</div>
        <div class="circus-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttoncircus-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStart"></div>
    </div>

    <!-- <div class="start" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.circus{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + circusConfig.boxcircus + ')'") no-repeat;
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
  background: v-bind("'url(' + circusConfig.listcircus + ')'") no-repeat;
  background-size: 75%;
    background-position: center 0%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-size: 14px;
}

.buttoncircus-box {
  position: absolute;
  top: 0%;
    left: 11.5%;
  width: 100%;
    height: 100%;

}
.buttons {
  width: 13%;
    height: 9.5%;
    position: absolute;
    left: 13.5%;
    top: 89.5%;

    z-index: 999;
  background: v-bind("'url(' + circusConfig.homecircus + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 20%;
  height: 9.5%;
    position: absolute;
    left: 40.5%;
    top: 89.5%;
    z-index: 999;
  background: v-bind("'url(' + circusConfig.againcircus + ')'") no-repeat;

    background-size: 100% 100%;
}
.circusp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.circusp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circusp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + circusConfig.anycircus + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listcircus {
  position: absolute;
    top: 61%;
    left: 54%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.itemcircus {
  margin-top: 36px;
  display: flex;
}

.circus-name {
  width: 177px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.circus-count{
  width: 50px;
}
</style>



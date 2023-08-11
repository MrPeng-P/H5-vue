<script>
import homebuffalo from "@/assets/slotC1/homebuffalo.png";
import againbuffalo from "@/assets/slotC1/againbuffalo.png";
import listbuffalo from "@/assets/slotC1/listboxbuffalo.png";
import boxbuffalo from "@/assets/slotC1/boxbuffalo.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const buffaloConfig = reactive({
      listbuffalo,
      homebuffalo,
      againbuffalo,
      boxbuffalo,
    });
    const list = reactive([
      {
        name: "Ivanildo buffalo",
        count: "1101B",
      },
      {
        name: "Jonas buffalo",
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
        name: "Lúcio buffalo",
        count: "150B",
      },
    ]);

    const allMethods = {
      goHome: () => {
        router.push("/");
      },
      goStbuffalo: () => {
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
      buffaloConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="buffalo">
    <div :class="className">
    <div class="listbuffalo">
      <div class="itembuffalo" v-for="(item, index) in list" :key="index">
        <div class="buffalo-name">{{ item.name }}</div>
        <div class="buffalo-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonbuffalo-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStbuffalo"></div>
    </div>

    <!-- <div class="stbuffalo" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.buffalo{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + buffaloConfig.boxbuffalo + ')'") no-repeat;
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
  background: v-bind("'url(' + buffaloConfig.listbuffalo + ')'") no-repeat;
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

.buttonbuffalo-box {
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
  background: v-bind("'url(' + buffaloConfig.homebuffalo + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 18%;
    height: 9.5%;
    position: absolute;
    left: 39.5%;
    top: 22.5%;
    z-index: 999;
  background: v-bind("'url(' + buffaloConfig.againbuffalo + ')'") no-repeat;

    background-size: 100% 100%;
}
.buffalop-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.buffalop-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.buffalop-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + buffaloConfig.anybuffalo + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listbuffalo {
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
.itembuffalo {
  margin-top: 18px;
  display: flex;
}

.buffalo-name {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.buffalo-count{
  width: 50px;
}
</style>



<script>
import homewisdom from "@/assets/slotB2/homewisdom.png";
import againwisdom from "@/assets/slotB2/againwisdom.png";
import listwisdom from "@/assets/slotB2/listboxwisdom.png";
import boxwisdom from "@/assets/slotB2/boxwisdom.jpg";

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const wisdomConfig = reactive({
      listwisdom,
      homewisdom,
      againwisdom,
      boxwisdom,
    });
    const list = reactive([
      {
        name: "Ivanildo wisdom",
        count: "1101B",
      },
      {
        name: "Jonas wisdom",
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
        name: "Lúcio wisdom",
        count: "150B",
      },
    ]);

    const allMethods = {
      goHome: () => {
        router.push("/");
      },
      goStwisdom: () => {
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
      wisdomConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div class="wisdom">
    <div :class="className">
    <div class="listwisdom">
      <div class="itemwisdom" v-for="(item, index) in list" :key="index">
        <div class="wisdom-name">{{ item.name }}</div>
        <div class="wisdom-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonwisdom-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStwisdom"></div>
    </div>

    <!-- <div class="stwisdom" @click="goHome">
    </div> -->
  </div>
  </div>
</template>

<style scoped>
.wisdom{
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + wisdomConfig.boxwisdom + ')'") no-repeat;
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
  background: v-bind("'url(' + wisdomConfig.listwisdom + ')'") no-repeat;
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

.buttonwisdom-box {
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
  background: v-bind("'url(' + wisdomConfig.homewisdom + ')'") no-repeat;
  
    background-size: 100% 100%;
}
.buttons2 {
  width: 18%;
    height: 9.5%;
    position: absolute;
    left: 39.5%;
    top: 22.5%;
    z-index: 999;
  background: v-bind("'url(' + wisdomConfig.againwisdom + ')'") no-repeat;

    background-size: 100% 100%;
}
.wisdomp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.wisdomp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wisdomp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + wisdomConfig.anywisdom + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listwisdom {
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
.itemwisdom {
  margin-top: 18px;
  display: flex;
}

.wisdom-name {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wisdom-count{
  width: 50px;
}
</style>



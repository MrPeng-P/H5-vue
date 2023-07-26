<script>
import homefrutas from "@/assets/slotN2/homefrutas.png";
import againfrutas from "@/assets/slotN2/againfrutas.png";
import listfrutas from "@/assets/slotN2/listfrutas.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const frutasConfig = reactive({
      listfrutas,
      homefrutas,
      againfrutas,
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
      {
        name: "Cássio Watanabe",
        count: "14B",
      },
      {
        name: "me",
        count: sessionStorage.getItem('countValue'),
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
          return num.toString(); // 小于千的数字直接返回原值
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
      frutasConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div :class="className">
    <div class="listfrutas">
      <div class="itemfrutas" v-for="(item, index) in list" :key="index">
        <div class="frutas-name">{{ item.name }}</div>
        <div class="frutas-count">{{ item.count }}</div>
      </div>
    </div>
    <div class="buttonfrutas-box">
      <div class="buttons" @click="goHome"></div>
      <div class="buttons2" @click="goStart"></div>
    </div>

    <!-- <div class="start" @click="goHome">
    </div> -->
  </div>
</template>

<style scoped>
.container {
  background: v-bind("'url(' + frutasConfig.listfrutas + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-size: 14px;
}

.buttonfrutas-box {
  margin-bottom: 18vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.buttons {
  width: 120px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + frutasConfig.homefrutas + ')'") no-repeat;
  background-size: 100%;
}
.buttons2 {
  width: 120px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + frutasConfig.againfrutas + ')'") no-repeat;
  background-size: 100%;
}
.frutasp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.frutasp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.frutasp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + frutasConfig.anyfrutas + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.listfrutas {
  margin-left: 20px;
  margin-top: 22px;
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}
.itemfrutas {
  margin-top: 24px;
  display: flex;
}

.frutas-name {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.frutas-count{
  width: 50px;
}
</style>



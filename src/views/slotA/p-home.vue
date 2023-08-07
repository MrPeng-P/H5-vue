<script>
import playleopard from "@/assets/slotN4/playleopard2.png";
import boxleopard from "@/assets/slotN4/boxleopard.jpg";
import anyleopard from "@/assets/slotN4/changeleopard.png";
import anyBoxleopard from "@/assets/slotN4/anyBoxleopard.png";
import backleopard from "@/assets/slotN4/backleopard.png";
import seniorityleopard from "@/assets/slotN4/seniorityleopard.png";
import countleopard from "@/assets/slotN4/countleopard.png";
import ruleleopard from "@/assets/slotN4/ruleleopard.png";
import ruleDialogleopard from "@/assets/slotN4/ruleDialogleopard.jpg";
// import resultleopard from "@/assets/slotN4/resultleopard.png";
// import headleopard from "@/assets/slotN4/headleopard.png";

// import star from "@/assets/slotN4/starleopard.gif";
import { useRouter, useRoute } from "vue-router";
import leopard1 from "@/assets/slotN4/leopard1.png";
import leopard2 from "@/assets/slotN4/leopard2.png";
import leopard3 from "@/assets/slotN4/leopard3.png";
import leopard4 from "@/assets/slotN4/leopard4.png";
import leopard5 from "@/assets/slotN4/leopard5.png";
import leopard6 from "@/assets/slotN4/leopard6.png";
import leopard7 from "@/assets/slotN4/leopard7.png";

import animation1 from "@/assets/slotN4/dong/00001.png";
import animation4 from "@/assets/slotN4/dong/00004.png";
import animation8 from "@/assets/slotN4/dong/00008.png";
import animation12 from "@/assets/slotN4/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotN4/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue = ref(false);
    let countValue = ref(1000);
    let magnification = ref(1); // 倍率
    let playMAXCount=100
    let useCount = ref(0);
    let arrCount = reactive([
      {
        count: "1000",
        value: 0,
      },
      {
        count: "1800",
        value: 0,
      },
      {
        count: "2200",
        value: 0,
      },
    ]);
    countValue.value = sessionStorage.getItem("countValue")
      ? sessionStorage.getItem("countValue")
      : 1000;
    const className = "container";
    const router = new useRouter();
    // 随机生成 12 张图的数组
    let randomImages = [];
    const leopardConfig = reactive({
      // headleopard,
      animation1,
      animation4,
      animation8,
      animation12,
      anyleopard,
      playleopard,
      anyBoxleopard,
      boxleopard,
      backleopard,
      //   star,
      seniorityleopard,
      countleopard,
      ruleleopard,
      ruleDialogleopard,
      // resultleopard
    });
    const leopardList = reactive([
      {
        name: "item1",
        size: 4,
        imgList: [],
      },
      {
        name: "item2",
        size: 8,
        imgList: [],
      },
      {
        name: "item3",
        size: 12,
        imgList: [],
      },
      {
        name: "item4",
        size: 12,
        imgList: [],
      },
      {
        name: "item5",
        size: 12,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let start = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: leopard1,
      },
      {
        img: leopard2,
      },
      {
        img: leopard3,
        name: "leopard2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: leopard4,
      },
      {
        img: leopard5,
      },
      {
        img: leopard6,
        name: "leopard1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: leopard7,
        name: "leopard3",
        className: "animation",
        count: 2200 * magnification.value,
      },
    ];
    const allMethods = {
      run: () => {
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= 100;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = leopardList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".leopardp-item-img").forEach((child) => {
          child.style.setProperty("display", "none");
        });
        // boxLists.forEach((item)=>{
        //     item.style.setProperty(
        //       "background-position-x",
        //       "center"
        //     );
        //     item.style.setProperty(
        //       "background-position-y",
        //       0+'px'
        //     );
        // })
        const content = document.getElementById("leopardp-he");
        const box2 = document.getElementById("leopardp");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 200) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
            if (timeOhter > 0 && timeOhter <= 3000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Start the tween immediately.
        let nowDate = window.performance.now();
        function animate(time) {
          timeOhter = time - nowDate;
          id = requestAnimationFrame(animate);

          let result = TWEEN.update(time);

          if (!result) cancelAnimationFrame(id);
        }
        animate();
        let i = 0;
        let timeany = setInterval(() => {
          i++;
          if (i > 7) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 5) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 200 + "px");
            boxLists[0]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 200 + "px");
            boxLists[1]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 200 + "px");
            boxLists[2]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 200 + "px");
            boxLists[3]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 200 + "px");
            boxLists[4]
              .querySelectorAll(".leopardp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

            countValue.value += useCount.value;
          }
        }, 1000);
      },
      clear: () => {
        timeOhter = 0;
        cancelAnimationFrame(id);
      },
      openDialog: () => {
        open.value = false;
        buttonStatus.value = true;
        ceshi();
      },
      playMAX: () => {
        // 模拟老虎机随机结果，0 表示压小，1 表示压大
        const result = Math.floor(Math.random() * 2);

        if (result === 0) {
          // 压小，扣除金额
          countValue.value -= playMAXCount;
        } else {
          // 压大，增加金额
          countValue.countValue += playMAXCount;
        }
      },
      showRule: () => {
        showRuleValue.value = !showRuleValue.value;
      },
      close: () => {
        open.value = false;
        router.push("/");
      },
      randomImg() {
        randomImages = [];
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(leopardList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "leopard1") {
            arrCount[0].value++;
          } else if (item.name == "leopard2") {
            arrCount[1].value++;
          } else if (item.name == "leopard3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给leopardList
      assignImageList(leopardList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        leopardList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return leopardList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      start,
      leopardConfig,
      randomImages,
      leopardList,
      countValue,
      useCount,
      showRuleValue,
      arrCount,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div :class="className">
    <!-- <img class="headleopard" :src="leopardConfig.headleopard" alt=""> -->
    <div class="leopardp" id="leopardp">
      <div class="leopardp-he" id="leopardp-he">
        <!-- <img class="leopard-rule" @click="showRule" :src="leopardConfig.ruleleopard" alt=""> -->
        <div class="leopardp-hidden">
          <div
            class="leopardp-item"
            :id="item.name"
            v-for="(item, index) in leopardList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'leopardp-item-img ' + imgItem.className
                  : 'leopardp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonleopard-box">
        <div class="buttons" @click="run"></div>
        <div class="buttons2" @click="goSeniority"></div>
      </div>
      <div class="leopardd-leopardp">
        <div class="leopardd-back" @click="close"></div>
      </div>
      <div class="leopard-count" @click="showRule">
        <img class="leopard-rule" :src="leopardConfig.ruleleopard" alt="" />
        <img :src="leopardConfig.countleopard" alt="" />
        <div class="countValue">{{ countValue }}</div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="leopardConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="leopardConfig.resultleopard" alt="" /> -->
        <!-- <div class="modelleopard-list">
          <div
            class="modelleopard-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelleopard-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="leopardConfig.star" alt="" /> -->
        <img class="model-img" :src="leopardConfig.ruleDialogleopard" alt="" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.leopardd-leopardp {
  display: flex;
  align-items: center;
  /* padding: 60px 15px; */
  position: absolute;
  z-index: 99;
  top: 0;
  width: 80%;
  height: 60px;
  color: #fff;
}
.leopard-count {
  width: 100%;
  position: absolute;
  bottom: 7%;
  left: 28%;
  display: flex;
  font-size: 16px;
  z-index: 1;
}
.countValue {
  margin: -4.5% 0 0 27%;
}
.leopard-count img {
  width: 54%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
.leopard-count .leopard-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.leopardd-back {
  background: v-bind("'url(' + leopardConfig.backleopard + ')'") no-repeat;

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + leopardConfig.playleopard + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
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

.leopardp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 90vw;
  height: 90vh;
  overflow: hidden;

  background: v-bind("'url(' + leopardConfig.anyBoxleopard + ')'") no-repeat;
  background-size: 85%;
  background-position: center;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonleopard-box {
  position: absolute;
  display: flex;
  width: 60%;
  justify-content: space-between;
}
.buttons {
  margin-left: -4%;
  width: 23%;
  height: 44px;
  z-index: 999;
  background: v-bind("'url(' + leopardConfig.playleopard + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 22%;
  height: 44px;
  z-index: 999;
  background: v-bind("'url(' + leopardConfig.seniorityleopard + ')'") no-repeat;
  background-size: 100% 100%;
}

.leopardp-he {
  position: relative;
  margin-right: 2%;
  margin-top: -5%;
  width: 107%;
  height: 112vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.5);
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + leopardConfig.anyleopard + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.leopardp-item-img {
  position: relative;

  display: none;
  width: 120px;
  height: 120px;
}
.leopardp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 100%;
  height: 80%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + leopardConfig.dialogleopard + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star {
  position: absolute;
  width: 50%;
}
.model-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 76%;
}
.model-img-bg {
  position: absolute;
  left: 48%;
  top: 35%;
  transform: translate(-50%, -50%);
  width: 70%;
}

.start-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.start-bg img {
  width: 100%;
}

.modelleopard-list {
  position: absolute;
  left: 60%;
  top: 39.5%;

  transform: translate(-50%, -50%);
  width: 103px;
  /* top: 102px; */
  color: #fff;
  font-size: 16px;
  /* transform: rotate(7deg) translateX(-36px); */
}
.modelleopard-item {
  margin-bottom: 11px;
}
.modelleopard-total {
  padding: 7px 14px;
}

.headleopard {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + leopardConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + leopardConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + leopardConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + leopardConfig.animation12 + ')'");
  }
}

/* 设置动画元素样式和动画 */
.animation {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position-y: center;
  /* background-size: cover; */
  /* 2秒钟的步长图片动画，5帧图片，无限循环 */
  background-position-y: center;
  background-position-x: center;
  background-size: 99%;

  animation: image-animation 2s steps(4) infinite;
}
</style>

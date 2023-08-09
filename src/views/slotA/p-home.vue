<script>
import playcircus from "@/assets/slotA2/playcircus.png";
import boxcircus from "@/assets/slotA2/boxcircus.jpg";
import anycircus from "@/assets/slotA2/changecircus.png";
import anyBoxcircus from "@/assets/slotA2/anyBoxcircus.png";
import backcircus from "@/assets/slotA2/backcircus.png";
import senioritycircus from "@/assets/slotA2/senioritycircus.png";
// import countcircus from "@/assets/slotA2/countcircus.png";
// import rulecircus from "@/assets/slotA2/rulecircus.png";
// import ruleDialogcircus from "@/assets/slotA2/ruleDialogcircus.jpg";
// import resultcircus from "@/assets/slotA2/resultcircus.png";
// import headcircus from "@/assets/slotA2/headcircus.png";

// import star from "@/assets/slotA2/starcircus.gif";
import { useRouter, useRoute } from "vue-router";
import circus1 from "@/assets/slotA2/circus1.png";
import circus2 from "@/assets/slotA2/circus2.png";
import circus3 from "@/assets/slotA2/circus3.png";
import circus4 from "@/assets/slotA2/circus4.png";
import circus5 from "@/assets/slotA2/circus5.png";
import circus6 from "@/assets/slotA2/circus6.png";
import circus7 from "@/assets/slotA2/circus7.png";
import circus8 from "@/assets/slotA2/circus8.png";
import circus9 from "@/assets/slotA2/circus9.png";
import circus10 from "@/assets/slotA2/circus10.png";
import circus11 from "@/assets/slotA2/circus10.png";
import circus12 from "@/assets/slotA2/circus10.png";

import animation1 from "@/assets/slotA2/dong/00001.png";
import animation4 from "@/assets/slotA2/dong/00004.png";
import animation8 from "@/assets/slotA2/dong/00008.png";
import animation12 from "@/assets/slotA2/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotA2/football.png";
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
    const circusConfig = reactive({
      // headcircus,
      animation1,
      animation4,
      animation8,
      animation12,
      anycircus,
      playcircus,
      anyBoxcircus,
      boxcircus,
      backcircus,
      //   star,
      senioritycircus,
      // countcircus,
      // rulecircus,
      // ruleDialogcircus,
      // resultcircus
    });
    const circusList = reactive([
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
      
    ]);
    let timeOhter = 0;
    let id;
    let start = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: circus1,
        name: "circus2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: circus2,
        name: "circus1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: circus3,
      
      },
      {
        img: circus4,
      },
      {
        img: circus5,
      },
      {
        img: circus6,
     
      },
      {
        img: circus7,
      
      },
      {
        img: circus8,
        name: "circus3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: circus9,
      },
      {
        img: circus10,
      },
      {
        img: circus11,
      },
      {
        img: circus12,
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
        const boxLists = circusList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".circusp-item-img").forEach((child) => {
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
        const content = document.getElementById("circusp-he");
        const box2 = document.getElementById("circusp");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
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
          if (i > 6) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 4) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i]
              .querySelectorAll(".circusp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".circusp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".circusp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".circusp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3]
              .querySelectorAll(".circusp-item-img")
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

        allMethods.assignImageList(circusList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "circus1") {
            arrCount[0].value++;
          } else if (item.name == "circus2") {
            arrCount[1].value++;
          } else if (item.name == "circus3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给circusList
      assignImageList(circusList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        circusList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return circusList;
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
      circusConfig,
      randomImages,
      circusList,
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
    <!-- <img class="headcircus" :src="circusConfig.headcircus" alt=""> -->
    <div class="circusp" id="circusp">
      <div class="circusp-he" id="circusp-he">
        <!-- <img class="circus-rule" @click="showRule" :src="circusConfig.rulecircus" alt=""> -->
        <div class="circusp-hidden">
          <div
            class="circusp-item"
            :id="item.name"
            v-for="(item, index) in circusList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'circusp-item-img ' + imgItem.className
                  : 'circusp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttoncircus-box">
        <div class="buttons" @click="run"></div>
        <div class="buttons2" @click="goSeniority"></div>
      </div>
      <div class="circusd-circusp">
        <div class="circusd-back" @click="close"></div>
      </div>
      <div class="circus-count" @click="showRule">
        <!-- <img class="circus-rule" :src="circusConfig.rulecircus" alt="" /> -->
        <!-- <img :src="circusConfig.countcircus" alt="" /> -->
        <div class="countValue">{{ countValue }}</div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="circusConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="circusConfig.resultcircus" alt="" /> -->
        <!-- <div class="modelcircus-list">
          <div
            class="modelcircus-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelcircus-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="circusConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="circusConfig.ruleDialogcircus" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.circusd-circusp {
  display: flex;
  align-items: center;
  /* padding: 60px 15px; */
  position: absolute;
    z-index: 99;
    top: 5%;
    left: 15%;
    color: #fff;
}
.circus-count {
  width: 100%;
    position: absolute;
    top: 63%;
    left: 61%;
    display: flex;
    font-size: 16px;
    z-index: 1;
}
.countValue {
  margin: 0 0 0 14%;

}
.circus-count img {
  width: 54%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
.circus-count .circus-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.circusd-back {
  background: v-bind("'url(' + circusConfig.backcircus + ')'") no-repeat;

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + circusConfig.playcircus + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
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

.circusp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
    height: 100vh;
  overflow: hidden;

  background: v-bind("'url(' + circusConfig.anyBoxcircus + ')'") no-repeat;
  background-size: 75%;
    background-position: center 0%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttoncircus-box {
  position: absolute;
  bottom: 1%;
  display: flex;
  width: 60%;
  justify-content: space-between;
}
.buttons {
  margin-left: 9%;
    width: 21%;
    height: 40px;
  z-index: 999;
  background: v-bind("'url(' + circusConfig.playcircus + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-right: 12%;
    width: 30%;
    height: 40px;
  z-index: 999;
  background: v-bind("'url(' + circusConfig.senioritycircus + ')'") no-repeat;
  background-size: 100% 100%;
}

.circusp-he {
  position: relative;
    margin-right: 10%;
    margin-top: -5%;
    width: 81%;
    height: 126vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}

.circusp-hidden 
{
  /* margin-top: 2%; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circusp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + circusConfig.anycircus + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 66% 415%;
}
.circusp-item-img {
  position: relative;

  display: none;
  width: 100%;
    height: 100%;
}
.circusp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 80%;
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
  /* background: v-bind("'url(' + circusConfig.dialogcircus + ')'") no-repeat; */
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

.modelcircus-list {
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
.modelcircus-item {
  margin-bottom: 11px;
}
.modelcircus-total {
  padding: 7px 14px;
}

.headcircus {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + circusConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + circusConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + circusConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + circusConfig.animation12 + ')'");
  }
}

/* 设置动画元素样式和动画 */
.animation {
  width: 100%;
    height: 100%;
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

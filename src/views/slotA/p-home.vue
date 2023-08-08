<script>
import playIndian from "@/assets/slotA1/playIndian2.png";
import boxIndian from "@/assets/slotA1/boxIndian.jpg";
import anyIndian from "@/assets/slotA1/changeIndian.png";
import anyBoxIndian from "@/assets/slotA1/anyBoxIndian.png";
import backIndian from "@/assets/slotA1/backIndian.png";
import seniorityIndian from "@/assets/slotA1/seniorityIndian.png";
// import countIndian from "@/assets/slotA1/countIndian.png";
// import ruleIndian from "@/assets/slotA1/ruleIndian.png";
// import ruleDialogIndian from "@/assets/slotA1/ruleDialogIndian.jpg";
// import resultIndian from "@/assets/slotA1/resultIndian.png";
// import headIndian from "@/assets/slotA1/headIndian.png";

// import star from "@/assets/slotA1/starIndian.gif";
import { useRouter, useRoute } from "vue-router";
import Indian1 from "@/assets/slotA1/Indian1.jpg";
import Indian2 from "@/assets/slotA1/Indian2.jpg";
import Indian3 from "@/assets/slotA1/Indian3.jpg";
import Indian4 from "@/assets/slotA1/Indian4.jpg";
import Indian5 from "@/assets/slotA1/Indian5.jpg";
import Indian6 from "@/assets/slotA1/Indian6.png";
import Indian7 from "@/assets/slotA1/Indian7.png";
import Indian8 from "@/assets/slotA1/Indian8.png";
import Indian9 from "@/assets/slotA1/Indian9.png";
import Indian10 from "@/assets/slotA1/Indian10.png";

import animation1 from "@/assets/slotA1/dong/00001.png";
import animation4 from "@/assets/slotA1/dong/00004.png";
import animation8 from "@/assets/slotA1/dong/00008.png";
import animation12 from "@/assets/slotA1/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotA1/football.png";
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
    const IndianConfig = reactive({
      // headIndian,
      animation1,
      animation4,
      animation8,
      animation12,
      anyIndian,
      playIndian,
      anyBoxIndian,
      boxIndian,
      backIndian,
      //   star,
      seniorityIndian,
      // countIndian,
      // ruleIndian,
      // ruleDialogIndian,
      // resultIndian
    });
    const IndianList = reactive([
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
        img: Indian1,
      },
      {
        img: Indian2,
      },
      {
        img: Indian3,
        name: "Indian2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Indian4,
      },
      {
        img: Indian5,
      },
      {
        img: Indian6,
        name: "Indian1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Indian7,
        name: "Indian3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: Indian8,
      },
      {
        img: Indian8,
      },
      {
        img: Indian10,
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
        const boxLists = IndianList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".Indianp-item-img").forEach((child) => {
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
        const content = document.getElementById("Indianp-he");
        const box2 = document.getElementById("Indianp");
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
              .querySelectorAll(".Indianp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 200 + "px");
            boxLists[0]
              .querySelectorAll(".Indianp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 200 + "px");
            boxLists[1]
              .querySelectorAll(".Indianp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 200 + "px");
            boxLists[2]
              .querySelectorAll(".Indianp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 200 + "px");
            boxLists[3]
              .querySelectorAll(".Indianp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 200 + "px");
            boxLists[4]
              .querySelectorAll(".Indianp-item-img")
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

        allMethods.assignImageList(IndianList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Indian1") {
            arrCount[0].value++;
          } else if (item.name == "Indian2") {
            arrCount[1].value++;
          } else if (item.name == "Indian3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给IndianList
      assignImageList(IndianList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        IndianList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return IndianList;
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
      IndianConfig,
      randomImages,
      IndianList,
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
    <!-- <img class="headIndian" :src="IndianConfig.headIndian" alt=""> -->
    <div class="Indianp" id="Indianp">
      <div class="Indianp-he" id="Indianp-he">
        <!-- <img class="Indian-rule" @click="showRule" :src="IndianConfig.ruleIndian" alt=""> -->
        <div class="Indianp-hidden">
          <div
            class="Indianp-item"
            :id="item.name"
            v-for="(item, index) in IndianList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Indianp-item-img ' + imgItem.className
                  : 'Indianp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonIndian-box">
        <div class="buttons" @click="run"></div>
        <div class="buttons2" @click="goSeniority"></div>
      </div>
      <div class="Indiand-Indianp">
        <div class="Indiand-back" @click="close"></div>
      </div>
      <div class="Indian-count" @click="showRule">
        <!-- <img class="Indian-rule" :src="IndianConfig.ruleIndian" alt="" /> -->
        <!-- <img :src="IndianConfig.countIndian" alt="" /> -->
        <div class="countValue">{{ countValue }}</div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="IndianConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="IndianConfig.resultIndian" alt="" /> -->
        <!-- <div class="modelIndian-list">
          <div
            class="modelIndian-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelIndian-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <!-- <div v-if="showRuleValue" class="modal" @click="showRule"> -->
        <!-- 12312 -->
        <!-- <img class="model-star" :src="IndianConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="IndianConfig.ruleDialogIndian" alt="" /> -->
      <!-- </div> -->
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.Indiand-Indianp {
  display: flex;
  align-items: center;
  /* padding: 60px 15px; */
  position: absolute;
  z-index: 99;
  top: 12%;
    right: 23%;

  color: #fff;
}
.Indian-count {
  width: 100%;
  position: absolute;
  top: 15%;
  left: 28%;
  display: flex;
  font-size: 16px;
  z-index: 1;
}
.countValue {
  margin: 0 0 0 14%;

}
.Indian-count img {
  width: 54%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
.Indian-count .Indian-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Indiand-back {
  background: v-bind("'url(' + IndianConfig.backIndian + ')'") no-repeat;

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + IndianConfig.playIndian + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
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

.Indianp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
    height: 100vh;
  overflow: hidden;

  background: v-bind("'url(' + IndianConfig.anyBoxIndian + ')'") no-repeat;
  background-size: 85%;
  background-position: center;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonIndian-box {
  position: absolute;
  top: 15%;
  display: flex;
  width: 60%;
  justify-content: space-between;
}
.buttons {
  margin-left: 9%;
    width: 21%;
    height: 24px;
  z-index: 999;
  background: v-bind("'url(' + IndianConfig.playIndian + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-right: 12%;
    width: 30%;
    height: 24px;
  z-index: 999;
  background: v-bind("'url(' + IndianConfig.seniorityIndian + ')'") no-repeat;
  background-size: 100% 100%;
}

.Indianp-he {
  position: relative;
  margin-right: 2%;
  /* margin-top: -5%; */
  width:88%;
  height: 112vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.5);
}

.Indianp-hidden 
{
  margin-top: 2%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Indianp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + IndianConfig.anyIndian + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 85%;
}
.Indianp-item-img {
  position: relative;

  display: none;
  width: 120px;
  height: 120px;
}
.Indianp-item-img img {
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
  /* background: v-bind("'url(' + IndianConfig.dialogIndian + ')'") no-repeat; */
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

.modelIndian-list {
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
.modelIndian-item {
  margin-bottom: 11px;
}
.modelIndian-total {
  padding: 7px 14px;
}

.headIndian {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + IndianConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + IndianConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + IndianConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + IndianConfig.animation12 + ')'");
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

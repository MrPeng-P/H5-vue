<script>

import playFruitcoins from "@/assets/slotB12/playFruitcoins2.png";
import playFruitcoins2 from "@/assets/slotB12/playFruitcoins.png";
// import playFruitcoins3 from "@/assets/slotB12/playFruitcoins3.png";
import boxFruitcoins from "@/assets/slotB12/boxFruitcoins.jpg";
import anyFruitcoins from "@/assets/slotB12/changeFruitcoins.png";
import anyBoxFruitcoins from "@/assets/slotB12/anyBoxFruitcoins.png";
import homeFruitcoins from "@/assets/slotB12/homeFruitcoins.png";
// import againFruitcoins from "@/assets/slotB12/againFruitcoins.png";
import countFruitcoins from "@/assets/slotB12/countFruitcoins.png";
// import ruleFruitcoins from "@/assets/slotB12/ruleFruitcoins.png";
// import ruleDialogFruitcoins from "@/assets/slotB12/ruleDialogFruitcoins.jpg";
// import resultFruitcoins from "@/assets/slotB12/resultFruitcoins.png";
// import headFruitcoins from "@/assets/slotB12/headFruitcoins.png";

// import star from "@/assets/slotB12/starFruitcoins.gif";
import { useRouter, useRoute } from "vue-router";
import Fruitcoins1 from "@/assets/slotB12/Fruitcoins1.png";
import Fruitcoins2 from "@/assets/slotB12/Fruitcoins2.png";
import Fruitcoins3 from "@/assets/slotB12/Fruitcoins3.png";
import Fruitcoins4 from "@/assets/slotB12/Fruitcoins4.png";
import Fruitcoins5 from "@/assets/slotB12/Fruitcoins5.png";
import Fruitcoins6 from "@/assets/slotB12/Fruitcoins6.png";
// import Fruitcoins8 from "@/assets/slotB12/Fruitcoins8.png";
import Fruitcoins7 from "@/assets/slotB12/Fruitcoins7.png";
// import Fruitcoins9 from "@/assets/slotB12/Fruitcoins9.png";

// import animation1 from "@/assets/slotB12/dong/00001.png";
// import animation4 from "@/assets/slotB12/dong/00004.png";
// import animation8 from "@/assets/slotB12/dong/00008.png";
// import animation12 from "@/assets/slotB12/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotB12/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue = ref(false);
    let countValue = ref(1000);
    let magnification = ref(1); // 倍率
    let playMAXCount = 100;
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
    const FruitcoinsConfig = reactive({
      // headFruitcoins,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyFruitcoins,
      playFruitcoins,
      playFruitcoins2,
      // playFruitcoins3,
      // againFruitcoins,
      anyBoxFruitcoins,
      boxFruitcoins,
      homeFruitcoins,
      //   star,
      // seniorityFruitcoins,
      countFruitcoins,
      // ruleFruitcoins,
      // ruleDialogFruitcoins,
      // resultFruitcoins
    });
    const FruitcoinsList = reactive([
      {
        name: "item1",
        size: 2,
        imgList: [],
      },
      {
        name: "item2",
        size: 2,
        imgList: [],
      },
      {
        name: "item3",
        size: 2,
        imgList: [],
      },
     
    ]);
    let timeOhter = 0;
    let id;
    let stFruitcoins = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: Fruitcoins1,
        name: "Fruitcoins2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Fruitcoins2,
        name: "Fruitcoins1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Fruitcoins3,
      },
      {
        img: Fruitcoins4,
      },
      {
        img: Fruitcoins5,
      },
      {
        img: Fruitcoins6,
      },
      {
        img: Fruitcoins7,
        name: "Fruitcoins3",
        className: "animation",
        count: 2200 * magnification.value,
      },
    ];
    const allMethods = {
      run: (value) => {
        let magn=value||1;
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= 100*magn;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = FruitcoinsList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
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
        const content = document.getElementById("Fruitcoinsp-he");
        const box2 = document.getElementById("Fruitcoinsp");
        const coords = { x: 0, y: 0 }; // StFruitcoins at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
                if (timeOhter > 0 && timeOhter <= 3000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
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

            // if (timeOhter > 3000 && timeOhter <= 6000) {
            //   boxLists[3].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            // }
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            // }
        
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // StFruitcoins the tween immediately.
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
            boxLists[i].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;

          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
            
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".Fruitcoinsp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          // }
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
        const totalImages = 20;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(FruitcoinsList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Fruitcoins1") {
            arrCount[0].value++;
          } else if (item.name == "Fruitcoins2") {
            arrCount[1].value++;
          } else if (item.name == "Fruitcoins3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给FruitcoinsList
      assignImageList(FruitcoinsList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        FruitcoinsList.forEach((item) => {
          const numImages = Math.min(item.size, 4);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return FruitcoinsList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stFruitcoins,
      FruitcoinsConfig,
      randomImages,
      FruitcoinsList,
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
    <!-- <img class="headFruitcoins" :src="FruitcoinsConfig.headFruitcoins" alt=""> -->
    <div class="Fruitcoinsp" id="Fruitcoinsp">
      <div class="Fruitcoinsp-he" id="Fruitcoinsp-he">
        <!-- <img class="Fruitcoins-rule" @click="showRule" :src="FruitcoinsConfig.ruleFruitcoins" alt=""> -->
        <div class="Fruitcoinsp-hidden">
          <div
            class="Fruitcoinsp-item"
            :id="item.name"
            v-for="(item, index) in FruitcoinsList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Fruitcoinsp-item-img ' + imgItem.className
                  : 'Fruitcoinsp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonFruitcoins-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsFruitcoins2" @click="run()"></div>
       
        <div class="buttonsFruitcoinsBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="Fruitcoins-count" @click="showRule">
          <!-- <img class="Fruitcoins-rule" :src="FruitcoinsConfig.ruleFruitcoins" alt="" /> -->
          <img :src="FruitcoinsConfig.countFruitcoins" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="Fruitcoinsd-Fruitcoinsp">
        <div class="Fruitcoinsd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="FruitcoinsConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="FruitcoinsConfig.resultFruitcoins" alt="" /> -->
        <!-- <div class="modelFruitcoins-list">
          <div
            class="modelFruitcoins-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelFruitcoins-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="FruitcoinsConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="FruitcoinsConfig.ruleDialogFruitcoins" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.Fruitcoinsd-Fruitcoinsp {
  display: flex;
  align-items: center;
  /* padding: 60px 15px; */
  position: absolute;
  z-index: 99;
  top: 11%;
  left: 15%;
  color: #fff;
}
.countValue {
  margin: 0 0 0 37%;
    color: #FFF;
    font-size: 18px;
}

.Fruitcoins-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Fruitcoins-count .Fruitcoins-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Fruitcoinsd-back {
  /* background: v-bind("'url(' + FruitcoinsConfig.homeFruitcoins + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stFruitcoins {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + FruitcoinsConfig.playFruitcoins + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + FruitcoinsConfig.boxFruitcoins + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Fruitcoinsp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + FruitcoinsConfig.anyBoxFruitcoins + ')'") no-repeat;
  background-size: 56%;
    background-position: center 40%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonFruitcoins-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.Fruitcoins-count {
  position: relative;
  width: 46%;
    height: 44%;
    margin-left: 3%;
    margin-top: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 5%;
    margin-top: -1%;
    width: 12%;

    height: 43%;
  z-index: 999;
  background: v-bind("'url(' + FruitcoinsConfig.homeFruitcoins + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  /* margin-left: 53%;
  margin-bottom: -57%; */
  /* margin-left: 4%; */
    margin-top: -1%;
    margin-right: 0%;
  width: 30%;
  height: 40%;
  z-index: 999;
  /* background: v-bind("'url(' + FruitcoinsConfig.seniorityFruitcoins + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsFruitcoinsBack{
  position: absolute;
  left: 65.5%;
    margin-top: 64%;
    width: 38%;
    height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + FruitcoinsConfig.againFruitcoins + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsFruitcoins2{
  margin-left: 1%;
    margin-top: 60%;
    width: 26%;
    height: 44.5%;
    z-index: 999;
  background: v-bind("'url(' + FruitcoinsConfig.playFruitcoins2 + ')'") no-repeat;
  background-size: 100% 100%;
}
.Fruitcoinsp-he {
  position: relative;
    margin-right: 0%;
    margin-top: 5%;
    width: 77%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.Fruitcoinsp-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Fruitcoinsp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + FruitcoinsConfig.anyFruitcoins + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 71% 410%;
}
.Fruitcoinsp-item:nth-child(2){
  /* margin-right: 20%; */
}
.Fruitcoinsp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.Fruitcoinsp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 55%;
  height: 80%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stFruitcoins;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + FruitcoinsConfig.dialogFruitcoins + ')'") no-repeat; */
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

.stFruitcoins-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stFruitcoins-bg img {
  width: 100%;
}

.modelFruitcoins-list {
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
.modelFruitcoins-item {
  margin-bottom: 11px;
}
.modelFruitcoins-total {
  padding: 7px 14px;
}

.headFruitcoins {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + FruitcoinsConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + FruitcoinsConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + FruitcoinsConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + FruitcoinsConfig.animation12 + ')'");
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

  /* animation: image-animation 2s steps(4) infinite; */
}
</style>

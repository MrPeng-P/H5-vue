<script>
import playthegods from "@/assets/slotB7/playthegods.png";
import playthegods3 from "@/assets/slotB7/playthegods3.png";
import boxthegods from "@/assets/slotB7/boxthegods.jpg";
import anythegods from "@/assets/slotB7/changethegods.png";
import anyBoxthegods from "@/assets/slotB7/anyBoxthegods.png";
import homethegods from "@/assets/slotB7/homethegods.png";
// import senioritythegods from "@/assets/slotB7/senioritythegods.png";
import countthegods from "@/assets/slotB7/countthegods.png";
// import rulethegods from "@/assets/slotB7/rulethegods.png";
// import ruleDialogthegods from "@/assets/slotB7/ruleDialogthegods.jpg";
// import resultthegods from "@/assets/slotB7/resultthegods.png";
// import headthegods from "@/assets/slotB7/headthegods.png";

// import star from "@/assets/slotB7/starthegods.gif";
import { useRouter, useRoute } from "vue-router";
import thegods1 from "@/assets/slotB7/thegods1.png";
import thegods2 from "@/assets/slotB7/thegods2.png";
import thegods3 from "@/assets/slotB7/thegods3.png";
import thegods4 from "@/assets/slotB7/thegods4.png";
import thegods5 from "@/assets/slotB7/thegods5.png";
import thegods6 from "@/assets/slotB7/thegods6.png";
import thegods7 from "@/assets/slotB7/thegods7.png";

// import animation1 from "@/assets/slotB7/dong/00001.png";
// import animation4 from "@/assets/slotB7/dong/00004.png";
// import animation8 from "@/assets/slotB7/dong/00008.png";
// import animation12 from "@/assets/slotB7/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotB7/football.png";
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
    const thegodsConfig = reactive({
      // headthegods,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anythegods,
      playthegods,
      playthegods3,
      anyBoxthegods,
      boxthegods,
      homethegods,
      //   star,
      // senioritythegods,
      countthegods,
      // rulethegods,
      // ruleDialogthegods,
      // resultthegods
    });
    const thegodsList = reactive([
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
      // {
      //   name: "item5",
      //   size: 12,
      //   imgList: [],
      // },
    ]);
    let timeOhter = 0;
    let id;
    let stthegods = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: thegods1,
        name: "thegods2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: thegods2,
        name: "thegods1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: thegods3,
      },
      {
        img: thegods4,
      },
      {
        img: thegods5,
      },
      {
        img: thegods6,
      },
      {
        img: thegods7,
        name: "thegods3",
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
        const boxLists = thegodsList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".thegodsp-item-img").forEach((child) => {
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
        const content = document.getElementById("thegodsp-he");
        const box2 = document.getElementById("thegodsp");
        const coords = { x: 0, y: 0 }; // Stthegods at (0, 0)
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
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            // }
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
          tween.start(); // Stthegods the tween immediately.
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
            boxLists[i].querySelectorAll(".thegodsp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".thegodsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".thegodsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".thegodsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".thegodsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".thegodsp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   countValue.value += useCount.value;
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
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(thegodsList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "thegods1") {
            arrCount[0].value++;
          } else if (item.name == "thegods2") {
            arrCount[1].value++;
          } else if (item.name == "thegods3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给thegodsList
      assignImageList(thegodsList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        thegodsList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return thegodsList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stthegods,
      thegodsConfig,
      randomImages,
      thegodsList,
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
    <!-- <img class="headthegods" :src="thegodsConfig.headthegods" alt=""> -->
    <div class="thegodsp" id="thegodsp">
      <div class="thegodsp-he" id="thegodsp-he">
        <!-- <img class="thegods-rule" @click="showRule" :src="thegodsConfig.rulethegods" alt=""> -->
        <div class="thegodsp-hidden">
          <div
            class="thegodsp-item"
            :id="item.name"
            v-for="(item, index) in thegodsList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'thegodsp-item-img ' + imgItem.className
                  : 'thegodsp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonthegods-box">
        <div class="buttonsthegods2" @click="run(2)"></div>
       
        <div class="buttonsthegodsBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="thegods-count" @click="showRule">
          <!-- <img class="thegods-rule" :src="thegodsConfig.rulethegods" alt="" /> -->
          <img :src="thegodsConfig.countthegods" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        <div class="buttons" @click="close"></div>
      </div>
      <div class="thegodsd-thegodsp">
        <div class="thegodsd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="thegodsConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="thegodsConfig.resultthegods" alt="" /> -->
        <!-- <div class="modelthegods-list">
          <div
            class="modelthegods-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelthegods-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="thegodsConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="thegodsConfig.ruleDialogthegods" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.thegodsd-thegodsp {
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
    color: #750000;
    font-size: 18px;
}

.thegods-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.thegods-count .thegods-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.thegodsd-back {
  /* background: v-bind("'url(' + thegodsConfig.homethegods + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stthegods {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + thegodsConfig.playthegods + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + thegodsConfig.boxthegods + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thegodsp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + thegodsConfig.anyBoxthegods + ')'") no-repeat;
  background-size: 65%;
    background-position: center 5%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonthegods-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.thegods-count {
  position: relative;
  width: 46%;
    height: 45%;
    margin-left: 2%;
    margin-right: -23%;
    margin-top: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 13%;
    margin-top: -1%;
    width: 14%;
    width: 9%;
    height: 43%;
  z-index: 999;
  background: v-bind("'url(' + thegodsConfig.homethegods + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  /* margin-left: 53%;
  margin-bottom: -57%; */
  margin-left: 14%;
    margin-top: -1%;
    margin-right: 0%;
  width: 30%;
  height: 40%;
  z-index: 999;
  /* background: v-bind("'url(' + thegodsConfig.senioritythegods + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsthegodsBack{
  position: absolute;
    /* margin-left: 7%; */
    top: 288%;
    left: 46.5%;
    /* margin-top: 56.5%; */
    width: 17%;
    height: 42.5%;
  z-index: 999;
  background: v-bind("'url(' + thegodsConfig.playthegods + ')'") no-repeat;
  background-size: 100% 100%;
}

.buttonsthegods2{
  margin-left: 10%;
    margin-top: 65.5%;
    width: 42%;
    height: 39.5%;
  z-index: 999;
  background: v-bind("'url(' + thegodsConfig.playthegods3 + ')'") no-repeat;
  background-size: 100% 100%;
}
.thegodsp-he {
  position: relative;
  margin-right: 0%;
    margin-top: 5%;
    width: 72%;
    height: 43vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.72);
}

.thegodsp-hidden {
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
.thegodsp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + thegodsConfig.anythegods + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 91% 240%;
}
.thegodsp-item:nth-child(2){
  margin-right: 20%;
}
.thegodsp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.thegodsp-item-img img {
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
  align-items: flex-stthegods;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + thegodsConfig.dialogthegods + ')'") no-repeat; */
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

.stthegods-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stthegods-bg img {
  width: 100%;
}

.modelthegods-list {
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
.modelthegods-item {
  margin-bottom: 11px;
}
.modelthegods-total {
  padding: 7px 14px;
}

.headthegods {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + thegodsConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + thegodsConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + thegodsConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + thegodsConfig.animation12 + ')'");
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

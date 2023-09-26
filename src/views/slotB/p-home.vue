<script>

import playamazonMelon from "@/assets/slotB14/playamazonMelon2.png";
import playamazonMelon2 from "@/assets/slotB14/playamazonMelon.png";
// import playamazonMelon3 from "@/assets/slotB14/playamazonMelon3.png";
import boxamazonMelon from "@/assets/slotB14/boxamazonMelon.jpg";
import anyamazonMelon from "@/assets/slotB14/changeamazonMelon.png";
import anyBoxamazonMelon from "@/assets/slotB14/anyBoxamazonMelon.png";
import homeamazonMelon from "@/assets/slotB14/homeamazonMelon.png";
// import againamazonMelon from "@/assets/slotB14/againamazonMelon.png";
import countamazonMelon from "@/assets/slotB14/countamazonMelon.png";
// import ruleamazonMelon from "@/assets/slotB14/ruleamazonMelon.png";
// import ruleDialogamazonMelon from "@/assets/slotB14/ruleDialogamazonMelon.jpg";
// import resultamazonMelon from "@/assets/slotB14/resultamazonMelon.png";
// import headamazonMelon from "@/assets/slotB14/headamazonMelon.png";

// import star from "@/assets/slotB14/staramazonMelon.gif";
import { useRouter, useRoute } from "vue-router";
import amazonMelon1 from "@/assets/slotB14/amazonMelon1.png";
import amazonMelon2 from "@/assets/slotB14/amazonMelon2.png";
import amazonMelon3 from "@/assets/slotB14/amazonMelon3.png";
import amazonMelon4 from "@/assets/slotB14/amazonMelon4.png";
import amazonMelon5 from "@/assets/slotB14/amazonMelon5.png";
import amazonMelon6 from "@/assets/slotB14/amazonMelon6.png";
// import amazonMelon8 from "@/assets/slotB14/amazonMelon8.png";
import amazonMelon7 from "@/assets/slotB14/amazonMelon7.png";
// import amazonMelon9 from "@/assets/slotB14/amazonMelon9.png";

// import animation1 from "@/assets/slotB14/dong/00001.png";
// import animation4 from "@/assets/slotB14/dong/00004.png";
// import animation8 from "@/assets/slotB14/dong/00008.png";
// import animation12 from "@/assets/slotB14/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotB14/football.png";
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
    const amazonMelonConfig = reactive({
      // headamazonMelon,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyamazonMelon,
      playamazonMelon,
      playamazonMelon2,
      // playamazonMelon3,
      // againamazonMelon,
      anyBoxamazonMelon,
      boxamazonMelon,
      homeamazonMelon,
      //   star,
      // seniorityamazonMelon,
      countamazonMelon,
      // ruleamazonMelon,
      // ruleDialogamazonMelon,
      // resultamazonMelon
    });
    const amazonMelonList = reactive([
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
      {
        name: "item4",
        size: 2,
        imgList: [],
      },
      // {
      //   name: "item5",
      //   size: 2,
      //   imgList: [],
      // },
    ]);
    let timeOhter = 0;
    let id;
    let stamazonMelon = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: amazonMelon1,
        name: "amazonMelon2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: amazonMelon2,
        name: "amazonMelon1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: amazonMelon3,
      },
      {
        img: amazonMelon4,
      },
      {
        img: amazonMelon5,
      },
      {
        img: amazonMelon6,
      },
      {
        img: amazonMelon7,
        name: "amazonMelon3",
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
        const boxLists = amazonMelonList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
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
        const content = document.getElementById("amazonMelonp-he");
        const box2 = document.getElementById("amazonMelonp");
        const coords = { x: 0, y: 0 }; // StamazonMelon at (0, 0)
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
        
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // StamazonMelon the tween immediately.
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
          if (i > 5) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 4) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
         

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
            
          }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".amazonMelonp-item-img").forEach((child) => {
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

        allMethods.assignImageList(amazonMelonList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "amazonMelon1") {
            arrCount[0].value++;
          } else if (item.name == "amazonMelon2") {
            arrCount[1].value++;
          } else if (item.name == "amazonMelon3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给amazonMelonList
      assignImageList(amazonMelonList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        amazonMelonList.forEach((item) => {
          const numImages = Math.min(item.size, 4);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return amazonMelonList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stamazonMelon,
      amazonMelonConfig,
      randomImages,
      amazonMelonList,
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
    <!-- <img class="headamazonMelon" :src="amazonMelonConfig.headamazonMelon" alt=""> -->
    <div class="amazonMelonp" id="amazonMelonp">
      <div class="amazonMelonp-he" id="amazonMelonp-he">
        <!-- <img class="amazonMelon-rule" @click="showRule" :src="amazonMelonConfig.ruleamazonMelon" alt=""> -->
        <div class="amazonMelonp-hidden">
          <div
            class="amazonMelonp-item"
            :id="item.name"
            v-for="(item, index) in amazonMelonList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'amazonMelonp-item-img ' + imgItem.className
                  : 'amazonMelonp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonamazonMelon-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsamazonMelon2" @click="run()"></div>
       
        <div class="buttonsamazonMelonBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="amazonMelon-count" @click="showRule">
          <!-- <img class="amazonMelon-rule" :src="amazonMelonConfig.ruleamazonMelon" alt="" /> -->
          <img :src="amazonMelonConfig.countamazonMelon" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="amazonMelond-amazonMelonp">
        <div class="amazonMelond-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="amazonMelonConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="amazonMelonConfig.resultamazonMelon" alt="" /> -->
        <!-- <div class="modelamazonMelon-list">
          <div
            class="modelamazonMelon-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelamazonMelon-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="amazonMelonConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="amazonMelonConfig.ruleDialogamazonMelon" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.amazonMelond-amazonMelonp {
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
  margin: 0 0 0 61%;
    color: #FFF;
    font-size: 18px;
}

.amazonMelon-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.amazonMelon-count .amazonMelon-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.amazonMelond-back {
  /* background: v-bind("'url(' + amazonMelonConfig.homeamazonMelon + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stamazonMelon {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + amazonMelonConfig.playamazonMelon + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + amazonMelonConfig.boxamazonMelon + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.amazonMelonp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + amazonMelonConfig.anyBoxamazonMelon + ')'") no-repeat;
  background-size: 56%;
    background-position: center 40%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonamazonMelon-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.amazonMelon-count {
  position: relative;
  width: 56%;
    height: 44%;
    margin-left: -40%;
    margin-top: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 5%;
    margin-top: 1%;
    width: 11%;
    height: 49%;
  z-index: 999;
  background: v-bind("'url(' + amazonMelonConfig.homeamazonMelon + ')'") no-repeat;
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
  /* background: v-bind("'url(' + amazonMelonConfig.seniorityamazonMelon + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsamazonMelonBack{
  position: absolute;
  left: 65.5%;
    margin-top: 64%;
    width: 38%;
    height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + amazonMelonConfig.againamazonMelon + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsamazonMelon2{
  margin-left: 21%;
    margin-top: 60%;
    width: 28%;
    height: 48.5%;
    z-index: 999;
  background: v-bind("'url(' + amazonMelonConfig.playamazonMelon2 + ')'") no-repeat;
  background-size: 100% 100%;
}
.amazonMelonp-he {
  position: relative;
    margin-right: 0%;
    margin-top: 5%;
    width: 77%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.amazonMelonp-hidden {
  /* margin-top: 2%; */
  margin-left: 5%;
    margin-top: -2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89%;
    height: 78%;
  overflow: hidden;
}
.amazonMelonp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + amazonMelonConfig.anyamazonMelon + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 92% 348%;
}
.amazonMelonp-item:nth-child(2){
  /* margin-right: 20%; */
}
.amazonMelonp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.amazonMelonp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 64%;
    height: 62%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stamazonMelon;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + amazonMelonConfig.dialogamazonMelon + ')'") no-repeat; */
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

.stamazonMelon-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stamazonMelon-bg img {
  width: 100%;
}

.modelamazonMelon-list {
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
.modelamazonMelon-item {
  margin-bottom: 11px;
}
.modelamazonMelon-total {
  padding: 7px 14px;
}

.headamazonMelon {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + amazonMelonConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + amazonMelonConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + amazonMelonConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + amazonMelonConfig.animation12 + ')'");
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

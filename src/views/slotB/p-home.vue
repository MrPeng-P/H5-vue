<script>

import playdiamondFruit from "@/assets/slotB13/playdiamondFruit2.png";
import playdiamondFruit2 from "@/assets/slotB13/playdiamondFruit.png";
// import playdiamondFruit3 from "@/assets/slotB13/playdiamondFruit3.png";
import boxdiamondFruit from "@/assets/slotB13/boxdiamondFruit.jpg";
import anydiamondFruit from "@/assets/slotB13/changediamondFruit.png";
import anyBoxdiamondFruit from "@/assets/slotB13/anyBoxdiamondFruit.png";
import homediamondFruit from "@/assets/slotB13/homediamondFruit.png";
// import againdiamondFruit from "@/assets/slotB13/againdiamondFruit.png";
import countdiamondFruit from "@/assets/slotB13/countdiamondFruit.png";
// import rulediamondFruit from "@/assets/slotB13/rulediamondFruit.png";
// import ruleDialogdiamondFruit from "@/assets/slotB13/ruleDialogdiamondFruit.jpg";
// import resultdiamondFruit from "@/assets/slotB13/resultdiamondFruit.png";
// import headdiamondFruit from "@/assets/slotB13/headdiamondFruit.png";

// import star from "@/assets/slotB13/stardiamondFruit.gif";
import { useRouter, useRoute } from "vue-router";
import diamondFruit1 from "@/assets/slotB13/diamondFruit1.png";
import diamondFruit2 from "@/assets/slotB13/diamondFruit2.png";
import diamondFruit3 from "@/assets/slotB13/diamondFruit3.png";
import diamondFruit4 from "@/assets/slotB13/diamondFruit4.png";
import diamondFruit5 from "@/assets/slotB13/diamondFruit5.png";
import diamondFruit6 from "@/assets/slotB13/diamondFruit6.png";
// import diamondFruit8 from "@/assets/slotB13/diamondFruit8.png";
import diamondFruit7 from "@/assets/slotB13/diamondFruit7.png";
// import diamondFruit9 from "@/assets/slotB13/diamondFruit9.png";

// import animation1 from "@/assets/slotB13/dong/00001.png";
// import animation4 from "@/assets/slotB13/dong/00004.png";
// import animation8 from "@/assets/slotB13/dong/00008.png";
// import animation12 from "@/assets/slotB13/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotB13/football.png";
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
    const diamondFruitConfig = reactive({
      // headdiamondFruit,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anydiamondFruit,
      playdiamondFruit,
      playdiamondFruit2,
      // playdiamondFruit3,
      // againdiamondFruit,
      anyBoxdiamondFruit,
      boxdiamondFruit,
      homediamondFruit,
      //   star,
      // senioritydiamondFruit,
      countdiamondFruit,
      // rulediamondFruit,
      // ruleDialogdiamondFruit,
      // resultdiamondFruit
    });
    const diamondFruitList = reactive([
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
      {
        name: "item5",
        size: 2,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stdiamondFruit = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: diamondFruit1,
        name: "diamondFruit2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: diamondFruit2,
        name: "diamondFruit1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: diamondFruit3,
      },
      {
        img: diamondFruit4,
      },
      {
        img: diamondFruit5,
      },
      {
        img: diamondFruit6,
      },
      {
        img: diamondFruit7,
        name: "diamondFruit3",
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
        const boxLists = diamondFruitList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
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
        const content = document.getElementById("diamondFruitp-he");
        const box2 = document.getElementById("diamondFruitp");
        const coords = { x: 0, y: 0 }; // StdiamondFruit at (0, 0)
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
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
        
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // StdiamondFruit the tween immediately.
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
          if (i > 0 && i < 5) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
         

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".diamondFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
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
        const totalImages = 20;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(diamondFruitList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "diamondFruit1") {
            arrCount[0].value++;
          } else if (item.name == "diamondFruit2") {
            arrCount[1].value++;
          } else if (item.name == "diamondFruit3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给diamondFruitList
      assignImageList(diamondFruitList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        diamondFruitList.forEach((item) => {
          const numImages = Math.min(item.size, 4);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return diamondFruitList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stdiamondFruit,
      diamondFruitConfig,
      randomImages,
      diamondFruitList,
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
    <!-- <img class="headdiamondFruit" :src="diamondFruitConfig.headdiamondFruit" alt=""> -->
    <div class="diamondFruitp" id="diamondFruitp">
      <div class="diamondFruitp-he" id="diamondFruitp-he">
        <!-- <img class="diamondFruit-rule" @click="showRule" :src="diamondFruitConfig.rulediamondFruit" alt=""> -->
        <div class="diamondFruitp-hidden">
          <div
            class="diamondFruitp-item"
            :id="item.name"
            v-for="(item, index) in diamondFruitList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'diamondFruitp-item-img ' + imgItem.className
                  : 'diamondFruitp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttondiamondFruit-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsdiamondFruit2" @click="run()"></div>
       
        <div class="buttonsdiamondFruitBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="diamondFruit-count" @click="showRule">
          <!-- <img class="diamondFruit-rule" :src="diamondFruitConfig.rulediamondFruit" alt="" /> -->
          <img :src="diamondFruitConfig.countdiamondFruit" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="diamondFruitd-diamondFruitp">
        <div class="diamondFruitd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="diamondFruitConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="diamondFruitConfig.resultdiamondFruit" alt="" /> -->
        <!-- <div class="modeldiamondFruit-list">
          <div
            class="modeldiamondFruit-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modeldiamondFruit-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="diamondFruitConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="diamondFruitConfig.ruleDialogdiamondFruit" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.diamondFruitd-diamondFruitp {
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

.diamondFruit-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.diamondFruit-count .diamondFruit-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.diamondFruitd-back {
  /* background: v-bind("'url(' + diamondFruitConfig.homediamondFruit + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stdiamondFruit {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + diamondFruitConfig.playdiamondFruit + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + diamondFruitConfig.boxdiamondFruit + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.diamondFruitp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + diamondFruitConfig.anyBoxdiamondFruit + ')'") no-repeat;
  background-size: 56%;
    background-position: center 40%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttondiamondFruit-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.diamondFruit-count {
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
    width: 14%;
    height: 64%;
  z-index: 999;
  background: v-bind("'url(' + diamondFruitConfig.homediamondFruit + ')'") no-repeat;
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
  /* background: v-bind("'url(' + diamondFruitConfig.senioritydiamondFruit + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsdiamondFruitBack{
  position: absolute;
  left: 65.5%;
    margin-top: 64%;
    width: 38%;
    height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + diamondFruitConfig.againdiamondFruit + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsdiamondFruit2{
  margin-left: 1%;
    margin-top: 60%;
    width: 26%;
    height: 44.5%;
    z-index: 999;
  background: v-bind("'url(' + diamondFruitConfig.playdiamondFruit2 + ')'") no-repeat;
  background-size: 100% 100%;
}
.diamondFruitp-he {
  position: relative;
    margin-right: 0%;
    margin-top: 5%;
    width: 77%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.diamondFruitp-hidden {
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
.diamondFruitp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + diamondFruitConfig.anydiamondFruit + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 85% 310%;
}
.diamondFruitp-item:nth-child(2){
  /* margin-right: 20%; */
}
.diamondFruitp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.diamondFruitp-item-img img {
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
  align-items: flex-stdiamondFruit;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + diamondFruitConfig.dialogdiamondFruit + ')'") no-repeat; */
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

.stdiamondFruit-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stdiamondFruit-bg img {
  width: 100%;
}

.modeldiamondFruit-list {
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
.modeldiamondFruit-item {
  margin-bottom: 11px;
}
.modeldiamondFruit-total {
  padding: 7px 14px;
}

.headdiamondFruit {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + diamondFruitConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + diamondFruitConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + diamondFruitConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + diamondFruitConfig.animation12 + ')'");
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

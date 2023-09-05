<script>
import playharvest from "@/assets/slotE7/playharvest.png";
// import playharvest2 from "@/assets/slotE7/playharvest2.png";
// import playharvest3 from "@/assets/slotE7/playharvest3.png";
import boxharvest from "@/assets/slotE7/boxharvest.jpg";
import anyharvest from "@/assets/slotE7/changeHharvest.png";
import anyBoxharvest from "@/assets/slotE7/anyBoxharvest.jpg";
import homeharvest from "@/assets/slotE7/homeharvest.png";
// import againharvest from "@/assets/slotE7/againharvest.png";
import countharvest from "@/assets/slotE7/countharvest.png";
// import ruleharvest from "@/assets/slotE7/ruleharvest.png";
// import ruleDialogharvest from "@/assets/slotE7/ruleDialogharvest.jpg";
// import resultharvest from "@/assets/slotE7/resultharvest.png";
// import headharvest from "@/assets/slotE7/headharvest.png";

// import star from "@/assets/slotE7/starharvest.gif";
import { useRouter, useRoute } from "vue-router";
import harvest1 from "@/assets/slotE7/harvest1.png";
import harvest2 from "@/assets/slotE7/harvest2.png";
import harvest3 from "@/assets/slotE7/harvest3.png";
import harvest4 from "@/assets/slotE7/harvest4.png";
import harvest5 from "@/assets/slotE7/harvest5.png";
import harvest6 from "@/assets/slotE7/harvest6.png";
import harvest7 from "@/assets/slotE7/harvest7.png";

// import animation1 from "@/assets/slotE7/dong/00001.png";
// import animation4 from "@/assets/slotE7/dong/00004.png";
// import animation8 from "@/assets/slotE7/dong/00008.png";
// import animation12 from "@/assets/slotE7/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotE7/football.png";
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
    const harvestConfig = reactive({
      // headharvest,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyharvest,
      playharvest,
      // playharvest2,
      // playharvest3,
      // againharvest,
      anyBoxharvest,
      boxharvest,
      homeharvest,
      //   star,
      // seniorityharvest,
      countharvest,
      // ruleharvest,
      // ruleDialogharvest,
      // resultharvest
    });
    const harvestList = reactive([
      {
        name: "item1",
        size: 0,
        imgList: [],
      },
      {
        name: "item2",
        size: 3,
        imgList: [],
      },
      {
        name: "item3",
        size: 5,
        imgList: [],
      },
      {
        name: "item4",
        size: 3,
        imgList: [],
      },
      {
        name: "item5",
        size: 0,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stharvest = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: harvest1,
        name: "harvest2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: harvest2,
        name: "harvest1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: harvest3,
      },
      {
        img: harvest4,
      },
      {
        img: harvest5,
      },
      {
        img: harvest6,
      },
      {
        img: harvest7,
        name: "harvest3",
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
        const boxLists = harvestList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".harvestp-item-img").forEach((child) => {
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
        const content = document.getElementById("harvestp-he");
        const box2 = document.getElementById("harvestp");
        const coords = { x: 0, y: 0 }; // Stharvest at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[3].style.setProperty(
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
            if (timeOhter > 0 && timeOhter <= 3000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stharvest the tween immediately.
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
            boxLists[i].querySelectorAll(".harvestp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".harvestp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".harvestp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".harvestp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".harvestp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   // countValue.value += useCount.value*magn;
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".harvestp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   countValue.value += useCount.value*magn;
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
        const totalImages = 11;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(harvestList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "harvest1") {
            arrCount[0].value++;
          } else if (item.name == "harvest2") {
            arrCount[1].value++;
          } else if (item.name == "harvest3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给harvestList
      assignImageList(harvestList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        harvestList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return harvestList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stharvest,
      harvestConfig,
      randomImages,
      harvestList,
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
    <!-- <img class="headharvest" :src="harvestConfig.headharvest" alt=""> -->
    <div class="harvestp" id="harvestp">
      <div class="harvestp-he" id="harvestp-he">
        <!-- <img class="harvest-rule" @click="showRule" :src="harvestConfig.ruleharvest" alt=""> -->
        <div class="harvestp-hidden">
          <div
            class="harvestp-item-box"
           
            v-for="(item, index) in harvestList"
          >
           <div class="harvestp-item"  :id="item.name">
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'harvestp-item-img ' + imgItem.className
                  : 'harvestp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
      <div class="buttonharvest-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsharvest2" @click="run()"></div>
       
        <div class="buttonsharvestBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="harvest-count" @click="showRule">
          <!-- <img class="harvest-rule" :src="harvestConfig.ruleharvest" alt="" /> -->
          <img :src="harvestConfig.countharvest" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="harvestd-harvestp">
        <div class="harvestd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="harvestConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="harvestConfig.resultharvest" alt="" /> -->
        <!-- <div class="modelharvest-list">
          <div
            class="modelharvest-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelharvest-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="harvestConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="harvestConfig.ruleDialogharvest" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.harvestd-harvestp {
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
  margin: 0% 11% 0%;
    color: #FFF;
    font-size: 18px;
}

.harvest-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.harvest-count .harvest-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.harvestd-back {
  /* background: v-bind("'url(' + harvestConfig.homeharvest + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stharvest {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + harvestConfig.playharvest + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + harvestConfig.boxharvest + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.harvestp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + harvestConfig.anyBoxharvest + ')'") no-repeat;
  background-size: 120% 114%;
    background-position: center 15%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonharvest-box {
  position: absolute;
    top: 5%;
    left: 31%;
    display: flex;
    /* flex-direction: column; */
    width: 88%;
    height: 86%;
}
.harvest-count {
  position: relative;
  width: 33%;
    height: 15%;
    margin-left: -26%;
    margin-top: -0.5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: -22%;
    margin-top: 0%;
    width: 7%;
    height: 16%;
    z-index: 999;
  background: v-bind("'url(' + harvestConfig.homeharvest + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 61%;
    margin-top: 1%;
    width: 7%;
    height: 54.5%;
  z-index: 999;
  /* background: v-bind("'url(' + harvestConfig.seniorityharvest + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsharvestBack{
  position: absolute;
  left: 65.5%;
    margin-top: 64%;
    width: 38%;
    height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + harvestConfig.againharvest + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsharvest2{
  margin-left: 58%;
    margin-top: 8%;
    width: 16%;
    height: 13.5%;
  z-index: 999;
  background: v-bind("'url(' + harvestConfig.playharvest + ')'") no-repeat;
  background-size: 100% 100%;
}
.harvestp-he {
  position: relative;
  margin-right: -16%;
    width: 75%;
    height: 46vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.77);
}

.harvestp-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 105%;
    height: 190%;
    transform: rotateZ(-57.5deg) translate(7vw,-17vw);
  overflow: hidden;
}
.harvestp-item-box{
  height: 100%;
  flex: 1;
 
    overflow: hidden;
}

.harvestp-item-box:nth-child(1),.harvestp-item-box:nth-child(5){
 
  height:20%;
  transform: translate(-1002vw,-22vw);
  .harvestp-item{
    background-size: 75% 690%;

  }
}
.harvestp-item-box:nth-child(5){
  transform: translate(-1002vw,24vw);
}
.harvestp-item-box:nth-child(2),.harvestp-item-box:nth-child(4){
  transform: translate(-2vw,-7vw);
  height: 60%;
  .harvestp-item{
    background-size: 94% 292%;

  }
}
.harvestp-item-box:nth-child(4){
  transform: translate(1vw,9vw);
}
.harvestp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + harvestConfig.anyharvest + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 94% 171%;
}
.harvestp-item:nth-child(2){
  /* margin-right: 20%; */
}
.harvestp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.harvestp-item-img img {
  position: absolute;
    top: 32%;
    left: 48%;
    transform: translate(-50%, -23%) scale(1.1);
    z-index: -1;
    width: 63%;
    height: 55%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stharvest;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + harvestConfig.dialogharvest + ')'") no-repeat; */
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

.stharvest-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stharvest-bg img {
  width: 100%;
}

.modelharvest-list {
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
.modelharvest-item {
  margin-bottom: 11px;
}
.modelharvest-total {
  padding: 7px 14px;
}

.headharvest {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + harvestConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + harvestConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + harvestConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + harvestConfig.animation12 + ')'");
  }
}

/* 设置动画元素样式和动画 */
.animation {
  /* width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position-y: center;

  background-position-y: center;
  background-position-x: center;
  background-size: 99%; */

  /* animation: image-animation 2s steps(4) infinite; */
}
</style>

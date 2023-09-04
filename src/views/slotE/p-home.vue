<script>
import playstorm from "@/assets/slotE5/playstorm.png";
// import playstorm2 from "@/assets/slotE5/playstorm2.png";
// import playstorm3 from "@/assets/slotE5/playstorm3.png";
import boxstorm from "@/assets/slotE5/boxstorm.jpg";
import anystorm from "@/assets/slotE5/changeHstorm.png";
import anyBoxstorm from "@/assets/slotE5/anyBoxstorm.jpg";
import homestorm from "@/assets/slotE5/homestorm.png";
// import againstorm from "@/assets/slotE5/againstorm.png";
import countstorm from "@/assets/slotE5/countstorm.png";
// import rulestorm from "@/assets/slotE5/rulestorm.png";
// import ruleDialogstorm from "@/assets/slotE5/ruleDialogstorm.jpg";
// import resultstorm from "@/assets/slotE5/resultstorm.png";
// import headstorm from "@/assets/slotE5/headstorm.png";

// import star from "@/assets/slotE5/starstorm.gif";
import { useRouter, useRoute } from "vue-router";
import storm1 from "@/assets/slotE5/storm1.png";
import storm2 from "@/assets/slotE5/storm2.png";
import storm3 from "@/assets/slotE5/storm3.png";
import storm4 from "@/assets/slotE5/storm4.png";
import storm5 from "@/assets/slotE5/storm5.png";
import storm6 from "@/assets/slotE5/storm6.png";
import storm7 from "@/assets/slotE5/storm7.png";

// import animation1 from "@/assets/slotE5/dong/00001.png";
// import animation4 from "@/assets/slotE5/dong/00004.png";
// import animation8 from "@/assets/slotE5/dong/00008.png";
// import animation12 from "@/assets/slotE5/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotE5/football.png";
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
    const stormConfig = reactive({
      // headstorm,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anystorm,
      playstorm,
      // playstorm2,
      // playstorm3,
      // againstorm,
      anyBoxstorm,
      boxstorm,
      homestorm,
      //   star,
      // senioritystorm,
      countstorm,
      // rulestorm,
      // ruleDialogstorm,
      // resultstorm
    });
    const stormList = reactive([
      {
        name: "item1",
        size: 1,
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
        size: 1,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let ststorm = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: storm1,
        name: "storm2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: storm2,
        name: "storm1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: storm3,
      },
      {
        img: storm4,
      },
      {
        img: storm5,
      },
      {
        img: storm6,
      },
      {
        img: storm7,
        name: "storm3",
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
        const boxLists = stormList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".stormp-item-img").forEach((child) => {
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
        const content = document.getElementById("stormp-he");
        const box2 = document.getElementById("stormp");
        const coords = { x: 0, y: 0 }; // Ststorm at (0, 0)
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
          tween.start(); // Ststorm the tween immediately.
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
          if (i > 0 && i < 4) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".stormp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".stormp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".stormp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".stormp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".stormp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value*magn;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".stormp-item-img").forEach((child) => {
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
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(stormList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "storm1") {
            arrCount[0].value++;
          } else if (item.name == "storm2") {
            arrCount[1].value++;
          } else if (item.name == "storm3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给stormList
      assignImageList(stormList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        stormList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return stormList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      ststorm,
      stormConfig,
      randomImages,
      stormList,
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
    <!-- <img class="headstorm" :src="stormConfig.headstorm" alt=""> -->
    <div class="stormp" id="stormp">
      <div class="stormp-he" id="stormp-he">
        <!-- <img class="storm-rule" @click="showRule" :src="stormConfig.rulestorm" alt=""> -->
        <div class="stormp-hidden">
          <div
            class="stormp-item-box"
           
            v-for="(item, index) in stormList"
          >
           <div class="stormp-item"  :id="item.name">
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'stormp-item-img ' + imgItem.className
                  : 'stormp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
      <div class="buttonstorm-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsstorm2" @click="run()"></div>
       
        <div class="buttonsstormBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="storm-count" @click="showRule">
          <!-- <img class="storm-rule" :src="stormConfig.rulestorm" alt="" /> -->
          <img :src="stormConfig.countstorm" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="stormd-stormp">
        <div class="stormd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="stormConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="stormConfig.resultstorm" alt="" /> -->
        <!-- <div class="modelstorm-list">
          <div
            class="modelstorm-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelstorm-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="stormConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="stormConfig.ruleDialogstorm" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.stormd-stormp {
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
  margin: 0% 0 -42%;
    color: #FFF;
    font-size: 18px;
    transform: rotateZ(90deg);
}

.storm-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.storm-count .storm-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.stormd-back {
  /* background: v-bind("'url(' + stormConfig.homestorm + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.ststorm {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + stormConfig.playstorm + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + stormConfig.boxstorm + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stormp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + stormConfig.anyBoxstorm + ')'") no-repeat;
  background-size: 100% 100%;
    background-position: center 0%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonstorm-box {
  position: absolute;
    top: 5%;
    left: 21%;
    display: flex;
    flex-direction: column;
    width: 88%;
    height: 86%;
}
.storm-count {
  position: relative;
  width: 7%;
    height: 99%;
    margin-left: 61%;
    margin-top: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 61%;
    margin-top: -1%;
    width: 6%;
    height: 25%;
  z-index: 999;
  background: v-bind("'url(' + stormConfig.homestorm + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 61%;
    margin-top: 1%;
    width: 7%;
    height: 54.5%;
  z-index: 999;
  /* background: v-bind("'url(' + stormConfig.senioritystorm + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsstormBack{
  position: absolute;
  left: 65.5%;
    margin-top: 64%;
    width: 38%;
    height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + stormConfig.againstorm + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsstorm2{

  margin-left: 61%;
    margin-top: 0%;
    width: 7%;
    height: 57.5%;

  z-index: 999;
  background: v-bind("'url(' + stormConfig.playstorm + ')'") no-repeat;
  background-size: 100% 100%;
}
.stormp-he {
  position: relative;
  margin-right: -5%;
    width: 75%;
    height: 46vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.67);
}

.stormp-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105%;
    height: 187%;
    transform: rotateZ(55deg) translate(-17vw,-5vw);

  overflow: hidden;
}
.stormp-item-box{
  height: 100%;
  flex: 1;
 
    overflow: hidden;
}

.stormp-item-box:nth-child(1),.stormp-item-box:nth-child(5){
  height:20%;
  transform: translateY(16vw);
  .stormp-item{
    background-size: 76% 783%;

  }
}
.stormp-item-box:nth-child(5){
  transform: translate(3vw,-10vw);
}
.stormp-item-box:nth-child(2),.stormp-item-box:nth-child(4){
  transform: translate(-2vw,8vw);
  height: 60%;
  .stormp-item{
    background-size: 76% 266%;

  }
}
.stormp-item-box:nth-child(4){
  transform: translate(1vw,-5vw);
}
.stormp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + stormConfig.anystorm + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 76% 166%;
}
.stormp-item:nth-child(2){
  /* margin-right: 20%; */
}
.stormp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.stormp-item-img img {
  position: absolute;
  top: 32%;
    left: 48%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 64%;
    height: 60%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-ststorm;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + stormConfig.dialogstorm + ')'") no-repeat; */
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

.ststorm-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.ststorm-bg img {
  width: 100%;
}

.modelstorm-list {
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
.modelstorm-item {
  margin-bottom: 11px;
}
.modelstorm-total {
  padding: 7px 14px;
}

.headstorm {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + stormConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + stormConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + stormConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + stormConfig.animation12 + ')'");
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

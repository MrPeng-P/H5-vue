<script>
import playinternationality from "@/assets/slotF6/playinternationality.png";
// import playinternationality2 from "@/assets/slotF6/playinternationality2.png";
// import playinternationality3 from "@/assets/slotF6/playinternationality3.png";
import boxinternationality from "@/assets/slotF6/boxinternationality.png";
import anyinternationality from "@/assets/slotF6/changeinternationality.png";
import anyBoxinternationality from "@/assets/slotF6/anyBoxinternationality.jpg";
import homeinternationality from "@/assets/slotF6/homeinternationality.png";
// import againinternationality from "@/assets/slotF6/againinternationality.png";
import peiinternationality from "@/assets/slotF6/peiinternationality.png";

import countinternationality from "@/assets/slotF6/countinternationality.png";
// import ruleinternationality from "@/assets/slotF6/ruleinternationality.png";
// import ruleDialoginternationality from "@/assets/slotF6/ruleDialoginternationality.jpg";
// import resultinternationality from "@/assets/slotF6/resultinternationality.png";
// import headinternationality from "@/assets/slotF6/headinternationality.png";

// import star from "@/assets/slotF6/starinternationality.gif";
import { useRouter, useRoute } from "vue-router";
import internationality1 from "@/assets/slotF6/internationality1.png";
import internationality2 from "@/assets/slotF6/internationality2.png";
import internationality3 from "@/assets/slotF6/internationality3.png";
import internationality4 from "@/assets/slotF6/internationality4.png";
import internationality5 from "@/assets/slotF6/internationality5.png";
import internationality6 from "@/assets/slotF6/internationality6.png";
// import internationality7 from "@/assets/slotF6/internationality7.png";

// import animation1 from "@/assets/slotF6/dong/00001.png";
// import animation4 from "@/assets/slotF6/dong/00004.png";
// import animation8 from "@/assets/slotF6/dong/00008.png";
// import animation12 from "@/assets/slotF6/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotF6/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue = ref(false);
    let countValue = ref(1000);
    let peiValue = ref(100);
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
    const internationalityConfig = reactive({
      // headinternationality,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      peiinternationality,
      anyinternationality,
      playinternationality,
      // playinternationality2,
      // playinternationality3,
      // againinternationality,
      anyBoxinternationality,
      boxinternationality,
      homeinternationality,
      //   star,
      // seniorityinternationality,
      countinternationality,
      // ruleinternationality,
      // ruleDialoginternationality,
      // resultinternationality
    });
    const internationalityList = reactive([
      {
        name: "item1",
        size: 3,
        imgList: [],
      },
      {
        name: "item2",
        size: 3,
        imgList: [],
      },
      {
        name: "item3",
        size: 3,
        imgList: [],
      },
      {
        name: "item4",
        size:3,
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
    let stinternationality = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: internationality1,
        name: "internationality2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: internationality2,
        name: "internationality1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: internationality3,
      },
      {
        img: internationality4,
      },
      {
        img: internationality5,
      },
      {
        img: internationality6,
        name: "internationality3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: internationality7,
       
      // },
    ];
    const allMethods = {
      peiCount:(type)=>{
        if(type){
          if(peiValue.value<500){
            peiValue.value+=100
          }else{
            peiValue.value=100
          }
          
        }else{
          if(peiValue.value>100){
            peiValue.value-=100
          }else{
            peiValue.value=500
          }
          

        }
      },
      run: (value) => {
        let magn=peiValue.value/100||1;
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= peiValue.value;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = internationalityList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".internationalityp-item-img").forEach((child) => {
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
        const content = document.getElementById("internationalityp-he");
        const box2 = document.getElementById("internationalityp");
        const coords = { x: 0, y: 0 }; // Stinternationality at (0, 0)
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
          tween.start(); // Stinternationality the tween immediately.
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
            boxLists[i].querySelectorAll(".internationalityp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".internationalityp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".internationalityp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".internationalityp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".internationalityp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".internationalityp-item-img").forEach((child) => {
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
        const totalImages = 12;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(internationalityList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "internationality1") {
            arrCount[0].value++;
          } else if (item.name == "internationality2") {
            arrCount[1].value++;
          } else if (item.name == "internationality3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给internationalityList
      assignImageList(internationalityList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        internationalityList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return internationalityList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      peiValue,
      open,
      stinternationality,
      internationalityConfig,
      randomImages,
      internationalityList,
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
    <!-- <img class="headinternationality" :src="internationalityConfig.headinternationality" alt=""> -->
    <div class="internationalityp" id="internationalityp">
      <div class="internationalityp-he" id="internationalityp-he">
        <!-- <img class="internationality-rule" @click="showRule" :src="internationalityConfig.ruleinternationality" alt=""> -->
        <div class="internationalityp-hidden">
          <div
            class="internationalityp-item"
            :id="item.name"
            v-for="(item, index) in internationalityList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'internationalityp-item-img ' + imgItem.className
                  : 'internationalityp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttoninternationality-box">
        <div class="buttons" @click="close"></div>
        <div class="buttons2" @click="run()"></div>

        <div class="buttonsinternationality2" >
          <div class="count" @click="peiCount(false)"></div>
          <div class="count-v">{{ peiValue }}</div>
          <div class="count" @click="peiCount(true)"></div>
        </div>
       
        <!-- <div class="buttonsinternationalityBack" @click="run()"></div> -->


        <div class="internationality-count" >
          <!-- <img class="internationality-rule" :src="internationalityConfig.ruleinternationality" alt="" /> -->
          <img :src="internationalityConfig.countinternationality" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>

      </div>
      <div class="internationalityd-internationalityp">
        <div class="internationalityd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="internationalityConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="internationalityConfig.resultinternationality" alt="" /> -->
        <!-- <div class="modelinternationality-list">
          <div
            class="modelinternationality-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelinternationality-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="internationalityConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="internationalityConfig.ruleDialoginternationality" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.internationalityd-internationalityp {
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
  margin: 151% 0% 0 0%;

    color: #FFF;
    font-size: 18px;
    transform: rotateZ(90deg);
}

.internationality-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  
  z-index: -1;
}
.internationality-count .internationality-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.internationalityd-back {
  /* background: v-bind("'url(' + internationalityConfig.homeinternationality + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stinternationality {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + internationalityConfig.playinternationality + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + internationalityConfig.boxinternationality + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.internationalityp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + internationalityConfig.anyBoxinternationality + ')'") no-repeat;
  background-size: 120%;
    background-position: center 36%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttoninternationality-box {
  position: absolute;
  top: 90%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width:90%;
  height: 25%;
  /* justify-content: space-between; */
}
.internationality-count {
  position: relative;
  width: 8%;
    height: 307%;
    margin-left: 5.5%;
    margin-top: -37%;
 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 0%;
    margin-top: -44%;
    width: 6%;
    height: 49%;
    z-index: 999;
  background: v-bind("'url(' + internationalityConfig.homeinternationality + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 7%;
    margin-top: -44%;
    width: 13%;
    height: 39%;
   background: v-bind("'url(' + internationalityConfig.playinternationality + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonsinternationalityBack{
  position: absolute;
  left: 34.5%;
    margin-top: 57%;
    width: 38%;
    height: 58.5%;
  z-index: 999;
  /* background: v-bind("'url(' + internationalityConfig.againinternationality + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsinternationality2{
  display: flex;
  /* flex-direction: column; */
  margin-left: 16%;
    margin-top: -44%;
    width: 26%;
    height: 40.5%;
color: #fff;
  z-index: 999;
  background: v-bind("'url(' + internationalityConfig.peiinternationality + ')'") no-repeat;
  background-size: 100% 100%;
}
.count{
  flex: 1;
}
.count-v{
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotateZ(90deg); */
  font-size: 16px;
   
}
.internationalityp-he {
    position: relative;
    margin-right: 0%;
    margin-top: 2%;
    width: 89%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.7);
}

.internationalityp-hidden {
  /* margin-top: 2%; */
  margin-left: 4%;
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 109%;
  overflow: hidden;
}
.internationalityp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + internationalityConfig.anyinternationality + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size:83% 278%;
}
.internationalityp-item:nth-child(2){
  margin-right: 20%;
}
.internationalityp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.internationalityp-item-img img {
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
  align-items: flex-stinternationality;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + internationalityConfig.dialoginternationality + ')'") no-repeat; */
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

.stinternationality-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stinternationality-bg img {
  width: 100%;
}

.modelinternationality-list {
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
.modelinternationality-item {
  margin-bottom: 11px;
}
.modelinternationality-total {
  padding: 7px 14px;
}

.headinternationality {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + internationalityConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + internationalityConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + internationalityConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + internationalityConfig.animation12 + ')'");
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

<script>
import playlion from "@/assets/slotF8/playlion.png";
// import playlion2 from "@/assets/slotF8/playlion2.png";
// import playlion3 from "@/assets/slotF8/playlion3.png";
import boxlion from "@/assets/slotF8/boxlion.jpg";
import anylion from "@/assets/slotF8/changelion.png";
import anyBoxlion from "@/assets/slotF8/anyBoxlion.png";
import homelion from "@/assets/slotF8/homelion.png";
// import againlion from "@/assets/slotF8/againlion.png";
import peilion from "@/assets/slotF8/peilion.png";

import countlion from "@/assets/slotF8/countlion.png";
import dialoglion from "@/assets/slotF8/dialoglion.png";
// import rulelion from "@/assets/slotF8/rulelion.png";
// import ruleDialoglion from "@/assets/slotF8/ruleDialoglion.jpg";
// import resultlion from "@/assets/slotF8/resultlion.png";
// import headlion from "@/assets/slotF8/headlion.png";

// import star from "@/assets/slotF8/starlion.gif";
import { useRouter, useRoute } from "vue-router";
import lion1 from "@/assets/slotF8/lion1.png";
import lion2 from "@/assets/slotF8/lion2.png";
import lion3 from "@/assets/slotF8/lion3.png";
import lion4 from "@/assets/slotF8/lion4.png";
import lion5 from "@/assets/slotF8/lion5.png";
import lion6 from "@/assets/slotF8/lion6.png";
import lion7 from "@/assets/slotF8/lion7.png";
import lion8 from "@/assets/slotF8/lion8.png";
import lion9 from "@/assets/slotF8/lion9.png";
import lion10 from "@/assets/slotF8/lion10.png";
import lion11 from "@/assets/slotF8/lion11.png";
import lion12 from "@/assets/slotF8/lion12.png";
import lion13 from "@/assets/slotF8/lion13.png";


import { inject } from "vue";
// import football from "@/assets/slotF8/football.png";
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
    const lionConfig = reactive({
      // headlion,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      dialoglion,
      peilion,
      anylion,
      playlion,
      // playlion2,
      // playlion3,
      // againlion,
      anyBoxlion,
      boxlion,
      homelion,
      //   star,
      // senioritylion,
      countlion,
      // rulelion,
      // ruleDialoglion,
      // resultlion
    });
    const lionList = reactive([
      {
        name: "item1",
        size: 4,
        imgList: [],
      },
      {
        name: "item2",
        size: 2,
        imgList: [],
      },
      {
        name: "item3",
        size: 4,
        imgList: [],
      },
      // {
      //   name: "item4",
      //   size:3,
      //   imgList: [],
      // },
      // {
      //   name: "item5",
      //   size: 12,
      //   imgList: [],
      // },
    ]);
    let timeOhter = 0;
    let id;
    let stlion = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: lion1,
        name: "lion2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: lion2,
        name: "lion1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: lion3,
      },
      {
        img: lion4,
      },
      {
        img: lion5,
      },
      {
        img: lion6,
       
      },
      {
        img: lion7,
       
      },
      {
        img: lion8,
       
      },  {
        img: lion9,
       
      },  {
        img: lion10,
       
      },  {
        img: lion11,
       
      },  {
        img: lion12,
       
      },  {
        img: lion13,
        name: "lion3",
        className: "animation",
        count: 2200 * magnification.value,
      },
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
        const boxLists = lionList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".lionp-item-img").forEach((child) => {
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
        const content = document.getElementById("lionp-he");
        const box2 = document.getElementById("lionp");
        const coords = { x: 0, y: 0 }; // Stlion at (0, 0)
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
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stlion the tween immediately.
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
          if (i > 0 && i < 3) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".lionp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".lionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".lionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".lionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".lionp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
           
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".lionp-item-img").forEach((child) => {
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
        const totalImages = 10;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(lionList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "lion1") {
            arrCount[0].value++;
          } else if (item.name == "lion2") {
            arrCount[1].value++;
          } else if (item.name == "lion3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给lionList
      assignImageList(lionList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        lionList.forEach((item) => {
          const numImages = Math.min(item.size, 4);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return lionList;
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
      stlion,
      lionConfig,
      randomImages,
      lionList,
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
    <!-- <img class="headlion" :src="lionConfig.headlion" alt=""> -->
    <div class="lionp" id="lionp">
      <div class="lionp-he" id="lionp-he">
        <!-- <img class="lion-rule" @click="showRule" :src="lionConfig.rulelion" alt=""> -->
        <div class="lionp-hidden">
          <div
            class="lionp-item"
            :id="item.name"
            v-for="(item, index) in lionList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'lionp-item-img ' + imgItem.className
                  : 'lionp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonlion-box">
        <div class="buttons" @click="close"></div>
        <div class="buttons2" @click="run()"></div>

        <div class="buttonslion2" >
          <div class="count" @click="peiCount(false)"></div>
          <div class="count-v">{{ peiValue }}</div>
          <div class="count" @click="peiCount(true)"></div>
        </div>
       
        <!-- <div class="buttonslionBack" @click="run()"></div> -->


        <div class="lion-count" >
          <!-- <img class="lion-rule" :src="lionConfig.rulelion" alt="" /> -->
          <img :src="lionConfig.countlion" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>

      </div>
      <div class="liond-lionp">
        <div class="liond-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="lionConfig.star" alt="" /> -->
        <img class="model-img-bg" :src="lionConfig.dialoglion" alt="" />
        <!-- <div class="modellion-list">
          <div
            class="modellion-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modellion-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="lionConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="lionConfig.ruleDialoglion" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.liond-lionp {
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
  margin: 161% 0% 0 22%;

    color: #FFF;
    font-size: 18px;
    transform: rotateZ(90deg);
}

.lion-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  
  z-index: -1;
}
.lion-count .lion-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.liond-back {
  /* background: v-bind("'url(' + lionConfig.homelion + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stlion {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + lionConfig.playlion + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + lionConfig.boxlion + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lionp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + lionConfig.anyBoxlion + ')'") no-repeat;
  background-size:50%;
    background-position: center 36%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonlion-box {
  position: absolute;
  top: 93%;
    left: 21%;
  display: flex;
  /* flex-direction: column; */

  width:90%;
  height: 25%;
  /* justify-content: space-between; */
}
.lion-count {
  position: relative;
  width: 9%;
    height: 262%;
    margin-left: 51.5%;
    margin-top: -40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 0%;
    margin-top: -46%;
    width: 6%;
    height: 51%;
    z-index: 999;
  background: v-bind("'url(' + lionConfig.homelion + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: -6%;
    margin-top: -39%;
    width: 6%;
    height: 105%;
   background: v-bind("'url(' + lionConfig.playlion + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonslionBack{
  position: absolute;
  left: 34.5%;
    margin-top: 57%;
    width: 38%;
    height: 58.5%;
  z-index: 999;
  /* background: v-bind("'url(' + lionConfig.againlion + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonslion2{
  display: flex;
  flex-direction: column;
    margin-left: -6%;
    margin-top: -23%;
    width: 6%;
    height: 171.5%;
color: #fff;
  z-index: 999;
  background: v-bind("'url(' + lionConfig.peilion + ')'") no-repeat;
  background-size: 100% 100%;
}
.count{
  flex: 1;
}
.count-v{
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(90deg);
  font-size: 16px;
   
}
.lionp-he {
    position: relative;
    margin-right: -8%;
    margin-top: 2%;
    width: 89%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.7);
}

.lionp-hidden {
  /* margin-top: 2%; */

  margin-left: 13%;
    margin-top: -7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 62%;
    height: 121%;

  overflow: hidden;
}
.lionp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + lionConfig.anylion + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 74% 154%;
}
.lionp-item:nth-child(2){
  /* margin-right: 20%; */
  flex: 1.3;
    background-size: 100% 293%;
    background-position-y: -2%;
    
}
.lionp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.lionp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 60%;
    height: 80%;
}

.lionp-item:nth-child(2) .lionp-item-img img{
  width: 90%;
    height: 80%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stlion;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + lionConfig.dialoglion + ')'") no-repeat; */
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
}

.stlion-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stlion-bg img {
  width: 100%;
}

.modellion-list {
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
.modellion-item {
  margin-bottom: 11px;
}
.modellion-total {
  padding: 7px 14px;
}

.headlion {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + lionConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + lionConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + lionConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + lionConfig.animation12 + ')'");
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

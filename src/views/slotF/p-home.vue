<script>
import playpoker from "@/assets/slotF4/playpoker.png";
// import playpoker2 from "@/assets/slotF4/playpoker2.png";
// import playpoker3 from "@/assets/slotF4/playpoker3.png";
import boxpoker from "@/assets/slotF4/boxpoker.jpg";
import anypoker from "@/assets/slotF4/changepoker.png";
import anyBoxpoker from "@/assets/slotF4/anyBoxpoker.png";
import homepoker from "@/assets/slotF4/homepoker.png";
// import againpoker from "@/assets/slotF4/againpoker.png";
import peipoker from "@/assets/slotF4/peipoker.png";

import countpoker from "@/assets/slotF4/countpoker.png";
// import rulepoker from "@/assets/slotF4/rulepoker.png";
// import ruleDialogpoker from "@/assets/slotF4/ruleDialogpoker.jpg";
// import resultpoker from "@/assets/slotF4/resultpoker.png";
// import headpoker from "@/assets/slotF4/headpoker.png";

// import star from "@/assets/slotF4/starpoker.gif";
import { useRouter, useRoute } from "vue-router";
import poker1 from "@/assets/slotF4/poker1.png";
import poker2 from "@/assets/slotF4/poker2.png";
import poker3 from "@/assets/slotF4/poker3.png";
import poker4 from "@/assets/slotF4/poker4.png";
import poker5 from "@/assets/slotF4/poker5.png";
import poker6 from "@/assets/slotF4/poker6.png";
// import poker7 from "@/assets/slotF4/poker7.png";

// import animation1 from "@/assets/slotF4/dong/00001.png";
// import animation4 from "@/assets/slotF4/dong/00004.png";
// import animation8 from "@/assets/slotF4/dong/00008.png";
// import animation12 from "@/assets/slotF4/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotF4/football.png";
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
    const pokerConfig = reactive({
      // headpoker,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      peipoker,
      anypoker,
      playpoker,
      // playpoker2,
      // playpoker3,
      // againpoker,
      anyBoxpoker,
      boxpoker,
      homepoker,
      //   star,
      // senioritypoker,
      countpoker,
      // rulepoker,
      // ruleDialogpoker,
      // resultpoker
    });
    const pokerList = reactive([
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
    let stpoker = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: poker1,
        name: "poker2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: poker2,
        name: "poker1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: poker3,
      },
      {
        img: poker4,
      },
      {
        img: poker5,
      },
      {
        img: poker6,
        name: "poker3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: poker7,
       
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
        const boxLists = pokerList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".pokerp-item-img").forEach((child) => {
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
        const content = document.getElementById("pokerp-he");
        const box2 = document.getElementById("pokerp");
        const coords = { x: 0, y: 0 }; // Stpoker at (0, 0)
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
          tween.start(); // Stpoker the tween immediately.
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
            boxLists[i].querySelectorAll(".pokerp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".pokerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".pokerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".pokerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".pokerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".pokerp-item-img").forEach((child) => {
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

        allMethods.assignImageList(pokerList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "poker1") {
            arrCount[0].value++;
          } else if (item.name == "poker2") {
            arrCount[1].value++;
          } else if (item.name == "poker3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给pokerList
      assignImageList(pokerList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        pokerList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return pokerList;
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
      stpoker,
      pokerConfig,
      randomImages,
      pokerList,
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
    <!-- <img class="headpoker" :src="pokerConfig.headpoker" alt=""> -->
    <div class="pokerp" id="pokerp">
      <div class="pokerp-he" id="pokerp-he">
        <!-- <img class="poker-rule" @click="showRule" :src="pokerConfig.rulepoker" alt=""> -->
        <div class="pokerp-hidden">
          <div
            class="pokerp-item"
            :id="item.name"
            v-for="(item, index) in pokerList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'pokerp-item-img ' + imgItem.className
                  : 'pokerp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonpoker-box">

        <div class="buttonspoker2" >
          <div class="count" @click="peiCount(true)"></div>
          <div class="count-v">{{ peiValue }}</div>
          <div class="count" @click="peiCount(false)"></div>
        </div>
       
        <!-- <div class="buttonspokerBack" @click="run()"></div> -->


        <div class="poker-count" >
          <!-- <img class="poker-rule" :src="pokerConfig.rulepoker" alt="" /> -->
          <img :src="pokerConfig.countpoker" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        <div class="buttons2" @click="run()"></div>
        <div class="buttons" @click="close"></div>

      </div>
      <div class="pokerd-pokerp">
        <div class="pokerd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="pokerConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="pokerConfig.resultpoker" alt="" /> -->
        <!-- <div class="modelpoker-list">
          <div
            class="modelpoker-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelpoker-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="pokerConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="pokerConfig.ruleDialogpoker" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.pokerd-pokerp {
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

.poker-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  
  z-index: -1;
}
.poker-count .poker-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.pokerd-back {
  /* background: v-bind("'url(' + pokerConfig.homepoker + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stpoker {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + pokerConfig.playpoker + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + pokerConfig.boxpoker + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokerp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + pokerConfig.anyBoxpoker + ')'") no-repeat;
  background-size: 65%;
    background-position: center 118%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonpoker-box {
  position: absolute;
  top: 90%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 75%;
  height: 25%;
  /* justify-content: space-between; */
}
.poker-count {
  position: relative;
  width: 24%;
    height: 39%;
    margin-left: 2%;
    margin-top: 0%;
 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: -3%;
    margin-top: -54%;
    width: 9%;
    height: 46%;
    z-index: 999;
  background: v-bind("'url(' + pokerConfig.homepoker + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 10%;
    margin-top: 0%;
    width: 15%;
    height: 41%;
   background: v-bind("'url(' + pokerConfig.playpoker + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonspokerBack{
  position: absolute;
  left: 34.5%;
    margin-top: 57%;
    width: 38%;
    height: 58.5%;
  z-index: 999;
  /* background: v-bind("'url(' + pokerConfig.againpoker + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonspoker2{
  display: flex;
  margin-left: 5%;
    margin-top: 0%;
    width: 27%;
    height: 33.5%;
color: #fff;
  z-index: 999;
  background: v-bind("'url(' + pokerConfig.peipoker + ')'") no-repeat;
  background-size: 100% 100%;
}
.count{
  flex: 1;
}
.count-v{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
   
}
.pokerp-he {
    position: relative;
    margin-right: 0%;
    margin-top: 2%;
    width: 89%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.7);
}

.pokerp-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 109%;
  overflow: hidden;
}
.pokerp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + pokerConfig.anypoker + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size:83% 200%;
}
.pokerp-item:nth-child(2){
  margin-right: 20%;
}
.pokerp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.pokerp-item-img img {
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
  align-items: flex-stpoker;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + pokerConfig.dialogpoker + ')'") no-repeat; */
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

.stpoker-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stpoker-bg img {
  width: 100%;
}

.modelpoker-list {
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
.modelpoker-item {
  margin-bottom: 11px;
}
.modelpoker-total {
  padding: 7px 14px;
}

.headpoker {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + pokerConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + pokerConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + pokerConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + pokerConfig.animation12 + ')'");
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

<script>



import playcombustion from "@/assets/slotD30/playcombustion.png";
// import playcombustion3 from "@/assets/slotD30/playcombustion3.png";
import playcombustion2 from "@/assets/slotD30/playcombustion2.png";
import boxcombustion from "@/assets/slotD30/boxcombustion.jpg";
import anycombustion from "@/assets/slotD30/changeHcombustion.png";
import changeDcombustion from "@/assets/slotD30/changeDcombustion.png";
import changeMcombustion from "@/assets/slotD30/changeMcombustion.png";
import changeScombustion from "@/assets/slotD30/changeScombustion.png";
import anyBoxcombustion from "@/assets/slotD30/anyBoxcombustion.png";
import homecombustion from "@/assets/slotD30/homecombustion.png";

// import senioritycombustion from "@/assets/slotD30/senioritycombustion.png";
import countcombustion from "@/assets/slotD30/countcombustion.png";
// import rulecombustion from "@/assets/slotD30/rulecombustion.png";
// import ruleDialogcombustion from "@/assets/slotD30/ruleDialogcombustion.jpg";
// import resultcombustion from "@/assets/slotD30/resultcombustion.png";
// import headcombustion from "@/assets/slotD30/headcombustion.png";

// import star from "@/assets/slotD30/starcombustion.gif";
import { useRouter, useRoute } from "vue-router";
import combustion1 from "@/assets/slotD30/combustion1.png";
import combustion2 from "@/assets/slotD30/combustion2.png";
import combustion3 from "@/assets/slotD30/combustion3.png";
import combustion4 from "@/assets/slotD30/combustion4.png";
import combustion5 from "@/assets/slotD30/combustion5.png";
import combustion6 from "@/assets/slotD30/combustion6.png";
// import combustion7 from "@/assets/slotD30/combustion7.png";
// import combustion8 from "@/assets/slotD30/combustion8.png";

// import animation1 from "@/assets/slotD30/dong/00001.png";
// import animation4 from "@/assets/slotD30/dong/00004.png";
// import animation8 from "@/assets/slotD30/dong/00008.png";
// import animation12 from "@/assets/slotD30/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotD30/football.png";
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
    const combustionConfig = reactive({
      // headcombustion,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeScombustion,
      changeDcombustion,
      changeMcombustion,
      anycombustion,
      playcombustion,
      anyBoxcombustion,
      playcombustion2,
      // playcombustion3,
      boxcombustion,
      homecombustion,
      //   star,
      // senioritycombustion,
      countcombustion,
      // rulecombustion,
      // ruleDialogcombustion,
      // resultcombustion
    });
    const combustionList = reactive([
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
        size: 4,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stcombustion = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: combustion1,
        name: "combustion2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: combustion2,
        name: "combustion1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: combustion3,
      },
      {
        img: combustion4,
      },
      {
        img: combustion5,
      },
      {
        img: combustion6,
        name: "combustion3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: combustion7,
      // },
      // {
      //   img: combustion8,
      // },
    ];
    const allMethods = {
      run: (value) => {
        let magn = value || 1;
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= 100 * magn;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = combustionList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".combustionp-item-img").forEach((child) => {
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
        const content = document.getElementById("combustionp-he");
        const box2 = document.getElementById("combustionp");
        const coords = { x: 0, y: 0 }; // Stcombustion at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[4].classList.toggle("combustionp-itemD");
            }
          
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stcombustion the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[4].classList.toggle("combustionp-itemM");
            // }
         

            if ( timeOhter > 0 && timeOhter <= combustionList.length * 1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("combustionp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("combustionp-itemM");
            }
            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("combustionp-itemM");
            }
            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("combustionp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stcombustion the tween immediately.
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
          if (i > combustionList.length + 2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < combustionList.length) {
            if (i==5) {
              boxLists[i].style.setProperty("background-position-y", "center");
            } else {
              boxLists[i].style.setProperty("background-position-x", "center");
            }
            boxLists[i].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-y", 600 + "px");
            boxLists[4].querySelectorAll(".combustionp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value * magn;
          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".combustionp-item-img").forEach((child) => {
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

        allMethods.assignImageList(combustionList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "combustion1") {
            arrCount[0].value++;
          } else if (item.name == "combustion2") {
            arrCount[1].value++;
          } else if (item.name == "combustion3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给combustionList
      assignImageList(combustionList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        combustionList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........combustionList.........",
          "color:#31ef0e",
          combustionList
        );
        return combustionList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {



    });
    return {
      className,
      open,
      stcombustion,
      combustionConfig,
      randomImages,
      combustionList,
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
    <img class="headcombustion" :src="combustionConfig.playcombustion2" alt="">
    <div class="combustionp" id="combustionp">
      <div class="combustionp-he" id="combustionp-he">
        <!-- <img class="combustion-rule" @click="showRule" :src="combustionConfig.rulecombustion" alt=""> -->
        <div class="combustionp-hidden">
          <div
            class="combustionp-item"
            :id="item.name"
            v-for="(item, index) in combustionList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'combustionp-item-img ' + imgItem.className
                  : 'combustionp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttoncombustion-box">
        <div class="buttonscombustionBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="combustion-count" @click="showRule">
          <!-- <img class="combustion-rule" :src="combustionConfig.rulecombustion" alt="" /> -->
          <img :src="combustionConfig.countcombustion" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="combustiond-combustionp">
        <div class="combustiond-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="combustionConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="combustionConfig.resultcombustion" alt="" /> -->
        <!-- <div class="modelcombustion-list">
          <div
            class="modelcombustion-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelcombustion-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

   
    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="combustionConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="combustionConfig.ruleDialogcombustion" alt="" /> -->
      </div>
    </Teleport>
  </div>

 
</template>

<style scoped>
.combustion {
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.combustiond-combustionp {
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
  margin: 0% 0 0 37%;
    color: #ffffff;
}

.combustion-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.combustion-count .combustion-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.combustiond-back {
  /* background: v-bind("'url(' + combustionConfig.homecombustion + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stcombustion {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + combustionConfig.playcombustion + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + combustionConfig.boxcombustion + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.combustionp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + combustionConfig.anyBoxcombustion + ')'") no-repeat;
  background-size: auto 81%;
    background-position: center 53%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttoncombustion-box {
  position: absolute;
  top: -1%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 25%;
  /* justify-content: space-between; */
}
.combustion-count {
  position: relative;
  width: 34%;
    height: 37%;
    margin-left: 3.5%;
    margin-top: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {
  margin-left: -1%;
    margin-top: 30%;
    width: 14.5%;
    height: 38%;
  z-index: 999;
  background: v-bind("'url(' + combustionConfig.playcombustion + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
  height: 47%;
  margin-left: 3%;
  margin-top: 41.5%;
  /* background: v-bind("'url(' + combustionConfig.playcombustion3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonscombustionBack {
  margin-left: 6.5%;
    margin-top: 4.5%;
    width: 6%;
    height: 44.5%;

  z-index: 999;
  background: v-bind("'url(' + combustionConfig.homecombustion  + ')'") no-repeat;
  background-size: 100% 100%;
}
.combustionp-he {
  position: relative;
  margin-top: 7%;
  width: 100%;
  height: 42vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.58);
}

.combustionp-hidden {
  margin-left: 1%;
  margin-top: -14%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 97%;
  height: 146%;
}

.combustionp-item {
  margin-right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 21%;
    height: 58%;
  background: v-bind("'url(' + combustionConfig.changeScombustion + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 78% 251%;
}

.combustionp-item:nth-child(1) {
  margin-left: 3%;
 

}.combustionp-item:nth-child(5) img{
  width: 55%;
}
.combustionp-item:nth-child(2) {
    /* margin-left: 55%; */
 
}
.combustionp-item:nth-child(5) {
  margin-top:6%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + combustionConfig.anycombustion + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 150% 70%;
}
.combustionp-hidden .combustionp-itemD {
  margin-top: 6%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + combustionConfig.changeDcombustion + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 150% 70%;
}
.combustionp-itemM {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 21%;
    height: 58%;
  background: v-bind("'url(' + combustionConfig.changeMcombustion + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 78% 251%;
}
.combustionp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.combustionp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 67%;
  height: 70%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stcombustion;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + combustionConfig.dialogcombustion + ')'") no-repeat; */
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

.stcombustion-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stcombustion-bg img {
  width: 100%;
}

.modelcombustion-list {
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
.modelcombustion-item {
  margin-bottom: 11px;
}
.modelcombustion-total {
  padding: 7px 14px;
}

.headcombustion {
  position: absolute;
  top: -0;
    width: 33%;
    z-index: 9;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + combustionConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + combustionConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + combustionConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + combustionConfig.animation12 + ')'");
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

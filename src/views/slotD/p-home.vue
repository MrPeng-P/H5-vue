<script>
import playgolf from "@/assets/slotD1/playgolf.png";
import playgolf3 from "@/assets/slotD1/playgolf3.png";
import playgolf2 from "@/assets/slotD1/playgolf2.png";
import boxgolf from "@/assets/slotD1/boxgolf.jpg";
import anygolf from "@/assets/slotD1/changeHgolf.png";
import changeDgolf from "@/assets/slotD1/changeDgolf.png";
import changeMgolf from "@/assets/slotD1/changeMgolf.png";
import changeSgolf from "@/assets/slotD1/changeSgolf.png";
import anyBoxgolf from "@/assets/slotD1/anyBoxgolf.png";
import homegolf from "@/assets/slotD1/homegolf.png";

// import senioritygolf from "@/assets/slotD1/senioritygolf.png";
import countgolf from "@/assets/slotD1/countgolf.png";
// import rulegolf from "@/assets/slotD1/rulegolf.png";
// import ruleDialoggolf from "@/assets/slotD1/ruleDialoggolf.jpg";
// import resultgolf from "@/assets/slotD1/resultgolf.png";
// import headgolf from "@/assets/slotD1/headgolf.png";

// import star from "@/assets/slotD1/stargolf.gif";
import { useRouter, useRoute } from "vue-router";
import golf1 from "@/assets/slotD1/golf1.png";
import golf2 from "@/assets/slotD1/golf2.png";
import golf3 from "@/assets/slotD1/golf3.png";
import golf4 from "@/assets/slotD1/golf4.png";
import golf5 from "@/assets/slotD1/golf5.png";
import golf6 from "@/assets/slotD1/golf6.png";
// import golf7 from "@/assets/slotD1/golf7.png";
// import golf8 from "@/assets/slotD1/golf8.png";

// import animation1 from "@/assets/slotD1/dong/00001.png";
// import animation4 from "@/assets/slotD1/dong/00004.png";
// import animation8 from "@/assets/slotD1/dong/00008.png";
// import animation12 from "@/assets/slotD1/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD1/football.png";
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
    const golfConfig = reactive({
      // headgolf,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSgolf,
      changeDgolf,
      changeMgolf,
      anygolf,
      playgolf,
      anyBoxgolf,
      playgolf2,
      playgolf3,
      boxgolf,
      homegolf,
      //   star,
      // senioritygolf,
      countgolf,
      // rulegolf,
      // ruleDialoggolf,
      // resultgolf
    });
    const golfList = reactive([
      {
        name: "item1",
        size: 5,
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
        size: 3,
        imgList: [],
      },
      {
        name: "item5",
        size: 3,
        imgList: [],
      },
      // {
      //   name: "item6",
      //   size: 2,
      //   imgList: [],
      // },
    ]);
    let timeOhter = 0;
    let id;
    let stgolf = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: golf1,
        name: "golf2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: golf2,
        name: "golf1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: golf3,
      },
      {
        img: golf4,
      },
      {
        img: golf5,
      },
      {
        img: golf6,
        name: "golf3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: golf7,

      // },
      // {
      //   img: golf8,
      // },
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
        const boxLists = golfList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".golfp-item-img").forEach((child) => {
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
        const content = document.getElementById("golfp-he");
        const box2 = document.getElementById("golfp");
        const coords = { x: 0, y: 0 }; // Stgolf at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 0 && timeOhter <= golfList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[0].classList.toggle("golfp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stgolf the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("golfp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("golfp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("golfp-itemM");
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("golfp-itemM");
            }
            // if (timeOhter > 5000 && timeOhter <= 8000) {
            //   boxLists[5].style.setProperty(
            //     "background-position-x",
            //     -coords.x + "px"
            //   );
            //   boxLists[5].classList.toggle("golfp-itemD");
            // }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stgolf the tween immediately.
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
          if (i > golfList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < golfList.length) {
            if(i==1){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".golfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0]
              .querySelectorAll(".golfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".golfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".golfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".golfp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".golfp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".golfp-item-img").forEach((child) => {
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
        const totalImages = 17;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(golfList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "golf1") {
            arrCount[0].value++;
          } else if (item.name == "golf2") {
            arrCount[1].value++;
          } else if (item.name == "golf3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给golfList
      assignImageList(golfList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        golfList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........golfList.........",
          "color:#31ef0e",
          golfList
        );
        return golfList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stgolf,
      golfConfig,
      randomImages,
      golfList,
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
    <img class="headgolf" :src="golfConfig.playgolf2" alt="">
    <div class="golfp" id="golfp">
      <div class="golfp-he" id="golfp-he">
        <!-- <img class="golf-rule" @click="showRule" :src="golfConfig.rulegolf" alt=""> -->
        <div class="golfp-hidden">
          <div
            class="golfp-item"
            :id="item.name"
            v-for="(item, index) in golfList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'golfp-item-img ' + imgItem.className
                  : 'golfp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttongolf-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsgolfBack" @click="run()"></div>
        <div class="golf-count" @click="showRule">
          <!-- <img class="golf-rule" :src="golfConfig.rulegolf" alt="" /> -->
          <img :src="golfConfig.countgolf" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        <div class="buttons2" @click="run(2)"></div>
        
      </div>
      <div class="golfd-golfp">
        <div class="golfd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="golfConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="golfConfig.resultgolf" alt="" /> -->
        <!-- <div class="modelgolf-list">
          <div
            class="modelgolf-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelgolf-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="golfConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="golfConfig.ruleDialoggolf" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.golfd-golfp {
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
  margin: 0 0 0 46%;
  color: #2a4505;
}

.golf-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.golf-count .golf-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.golfd-back {
  /* background: v-bind("'url(' + golfConfig.homegolf + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stgolf {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + golfConfig.playgolf + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + golfConfig.boxgolf + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.golfp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + golfConfig.anyBoxgolf + ')'") no-repeat;
  background-size: 60%;
  background-position:  center 65%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttongolf-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.golf-count {
  position: relative;
  width: 28%;
    height: 50%;
    margin-left: -59%;
  
    margin-top: 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {
  margin-left: 13%;
    margin-top: -1.5%;
    width: 7%;
    height: 46%;
  z-index: 999;
  background: v-bind("'url(' + golfConfig.homegolf + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 27%;
    height: 47%;
    margin-left: 1%;
    margin-top: 43.2%;
  background: v-bind("'url(' + golfConfig.playgolf3 + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonsgolfBack {

    margin-left: 40%;
    margin-top: -1.5%;
    width: 13%;
    height: 45.5%;
  z-index: 999;
  background: v-bind("'url(' + golfConfig.playgolf + ')'") no-repeat;
  background-size: 100% 100%;
}
.golfp-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 39vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.6);
}

.golfp-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
  margin-top: -14%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 143%;
}

.golfp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 70%;
  background: v-bind("'url(' + golfConfig.changeSgolf + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 23px;
  background-size: 96% 244%;
}
.golfp-item:nth-child(3){
  margin-right: 20%;
}
.golfp-item:nth-child(1) {
  /* margin-bottom: 20%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 20%;
  background-image: v-bind("'url(' + golfConfig.anygolf + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 160% 90%;
}
.golfp-hidden .golfp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  background-image: v-bind("'url(' + golfConfig.changeDgolf + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 160% 90%;
}
.golfp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 70%;
  background: v-bind("'url(' + golfConfig.changeMgolf + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 23px;
  background-size: 96% 244%;
}
.golfp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.golfp-item-img img {
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
  align-items: flex-stgolf;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + golfConfig.dialoggolf + ')'") no-repeat; */
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

.stgolf-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stgolf-bg img {
  width: 100%;
}

.modelgolf-list {
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
.modelgolf-item {
  margin-bottom: 11px;
}
.modelgolf-total {
  padding: 7px 14px;
}

.headgolf {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + golfConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + golfConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + golfConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + golfConfig.animation12 + ')'");
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

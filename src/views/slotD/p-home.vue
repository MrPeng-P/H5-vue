<script>
import playWolf from "@/assets/slotD21/playWolf.png";
// import playWolf3 from "@/assets/slotD21/playWolf3.png";
// import playWolf2 from "@/assets/slotD21/playWolf2.png";
import boxWolf from "@/assets/slotD21/boxWolf.jpg";
import anyWolf from "@/assets/slotD21/changeHWolf.png";
import changeDWolf from "@/assets/slotD21/changeDWolf.png";
import changeMWolf from "@/assets/slotD21/changeMWolf.png";
import changeSWolf from "@/assets/slotD21/changeSWolf.png";
import anyBoxWolf from "@/assets/slotD21/anyBoxWolf.jpg";
import homeWolf from "@/assets/slotD21/homeWolf.png";

// import seniorityWolf from "@/assets/slotD21/seniorityWolf.png";
import countWolf from "@/assets/slotD21/countWolf.png";
// import ruleWolf from "@/assets/slotD21/ruleWolf.png";
// import ruleDialogWolf from "@/assets/slotD21/ruleDialogWolf.jpg";
// import resultWolf from "@/assets/slotD21/resultWolf.png";
// import headWolf from "@/assets/slotD21/headWolf.png";

// import star from "@/assets/slotD21/starWolf.gif";
import { useRouter, useRoute } from "vue-router";
import Wolf1 from "@/assets/slotD21/Wolf1.png";
import Wolf2 from "@/assets/slotD21/Wolf2.png";
import Wolf3 from "@/assets/slotD21/Wolf3.png";
import Wolf4 from "@/assets/slotD21/Wolf4.png";
import Wolf5 from "@/assets/slotD21/Wolf5.png";
import Wolf6 from "@/assets/slotD21/Wolf6.png";
import Wolf7 from "@/assets/slotD21/Wolf7.png";
// import Wolf8 from "@/assets/slotD21/Wolf8.png";

// import animation1 from "@/assets/slotD21/dong/00001.png";
// import animation4 from "@/assets/slotD21/dong/00004.png";
// import animation8 from "@/assets/slotD21/dong/00008.png";
// import animation12 from "@/assets/slotD21/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD21/football.png";
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
    const WolfConfig = reactive({
      // headWolf,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSWolf,
      changeDWolf,
      changeMWolf,
      anyWolf,
      playWolf,
      anyBoxWolf,
      // playWolf2,
      // playWolf3,
      boxWolf,
      homeWolf,
      //   star,
      // seniorityWolf,
      countWolf,
      // ruleWolf,
      // ruleDialogWolf,
      // resultWolf
    });
    const WolfList = reactive([
      {
        name: "item1",
        size: 5,
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
    let stWolf = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: Wolf1,
        name: "Wolf2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Wolf2,
        name: "Wolf1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Wolf3,
      },
      {
        img: Wolf4,
      },
      {
        img: Wolf5,
      },
      {
        img: Wolf6,
        name: "Wolf3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: Wolf7,

      },
      // {
      //   img: Wolf8,
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
        const boxLists = WolfList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".Wolfp-item-img").forEach((child) => {
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
        const content = document.getElementById("Wolfp-he");
        const box2 = document.getElementById("Wolfp");
        const coords = { x: 0, y: 0 }; // StWolf at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 0 && timeOhter <= WolfList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[0].classList.toggle("Wolfp-itemD");
            }
          
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // StWolf the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 4000 && timeOhter <= 7000 ) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("Wolfp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("Wolfp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("Wolfp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("Wolfp-itemM");
            }
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[4].classList.toggle("Wolfp-itemM");
            // }
          
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // StWolf the tween immediately.
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
          if (i > WolfList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < WolfList.length) {
            if(i==1){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".Wolfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0]
              .querySelectorAll(".Wolfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".Wolfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".Wolfp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".Wolfp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".Wolfp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".Wolfp-item-img").forEach((child) => {
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
        const totalImages = 17;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(WolfList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Wolf1") {
            arrCount[0].value++;
          } else if (item.name == "Wolf2") {
            arrCount[1].value++;
          } else if (item.name == "Wolf3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给WolfList
      assignImageList(WolfList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        WolfList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........WolfList.........",
          "color:#31ef0e",
          WolfList
        );
        return WolfList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stWolf,
      WolfConfig,
      randomImages,
      WolfList,
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
    <!-- <img class="headWolf" :src="WolfConfig.playWolf2" alt=""> -->
    <div class="Wolfp" id="Wolfp">
      <div class="Wolfp-he" id="Wolfp-he">
        <!-- <img class="Wolf-rule" @click="showRule" :src="WolfConfig.ruleWolf" alt=""> -->
        <div class="Wolfp-hidden">
          <div
            class="Wolfp-item"
            :id="item.name"
            v-for="(item, index) in WolfList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Wolfp-item-img ' + imgItem.className
                  : 'Wolfp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonWolf-box">

        <div class="buttonsWolfBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="Wolf-count" @click="showRule">
          <!-- <img class="Wolf-rule" :src="WolfConfig.ruleWolf" alt="" /> -->
          <img :src="WolfConfig.countWolf" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="Wolfd-Wolfp">
        <div class="Wolfd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="WolfConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="WolfConfig.resultWolf" alt="" /> -->
        <!-- <div class="modelWolf-list">
          <div
            class="modelWolf-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelWolf-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="WolfConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="WolfConfig.ruleDialogWolf" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.Wolfd-Wolfp {
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
  color: #ffffff;
}

.Wolf-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Wolf-count .Wolf-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Wolfd-back {
  /* background: v-bind("'url(' + WolfConfig.homeWolf + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stWolf {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + WolfConfig.playWolf + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + WolfConfig.boxWolf + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.Wolfp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + WolfConfig.anyBoxWolf + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonWolf-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.Wolf-count {
  position: relative;
  width:44%;
    height: 45%;
    margin-left: 1.5%;
    margin-top: 17.6%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {

  margin-left: -3%;
  margin-top: 17.6%;
    width: 15%;
    height: 46%;


  z-index: 999;
  background: v-bind("'url(' + WolfConfig.playWolf + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + WolfConfig.playWolf3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsWolfBack {
  margin-left: 8.5%;
    margin-top: 1.5%;
    width: 7%;
    height:44.5%;

  z-index: 999;
  background: v-bind("'url(' + WolfConfig.homeWolf  + ')'") no-repeat;
  background-size: 100% 100%;
}
.Wolfp-he {
  position: relative;
  margin-top: 7%;
    width: 100%;
    height: 42vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.58);
}

.Wolfp-hidden {
  /* margin-top: 2%; */
  margin-left: 3%;
  margin-top: -16%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 146%;
}

.Wolfp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + WolfConfig.changeSWolf + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;

}
.Wolfp-item:nth-child(3){
  margin-right: 20%;
}
.Wolfp-item:nth-child(1) {
  margin-bottom: 11%;
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + WolfConfig.anyWolf + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.Wolfp-hidden .Wolfp-itemD {
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + WolfConfig.changeDWolf + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.Wolfp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + WolfConfig.changeMWolf + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;
}
.Wolfp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.Wolfp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 70%;
  height: 70%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stWolf;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + WolfConfig.dialogWolf + ')'") no-repeat; */
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

.stWolf-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stWolf-bg img {
  width: 100%;
}

.modelWolf-list {
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
.modelWolf-item {
  margin-bottom: 11px;
}
.modelWolf-total {
  padding: 7px 14px;
}

.headWolf {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + WolfConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + WolfConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + WolfConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + WolfConfig.animation12 + ')'");
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

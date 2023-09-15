<script>
import playRome from "@/assets/slotE13/playRome.png";
// import playRome2 from "@/assets/slotE13/playRome2.png";
// import playRome3 from "@/assets/slotE13/playRome3.png";
import boxRome from "@/assets/slotE13/boxRome.jpg";
import anyRome from "@/assets/slotE13/changeHRome.png";
import anyBoxRome from "@/assets/slotE13/anyBoxRome.jpg";
import homeRome from "@/assets/slotE13/homeRome.png";
// import againRome from "@/assets/slotE13/againRome.png";
import countRome from "@/assets/slotE13/countRome.png";
// import ruleRome from "@/assets/slotE13/ruleRome.png";
// import ruleDialogRome from "@/assets/slotE13/ruleDialogRome.jpg";
// import resultRome from "@/assets/slotE13/resultRome.png";
// import headRome from "@/assets/slotE13/headRome.png";
// import star from "@/assets/slotE13/starRome.gif";
import { useRouter, useRoute } from "vue-router";
import Rome1 from "@/assets/slotE13/Rome1.png";
import Rome2 from "@/assets/slotE13/Rome2.png";
import Rome3 from "@/assets/slotE13/Rome3.png";
import Rome4 from "@/assets/slotE13/Rome4.png";
import Rome5 from "@/assets/slotE13/Rome5.png";
import Rome6 from "@/assets/slotE13/Rome6.png";
import Rome7 from "@/assets/slotE13/Rome7.png";

// import animation1 from "@/assets/slotE13/dong/00001.png";
// import animation4 from "@/assets/slotE13/dong/00004.png";
// import animation8 from "@/assets/slotE13/dong/00008.png";
// import animation12 from "@/assets/slotE13/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotE13/football.png";
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
    const RomeConfig = reactive({
      // headRome,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyRome,
      playRome,
      // playRome2,
      // playRome3,
      // againRome,
      anyBoxRome,
      boxRome,
      homeRome,
      //   star,
      // seniorityRome,
      countRome,
      // ruleRome,
      // ruleDialogRome,
      // resultRome
    });
   


    const RomeList = reactive([
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
    let stRome = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: Rome1,
        name: "Rome2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Rome2,
        name: "Rome1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Rome3,
      },
      {
        img: Rome4,
      },
      {
        img: Rome5,
      },
      {
        img: Rome6,
      },
      {
        img: Rome7,
        name: "Rome3",
        className: "animation",
        count: 2200 * magnification.value,
      },
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
        const boxLists = RomeList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".Romep-item-img").forEach((child) => {
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
        const content = document.getElementById("Romep-he");
        const box2 = document.getElementById("Romep");
        const coords = { x: 0, y: 0 }; // StRome at (0, 0)
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
        tween.start(); // StRome the tween immediately.
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
            boxLists[i]
              .querySelectorAll(".Romep-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".Romep-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".Romep-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".Romep-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
            // countValue.value += useCount.value * magn;
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".Romep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value*magn;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".Romep-item-img").forEach((child) => {
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

        allMethods.assignImageList(RomeList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
       
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Rome1") {
            arrCount[0].value++;
          } else if (item.name == "Rome2") {
            arrCount[1].value++;
          } else if (item.name == "Rome3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给RomeList
      assignImageList(RomeList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        RomeList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return RomeList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stRome,
      RomeConfig,
      randomImages,
      RomeList,
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
      <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="zombieConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="zombieConfig.resultzombie" alt="" /> -->
        <!-- <div class="modelzombie-list">
          <div
            class="modelzombie-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelzombie-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="zombieConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="zombieConfig.ruleDialogzombie" alt="" /> -->
      </div>
    </Teleport>

  <div :class="className">
    <!-- <img class="headRome" :src="RomeConfig.headRome" alt=""> -->
    <div class="Romep" id="Romep">
      <div class="Romep-he" id="Romep-he">
        <!-- <img class="Rome-rule" @click="showRule" :src="RomeConfig.ruleRome" alt=""> -->
        <div class="Romep-hidden">
          <div class="Romep-item-box" v-for="(item, index) in RomeList">
            <div class="Romep-item" :id="item.name">
              <div
                v-for="(imgItem, imgIndex) in item.imgList"
                :class="
                  imgItem.className
                    ? 'Romep-item-img ' + imgItem.className
                    : 'Romep-item-img'
                "
              >
                <img :src="imgItem.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonRome-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonsRome2" @click="run()"></div>

        <div class="buttonsRomeBack" @click="run()"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="Rome-count" @click="showRule">
          <!-- <img class="Rome-rule" :src="RomeConfig.ruleRome" alt="" /> -->
          <img :src="RomeConfig.countRome" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="Romed-Romep">
        <div class="Romed-back" @click="close"></div>
      </div>
    </div>
    
  </div>

  
</template>

<style scoped>
.swan{
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.Romed-Romep {
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
  margin: 0% 15% 0%;

    color: #fff;
    font-size: 18px;
    /* transform: rotateZ(90deg); */
}

.Rome-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Rome-count .Rome-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Romed-back {
  /* background: v-bind("'url(' + RomeConfig.homeRome + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stRome {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + RomeConfig.playRome + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + RomeConfig.boxRome + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Romep {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + RomeConfig.anyBoxRome + ')'") no-repeat;
  background-size: 100% 100%;
  background-position: center 15%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonRome-box {
  position: absolute;
  top: 5%;
  left: 31%;
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 86%;
}
.Rome-count {
  position: relative;
  width: 31%;
    height: 17%;
    margin-left: 22%;
    margin-top: -7.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  z-index: 1;
}

.buttons {
  margin-left: -10%;
  margin-top: 0%;
  width: 7%;
  height: 16%;
  z-index: 999;
  background: v-bind("'url(' + RomeConfig.homeRome + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 61%;
  margin-top: 1%;
  width: 7%;
  height: 54.5%;
  z-index: 999;
  /* background: v-bind("'url(' + RomeConfig.seniorityRome + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsRomeBack {
  position: absolute;
  left: 65.5%;
  margin-top: 64%;
  width: 38%;
  height: 45.5%;
  z-index: 999;
  /* background: v-bind("'url(' + RomeConfig.againRome + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonsRome2 {
  margin-left: 3%;
    margin-top: -10%;
    width: 18%;
    height: 16.5%;
  z-index: 999;
  background: v-bind("'url(' + RomeConfig.playRome + ')'") no-repeat;
  background-size: 100% 100%;
}
.Romep-he {
  position: relative;
  margin-right: -12%;
  width: 75%;
  height: 46vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.67);
}

.Romep-hidden {
  /* margin-top: 2%; */
  margin-left: 3%;
  margin-top: -6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 117%;
  height: 207%;
    transform:rotateZ(-59.5deg) translate(10vw, -16vw);
  overflow: hidden;
}
.Romep-item-box {
  height: 100%;
  flex: 1;

  overflow: hidden;
}

.Romep-item-box:nth-child(1),
.Romep-item-box:nth-child(5) {
  height: 20%;

  transform: translate(-3vw, -19vw);

  .Romep-item {
    background-size: 91% 928%;
  }
}
.Romep-item-box:nth-child(5) {
  transform: translate(3vw, 19vw);
}
.Romep-item-box:nth-child(2),
.Romep-item-box:nth-child(4) {
  transform: translate(-3vw, -9vw);
  height: 60%;
  .Romep-item {
    background-size: 91% 343%;
  }
}
.Romep-item-box:nth-child(4) {
  transform: translate(4vw, 10vw);
}
.Romep-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + RomeConfig.anyRome + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
 
  background-size: 100% 217%;
}
.Romep-item:nth-child(2) {
  /* margin-right: 20%; */
}
.Romep-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.Romep-item-img img {
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
  align-items: flex-stRome;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + RomeConfig.dialogRome + ')'") no-repeat; */
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

.stRome-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stRome-bg img {
  width: 100%;
}

.modelRome-list {
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
.modelRome-item {
  margin-bottom: 11px;
}
.modelRome-total {
  padding: 7px 14px;
}

.headRome {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + RomeConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + RomeConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + RomeConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + RomeConfig.animation12 + ')'");
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
.Rome{
  display: none;
}
</style>

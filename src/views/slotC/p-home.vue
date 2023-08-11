<script>
import playbuffalo from "@/assets/slotC1/playbuffalo.png";
import boxbuffalo from "@/assets/slotC1/boxbuffalo.jpg";
import anybuffalo from "@/assets/slotC1/changeHbuffalo.png";
import changeDbuffalo from "@/assets/slotC1/changeDbuffalo.png";
import anyBoxbuffalo from "@/assets/slotC1/anyBoxbuffalo.png";
import homebuffalo from "@/assets/slotC1/homebuffalo.png";

// import senioritybuffalo from "@/assets/slotC1/senioritybuffalo.png";
import countbuffalo from "@/assets/slotC1/countbuffalo.png";
// import rulebuffalo from "@/assets/slotC1/rulebuffalo.png";
// import ruleDialogbuffalo from "@/assets/slotC1/ruleDialogbuffalo.jpg";
// import resultbuffalo from "@/assets/slotC1/resultbuffalo.png";
// import headbuffalo from "@/assets/slotC1/headbuffalo.png";

// import star from "@/assets/slotC1/starbuffalo.gif";
import { useRouter, useRoute } from "vue-router";
import buffalo1 from "@/assets/slotC1/buffalo1.png";
import buffalo2 from "@/assets/slotC1/buffalo2.png";
import buffalo3 from "@/assets/slotC1/buffalo3.png";
import buffalo4 from "@/assets/slotC1/buffalo4.png";
import buffalo5 from "@/assets/slotC1/buffalo5.png";
import buffalo6 from "@/assets/slotC1/buffalo6.png";
import buffalo7 from "@/assets/slotC1/buffalo7.png";

// import animation1 from "@/assets/slotC1/dong/00001.png";
// import animation4 from "@/assets/slotC1/dong/00004.png";
// import animation8 from "@/assets/slotC1/dong/00008.png";
// import animation12 from "@/assets/slotC1/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotC1/football.png";
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
    const buffaloConfig = reactive({
      // headbuffalo,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeDbuffalo,
      anybuffalo,
      playbuffalo,
      anyBoxbuffalo,
      boxbuffalo,
      homebuffalo,
      //   star,
      // senioritybuffalo,
      countbuffalo,
      // rulebuffalo,
      // ruleDialogbuffalo,
      // resultbuffalo
    });
    const buffaloList = reactive([
      {
        name: "item1",
        size: 5,
        imgList: [],
      },
      {
        name: "item2",
        size: 10,
        imgList: [],
      },
      {
        name: "item3",
        size: 15,
        imgList: [],
      },
      // {
      //   name: "item4",
      //   size: 12,
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
    let stbuffalo = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: buffalo1,
        name: "buffalo2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: buffalo2,
        name: "buffalo1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: buffalo3,
      },
      {
        img: buffalo4,
      },
      {
        img: buffalo5,
      },
      {
        img: buffalo6,
      },
      {
        img: buffalo7,
        name: "buffalo3",
        className: "animation",
        count: 2200 * magnification.value,
      },
    ];
    const allMethods = {
      run: () => {
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= 100;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = buffaloList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".buffalop-item-img").forEach((child) => {
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
        const content = document.getElementById("buffalop-he");
        const box2 = document.getElementById("buffalop");
        const coords = { x: 0, y: 0 }; // Stbuffalo at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
           
              console.log('%c ..........boxLists[1].style.........','color:#31ef0e',boxLists[1].style)
              boxLists[1].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[1].classList.toggle('buffalop-itemD');
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle('buffalop-itemD');
            }

            // if (timeOhter > 3000 && timeOhter <= 6000) {
            //   boxLists[3].style.setProperty(
            //     "background-position-y",
            //     -coords.x + "px"
            //   );
            // }
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.x + "px"
            //   );
            // }
            if (timeOhter > 0 && timeOhter <= 3000) {
              boxLists[0].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[0].classList.toggle('buffalop-itemD');
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stbuffalo the tween immediately.
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
    

            boxLists[i].style.setProperty("background-position-y", "center");
            boxLists[i].querySelectorAll(".buffalop-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
           
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0].querySelectorAll(".buffalop-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-y", 600 + "px");
            boxLists[1].querySelectorAll(".buffalop-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".buffalop-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
            countValue.value += useCount.value;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".buffalop-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   // countValue.value += useCount.value;
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".buffalop-item-img").forEach((child) => {
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
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(buffaloList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "buffalo1") {
            arrCount[0].value++;
          } else if (item.name == "buffalo2") {
            arrCount[1].value++;
          } else if (item.name == "buffalo3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给buffaloList
      assignImageList(buffaloList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log('%c ..........shuffledImages.........','color:#31ef0e',shuffledImages)
        let currentIndex = 0;
        buffaloList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log('%c ..........buffaloList.........','color:#31ef0e',buffaloList)
        return buffaloList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stbuffalo,
      buffaloConfig,
      randomImages,
      buffaloList,
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
    <!-- <img class="headbuffalo" :src="buffaloConfig.headbuffalo" alt=""> -->
    <div class="buffalop" id="buffalop">
      <div class="buffalop-he" id="buffalop-he">
        <!-- <img class="buffalo-rule" @click="showRule" :src="buffaloConfig.rulebuffalo" alt=""> -->
        <div class="buffalop-hidden">
          <div
            class="buffalop-item"
            :id="item.name"
            v-for="(item, index) in buffaloList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'buffalop-item-img ' + imgItem.className
                  : 'buffalop-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonbuffalo-box">
        <div class="buttons" @click="close"></div>
        <div class="buttonsbuffaloBack" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="buffalo-count" @click="showRule">
          <!-- <img class="buffalo-rule" :src="buffaloConfig.rulebuffalo" alt="" /> -->
          <img :src="buffaloConfig.countbuffalo" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="buffalod-buffalop">
        <div class="buffalod-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="buffaloConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="buffaloConfig.resultbuffalo" alt="" /> -->
        <!-- <div class="modelbuffalo-list">
          <div
            class="modelbuffalo-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelbuffalo-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="buffaloConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="buffaloConfig.ruleDialogbuffalo" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.buffalod-buffalop {
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
  margin: 0 0 0 40%;
  color: #fff;
}

.buffalo-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.buffalo-count .buffalo-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.buffalod-back {
  /* background: v-bind("'url(' + buffaloConfig.homebuffalo + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stbuffalo {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + buffaloConfig.playbuffalo + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + buffaloConfig.boxbuffalo + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buffalop {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + buffaloConfig.anyBoxbuffalo + ')'") no-repeat;
  background-size: 72%;
    background-position: center 6%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonbuffalo-box {
  position: absolute;
  top: 8%;
    left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.buffalo-count {
  position: relative;
  width: 70%;
    height: 50%;
    margin-left: 2%;
    margin-right: -23%;
    margin-top: 60.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 9%;
    margin-top: -2%;
    width: 12%;
    height: 40%;
  z-index: 999;
  background: v-bind("'url(' + buffaloConfig.homebuffalo + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  /* margin-left: 53%;
  margin-bottom: -57%; */
  margin-left:2%;
  margin-top: 60%;
  width: 30%;
  height: 40%;
  z-index: 999;
  /* background: v-bind("'url(' + buffaloConfig.senioritybuffalo + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsbuffaloBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left: -7%;
    margin-top: 60.5%;
    width: 19%;
    height: 48.5%;
  z-index: 999;
  background: v-bind("'url(' + buffaloConfig.playbuffalo + ')'") no-repeat;
  background-size: 100% 100%;
}
.buffalop-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 43vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}

.buffalop-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
  margin-top: -7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 118%;
  overflow: hidden;
}
.buffalop-item {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + buffaloConfig.anybuffalo + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 160% 88%;
}

.buffalop-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + buffaloConfig.changeDbuffalo + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 160% 88%;
}
.buffalop-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
  
}
.buffalop-item-img img {
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
  align-items: flex-stbuffalo;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + buffaloConfig.dialogbuffalo + ')'") no-repeat; */
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

.stbuffalo-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stbuffalo-bg img {
  width: 100%;
}

.modelbuffalo-list {
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
.modelbuffalo-item {
  margin-bottom: 11px;
}
.modelbuffalo-total {
  padding: 7px 14px;
}

.headbuffalo {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
   
    background-image: v-bind("'url(' + buffaloConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + buffaloConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + buffaloConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + buffaloConfig.animation12 + ')'");
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

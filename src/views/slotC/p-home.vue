<script>
import playuniverse from "@/assets/slotC5/playuniverse.png";
import boxuniverse from "@/assets/slotC5/boxuniverse.jpg";
import anyuniverse from "@/assets/slotC5/changeHuniverse.png";
import changeDuniverse from "@/assets/slotC5/changeDuniverse.png";
import anyBoxuniverse from "@/assets/slotC5/anyBoxuniverse.png";
import homeuniverse from "@/assets/slotC5/homeuniverse.png";

// import seniorityuniverse from "@/assets/slotC5/seniorityuniverse.png";
import countuniverse from "@/assets/slotC5/countuniverse.png";
// import ruleuniverse from "@/assets/slotC5/ruleuniverse.png";
// import ruleDialoguniverse from "@/assets/slotC5/ruleDialoguniverse.jpg";
// import resultuniverse from "@/assets/slotC5/resultuniverse.png";
// import headuniverse from "@/assets/slotC5/headuniverse.png";

// import star from "@/assets/slotC5/staruniverse.gif";
import { useRouter, useRoute } from "vue-router";
import universe1 from "@/assets/slotC5/universe1.png";
import universe2 from "@/assets/slotC5/universe2.png";
import universe3 from "@/assets/slotC5/universe3.png";
import universe4 from "@/assets/slotC5/universe4.png";
import universe5 from "@/assets/slotC5/universe5.png";
import universe6 from "@/assets/slotC5/universe6.png";
// import universe7 from "@/assets/slotC5/universe7.png";
// import universe8 from "@/assets/slotC5/universe8.png";

// import animation1 from "@/assets/slotC5/dong/00001.png";
// import animation4 from "@/assets/slotC5/dong/00004.png";
// import animation8 from "@/assets/slotC5/dong/00008.png";
// import animation12 from "@/assets/slotC5/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotC5/football.png";
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
    const universeConfig = reactive({
      // headuniverse,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeDuniverse,
      anyuniverse,
      playuniverse,
      anyBoxuniverse,
      boxuniverse,
      homeuniverse,
      //   star,
      // seniorityuniverse,
      countuniverse,
      // ruleuniverse,
      // ruleDialoguniverse,
      // resultuniverse
    });
    const universeList = reactive([
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
    let stuniverse = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: universe1,
        name: "universe2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: universe2,
        name: "universe1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: universe3,
      },
      {
        img: universe4,
      },
      {
        img: universe5,
      },
      {
        img: universe6,
        name: "universe3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: universe7,
   
      // },
      // {
      //   img: universe8,
      // },
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
        const boxLists = universeList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".universep-item-img").forEach((child) => {
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
        const content = document.getElementById("universep-he");
        const box2 = document.getElementById("universep");
        const coords = { x: 0, y: 0 }; // Stuniverse at (0, 0)
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
              boxLists[1].classList.toggle('universep-itemD');
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle('universep-itemD');
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
              boxLists[0].classList.toggle('universep-itemD');
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stuniverse the tween immediately.
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
            boxLists[i].querySelectorAll(".universep-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
           
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0].querySelectorAll(".universep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-y", 600 + "px");
            boxLists[1].querySelectorAll(".universep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".universep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
            countValue.value += useCount.value;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".universep-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   // countValue.value += useCount.value;
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".universep-item-img").forEach((child) => {
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

        allMethods.assignImageList(universeList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "universe1") {
            arrCount[0].value++;
          } else if (item.name == "universe2") {
            arrCount[1].value++;
          } else if (item.name == "universe3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给universeList
      assignImageList(universeList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log('%c ..........shuffledImages.........','color:#31ef0e',shuffledImages)
        let currentIndex = 0;
        universeList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log('%c ..........universeList.........','color:#31ef0e',universeList)
        return universeList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stuniverse,
      universeConfig,
      randomImages,
      universeList,
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
    <!-- <img class="headuniverse" :src="universeConfig.headuniverse" alt=""> -->
    <div class="universep" id="universep">
      <div class="universep-he" id="universep-he">
        <!-- <img class="universe-rule" @click="showRule" :src="universeConfig.ruleuniverse" alt=""> -->
        <div class="universep-hidden">
          <div
            class="universep-item"
            :id="item.name"
            v-for="(item, index) in universeList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'universep-item-img ' + imgItem.className
                  : 'universep-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonuniverse-box">
        <div class="buttons" @click="close"></div>
        <div class="buttonsuniverseBack" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="universe-count" @click="showRule">
          <!-- <img class="universe-rule" :src="universeConfig.ruleuniverse" alt="" /> -->
          <img :src="universeConfig.countuniverse" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="universed-universep">
        <div class="universed-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="universeConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="universeConfig.resultuniverse" alt="" /> -->
        <!-- <div class="modeluniverse-list">
          <div
            class="modeluniverse-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modeluniverse-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="universeConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="universeConfig.ruleDialoguniverse" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.universed-universep {
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
  margin: 0 0 0 75%;
  color: #fff;
}

.universe-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.universe-count .universe-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.universed-back {
  /* background: v-bind("'url(' + universeConfig.homeuniverse + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stuniverse {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + universeConfig.playuniverse + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + universeConfig.boxuniverse + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.universep {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + universeConfig.anyBoxuniverse + ')'") no-repeat;
  background-size: 63%;
    background-position: center 6%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonuniverse-box {
  position: absolute;
  top: 6%;
    left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.universe-count {
  position: relative;
  width: 51%;
    height: 67%;
    margin-left: 2%;
    margin-right: -23%;
    margin-top: 23.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    z-index: 1;
}

.buttons {
  margin-left: 9%;
    margin-top: -2%;
    width: 9%;
    height: 48%;
  z-index: 999;
  background: v-bind("'url(' + universeConfig.homeuniverse + ')'") no-repeat;
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
  /* background: v-bind("'url(' + universeConfig.seniorityuniverse + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsuniverseBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left: 7%;
    margin-top: 23.5%;
    width: 19%;
    height: 57.5%;
  z-index: 999;
  background: v-bind("'url(' + universeConfig.playuniverse + ')'") no-repeat;
  background-size: 100% 100%;
}
.universep-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 39vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.universep-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
    margin-top: -9%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 143%;
    overflow: hidden;
}
.universep-item {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + universeConfig.anyuniverse + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 136% 90%;

}
.universep-item:nth-child(1){
  margin-bottom: 20%;
}
.universep-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + universeConfig.changeDuniverse + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 160% 88%;
}
.universep-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
  
}
.universep-item-img img {
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
  align-items: flex-stuniverse;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + universeConfig.dialoguniverse + ')'") no-repeat; */
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

.stuniverse-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stuniverse-bg img {
  width: 100%;
}

.modeluniverse-list {
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
.modeluniverse-item {
  margin-bottom: 11px;
}
.modeluniverse-total {
  padding: 7px 14px;
}

.headuniverse {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
   
    background-image: v-bind("'url(' + universeConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + universeConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + universeConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + universeConfig.animation12 + ')'");
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

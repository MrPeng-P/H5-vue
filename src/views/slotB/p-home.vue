<script>
import playbronze from "@/assets/slotB5/playbronze.png";
import boxbronze from "@/assets/slotB5/boxbronze.jpg";
import anybronze from "@/assets/slotB5/changebronze.png";
import anyBoxbronze from "@/assets/slotB5/anyBoxbronze.png";
import homebronze from "@/assets/slotB5/homebronze.png";
// import senioritybronze from "@/assets/slotB5/senioritybronze.png";
import countbronze from "@/assets/slotB5/countbronze.png";
// import rulebronze from "@/assets/slotB5/rulebronze.png";
// import ruleDialogbronze from "@/assets/slotB5/ruleDialogbronze.jpg";
// import resultbronze from "@/assets/slotB5/resultbronze.png";
// import headbronze from "@/assets/slotB5/headbronze.png";

// import star from "@/assets/slotB5/starbronze.gif";
import { useRouter, useRoute } from "vue-router";
import bronze1 from "@/assets/slotB5/bronze1.png";
import bronze2 from "@/assets/slotB5/bronze2.png";
import bronze3 from "@/assets/slotB5/bronze3.png";
import bronze4 from "@/assets/slotB5/bronze4.png";
import bronze5 from "@/assets/slotB5/bronze5.png";
import bronze6 from "@/assets/slotB5/bronze6.png";
import bronze7 from "@/assets/slotB5/bronze7.png";

// import animation1 from "@/assets/slotB5/dong/00001.png";
// import animation4 from "@/assets/slotB5/dong/00004.png";
// import animation8 from "@/assets/slotB5/dong/00008.png";
// import animation12 from "@/assets/slotB5/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotB5/football.png";
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
    const bronzeConfig = reactive({
      // headbronze,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anybronze,
      playbronze,
      anyBoxbronze,
      boxbronze,
      homebronze,
      //   star,
      // senioritybronze,
      countbronze,
      // rulebronze,
      // ruleDialogbronze,
      // resultbronze
    });
    const bronzeList = reactive([
      {
        name: "item1",
        size: 4,
        imgList: [],
      },
      {
        name: "item2",
        size: 8,
        imgList: [],
      },
      {
        name: "item3",
        size: 12,
        imgList: [],
      },
      {
        name: "item4",
        size: 12,
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
    let stbronze = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: bronze1,
        name: "bronze2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: bronze2,
        name: "bronze1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: bronze3,
      },
      {
        img: bronze4,
      },
      {
        img: bronze5,
      },
      {
        img: bronze6,
      },
      {
        img: bronze7,
        name: "bronze3",
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
        const boxLists = bronzeList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".bronzep-item-img").forEach((child) => {
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
        const content = document.getElementById("bronzep-he");
        const box2 = document.getElementById("bronzep");
        const coords = { x: 0, y: 0 }; // Stbronze at (0, 0)
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
          tween.start(); // Stbronze the tween immediately.
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
            boxLists[i].querySelectorAll(".bronzep-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".bronzep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".bronzep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".bronzep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".bronzep-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value;
          }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".bronzep-item-img").forEach((child) => {
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
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(bronzeList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "bronze1") {
            arrCount[0].value++;
          } else if (item.name == "bronze2") {
            arrCount[1].value++;
          } else if (item.name == "bronze3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给bronzeList
      assignImageList(bronzeList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        bronzeList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return bronzeList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stbronze,
      bronzeConfig,
      randomImages,
      bronzeList,
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
    <!-- <img class="headbronze" :src="bronzeConfig.headbronze" alt=""> -->
    <div class="bronzep" id="bronzep">
      <div class="bronzep-he" id="bronzep-he">
        <!-- <img class="bronze-rule" @click="showRule" :src="bronzeConfig.rulebronze" alt=""> -->
        <div class="bronzep-hidden">
          <div
            class="bronzep-item"
            :id="item.name"
            v-for="(item, index) in bronzeList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'bronzep-item-img ' + imgItem.className
                  : 'bronzep-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonbronze-box">
        <div class="buttons" @click="close"></div>
        <div class="buttonsbronzeBack" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="bronze-count" @click="showRule">
          <!-- <img class="bronze-rule" :src="bronzeConfig.rulebronze" alt="" /> -->
          <img :src="bronzeConfig.countbronze" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="bronzed-bronzep">
        <div class="bronzed-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="bronzeConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="bronzeConfig.resultbronze" alt="" /> -->
        <!-- <div class="modelbronze-list">
          <div
            class="modelbronze-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelbronze-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="bronzeConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="bronzeConfig.ruleDialogbronze" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.bronzed-bronzep {
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
    color: #ff8dfc;
    font-size: 18px;
}

.bronze-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.bronze-count .bronze-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.bronzed-back {
  /* background: v-bind("'url(' + bronzeConfig.homebronze + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stbronze {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + bronzeConfig.playbronze + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + bronzeConfig.boxbronze + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bronzep {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + bronzeConfig.anyBoxbronze + ')'") no-repeat;
  background-size: 78%;
    background-position: center 5%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonbronze-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.bronze-count {
  position: relative;
  width: 49%;
    height: 46%;
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
    margin-top: 61%;
    width: 18%;
    height: 43%;
  z-index: 999;
  background: v-bind("'url(' + bronzeConfig.homebronze + ')'") no-repeat;
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
  /* background: v-bind("'url(' + bronzeConfig.senioritybronze + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsbronzeBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left: 2%;
    margin-top: 60.5%;
    width: 19%;
    height: 43.5%;
  z-index: 999;
  background: v-bind("'url(' + bronzeConfig.playbronze + ')'") no-repeat;
  background-size: 100% 100%;
}
.bronzep-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 76%;
  height: 43vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.72);
}

.bronzep-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bronzep-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + bronzeConfig.anybronze + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 86% 245%;
}
.bronzep-item:nth-child(2){
  margin-right: 20%;
}
.bronzep-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.bronzep-item-img img {
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
  align-items: flex-stbronze;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + bronzeConfig.dialogbronze + ')'") no-repeat; */
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

.stbronze-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stbronze-bg img {
  width: 100%;
}

.modelbronze-list {
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
.modelbronze-item {
  margin-bottom: 11px;
}
.modelbronze-total {
  padding: 7px 14px;
}

.headbronze {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + bronzeConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + bronzeConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + bronzeConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + bronzeConfig.animation12 + ')'");
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

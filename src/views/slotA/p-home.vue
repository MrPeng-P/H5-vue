<script>
import playglacier from "@/assets/slotA3/playglacier.png";
import boxglacier from "@/assets/slotA3/boxglacier.jpg";
import anyglacier from "@/assets/slotA3/changeglacier.png";
import anyBoxglacier from "@/assets/slotA3/anyBoxglacier.png";
import backglacier from "@/assets/slotA3/backglacier.png";
import seniorityglacier from "@/assets/slotA3/seniorityglacier.png";
// import countglacier from "@/assets/slotA3/countglacier.png";
// import ruleglacier from "@/assets/slotA3/ruleglacier.png";
// import ruleDialogglacier from "@/assets/slotA3/ruleDialogglacier.jpg";
// import resultglacier from "@/assets/slotA3/resultglacier.png";
// import headglacier from "@/assets/slotA3/headglacier.png";

// import star from "@/assets/slotA3/starglacier.gif";
import { useRouter, useRoute } from "vue-router";
import glacier1 from "@/assets/slotA3/glacier1.png";
import glacier2 from "@/assets/slotA3/glacier2.png";
import glacier3 from "@/assets/slotA3/glacier3.png";
import glacier4 from "@/assets/slotA3/glacier4.png";
import glacier5 from "@/assets/slotA3/glacier5.png";
import glacier6 from "@/assets/slotA3/glacier6.png";
import glacier7 from "@/assets/slotA3/glacier7.png";
import glacier8 from "@/assets/slotA3/glacier8.png";
import glacier9 from "@/assets/slotA3/glacier9.png";
import glacier10 from "@/assets/slotA3/glacier10.png";
import glacier11 from "@/assets/slotA3/glacier10.png";
import glacier12 from "@/assets/slotA3/glacier10.png";

// import animation1 from "@/assets/slotA3/dong/00001.png";
// import animation4 from "@/assets/slotA3/dong/00004.png";
// import animation8 from "@/assets/slotA3/dong/00008.png";
// import animation12 from "@/assets/slotA3/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotA3/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue = ref(false);
    let countValue = ref(1000);
    let magnification = ref(1); // 倍率
    let playMAXCount=100
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
    const glacierConfig = reactive({
      // headglacier,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyglacier,
      playglacier,
      anyBoxglacier,
      boxglacier,
      backglacier,
      //   star,
      seniorityglacier,
      // countglacier,
      // ruleglacier,
      // ruleDialogglacier,
      // resultglacier
    });
    const glacierList = reactive([
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
      
    ]);
    let timeOhter = 0;
    let id;
    let start = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: glacier1,
        name: "glacier2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: glacier2,
        name: "glacier1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: glacier3,
      
      },
      {
        img: glacier4,
      },
      {
        img: glacier5,
      },
      {
        img: glacier6,
     
      },
      {
        img: glacier7,
      
      },
      {
        img: glacier8,
        name: "glacier3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: glacier9,
      },
      {
        img: glacier10,
      },
      {
        img: glacier11,
      },
      {
        img: glacier12,
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
        const boxLists = glacierList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".glacierp-item-img").forEach((child) => {
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
        const content = document.getElementById("glacierp-he");
        const box2 = document.getElementById("glacierp");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
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
        tween.start(); // Start the tween immediately.
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
            boxLists[i]
              .querySelectorAll(".glacierp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".glacierp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".glacierp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".glacierp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3]
              .querySelectorAll(".glacierp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
              countValue.value += useCount.value;
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

        allMethods.assignImageList(glacierList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "glacier1") {
            arrCount[0].value++;
          } else if (item.name == "glacier2") {
            arrCount[1].value++;
          } else if (item.name == "glacier3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给glacierList
      assignImageList(glacierList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        glacierList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return glacierList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      start,
      glacierConfig,
      randomImages,
      glacierList,
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
    <!-- <img class="headglacier" :src="glacierConfig.headglacier" alt=""> -->
    <div class="glacierp" id="glacierp">
      <div class="glacierp-he" id="glacierp-he">
        <!-- <img class="glacier-rule" @click="showRule" :src="glacierConfig.ruleglacier" alt=""> -->
        <div class="glacierp-hidden">
          <div
            class="glacierp-item"
            :id="item.name"
            v-for="(item, index) in glacierList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'glacierp-item-img ' + imgItem.className
                  : 'glacierp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonglacier-box">
        <div class="buttons" @click="run"></div>
        <div class="buttons2" @click="goSeniority"></div>
      </div>
      <div class="glacierd-glacierp">
        <div class="glacierd-back" @click="close"></div>
      </div>
      <div class="glacier-count" @click="showRule">
        <!-- <img class="glacier-rule" :src="glacierConfig.ruleglacier" alt="" /> -->
        <!-- <img :src="glacierConfig.countglacier" alt="" /> -->
        <div class="countValue">{{ countValue }}</div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="glacierConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="glacierConfig.resultglacier" alt="" /> -->
        <!-- <div class="modelglacier-list">
          <div
            class="modelglacier-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelglacier-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="glacierConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="glacierConfig.ruleDialogglacier" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.glacierd-glacierp {
  display: flex;
  align-items: center;
  /* padding: 60px 15px; */
  position: absolute;
    z-index: 99;
    top: 11%;
    left: 15%;
    color: #fff;
}
.glacier-count {
  width: 100%;
    position: absolute;
    top: 63%;
    left: 61%;
    display: flex;
    font-size: 16px;
    z-index: 1;
}
.countValue {
  margin: 0 0 0 -41%;
  color: #6a69ee;

}
.glacier-count img {
  width: 54%;
  position: absolute;
  bottom: 0;
  z-index: -1;
}
.glacier-count .glacier-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.glacierd-back {
  background: v-bind("'url(' + glacierConfig.backglacier + ')'") no-repeat;

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + glacierConfig.playglacier + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + glacierConfig.boxglacier + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glacierp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
    height: 100vh;
  overflow: hidden;

  background: v-bind("'url(' + glacierConfig.anyBoxglacier + ')'") no-repeat;
  background-size: 70%;
    background-position: center;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonglacier-box {
  position: absolute;
    top: 25%;
    left: 0%;
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 25%;
  justify-content: space-between;
}
.buttons {
  margin-left: 9%;

    width: 21%;
    height: 29px;
  z-index: 999;
  background: v-bind("'url(' + glacierConfig.playglacier + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-right: 12%;
    width: 30%;
    height: 40px;
  z-index: 999;
  background: v-bind("'url(' + glacierConfig.seniorityglacier + ')'") no-repeat;
  background-size: 100% 100%;
}

.glacierp-he {
  position: relative;
    margin-right: -13%;
    margin-top: -5%;
    width: 81%;
    height: 126vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}

.glacierp-hidden 
{
  /* margin-top: 2%; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.glacierp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + glacierConfig.anyglacier + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 66% 415%;
}
.glacierp-item-img {
  position: relative;

  display: none;
  width: 100%;
    height: 100%;
}
.glacierp-item-img img {
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
  align-items: flex-start;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + glacierConfig.dialogglacier + ')'") no-repeat; */
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

.start-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.start-bg img {
  width: 100%;
}

.modelglacier-list {
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
.modelglacier-item {
  margin-bottom: 11px;
}
.modelglacier-total {
  padding: 7px 14px;
}

.headglacier {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + glacierConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + glacierConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + glacierConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + glacierConfig.animation12 + ')'");
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

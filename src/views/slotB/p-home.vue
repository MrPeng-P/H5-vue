<script>
import playArt from "@/assets/slotA4/playArt.png";
import boxArt from "@/assets/slotA4/boxArt.jpg";
import anyArt from "@/assets/slotA4/changeArt.png";
import anyBoxArt from "@/assets/slotA4/anyBoxArt.png";
import homeArt from "@/assets/slotA4/homeArt.png";
import seniorityArt from "@/assets/slotA4/seniorityArt.png";
import countArt from "@/assets/slotA4/countArt.png";
// import ruleArt from "@/assets/slotA4/ruleArt.png";
// import ruleDialogArt from "@/assets/slotA4/ruleDialogArt.jpg";
// import resultArt from "@/assets/slotA4/resultArt.png";
// import headArt from "@/assets/slotA4/headArt.png";

// import star from "@/assets/slotA4/starArt.gif";
import { useRouter, useRoute } from "vue-router";
import Art1 from "@/assets/slotA4/Art1.png";
import Art2 from "@/assets/slotA4/Art2.png";
import Art3 from "@/assets/slotA4/Art3.png";
import Art4 from "@/assets/slotA4/Art4.png";
import Art5 from "@/assets/slotA4/Art5.png";
import Art6 from "@/assets/slotA4/Art6.png";
import Art7 from "@/assets/slotA4/Art7.png";

// import animation1 from "@/assets/slotA4/dong/00001.png";
// import animation4 from "@/assets/slotA4/dong/00004.png";
// import animation8 from "@/assets/slotA4/dong/00008.png";
// import animation12 from "@/assets/slotA4/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotA4/football.png";
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
    const ArtConfig = reactive({
      // headArt,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      anyArt,
      playArt,
      anyBoxArt,
      boxArt,
      homeArt,
      //   star,
      seniorityArt,
      countArt,
      // ruleArt,
      // ruleDialogArt,
      // resultArt
    });
    const ArtList = reactive([
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
      {
        name: "item5",
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
        img: Art1,
        name: "Art2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Art2,
        name: "Art1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Art3,
      },
      {
        img: Art4,
      },
      {
        img: Art5,
      },
      {
        img: Art6,
      },
      {
        img: Art7,
        name: "Art3",
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
        const boxLists = ArtList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".Artp-item-img").forEach((child) => {
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
        const content = document.getElementById("Artp-he");
        const box2 = document.getElementById("Artp");
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
          if (i > 7) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 5) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".Artp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".Artp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".Artp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".Artp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".Artp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".Artp-item-img").forEach((child) => {
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

        allMethods.assignImageList(ArtList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Art1") {
            arrCount[0].value++;
          } else if (item.name == "Art2") {
            arrCount[1].value++;
          } else if (item.name == "Art3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给ArtList
      assignImageList(ArtList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        ArtList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return ArtList;
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
      ArtConfig,
      randomImages,
      ArtList,
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
    <!-- <img class="headArt" :src="ArtConfig.headArt" alt=""> -->
    <div class="Artp" id="Artp">
      <div class="Artp-he" id="Artp-he">
        <!-- <img class="Art-rule" @click="showRule" :src="ArtConfig.ruleArt" alt=""> -->
        <div class="Artp-hidden">
          <div
            class="Artp-item"
            :id="item.name"
            v-for="(item, index) in ArtList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Artp-item-img ' + imgItem.className
                  : 'Artp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonArt-box">
        <div class="buttons" @click="run"></div>
        <div class="buttonsArtBack" @click="close"></div>

        <div class="buttons2" @click="goSeniority"></div>

        <div class="Art-count" @click="showRule">
          <!-- <img class="Art-rule" :src="ArtConfig.ruleArt" alt="" /> -->
          <img :src="ArtConfig.countArt" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="Artd-Artp">
        <div class="Artd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="ArtConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="ArtConfig.resultArt" alt="" /> -->
        <!-- <div class="modelArt-list">
          <div
            class="modelArt-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelArt-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="ArtConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="ArtConfig.ruleDialogArt" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.Artd-Artp {
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
  margin: 0 0 0 6%;
  color: #fff;
}

.Art-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Art-count .Art-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Artd-back {
  /* background: v-bind("'url(' + ArtConfig.homeArt + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + ArtConfig.playArt + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + ArtConfig.boxArt + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Artp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background: v-bind("'url(' + ArtConfig.anyBoxArt + ')'") no-repeat;
  background-size: 62%;
  background-position: center 30%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonArt-box {
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.Art-count {
  position: relative;
  width: 36%;
  height: 40%;
  margin-left:2%;
  margin-top: 60%;
  /* margin-left: 84%;
  margin-bottom: -46%; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 1;
}

.buttons {
  margin-left: 9%;

  width: 25%;
  height: 40%;
  z-index: 999;
  background: v-bind("'url(' + ArtConfig.playArt + ')'") no-repeat;
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
  background: v-bind("'url(' + ArtConfig.seniorityArt + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonsArtBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left:2%;
    margin-top: 60%;
    width: 25%;
  height: 40%;
  z-index: 999;
  background: v-bind("'url(' + ArtConfig.homeArt + ')'") no-repeat;
  background-size: 100% 100%;
}
.Artp-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 43vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}

.Artp-hidden {
  /* margin-top: 2%; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Artp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + ArtConfig.anyArt + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 94% 248%;
}
.Artp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.Artp-item-img img {
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
  /* background: v-bind("'url(' + ArtConfig.dialogArt + ')'") no-repeat; */
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

.modelArt-list {
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
.modelArt-item {
  margin-bottom: 11px;
}
.modelArt-total {
  padding: 7px 14px;
}

.headArt {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + ArtConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + ArtConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + ArtConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + ArtConfig.animation12 + ')'");
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

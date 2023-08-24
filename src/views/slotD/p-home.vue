<script>
import playjackpot from "@/assets/slotD12/playjackpot.png";
// import playjackpot3 from "@/assets/slotD12/playjackpot3.png";
import playjackpot2 from "@/assets/slotD12/playjackpot2.jpg";
import boxjackpot from "@/assets/slotD12/playjackpot2.jpg";
import anyjackpot from "@/assets/slotD12/changeHjackpot.png";
import changeDjackpot from "@/assets/slotD12/changeDjackpot.png";
import changeMjackpot from "@/assets/slotD12/changeMjackpot.png";
import changeSjackpot from "@/assets/slotD12/changeSjackpot.png";
import anyBoxjackpot from "@/assets/slotD12/anyBoxjackpot.jpg";
import homejackpot from "@/assets/slotD12/homejackpot.png";

// import seniorityjackpot from "@/assets/slotD12/seniorityjackpot.png";
import countjackpot from "@/assets/slotD12/countjackpot.png";
// import rulejackpot from "@/assets/slotD12/rulejackpot.png";
// import ruleDialogjackpot from "@/assets/slotD12/ruleDialogjackpot.jpg";
// import resultjackpot from "@/assets/slotD12/resultjackpot.png";
// import headjackpot from "@/assets/slotD12/headjackpot.png";

// import star from "@/assets/slotD12/starjackpot.gif";
import { useRouter, useRoute } from "vue-router";
import jackpot1 from "@/assets/slotD12/jackpot1.png";
import jackpot2 from "@/assets/slotD12/jackpot2.png";
import jackpot3 from "@/assets/slotD12/jackpot3.png";
import jackpot4 from "@/assets/slotD12/jackpot4.png";
import jackpot5 from "@/assets/slotD12/jackpot5.png";
import jackpot6 from "@/assets/slotD12/jackpot6.png";
import jackpot7 from "@/assets/slotD12/jackpot7.png";
// import jackpot8 from "@/assets/slotD12/jackpot8.png";

// import animation1 from "@/assets/slotD12/dong/00001.png";
// import animation4 from "@/assets/slotD12/dong/00004.png";
// import animation8 from "@/assets/slotD12/dong/00008.png";
// import animation12 from "@/assets/slotD12/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD12/football.png";
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
    const jackpotConfig = reactive({
      // headjackpot,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSjackpot,
      changeDjackpot,
      changeMjackpot,
      anyjackpot,
      playjackpot,
      anyBoxjackpot,
      playjackpot2,
      // playjackpot3,
      boxjackpot,
      homejackpot,
      //   star,
      // seniorityjackpot,
      countjackpot,
      // rulejackpot,
      // ruleDialogjackpot,
      // resultjackpot
    });
    const jackpotList = reactive([
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
        size: 2,
        imgList: [],
      },
      {
        name: "item6",
        size: 5,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stjackpot = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: jackpot1,
        name: "jackpot2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: jackpot2,
        name: "jackpot1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: jackpot3,
      },
      {
        img: jackpot4,
      },
      {
        img: jackpot5,
      },
      {
        img: jackpot6,
        name: "jackpot3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: jackpot7,

      },
      // {
      //   img: jackpot8,
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
        const boxLists = jackpotList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".jackpotp-item-img").forEach((child) => {
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
        const content = document.getElementById("jackpotp-he");
        const box2 = document.getElementById("jackpotp");
        const coords = { x: 0, y: 0 }; // Stjackpot at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 5000 && timeOhter <= 8000 ) {
              boxLists[5].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[5].classList.toggle("jackpotp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stjackpot the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("jackpotp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("jackpotp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("jackpotp-itemM");
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("jackpotp-itemM");
            }
            if (timeOhter > 0 && timeOhter <= jackpotList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("jackpotp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stjackpot the tween immediately.
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
          if (i > jackpotList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < jackpotList.length) {
            if(i==5){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".jackpotp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".jackpotp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".jackpotp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".jackpotp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".jackpotp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".jackpotp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 8) {
            boxLists[5].style.setProperty("background-position-y", 600 + "px");
            boxLists[5].querySelectorAll(".jackpotp-item-img").forEach((child) => {
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
        const totalImages = 17;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(jackpotList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "jackpot1") {
            arrCount[0].value++;
          } else if (item.name == "jackpot2") {
            arrCount[1].value++;
          } else if (item.name == "jackpot3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给jackpotList
      assignImageList(jackpotList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        jackpotList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........jackpotList.........",
          "color:#31ef0e",
          jackpotList
        );
        return jackpotList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stjackpot,
      jackpotConfig,
      randomImages,
      jackpotList,
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
    <!-- <img class="headjackpot" :src="jackpotConfig.playjackpot2" alt=""> -->
    <div class="jackpotp" id="jackpotp">
      <div class="jackpotp-he" id="jackpotp-he">
        <!-- <img class="jackpot-rule" @click="showRule" :src="jackpotConfig.rulejackpot" alt=""> -->
        <div class="jackpotp-hidden">
          <div
            class="jackpotp-item"
            :id="item.name"
            v-for="(item, index) in jackpotList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'jackpotp-item-img ' + imgItem.className
                  : 'jackpotp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonjackpot-box">

        <div class="buttonsjackpotBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="jackpot-count" @click="showRule">
          <!-- <img class="jackpot-rule" :src="jackpotConfig.rulejackpot" alt="" /> -->
          <img :src="jackpotConfig.countjackpot" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="jackpotd-jackpotp">
        <div class="jackpotd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="jackpotConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="jackpotConfig.resultjackpot" alt="" /> -->
        <!-- <div class="modeljackpot-list">
          <div
            class="modeljackpot-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modeljackpot-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="jackpotConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="jackpotConfig.ruleDialogjackpot" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.jackpotd-jackpotp {
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
  color: #ffffff;
}

.jackpot-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.jackpot-count .jackpot-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.jackpotd-back {
  /* background: v-bind("'url(' + jackpotConfig.homejackpot + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stjackpot {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + jackpotConfig.playjackpot + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + jackpotConfig.boxjackpot + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.jackpotp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + jackpotConfig.anyBoxjackpot + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonjackpot-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.jackpot-count {
  position: relative;
  width: 40%;
    height: 45%;
    margin-left: 1.5%;
    margin-top: 31.7%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {

  margin-left: -4%;
    margin-top: 31.6%;
    width: 13%;
    height: 46%;


  z-index: 999;
  background: v-bind("'url(' + jackpotConfig.playjackpot + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + jackpotConfig.playjackpot3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsjackpotBack {
  margin-left: 4.5%;
    margin-top: 0;
    width: 16%;
    height: 47.5%;

  z-index: 999;
  background: v-bind("'url(' + jackpotConfig.homejackpot  + ')'") no-repeat;
  background-size: 100% 100%;
}
.jackpotp-he {
  position: relative;
  margin-right: 0%;
  margin-top: 7%;
    width: 95%;
    width: 95%;
    height: 42vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.jackpotp-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
  margin-top: -16%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 146%;
}

.jackpotp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + jackpotConfig.changeSjackpot + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;

}
/* .jackpotp-item:nth-child(3){
  margin-right: 20%;
} */
.jackpotp-item:nth-child(6) {
  /* margin-bottom: 20%; */
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + jackpotConfig.anyjackpot + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.jackpotp-hidden .jackpotp-itemD {
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + jackpotConfig.changeDjackpot + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.jackpotp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + jackpotConfig.changeMjackpot + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;
}
.jackpotp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.jackpotp-item-img img {
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
  align-items: flex-stjackpot;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + jackpotConfig.dialogjackpot + ')'") no-repeat; */
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

.stjackpot-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stjackpot-bg img {
  width: 100%;
}

.modeljackpot-list {
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
.modeljackpot-item {
  margin-bottom: 11px;
}
.modeljackpot-total {
  padding: 7px 14px;
}

.headjackpot {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + jackpotConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + jackpotConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + jackpotConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + jackpotConfig.animation12 + ')'");
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

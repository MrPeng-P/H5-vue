<script>
import playQueen from "@/assets/slotD23/playQueen.png";
// import playQueen3 from "@/assets/slotD23/playQueen3.png";
// import playQueen2 from "@/assets/slotD23/playQueen2.png";
import boxQueen from "@/assets/slotD23/boxQueen.jpg";
import anyQueen from "@/assets/slotD23/changeHQueen.png";
import changeDQueen from "@/assets/slotD23/changeDQueen.png";
import changeMQueen from "@/assets/slotD23/changeMQueen.png";
import changeSQueen from "@/assets/slotD23/changeSQueen.png";
import anyBoxQueen from "@/assets/slotD23/anyBoxQueen.jpg";
import homeQueen from "@/assets/slotD23/homeQueen.png";

// import seniorityQueen from "@/assets/slotD23/seniorityQueen.png";
import countQueen from "@/assets/slotD23/countQueen.png";
// import ruleQueen from "@/assets/slotD23/ruleQueen.png";
// import ruleDialogQueen from "@/assets/slotD23/ruleDialogQueen.jpg";
// import resultQueen from "@/assets/slotD23/resultQueen.png";
// import headQueen from "@/assets/slotD23/headQueen.png";

// import star from "@/assets/slotD23/starQueen.gif";
import { useRouter, useRoute } from "vue-router";
import Queen1 from "@/assets/slotD23/Queen1.png";
import Queen2 from "@/assets/slotD23/Queen2.png";
import Queen3 from "@/assets/slotD23/Queen3.png";
import Queen4 from "@/assets/slotD23/Queen4.png";
import Queen5 from "@/assets/slotD23/Queen5.png";
import Queen6 from "@/assets/slotD23/Queen6.png";
import Queen7 from "@/assets/slotD23/Queen7.png";
// import Queen8 from "@/assets/slotD23/Queen8.png";

// import animation1 from "@/assets/slotD23/dong/00001.png";
// import animation4 from "@/assets/slotD23/dong/00004.png";
// import animation8 from "@/assets/slotD23/dong/00008.png";
// import animation12 from "@/assets/slotD23/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD23/football.png";
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
    const QueenConfig = reactive({
      // headQueen,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSQueen,
      changeDQueen,
      changeMQueen,
      anyQueen,
      playQueen,
      anyBoxQueen,
      // playQueen2,
      // playQueen3,
      boxQueen,
      homeQueen,
      //   star,
      // seniorityQueen,
      countQueen,
      // ruleQueen,
      // ruleDialogQueen,
      // resultQueen
    });
    const QueenList = reactive([
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
    let stQueen = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: Queen1,
        name: "Queen2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Queen2,
        name: "Queen1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Queen3,
      },
      {
        img: Queen4,
      },
      {
        img: Queen5,
      },
      {
        img: Queen6,
        name: "Queen3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: Queen7,

      },
      // {
      //   img: Queen8,
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
        const boxLists = QueenList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".Queenp-item-img").forEach((child) => {
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
        const content = document.getElementById("Queenp-he");
        const box2 = document.getElementById("Queenp");
        const coords = { x: 0, y: 0 }; // StQueen at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 0 && timeOhter <= QueenList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[0].classList.toggle("Queenp-itemD");
            }
          
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // StQueen the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 4000 && timeOhter <= 7000 ) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("Queenp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("Queenp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("Queenp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("Queenp-itemM");
            }
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[4].classList.toggle("Queenp-itemM");
            // }
          
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // StQueen the tween immediately.
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
          if (i > QueenList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < QueenList.length) {
            if(i==1){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".Queenp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0]
              .querySelectorAll(".Queenp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".Queenp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".Queenp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".Queenp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".Queenp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".Queenp-item-img").forEach((child) => {
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

        allMethods.assignImageList(QueenList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Queen1") {
            arrCount[0].value++;
          } else if (item.name == "Queen2") {
            arrCount[1].value++;
          } else if (item.name == "Queen3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给QueenList
      assignImageList(QueenList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        QueenList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........QueenList.........",
          "color:#31ef0e",
          QueenList
        );
        return QueenList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stQueen,
      QueenConfig,
      randomImages,
      QueenList,
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
    <!-- <img class="headQueen" :src="QueenConfig.playQueen2" alt=""> -->
    <div class="Queenp" id="Queenp">
      <div class="Queenp-he" id="Queenp-he">
        <!-- <img class="Queen-rule" @click="showRule" :src="QueenConfig.ruleQueen" alt=""> -->
        <div class="Queenp-hidden">
          <div
            class="Queenp-item"
            :id="item.name"
            v-for="(item, index) in QueenList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Queenp-item-img ' + imgItem.className
                  : 'Queenp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonQueen-box">

        <div class="buttonsQueenBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="Queen-count" @click="showRule">
          <!-- <img class="Queen-rule" :src="QueenConfig.ruleQueen" alt="" /> -->
          <img :src="QueenConfig.countQueen" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="Queend-Queenp">
        <div class="Queend-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="QueenConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="QueenConfig.resultQueen" alt="" /> -->
        <!-- <div class="modelQueen-list">
          <div
            class="modelQueen-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelQueen-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="QueenConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="QueenConfig.ruleDialogQueen" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.Queend-Queenp {
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

.Queen-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Queen-count .Queen-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Queend-back {
  /* background: v-bind("'url(' + QueenConfig.homeQueen + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stQueen {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + QueenConfig.playQueen + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + QueenConfig.boxQueen + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.Queenp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + QueenConfig.anyBoxQueen + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonQueen-box {
  position: absolute;
  top: 0%;
    left: 12%;
    display: flex;
    /* flex-direction: column; */
    width: 82%;
    height: 25%;
  /* justify-content: space-between; */
}
.Queen-count {
  position: relative;
  width: 44%;
    height: 40%;
    margin-left: 1.5%;
    margin-top: 19.6%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {

  margin-left: 1%;
    margin-top: 19.6%;
    width: 15%;
    height: 40%;


  z-index: 999;
  background: v-bind("'url(' + QueenConfig.playQueen + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + QueenConfig.playQueen3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsQueenBack {
  margin-left: 8.5%;
    margin-top: 1.5%;
    width: 7%;
    height:44.5%;

  z-index: 999;
  background: v-bind("'url(' + QueenConfig.homeQueen  + ')'") no-repeat;
  background-size: 100% 100%;
}
.Queenp-he {
  position: relative;
  margin-top: 7%;
    width: 100%;
    height: 42vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.58);
}

.Queenp-hidden {
  /* margin-top: 2%; */
  margin-left: 3%;
  margin-top: -18%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 146%;
}

.Queenp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + QueenConfig.changeSQueen + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;

}
.Queenp-item:nth-child(3){
  margin-right: 20%;
}
.Queenp-item:nth-child(1) {
  margin-bottom: 11%;
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + QueenConfig.anyQueen + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.Queenp-hidden .Queenp-itemD {
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + QueenConfig.changeDQueen + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.Queenp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + QueenConfig.changeMQueen + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;
}
.Queenp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.Queenp-item-img img {
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
  align-items: flex-stQueen;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + QueenConfig.dialogQueen + ')'") no-repeat; */
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

.stQueen-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stQueen-bg img {
  width: 100%;
}

.modelQueen-list {
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
.modelQueen-item {
  margin-bottom: 11px;
}
.modelQueen-total {
  padding: 7px 14px;
}

.headQueen {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + QueenConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + QueenConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + QueenConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + QueenConfig.animation12 + ')'");
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

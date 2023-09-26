<script>



import playsuspects from "@/assets/slotD33/playsuspects.png";
// import playsuspects3 from "@/assets/slotD33/playsuspects3.png";
// import playsuspects2 from "@/assets/slotD33/playsuspects2.png";
import boxsuspects from "@/assets/slotD33/boxsuspects.jpg";
import anysuspects from "@/assets/slotD33/changeHsuspects.png";
import changeDsuspects from "@/assets/slotD33/changeDsuspects.png";
import changeMsuspects from "@/assets/slotD33/changeMsuspects.png";
import changeSsuspects from "@/assets/slotD33/changeSsuspects.png";
import anyBoxsuspects from "@/assets/slotD33/anyBoxsuspects.png";
import homesuspects from "@/assets/slotD33/homesuspects.png";

// import senioritysuspects from "@/assets/slotD33/senioritysuspects.png";
import countsuspects from "@/assets/slotD33/countsuspects.png";
// import rulesuspects from "@/assets/slotD33/rulesuspects.png";
// import ruleDialogsuspects from "@/assets/slotD33/ruleDialogsuspects.jpg";
// import resultsuspects from "@/assets/slotD33/resultsuspects.png";
// import headsuspects from "@/assets/slotD33/headsuspects.png";

// import star from "@/assets/slotD33/starsuspects.gif";
import { useRouter, useRoute } from "vue-router";
import suspects1 from "@/assets/slotD33/suspects1.png";
import suspects2 from "@/assets/slotD33/suspects2.png";
import suspects3 from "@/assets/slotD33/suspects3.png";
import suspects4 from "@/assets/slotD33/suspects4.png";
import suspects5 from "@/assets/slotD33/suspects5.png";
import suspects6 from "@/assets/slotD33/suspects6.png";
// import suspects7 from "@/assets/slotD33/suspects7.png";
// import suspects8 from "@/assets/slotD33/suspects8.png";

// import animation1 from "@/assets/slotD33/dong/00001.png";
// import animation4 from "@/assets/slotD33/dong/00004.png";
// import animation8 from "@/assets/slotD33/dong/00008.png";
// import animation12 from "@/assets/slotD33/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotD33/football.png";
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
    const suspectsConfig = reactive({
      // headsuspects,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSsuspects,
      changeDsuspects,
      changeMsuspects,
      anysuspects,
      playsuspects,
      anyBoxsuspects,
      // playsuspects2,
      // playsuspects3,
      boxsuspects,
      homesuspects,
      //   star,
      // senioritysuspects,
      countsuspects,
      // rulesuspects,
      // ruleDialogsuspects,
      // resultsuspects
    });
    const suspectsList = reactive([
      {
        name: "item1",
        size:2,
        imgList: [],
      },
      {
        name: "item2",
        size: 2,
        imgList: [],
      },
      {
        name: "item3",
        size: 5 ,
        imgList: [],
      },
 
    ]);
    let timeOhter = 0;
    let id;
    let stsuspects = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: suspects1,
        name: "suspects2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: suspects2,
        name: "suspects1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: suspects3,
      },
      {
        img: suspects4,
      },
      {
        img: suspects5,
      },
      {
        img: suspects6,
        name: "suspects3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: suspects7,
      // },
      // {
      //   img: suspects8,
      // },
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
        const boxLists = suspectsList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".suspectsp-item-img").forEach((child) => {
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
        const content = document.getElementById("suspectsp-he");
        const box2 = document.getElementById("suspectsp");
        const coords = { x: 0, y: 0 }; // Stsuspects at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
      
            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle("suspectsp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stsuspects the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[4].classList.toggle("suspectsp-itemM");
            // }
         

            if ( timeOhter > 0 && timeOhter <= suspectsList.length * 1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("suspectsp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("suspectsp-itemM");
            }
            // if (timeOhter > 2000 && timeOhter <= 5000) {
            //   boxLists[2].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[2].classList.toggle("suspectsp-itemM");
            // }
            // if (timeOhter > 3000 && timeOhter <= 6000) {
            //   boxLists[3].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[3].classList.toggle("suspectsp-itemM");
            // }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stsuspects the tween immediately.
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
          if (i > suspectsList.length + 2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < suspectsList.length) {
            if (i==4) {
              boxLists[i].style.setProperty("background-position-y", "center");
            } else {
              boxLists[i].style.setProperty("background-position-x", "center");
            }
            boxLists[i].querySelectorAll(".suspectsp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".suspectsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".suspectsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".suspectsp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value * magn;

          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".suspectsp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });

          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[4].querySelectorAll(".suspectsp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });

          // }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".suspectsp-item-img").forEach((child) => {
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
        const totalImages = 20;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(suspectsList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "suspects1") {
            arrCount[0].value++;
          } else if (item.name == "suspects2") {
            arrCount[1].value++;
          } else if (item.name == "suspects3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给suspectsList
      assignImageList(suspectsList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        suspectsList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........suspectsList.........",
          "color:#31ef0e",
          suspectsList
        );
        return suspectsList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {



    });
    return {
      className,
      open,
      stsuspects,
      suspectsConfig,
      randomImages,
      suspectsList,
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
    <!-- <img class="headsuspects" :src="suspectsConfig.playsuspects2" alt=""> -->
    <div class="suspectsp" id="suspectsp">
      <div class="suspectsp-he" id="suspectsp-he">
        <!-- <img class="suspects-rule" @click="showRule" :src="suspectsConfig.rulesuspects" alt=""> -->
        <div class="suspectsp-hidden">
          <div
            class="suspectsp-item"
            :id="item.name"
            v-for="(item, index) in suspectsList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'suspectsp-item-img ' + imgItem.className
                  : 'suspectsp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonsuspects-box">
        <div class="buttonssuspectsBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="suspects-count" @click="showRule">
          <!-- <img class="suspects-rule" :src="suspectsConfig.rulesuspects" alt="" /> -->
          <img :src="suspectsConfig.countsuspects" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="suspectsd-suspectsp">
        <div class="suspectsd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="suspectsConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="suspectsConfig.resultsuspects" alt="" /> -->
        <!-- <div class="modelsuspects-list">
          <div
            class="modelsuspects-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelsuspects-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

   
    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="suspectsConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="suspectsConfig.ruleDialogsuspects" alt="" /> -->
      </div>
    </Teleport>
  </div>

 
</template>

<style scoped>
.suspects {
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.suspectsd-suspectsp {
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
  margin:-2% 0 0 37%;
    color: #ffffff;
}

.suspects-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.suspects-count .suspects-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.suspectsd-back {
  /* background: v-bind("'url(' + suspectsConfig.homesuspects + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stsuspects {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + suspectsConfig.playsuspects + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + suspectsConfig.boxsuspects + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.suspectsp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + suspectsConfig.anyBoxsuspects + ')'") no-repeat;
  background-size: auto 70%;
    background-position: center 22%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonsuspects-box {
  position: absolute;
  top: -1%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 25%;
  /* justify-content: space-between; */
}
.suspects-count {
  position: relative;
  width: 30%;
    height: 39%;
    margin-left: 3.5%;
    margin-top: 39%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {
  margin-left: 2%;
    margin-top: 39%;
    width: 12.5%;
    height: 38%;
    z-index: 999; 
  background: v-bind("'url(' + suspectsConfig.playsuspects + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
  height: 47%;
  margin-left: 3%;
  margin-top: 41.5%;
  /* background: v-bind("'url(' + suspectsConfig.playsuspects3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonssuspectsBack {
  margin-left: 3.5%;
    margin-top: 4.5%;
    width: 7%;
    height: 40.5%;

  z-index: 999;
  background: v-bind("'url(' + suspectsConfig.homesuspects  + ')'") no-repeat;
  background-size: 100% 100%;
}
.suspectsp-he {
  position: relative;
  margin-top: 7%;
  width: 100%;
  height: 42vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.58);
}

.suspectsp-hidden {
  margin-left: 2%;
    margin-top: -17%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
    height: 126%;
}

.suspectsp-item {
  margin-right: 4%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 60%;
  background: v-bind("'url(' + suspectsConfig.changeSsuspects + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 8px;
    background-size: 75% 428%;
}

.suspectsp-item:nth-child(1) {
  margin-right: 56%;
 

}
.suspectsp-item:nth-child(3) img{
  width: 60%;
    height: 49%;
}
.suspectsp-item:nth-child(2) {
    /* margin-left: 55%; */
 
}
.suspectsp-item:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + suspectsConfig.anysuspects + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 178% 64%;
}
.suspectsp-hidden .suspectsp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + suspectsConfig.changeDsuspects + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 178% 64%;
}
.suspectsp-itemM {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 60%;
  background: v-bind("'url(' + suspectsConfig.changeMsuspects + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 8px;
    background-size: 75% 428%;
}
.suspectsp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.suspectsp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 67%;
  height: 70%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stsuspects;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + suspectsConfig.dialogsuspects + ')'") no-repeat; */
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

.stsuspects-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stsuspects-bg img {
  width: 100%;
}

.modelsuspects-list {
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
.modelsuspects-item {
  margin-bottom: 11px;
}
.modelsuspects-total {
  padding: 7px 14px;
}

.headsuspects {
  position: absolute;
  top: -0;
    width: 33%;
    z-index: 9;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + suspectsConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + suspectsConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + suspectsConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + suspectsConfig.animation12 + ')'");
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

<script>
import playgem from "@/assets/slotD5/playgem.png";
// import playgem3 from "@/assets/slotD5/playgem3.png";
import playgem2 from "@/assets/slotD5/playgem2.png";
import boxgem from "@/assets/slotD5/boxgem.jpg";
import anygem from "@/assets/slotD5/changeHgem.png";
import changeDgem from "@/assets/slotD5/changeDgem.png";
import changeMgem from "@/assets/slotD5/changeMgem.png";
import changeSgem from "@/assets/slotD5/changeSgem.png";
import anyBoxgem from "@/assets/slotD5/anyBoxgem.jpg";
import homegem from "@/assets/slotD5/homegem.png";

// import senioritygem from "@/assets/slotD5/senioritygem.png";
import countgem from "@/assets/slotD5/countgem.png";
// import rulegem from "@/assets/slotD5/rulegem.png";
// import ruleDialoggem from "@/assets/slotD5/ruleDialoggem.jpg";
// import resultgem from "@/assets/slotD5/resultgem.png";
// import headgem from "@/assets/slotD5/headgem.png";

// import star from "@/assets/slotD5/stargem.gif";
import { useRouter, useRoute } from "vue-router";
import gem1 from "@/assets/slotD5/gem1.png";
import gem2 from "@/assets/slotD5/gem2.png";
import gem3 from "@/assets/slotD5/gem3.png";
import gem4 from "@/assets/slotD5/gem4.png";
import gem5 from "@/assets/slotD5/gem5.png";
import gem6 from "@/assets/slotD5/gem6.png";
import gem7 from "@/assets/slotD5/gem7.png";
// import gem8 from "@/assets/slotD5/gem8.png";

// import animation1 from "@/assets/slotD5/dong/00001.png";
// import animation4 from "@/assets/slotD5/dong/00004.png";
// import animation8 from "@/assets/slotD5/dong/00008.png";
// import animation12 from "@/assets/slotD5/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD5/football.png";
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
    const gemConfig = reactive({
      // headgem,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSgem,
      changeDgem,
      changeMgem,
      anygem,
      playgem,
      anyBoxgem,
      playgem2,
      // playgem3,
      boxgem,
      homegem,
      //   star,
      // senioritygem,
      countgem,
      // rulegem,
      // ruleDialoggem,
      // resultgem
    });
    const gemList = reactive([
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
      {
        name: "item6",
        size: 2,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stgem = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: gem1,
        name: "gem2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: gem2,
        name: "gem1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: gem3,
      },
      {
        img: gem4,
      },
      {
        img: gem5,
      },
      {
        img: gem6,
        name: "gem3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: gem7,

      },
      // {
      //   img: gem8,
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
        const boxLists = gemList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".gemp-item-img").forEach((child) => {
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
        const content = document.getElementById("gemp-he");
        const box2 = document.getElementById("gemp");
        const coords = { x: 0, y: 0 }; // Stgem at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 0 && timeOhter <= gemList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[0].classList.toggle("gemp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stgem the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("gemp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("gemp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("gemp-itemM");
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("gemp-itemM");
            }
            if (timeOhter > 5000 && timeOhter <= 8000) {
              boxLists[5].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[5].classList.toggle("gemp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stgem the tween immediately.
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
          if (i > gemList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < gemList.length) {
            if(i==1){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".gemp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0]
              .querySelectorAll(".gemp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".gemp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".gemp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".gemp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".gemp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 8) {
            boxLists[5].style.setProperty("background-position-x", 600 + "px");
            boxLists[5].querySelectorAll(".gemp-item-img").forEach((child) => {
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

        allMethods.assignImageList(gemList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "gem1") {
            arrCount[0].value++;
          } else if (item.name == "gem2") {
            arrCount[1].value++;
          } else if (item.name == "gem3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给gemList
      assignImageList(gemList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        gemList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........gemList.........",
          "color:#31ef0e",
          gemList
        );
        return gemList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stgem,
      gemConfig,
      randomImages,
      gemList,
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
    <!-- <img class="headgem" :src="gemConfig.playgem2" alt=""> -->
    <div class="gemp" id="gemp">
      <div class="gemp-he" id="gemp-he">
        <!-- <img class="gem-rule" @click="showRule" :src="gemConfig.rulegem" alt=""> -->
        <div class="gemp-hidden">
          <div
            class="gemp-item"
            :id="item.name"
            v-for="(item, index) in gemList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'gemp-item-img ' + imgItem.className
                  : 'gemp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttongem-box">

        <div class="buttonsgemBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="gem-count" @click="showRule">
          <!-- <img class="gem-rule" :src="gemConfig.rulegem" alt="" /> -->
          <img :src="gemConfig.countgem" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="gemd-gemp">
        <div class="gemd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="gemConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="gemConfig.resultgem" alt="" /> -->
        <!-- <div class="modelgem-list">
          <div
            class="modelgem-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelgem-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="gemConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="gemConfig.ruleDialoggem" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.gemd-gemp {
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
  color: #890000;
}

.gem-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.gem-count .gem-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.gemd-back {
  /* background: v-bind("'url(' + gemConfig.homegem + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stgem {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + gemConfig.playgem + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + gemConfig.boxgem + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gemp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */

  background: v-bind("'url(' + gemConfig.anyBoxgem + ')'") no-repeat;
  background-size: auto 100%;
    background-position: center;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttongem-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.gem-count {
  position: relative;
  width: 55%;
    height: 47%;
    margin-left: 3%;
    margin-top: 49.5%;


  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {
  margin-left: -4.5%;
    margin-top: 49.5%;
    width: 15%;
    height: 49%;


  z-index: 999;
  background: v-bind("'url(' + gemConfig.playgem + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + gemConfig.playgem3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsgemBack {
  margin-left: -0.5%;
    margin-top: 0;
    width: 18%;
    height: 47.5%;

  z-index: 999;
  background: v-bind("'url(' + gemConfig.homegem  + ')'") no-repeat;
  background-size: 100% 100%;
}
.gemp-he {
  position: relative;
  margin-right: 0%;
  margin-top: 7%;
    width: 95%;
    width: 95%;
    height: 47vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.67);
}

.gemp-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
  margin-top: -14%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 132%;
}

.gemp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + gemConfig.changeSgem + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size:73% 459%;

}
/* .gemp-item:nth-child(3){
  margin-right: 20%;
} */
.gemp-item:nth-child(1) {
  /* margin-bottom: 20%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + gemConfig.anygem + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 80%;
}
.gemp-hidden .gemp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + gemConfig.changeDgem + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 80%;
}
.gemp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + gemConfig.changeMgem + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 459%;
}
.gemp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.gemp-item-img img {
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
  align-items: flex-stgem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + gemConfig.dialoggem + ')'") no-repeat; */
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

.stgem-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stgem-bg img {
  width: 100%;
}

.modelgem-list {
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
.modelgem-item {
  margin-bottom: 11px;
}
.modelgem-total {
  padding: 7px 14px;
}

.headgem {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + gemConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + gemConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + gemConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + gemConfig.animation12 + ')'");
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

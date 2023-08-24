<script>
import playbluer from "@/assets/slotD11/playbluer.png";
// import playbluer3 from "@/assets/slotD11/playbluer3.png";
import playbluer2 from "@/assets/slotD11/playbluer2.jpg";
import boxbluer from "@/assets/slotD11/playbluer2.jpg";
import anybluer from "@/assets/slotD11/changeHbluer.png";
import changeDbluer from "@/assets/slotD11/changeDbluer.png";
import changeMbluer from "@/assets/slotD11/changeMbluer.png";
import changeSbluer from "@/assets/slotD11/changeSbluer.png";
import anyBoxbluer from "@/assets/slotD11/anyBoxbluer.jpg";
import homebluer from "@/assets/slotD11/homebluer.png";

// import senioritybluer from "@/assets/slotD11/senioritybluer.png";
import countbluer from "@/assets/slotD11/countbluer.png";
// import rulebluer from "@/assets/slotD11/rulebluer.png";
// import ruleDialogbluer from "@/assets/slotD11/ruleDialogbluer.jpg";
// import resultbluer from "@/assets/slotD11/resultbluer.png";
// import headbluer from "@/assets/slotD11/headbluer.png";

// import star from "@/assets/slotD11/starbluer.gif";
import { useRouter, useRoute } from "vue-router";
import bluer1 from "@/assets/slotD11/bluer1.png";
import bluer2 from "@/assets/slotD11/bluer2.png";
import bluer3 from "@/assets/slotD11/bluer3.png";
import bluer4 from "@/assets/slotD11/bluer4.png";
import bluer5 from "@/assets/slotD11/bluer5.png";
import bluer6 from "@/assets/slotD11/bluer6.png";
import bluer7 from "@/assets/slotD11/bluer7.png";
// import bluer8 from "@/assets/slotD11/bluer8.png";

// import animation1 from "@/assets/slotD11/dong/00001.png";
// import animation4 from "@/assets/slotD11/dong/00004.png";
// import animation8 from "@/assets/slotD11/dong/00008.png";
// import animation12 from "@/assets/slotD11/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD11/football.png";
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
    const bluerConfig = reactive({
      // headbluer,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSbluer,
      changeDbluer,
      changeMbluer,
      anybluer,
      playbluer,
      anyBoxbluer,
      playbluer2,
      // playbluer3,
      boxbluer,
      homebluer,
      //   star,
      // senioritybluer,
      countbluer,
      // rulebluer,
      // ruleDialogbluer,
      // resultbluer
    });
    const bluerList = reactive([
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
    let stbluer = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: bluer1,
        name: "bluer2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: bluer2,
        name: "bluer1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: bluer3,
      },
      {
        img: bluer4,
      },
      {
        img: bluer5,
      },
      {
        img: bluer6,
        name: "bluer3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: bluer7,

      },
      // {
      //   img: bluer8,
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
        const boxLists = bluerList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".bluerp-item-img").forEach((child) => {
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
        const content = document.getElementById("bluerp-he");
        const box2 = document.getElementById("bluerp");
        const coords = { x: 0, y: 0 }; // Stbluer at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 5000 && timeOhter <= 8000 ) {
              boxLists[5].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[5].classList.toggle("bluerp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stbluer the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("bluerp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("bluerp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("bluerp-itemM");
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("bluerp-itemM");
            }
            if (timeOhter > 0 && timeOhter <= bluerList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("bluerp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stbluer the tween immediately.
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
          if (i > bluerList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < bluerList.length) {
            if(i==5){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".bluerp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".bluerp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".bluerp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".bluerp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".bluerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".bluerp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 8) {
            boxLists[5].style.setProperty("background-position-y", 600 + "px");
            boxLists[5].querySelectorAll(".bluerp-item-img").forEach((child) => {
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

        allMethods.assignImageList(bluerList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "bluer1") {
            arrCount[0].value++;
          } else if (item.name == "bluer2") {
            arrCount[1].value++;
          } else if (item.name == "bluer3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给bluerList
      assignImageList(bluerList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        bluerList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........bluerList.........",
          "color:#31ef0e",
          bluerList
        );
        return bluerList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stbluer,
      bluerConfig,
      randomImages,
      bluerList,
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
    <!-- <img class="headbluer" :src="bluerConfig.playbluer2" alt=""> -->
    <div class="bluerp" id="bluerp">
      <div class="bluerp-he" id="bluerp-he">
        <!-- <img class="bluer-rule" @click="showRule" :src="bluerConfig.rulebluer" alt=""> -->
        <div class="bluerp-hidden">
          <div
            class="bluerp-item"
            :id="item.name"
            v-for="(item, index) in bluerList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'bluerp-item-img ' + imgItem.className
                  : 'bluerp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonbluer-box">

        <div class="buttonsbluerBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="bluer-count" @click="showRule">
          <!-- <img class="bluer-rule" :src="bluerConfig.rulebluer" alt="" /> -->
          <img :src="bluerConfig.countbluer" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="bluerd-bluerp">
        <div class="bluerd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="bluerConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="bluerConfig.resultbluer" alt="" /> -->
        <!-- <div class="modelbluer-list">
          <div
            class="modelbluer-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelbluer-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="bluerConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="bluerConfig.ruleDialogbluer" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.bluerd-bluerp {
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
  color: #ffe650;
}

.bluer-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.bluer-count .bluer-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.bluerd-back {
  /* background: v-bind("'url(' + bluerConfig.homebluer + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stbluer {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + bluerConfig.playbluer + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + bluerConfig.boxbluer + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.bluerp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + bluerConfig.anyBoxbluer + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonbluer-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.bluer-count {
  position: relative;
  width: 43%;
    height: 45%;
    margin-left: 1.5%;
    margin-top: 43.7%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {

  margin-left: -4%;
    margin-top: 43.6%;
    width: 13%;
    height: 46%;


  z-index: 999;
  background: v-bind("'url(' + bluerConfig.playbluer + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + bluerConfig.playbluer3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsbluerBack {
  margin-left: 4.5%;
    margin-top: 0;
    width: 16%;
    height: 47.5%;

  z-index: 999;
  background: v-bind("'url(' + bluerConfig.homebluer  + ')'") no-repeat;
  background-size: 100% 100%;
}
.bluerp-he {
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

.bluerp-hidden {
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

.bluerp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + bluerConfig.changeSbluer + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;

}
/* .bluerp-item:nth-child(3){
  margin-right: 20%;
} */
.bluerp-item:nth-child(6) {
  /* margin-bottom: 20%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + bluerConfig.anybluer + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.bluerp-hidden .bluerp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + bluerConfig.changeDbluer + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.bluerp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + bluerConfig.changeMbluer + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;
}
.bluerp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.bluerp-item-img img {
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
  align-items: flex-stbluer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + bluerConfig.dialogbluer + ')'") no-repeat; */
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

.stbluer-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stbluer-bg img {
  width: 100%;
}

.modelbluer-list {
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
.modelbluer-item {
  margin-bottom: 11px;
}
.modelbluer-total {
  padding: 7px 14px;
}

.headbluer {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + bluerConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + bluerConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + bluerConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + bluerConfig.animation12 + ')'");
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

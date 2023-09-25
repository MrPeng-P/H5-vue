<script>
import playDouble27 from "@/assets/slotC13/playDouble27.png";
import boxDouble27 from "@/assets/slotC13/boxDouble27.jpg";
import anyDouble27 from "@/assets/slotC13/changeHDouble27.png";
import changeDDouble27 from "@/assets/slotC13/changeDDouble27.png";
import anyBoxDouble27 from "@/assets/slotC13/anyBoxDouble27.jpg";
import homeDouble27 from "@/assets/slotC13/homeDouble27.png";



// import seniorityDouble27 from "@/assets/slotC13/seniorityDouble27.png";
import countDouble27 from "@/assets/slotC13/countDouble27.png";
// import otherpyrmid from "@/assets/slotC13/otherpyrmid.jpg";
// import ruleDouble27 from "@/assets/slotC13/ruleDouble27.png";
// import ruleDialogDouble27 from "@/assets/slotC13/ruleDialogDouble27.jpg";
// import resultDouble27 from "@/assets/slotC13/resultDouble27.png";
// import headDouble27 from "@/assets/slotC13/headDouble27.png";


// import star from "@/assets/slotC13/starDouble27.gif";
import { useRouter, useRoute } from "vue-router";
import Double271 from "@/assets/slotC13/Double271.png";
import Double272 from "@/assets/slotC13/Double272.png";
import Double273 from "@/assets/slotC13/Double273.png";
import Double274 from "@/assets/slotC13/Double274.png";
import Double275 from "@/assets/slotC13/Double275.png";
import Double276 from "@/assets/slotC13/Double276.png";
// import Double277 from "@/assets/slotC13/Double277.png";
// import Double278 from "@/assets/slotC13/Double278.png";

// import animation1 from "@/assets/slotC13/dong/00001.png";
// import animation4 from "@/assets/slotC13/dong/00004.png";
// import animation8 from "@/assets/slotC13/dong/00008.png";
// import animation12 from "@/assets/slotC13/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotC13/football.png";
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
    const Double27Config = reactive({
      // headDouble27,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeDDouble27,
      anyDouble27,
      playDouble27,
      anyBoxDouble27,
      boxDouble27,
      homeDouble27,
      // otherpyrmid,
      //   star,
      // seniorityDouble27,
      countDouble27,
      // ruleDouble27,
      // ruleDialogDouble27,
      // resultDouble27
    });
    const Double27List = reactive([
      {
        name: "item1",
        size: 4,
        imgList: [],
      },
      {
        name: "item2",
        size: 4,
        imgList: [],
      },
      {
        name: "item3",
        size: 4,
        imgList: [],
      },
      // {
      //   name: "item4",
      //   size: 2,
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
    let stDouble27 = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: Double271,
        name: "Double272",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: Double272,
        name: "Double271",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: Double273,
      },
      {
        img: Double274,
      },
      {
        img: Double275,
      },
      {
        img: Double276,
        name: "Double273",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: Double277,
   
      // },
      // {
      //   img: Double278,
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
        const boxLists = Double27List.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".Double27p-item-img").forEach((child) => {
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
        const content = document.getElementById("Double27p-he");
        const box2 = document.getElementById("Double27p");
        const coords = { x: 0, y: 0 }; // StDouble27 at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
           
              boxLists[1].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[1].classList.toggle('Double27p-itemD');
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle('Double27p-itemD');
            }

            // if (timeOhter > 3000 && timeOhter <= 6000) {
            //   boxLists[3].style.setProperty(
            //     "background-position-x",
            //     -coords.x + "px"
            //   );
            //   boxLists[3].classList.toggle('Double27p-itemD');
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
              boxLists[0].classList.toggle('Double27p-itemD');
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // StDouble27 the tween immediately.
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
            boxLists[i].querySelectorAll(".Double27p-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
           
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0].querySelectorAll(".Double27p-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-y", 600 + "px");
            boxLists[1].querySelectorAll(".Double27p-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".Double27p-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
            countValue.value += useCount.value;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[3].querySelectorAll(".Double27p-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".Double27p-item-img").forEach((child) => {
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

        allMethods.assignImageList(Double27List, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "Double271") {
            arrCount[0].value++;
          } else if (item.name == "Double272") {
            arrCount[1].value++;
          } else if (item.name == "Double273") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给Double27List
      assignImageList(Double27List, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log('%c ..........shuffledImages.........','color:#31ef0e',shuffledImages)
        let currentIndex = 0;
        Double27List.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log('%c ..........Double27List.........','color:#31ef0e',Double27List)
        return Double27List;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
 
    return {
      className,
      open,
      stDouble27,
      Double27Config,
      randomImages,
      Double27List,
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
    <!-- <img class="headDouble27" :src="Double27Config.headDouble27" alt=""> -->
    <div class="Double27p" id="Double27p">
      <div class="Double27p-he" id="Double27p-he">
        <!-- <img class="Double27-rule" @click="showRule" :src="Double27Config.ruleDouble27" alt=""> -->
        <div class="Double27p-hidden">
          <div
            class="Double27p-item"
            :id="item.name"
            v-for="(item, index) in Double27List"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'Double27p-item-img ' + imgItem.className
                  : 'Double27p-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonDouble27-box">
        
        <div class="buttons" @click="close"></div>
        <div class="buttonsDouble27Back" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->
        <div class="Double27-count" @click="showRule">
          <!-- <img class="Double27-rule" :src="Double27Config.ruleDouble27" alt="" /> -->
          <img :src="Double27Config.countDouble27" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        <!-- <div class="otherpyrmid"></div> -->

      </div>
      <div class="Double27d-Double27p">
        <div class="Double27d-back" @click="close"></div>
      </div>
    </div>
   
   

    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="Double27Config.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="Double27Config.resultDouble27" alt="" /> -->
        <!-- <div class="modelDouble27-list">
          <div
            class="modelDouble27-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelDouble27-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="Double27Config.star" alt="" /> -->
        <!-- <img class="model-img" :src="Double27Config.ruleDialogDouble27" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.panther{
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.Double27d-Double27p {
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
  color: #fff;
}

.Double27-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.Double27-count .Double27-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.Double27d-back {
  /* background: v-bind("'url(' + Double27Config.homeDouble27 + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stDouble27 {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + Double27Config.playDouble27 + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + Double27Config.boxDouble27 + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Double27p {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + Double27Config.anyBoxDouble27 + ')'") no-repeat;
  background-size: 97%;
    background-position: center 72%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonDouble27-box {
  position: absolute;
  top: 0%;
    left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
    height: 25%;
  /* justify-content: space-between; */
}
.Double27-count {
  position: relative;
    width: 33%;
    height: 53%;
    margin-left: 2%;
    margin-right: -22%;
    /* transform: rotate(90deg); */
    margin-top: 44%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 1;
}
.otherpyrmid{
  margin-left: -42%;
    margin-top: 7.5%;
    width: 16%;
    height: 318%;
  background: v-bind("'url(' + Double27Config.otherpyrmid + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons {
  margin-left: 9%;
    margin-top: 1.5%;
    width: 8%;
    height: 53%;
  z-index: 999;
  background: v-bind("'url(' + Double27Config.homeDouble27 + ')'") no-repeat;
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
  /* background: v-bind("'url(' + Double27Config.seniorityDouble27 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsDouble27Back{
  margin-left: 0%;
    margin-top: 44%;
    width: 16%;
    height: 53.5%;
  z-index: 999;
  background: v-bind("'url(' + Double27Config.playDouble27 + ')'") no-repeat;
  background-size: 100% 100%;
}
.Double27p-he {
  position: relative;
    margin-right: 0%;
    margin-top: 10%;
    width: 100%;
    height: 39vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.55);
}

.Double27p-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
    margin-top: -15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 147%;
    overflow: hidden;
}
.Double27p-item {

  display: flex;

    height: 30%;
    width: 80%;
  flex: 1;
  background: v-bind("'url(' + Double27Config.anyDouble27 + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 201% 83%;

}
.Double27p-item:nth-child(1){
  /* margin-bottom: 5%; */
}
.Double27p-item:nth-child(2){
  /* margin-bottom: 15%; */
}
.Double27p-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 30%;
    width: 80%;
  flex: 1;
  background: v-bind("'url(' + Double27Config.changeDDouble27 + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 201% 83%;
}
.Double27p-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
  
}
.Double27p-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 88%;
    height: 80%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-stDouble27;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + Double27Config.dialogDouble27 + ')'") no-repeat; */
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

.stDouble27-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stDouble27-bg img {
  width: 100%;
}

.modelDouble27-list {
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
.modelDouble27-item {
  margin-bottom: 11px;
}
.modelDouble27-total {
  padding: 7px 14px;
}

.headDouble27 {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
   
    background-image: v-bind("'url(' + Double27Config.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + Double27Config.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + Double27Config.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + Double27Config.animation12 + ')'");
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
.Double27{
  display: none;
}
</style>

<script>
import playfruitparty from "@/assets/slotC8/playfruitparty.png";
import boxfruitparty from "@/assets/slotC8/boxfruitparty.jpg";
import anyfruitparty from "@/assets/slotC8/changeHfruitparty.png";
import changeDfruitparty from "@/assets/slotC8/changeDfruitparty.png";
import anyBoxfruitparty from "@/assets/slotC8/anyBoxfruitparty.png";
import homefruitparty from "@/assets/slotC8/homefruitparty.png";

// import seniorityfruitparty from "@/assets/slotC8/seniorityfruitparty.png";
import countfruitparty from "@/assets/slotC8/countfruitparty.png";
// import rulefruitparty from "@/assets/slotC8/rulefruitparty.png";
// import ruleDialogfruitparty from "@/assets/slotC8/ruleDialogfruitparty.jpg";
// import resultfruitparty from "@/assets/slotC8/resultfruitparty.png";
// import headfruitparty from "@/assets/slotC8/headfruitparty.png";

// import star from "@/assets/slotC8/starfruitparty.gif";
import { useRouter, useRoute } from "vue-router";
import fruitparty1 from "@/assets/slotC8/fruitparty1.png";
import fruitparty2 from "@/assets/slotC8/fruitparty2.png";
import fruitparty3 from "@/assets/slotC8/fruitparty3.png";
import fruitparty4 from "@/assets/slotC8/fruitparty4.png";
import fruitparty5 from "@/assets/slotC8/fruitparty5.png";
import fruitparty6 from "@/assets/slotC8/fruitparty6.png";
// import fruitparty7 from "@/assets/slotC8/fruitparty7.png";
// import fruitparty8 from "@/assets/slotC8/fruitparty8.png";

// import animation1 from "@/assets/slotC8/dong/00001.png";
// import animation4 from "@/assets/slotC8/dong/00004.png";
// import animation8 from "@/assets/slotC8/dong/00008.png";
// import animation12 from "@/assets/slotC8/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotC8/football.png";
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
    const fruitpartyConfig = reactive({
      // headfruitparty,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeDfruitparty,
      anyfruitparty,
      playfruitparty,
      anyBoxfruitparty,
      boxfruitparty,
      homefruitparty,
      //   star,
      // seniorityfruitparty,
      countfruitparty,
      // rulefruitparty,
      // ruleDialogfruitparty,
      // resultfruitparty
    });
    const fruitpartyList = reactive([
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
    let stfruitparty = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: fruitparty1,
        name: "fruitparty2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: fruitparty2,
        name: "fruitparty1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: fruitparty3,
      },
      {
        img: fruitparty4,
      },
      {
        img: fruitparty5,
      },
      {
        img: fruitparty6,
        name: "fruitparty3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: fruitparty7,
   
      // },
      // {
      //   img: fruitparty8,
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
        const boxLists = fruitpartyList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
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
        const content = document.getElementById("fruitpartyp-he");
        const box2 = document.getElementById("fruitpartyp");
        const coords = { x: 0, y: 0 }; // Stfruitparty at (0, 0)
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
              boxLists[1].classList.toggle('fruitpartyp-itemD');
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle('fruitpartyp-itemD');
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
              boxLists[0].classList.toggle('fruitpartyp-itemD');
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stfruitparty the tween immediately.
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
            boxLists[i].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
           
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-y", 600 + "px");
            boxLists[1].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
            countValue.value += useCount.value;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   // countValue.value += useCount.value;
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".fruitpartyp-item-img").forEach((child) => {
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

        allMethods.assignImageList(fruitpartyList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "fruitparty1") {
            arrCount[0].value++;
          } else if (item.name == "fruitparty2") {
            arrCount[1].value++;
          } else if (item.name == "fruitparty3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给fruitpartyList
      assignImageList(fruitpartyList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log('%c ..........shuffledImages.........','color:#31ef0e',shuffledImages)
        let currentIndex = 0;
        fruitpartyList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log('%c ..........fruitpartyList.........','color:#31ef0e',fruitpartyList)
        return fruitpartyList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stfruitparty,
      fruitpartyConfig,
      randomImages,
      fruitpartyList,
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
    <!-- <img class="headfruitparty" :src="fruitpartyConfig.headfruitparty" alt=""> -->
    <div class="fruitpartyp" id="fruitpartyp">
      <div class="fruitpartyp-he" id="fruitpartyp-he">
        <!-- <img class="fruitparty-rule" @click="showRule" :src="fruitpartyConfig.rulefruitparty" alt=""> -->
        <div class="fruitpartyp-hidden">
          <div
            class="fruitpartyp-item"
            :id="item.name"
            v-for="(item, index) in fruitpartyList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'fruitpartyp-item-img ' + imgItem.className
                  : 'fruitpartyp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonfruitparty-box">
        <div class="buttons" @click="close"></div>
        
        <div class="buttonsfruitpartyBack" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->
        <div class="fruitparty-count" @click="showRule">
          <!-- <img class="fruitparty-rule" :src="fruitpartyConfig.rulefruitparty" alt="" /> -->
          <img :src="fruitpartyConfig.countfruitparty" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>

      </div>
      <div class="fruitpartyd-fruitpartyp">
        <div class="fruitpartyd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="fruitpartyConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="fruitpartyConfig.resultfruitparty" alt="" /> -->
        <!-- <div class="modelfruitparty-list">
          <div
            class="modelfruitparty-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelfruitparty-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="fruitpartyConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="fruitpartyConfig.ruleDialogfruitparty" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.fruitpartyd-fruitpartyp {
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

.fruitparty-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.fruitparty-count .fruitparty-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.fruitpartyd-back {
  /* background: v-bind("'url(' + fruitpartyConfig.homefruitparty + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stfruitparty {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + fruitpartyConfig.playfruitparty + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + fruitpartyConfig.boxfruitparty + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fruitpartyp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + fruitpartyConfig.anyBoxfruitparty + ')'") no-repeat;
  background-size: 63%;
    background-position: center 6%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonfruitparty-box {
  position: absolute;
  top: 6%;
    left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
    height: 25%;
  /* justify-content: space-between; */
}
.fruitparty-count {
  position: relative;
  width: 35%;
    height: 51%;
    margin-left: 2%;
    margin-right: -23%;
    margin-top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 1;
}

.buttons {
  margin-left: 8%;
    margin-top: -2%;
    width: 7%;
    height: 46%;
  z-index: 999;
  background: v-bind("'url(' + fruitpartyConfig.homefruitparty + ')'") no-repeat;
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
  /* background: v-bind("'url(' + fruitpartyConfig.seniorityfruitparty + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsfruitpartyBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left: 1%;
    margin-top: 24.5%;
    width: 16%;
    height: 53.5%;
  z-index: 999;
  background: v-bind("'url(' + fruitpartyConfig.playfruitparty + ')'") no-repeat;
  background-size: 100% 100%;
}
.fruitpartyp-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 39vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.fruitpartyp-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
    margin-top: -12%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 143%;
    overflow: hidden;
}
.fruitpartyp-item {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + fruitpartyConfig.anyfruitparty + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 140% 90%;

}
.fruitpartyp-item:nth-child(2){
  margin-bottom: 20%;
}
.fruitpartyp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + fruitpartyConfig.changeDfruitparty + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 140% 90%;
}
.fruitpartyp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
  
}
.fruitpartyp-item-img img {
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
  align-items: flex-stfruitparty;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + fruitpartyConfig.dialogfruitparty + ')'") no-repeat; */
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

.stfruitparty-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stfruitparty-bg img {
  width: 100%;
}

.modelfruitparty-list {
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
.modelfruitparty-item {
  margin-bottom: 11px;
}
.modelfruitparty-total {
  padding: 7px 14px;
}

.headfruitparty {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
   
    background-image: v-bind("'url(' + fruitpartyConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + fruitpartyConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + fruitpartyConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + fruitpartyConfig.animation12 + ')'");
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

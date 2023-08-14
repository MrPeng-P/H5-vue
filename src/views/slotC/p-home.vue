<script>
import playgeisha from "@/assets/slotC3/playgeisha.png";
import boxgeisha from "@/assets/slotC3/boxgeisha.jpg";
import anygeisha from "@/assets/slotC3/changeHgeisha.png";
import changeDgeisha from "@/assets/slotC3/changeDgeisha.png";
import anyBoxgeisha from "@/assets/slotC3/anyBoxgeisha.png";
import homegeisha from "@/assets/slotC3/homegeisha.png";

// import senioritygeisha from "@/assets/slotC3/senioritygeisha.png";
import countgeisha from "@/assets/slotC3/countgeisha.png";
// import rulegeisha from "@/assets/slotC3/rulegeisha.png";
// import ruleDialoggeisha from "@/assets/slotC3/ruleDialoggeisha.jpg";
// import resultgeisha from "@/assets/slotC3/resultgeisha.png";
// import headgeisha from "@/assets/slotC3/headgeisha.png";

// import star from "@/assets/slotC3/stargeisha.gif";
import { useRouter, useRoute } from "vue-router";
import geisha1 from "@/assets/slotC3/geisha1.png";
import geisha2 from "@/assets/slotC3/geisha2.png";
import geisha3 from "@/assets/slotC3/geisha3.png";
import geisha4 from "@/assets/slotC3/geisha4.png";
import geisha5 from "@/assets/slotC3/geisha5.png";
import geisha6 from "@/assets/slotC3/geisha6.png";
import geisha7 from "@/assets/slotC3/geisha7.png";
import geisha8 from "@/assets/slotC3/geisha8.png";

// import animation1 from "@/assets/slotC3/dong/00001.png";
// import animation4 from "@/assets/slotC3/dong/00004.png";
// import animation8 from "@/assets/slotC3/dong/00008.png";
// import animation12 from "@/assets/slotC3/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotC3/football.png";
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
    const geishaConfig = reactive({
      // headgeisha,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeDgeisha,
      anygeisha,
      playgeisha,
      anyBoxgeisha,
      boxgeisha,
      homegeisha,
      //   star,
      // senioritygeisha,
      countgeisha,
      // rulegeisha,
      // ruleDialoggeisha,
      // resultgeisha
    });
    const geishaList = reactive([
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
    let stgeisha = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: geisha1,
        name: "geisha2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: geisha2,
        name: "geisha1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: geisha3,
      },
      {
        img: geisha4,
      },
      {
        img: geisha5,
      },
      {
        img: geisha6,
      },
      {
        img: geisha7,
        name: "geisha3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: geisha8,
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
        const boxLists = geishaList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".geishap-item-img").forEach((child) => {
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
        const content = document.getElementById("geishap-he");
        const box2 = document.getElementById("geishap");
        const coords = { x: 0, y: 0 }; // Stgeisha at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
           
              console.log('%c ..........boxLists[1].style.........','color:#31ef0e',boxLists[1].style)
              boxLists[1].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[1].classList.toggle('geishap-itemD');
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle('geishap-itemD');
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
              boxLists[0].classList.toggle('geishap-itemD');
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stgeisha the tween immediately.
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
            boxLists[i].querySelectorAll(".geishap-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
           
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-y", 600 + "px");
            boxLists[0].querySelectorAll(".geishap-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-y", 600 + "px");
            boxLists[1].querySelectorAll(".geishap-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".geishap-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          
            countValue.value += useCount.value;
          }
          // if (i == 6) {
          //   boxLists[3].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[3].querySelectorAll(".geishap-item-img").forEach((child) => {
          //     child.style.setProperty("display", "block");
          //   });
          //   // countValue.value += useCount.value;
          // }
          // if (i == 7) {
          //   boxLists[4].style.setProperty("background-position-x", 600 + "px");
          //   boxLists[4].querySelectorAll(".geishap-item-img").forEach((child) => {
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

        allMethods.assignImageList(geishaList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "geisha1") {
            arrCount[0].value++;
          } else if (item.name == "geisha2") {
            arrCount[1].value++;
          } else if (item.name == "geisha3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给geishaList
      assignImageList(geishaList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log('%c ..........shuffledImages.........','color:#31ef0e',shuffledImages)
        let currentIndex = 0;
        geishaList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log('%c ..........geishaList.........','color:#31ef0e',geishaList)
        return geishaList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stgeisha,
      geishaConfig,
      randomImages,
      geishaList,
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
    <!-- <img class="headgeisha" :src="geishaConfig.headgeisha" alt=""> -->
    <div class="geishap" id="geishap">
      <div class="geishap-he" id="geishap-he">
        <!-- <img class="geisha-rule" @click="showRule" :src="geishaConfig.rulegeisha" alt=""> -->
        <div class="geishap-hidden">
          <div
            class="geishap-item"
            :id="item.name"
            v-for="(item, index) in geishaList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'geishap-item-img ' + imgItem.className
                  : 'geishap-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttongeisha-box">
        <div class="buttons" @click="close"></div>
        <div class="buttonsgeishaBack" @click="run"></div>

        <!-- <div class="buttons2" @click="goSeniority"></div> -->

        <div class="geisha-count" @click="showRule">
          <!-- <img class="geisha-rule" :src="geishaConfig.rulegeisha" alt="" /> -->
          <img :src="geishaConfig.countgeisha" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="geishad-geishap">
        <div class="geishad-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="geishaConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="geishaConfig.resultgeisha" alt="" /> -->
        <!-- <div class="modelgeisha-list">
          <div
            class="modelgeisha-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelgeisha-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="geishaConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="geishaConfig.ruleDialoggeisha" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.geishad-geishap {
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
  margin: 0 0 0 40%;
  color: #fff;
}

.geisha-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.geisha-count .geisha-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.geishad-back {
  /* background: v-bind("'url(' + geishaConfig.homegeisha + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stgeisha {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + geishaConfig.playgeisha + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + geishaConfig.boxgeisha + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.geishap {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + geishaConfig.anyBoxgeisha + ')'") no-repeat;
  background-size: 65%;
    background-position: center 6%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttongeisha-box {
  position: absolute;
  top: 6%;
    left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.geisha-count {
  position: relative;
  width: 70%;
    height: 50%;
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
    margin-top: -2%;
    width: 9%;
    height: 40%;
  z-index: 999;
  background: v-bind("'url(' + geishaConfig.homegeisha + ')'") no-repeat;
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
  /* background: v-bind("'url(' + geishaConfig.senioritygeisha + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsgeishaBack{
  /* margin-left: 27%;
    margin-bottom: -58%; */
    margin-left: 0%;
    margin-top: 60.5%;
    width: 19%;
    height: 48.5%;
  z-index: 999;
  background: v-bind("'url(' + geishaConfig.playgeisha + ')'") no-repeat;
  background-size: 100% 100%;
}
.geishap-he {
  position: relative;
  margin-right: 0%;
  margin-top: 4%;
  width: 80%;
  height: 43vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}

.geishap-hidden {
  /* margin-top: 2%; */
  margin-left: 1%;
    margin-top: -9%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 109%;
    overflow: hidden;
}
.geishap-item {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + geishaConfig.anygeisha + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 157% 83%;

}

.geishap-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  flex: 1;
  background: v-bind("'url(' + geishaConfig.changeDgeisha + ')'");
  /* background-position-x: 0px; */
    background-position-y: center;
    background-repeat-y: no-repeat;
    background-size: 160% 88%;
}
.geishap-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
  
}
.geishap-item-img img {
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
  align-items: flex-stgeisha;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + geishaConfig.dialoggeisha + ')'") no-repeat; */
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

.stgeisha-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stgeisha-bg img {
  width: 100%;
}

.modelgeisha-list {
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
.modelgeisha-item {
  margin-bottom: 11px;
}
.modelgeisha-total {
  padding: 7px 14px;
}

.headgeisha {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
   
    background-image: v-bind("'url(' + geishaConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + geishaConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + geishaConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + geishaConfig.animation12 + ')'");
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

<script>
import playpyramid from "@/assets/slotD19/playpyramid.png";
// import playpyramid3 from "@/assets/slotD19/playpyramid3.png";
// import playpyramid2 from "@/assets/slotD19/playpyramid2.png";
import boxpyramid from "@/assets/slotD19/boxpyramid.jpg";
import anypyramid from "@/assets/slotD19/changeHpyramid.png";
import changeDpyramid from "@/assets/slotD19/changeDpyramid.png";
import changeMpyramid from "@/assets/slotD19/changeMpyramid.png";
import changeSpyramid from "@/assets/slotD19/changeSpyramid.png";
import anyBoxpyramid from "@/assets/slotD19/anyBoxpyramid.jpg";
import homepyramid from "@/assets/slotD19/homepyramid.png";

// import senioritypyramid from "@/assets/slotD19/senioritypyramid.png";
import countpyramid from "@/assets/slotD19/countpyramid.png";
// import rulepyramid from "@/assets/slotD19/rulepyramid.png";
// import ruleDialogpyramid from "@/assets/slotD19/ruleDialogpyramid.jpg";
// import resultpyramid from "@/assets/slotD19/resultpyramid.png";
// import headpyramid from "@/assets/slotD19/headpyramid.png";

// import star from "@/assets/slotD19/starpyramid.gif";
import { useRouter, useRoute } from "vue-router";
import pyramid1 from "@/assets/slotD19/pyramid1.png";
import pyramid2 from "@/assets/slotD19/pyramid2.png";
import pyramid3 from "@/assets/slotD19/pyramid3.png";
import pyramid4 from "@/assets/slotD19/pyramid4.png";
import pyramid5 from "@/assets/slotD19/pyramid5.png";
import pyramid6 from "@/assets/slotD19/pyramid6.png";
import pyramid7 from "@/assets/slotD19/pyramid7.png";
// import pyramid8 from "@/assets/slotD19/pyramid8.png";

// import animation1 from "@/assets/slotD19/dong/00001.png";
// import animation4 from "@/assets/slotD19/dong/00004.png";
// import animation8 from "@/assets/slotD19/dong/00008.png";
// import animation12 from "@/assets/slotD19/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD19/football.png";
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
    const pyramidConfig = reactive({
      // headpyramid,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSpyramid,
      changeDpyramid,
      changeMpyramid,
      anypyramid,
      playpyramid,
      anyBoxpyramid,
      // playpyramid2,
      // playpyramid3,
      boxpyramid,
      homepyramid,
      //   star,
      // senioritypyramid,
      countpyramid,
      // rulepyramid,
      // ruleDialogpyramid,
      // resultpyramid
    });
    const pyramidList = reactive([
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
        size: 5,
        imgList: [],
      },
      
    ]);
    let timeOhter = 0;
    let id;
    let stpyramid = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: pyramid1,
        name: "pyramid2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: pyramid2,
        name: "pyramid1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: pyramid3,
      },
      {
        img: pyramid4,
      },
      {
        img: pyramid5,
      },
      {
        img: pyramid6,
        name: "pyramid3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: pyramid7,

      },
      // {
      //   img: pyramid8,
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
        const boxLists = pyramidList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".pyramidp-item-img").forEach((child) => {
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
        const content = document.getElementById("pyramidp-he");
        const box2 = document.getElementById("pyramidp");
        const coords = { x: 0, y: 0 }; // Stpyramid at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 4000 && timeOhter <= 7000 ) {
              boxLists[4].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[4].classList.toggle("pyramidp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stpyramid the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("pyramidp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("pyramidp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("pyramidp-itemM");
            }
            // if (timeOhter > 4000 && timeOhter <= 7000) {
            //   boxLists[4].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            //   boxLists[4].classList.toggle("pyramidp-itemM");
            // }
            if (timeOhter > 0 && timeOhter <= pyramidList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("pyramidp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stpyramid the tween immediately.
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
          if (i > pyramidList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < pyramidList.length) {
            if(i==4){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".pyramidp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".pyramidp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".pyramidp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".pyramidp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".pyramidp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-y", 600 + "px");
            boxLists[4].querySelectorAll(".pyramidp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value*magn;
          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".pyramidp-item-img").forEach((child) => {
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

        allMethods.assignImageList(pyramidList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "pyramid1") {
            arrCount[0].value++;
          } else if (item.name == "pyramid2") {
            arrCount[1].value++;
          } else if (item.name == "pyramid3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给pyramidList
      assignImageList(pyramidList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        pyramidList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........pyramidList.........",
          "color:#31ef0e",
          pyramidList
        );
        return pyramidList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stpyramid,
      pyramidConfig,
      randomImages,
      pyramidList,
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
    <!-- <img class="headpyramid" :src="pyramidConfig.playpyramid2" alt=""> -->
    <div class="pyramidp" id="pyramidp">
      <div class="pyramidp-he" id="pyramidp-he">
        <!-- <img class="pyramid-rule" @click="showRule" :src="pyramidConfig.rulepyramid" alt=""> -->
        <div class="pyramidp-hidden">
          <div
            class="pyramidp-item"
            :id="item.name"
            v-for="(item, index) in pyramidList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'pyramidp-item-img ' + imgItem.className
                  : 'pyramidp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonpyramid-box">

        <div class="buttonspyramidBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="pyramid-count" @click="showRule">
          <!-- <img class="pyramid-rule" :src="pyramidConfig.rulepyramid" alt="" /> -->
          <img :src="pyramidConfig.countpyramid" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="pyramidd-pyramidp">
        <div class="pyramidd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="pyramidConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="pyramidConfig.resultpyramid" alt="" /> -->
        <!-- <div class="modelpyramid-list">
          <div
            class="modelpyramid-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelpyramid-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="pyramidConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="pyramidConfig.ruleDialogpyramid" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.pyramidd-pyramidp {
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

.pyramid-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.pyramid-count .pyramid-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.pyramidd-back {
  /* background: v-bind("'url(' + pyramidConfig.homepyramid + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stpyramid {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + pyramidConfig.playpyramid + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + pyramidConfig.boxpyramid + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.pyramidp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + pyramidConfig.anyBoxpyramid + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonpyramid-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.pyramid-count {
  position: relative;
  width:44%;
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

  margin-left: -5%;
  margin-top: 43.6%;
    width: 15%;
    height: 46%;


  z-index: 999;
  background: v-bind("'url(' + pyramidConfig.playpyramid + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + pyramidConfig.playpyramid3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonspyramidBack {
  margin-left: 8.5%;
    margin-top: 1.5%;
    width: 9%;
    height:44.5%;

  z-index: 999;
  background: v-bind("'url(' + pyramidConfig.homepyramid  + ')'") no-repeat;
  background-size: 100% 100%;
}
.pyramidp-he {
  position: relative;
  margin-top: 7%;
    width: 100%;
    height: 42vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.58);
}

.pyramidp-hidden {
  /* margin-top: 2%; */
  margin-left: 3%;
  margin-top: -16%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  height: 146%;
}

.pyramidp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + pyramidConfig.changeSpyramid + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;

}
.pyramidp-item:nth-child(2){
  margin-right: 20%;
}
.pyramidp-item:nth-child(5) {
  /* margin-bottom: 20%; */
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + pyramidConfig.anypyramid + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.pyramidp-hidden .pyramidp-itemD {
  /* margin-top: 15%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + pyramidConfig.changeDpyramid + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 156% 73%;
}
.pyramidp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + pyramidConfig.changeMpyramid + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
    background-size: 78% 394%;
}
.pyramidp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.pyramidp-item-img img {
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
  align-items: flex-stpyramid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + pyramidConfig.dialogpyramid + ')'") no-repeat; */
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

.stpyramid-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stpyramid-bg img {
  width: 100%;
}

.modelpyramid-list {
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
.modelpyramid-item {
  margin-bottom: 11px;
}
.modelpyramid-total {
  padding: 7px 14px;
}

.headpyramid {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + pyramidConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + pyramidConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + pyramidConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + pyramidConfig.animation12 + ')'");
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

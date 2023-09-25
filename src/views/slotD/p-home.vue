<script>



import playclubbox from "@/assets/slotD31/playclubbox.png";
// import playclubbox3 from "@/assets/slotD31/playclubbox3.png";
// import playclubbox2 from "@/assets/slotD31/playclubbox2.png";
import boxclubbox from "@/assets/slotD31/boxclubbox.jpg";
import anyclubbox from "@/assets/slotD31/changeHclubbox.png";
import changeDclubbox from "@/assets/slotD31/changeDclubbox.png";
import changeMclubbox from "@/assets/slotD31/changeMclubbox.png";
import changeSclubbox from "@/assets/slotD31/changeSclubbox.png";
import anyBoxclubbox from "@/assets/slotD31/anyBoxclubbox.jpg";
import homeclubbox from "@/assets/slotD31/homeclubbox.png";

// import seniorityclubbox from "@/assets/slotD31/seniorityclubbox.png";
import countclubbox from "@/assets/slotD31/countclubbox.png";
// import ruleclubbox from "@/assets/slotD31/ruleclubbox.png";
// import ruleDialogclubbox from "@/assets/slotD31/ruleDialogclubbox.jpg";
// import resultclubbox from "@/assets/slotD31/resultclubbox.png";
// import headclubbox from "@/assets/slotD31/headclubbox.png";

// import star from "@/assets/slotD31/starclubbox.gif";
import { useRouter, useRoute } from "vue-router";
import clubbox1 from "@/assets/slotD31/clubbox1.png";
import clubbox2 from "@/assets/slotD31/clubbox2.png";
import clubbox3 from "@/assets/slotD31/clubbox3.png";
import clubbox4 from "@/assets/slotD31/clubbox4.png";
import clubbox5 from "@/assets/slotD31/clubbox5.png";
import clubbox6 from "@/assets/slotD31/clubbox6.png";
// import clubbox7 from "@/assets/slotD31/clubbox7.png";
// import clubbox8 from "@/assets/slotD31/clubbox8.png";

// import animation1 from "@/assets/slotD31/dong/00001.png";
// import animation4 from "@/assets/slotD31/dong/00004.png";
// import animation8 from "@/assets/slotD31/dong/00008.png";
// import animation12 from "@/assets/slotD31/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotD31/football.png";
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
    const clubboxConfig = reactive({
      // headclubbox,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSclubbox,
      changeDclubbox,
      changeMclubbox,
      anyclubbox,
      playclubbox,
      anyBoxclubbox,
      // playclubbox2,
      // playclubbox3,
      boxclubbox,
      homeclubbox,
      //   star,
      // seniorityclubbox,
      countclubbox,
      // ruleclubbox,
      // ruleDialogclubbox,
      // resultclubbox
    });
    const clubboxList = reactive([
      {
        name: "item1",
        size: 1,
        imgList: [],
      },
      {
        name: "item2",
        size: 1,
        imgList: [],
      },
      {
        name: "item3",
        size: 4,
        imgList: [],
      },
      {
        name: "item4",
        size: 4,
        imgList: [],
      },
 
    ]);
    let timeOhter = 0;
    let id;
    let stclubbox = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: clubbox1,
        name: "clubbox2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: clubbox2,
        name: "clubbox1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: clubbox3,
      },
      {
        img: clubbox4,
      },
      {
        img: clubbox5,
      },
      {
        img: clubbox6,
        name: "clubbox3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: clubbox7,
      // },
      // {
      //   img: clubbox8,
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
        const boxLists = clubboxList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".clubboxp-item-img").forEach((child) => {
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
        const content = document.getElementById("clubboxp-he");
        const box2 = document.getElementById("clubboxp");
        const coords = { x: 0, y: 0 }; // Stclubbox at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
      
            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[3].classList.toggle("clubboxp-itemD");
            }
            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[2].classList.toggle("clubboxp-itemD");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stclubbox the tween immediately.
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
            //   boxLists[4].classList.toggle("clubboxp-itemM");
            // }
         

            if ( timeOhter > 0 && timeOhter <= clubboxList.length * 1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("clubboxp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("clubboxp-itemM");
            }
   
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stclubbox the tween immediately.
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
          if (i > clubboxList.length + 2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < clubboxList.length) {
            if (i==5) {
              boxLists[i].style.setProperty("background-position-y", "center");
            } else {
              boxLists[i].style.setProperty("background-position-x", "center");
            }
            boxLists[i].querySelectorAll(".clubboxp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".clubboxp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".clubboxp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-y", 600 + "px");
            boxLists[2].querySelectorAll(".clubboxp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-y", 600 + "px");
            boxLists[3].querySelectorAll(".clubboxp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value * magn;

          }
       
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".clubboxp-item-img").forEach((child) => {
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
        const totalImages = 12;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(clubboxList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "clubbox1") {
            arrCount[0].value++;
          } else if (item.name == "clubbox2") {
            arrCount[1].value++;
          } else if (item.name == "clubbox3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给clubboxList
      assignImageList(clubboxList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        clubboxList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........clubboxList.........",
          "color:#31ef0e",
          clubboxList
        );
        return clubboxList;
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
      stclubbox,
      clubboxConfig,
      randomImages,
      clubboxList,
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
    <!-- <img class="headclubbox" :src="clubboxConfig.playclubbox2" alt=""> -->
    <div class="clubboxp" id="clubboxp">
      <div class="clubboxp-he" id="clubboxp-he">
        <!-- <img class="clubbox-rule" @click="showRule" :src="clubboxConfig.ruleclubbox" alt=""> -->
        <div class="clubboxp-hidden">
          <div
            class="clubboxp-item"
            :id="item.name"
            v-for="(item, index) in clubboxList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'clubboxp-item-img ' + imgItem.className
                  : 'clubboxp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonclubbox-box">
        <div class="buttonsclubboxBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="clubbox-count" @click="showRule">
          <!-- <img class="clubbox-rule" :src="clubboxConfig.ruleclubbox" alt="" /> -->
          <img :src="clubboxConfig.countclubbox" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="clubboxd-clubboxp">
        <div class="clubboxd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="clubboxConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="clubboxConfig.resultclubbox" alt="" /> -->
        <!-- <div class="modelclubbox-list">
          <div
            class="modelclubbox-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelclubbox-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

   
    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="clubboxConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="clubboxConfig.ruleDialogclubbox" alt="" /> -->
      </div>
    </Teleport>
  </div>

 
</template>

<style scoped>
.clubbox {
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.clubboxd-clubboxp {
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
  margin: 0% 0 0 37%;
    color: #ffffff;
}

.clubbox-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.clubbox-count .clubbox-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.clubboxd-back {
  /* background: v-bind("'url(' + clubboxConfig.homeclubbox + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stclubbox {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + clubboxConfig.playclubbox + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + clubboxConfig.boxclubbox + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.clubboxp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + clubboxConfig.anyBoxclubbox + ')'") no-repeat;
  background-size: auto 92%;
    background-position: center 70%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonclubbox-box {
  position: absolute;
  top: -1%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 25%;
  /* justify-content: space-between; */
}
.clubbox-count {
  position: relative;
  width: 22%;
    height: 37%;
    margin-left: 3.5%;
    margin-top: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {
  margin-left: 2%;
    margin-top: 5%;
    width: 12.5%;
    height: 38%;
    z-index: 999; 
  background: v-bind("'url(' + clubboxConfig.playclubbox + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
  height: 47%;
  margin-left: 3%;
  margin-top: 41.5%;
  /* background: v-bind("'url(' + clubboxConfig.playclubbox3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsclubboxBack {
  margin-left: 6.5%;
    margin-top: 4.5%;
    width: 6%;
    height: 44.5%;

  z-index: 999;
  background: v-bind("'url(' + clubboxConfig.homeclubbox  + ')'") no-repeat;
  background-size: 100% 100%;
}
.clubboxp-he {
  position: relative;
  margin-top: 7%;
  width: 100%;
  height: 42vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.58);
}

.clubboxp-hidden {
  margin-left: 8%;
    margin-top: -6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 137%;
}

.clubboxp-item {
  margin-right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
    height: 24%;
  background: v-bind("'url(' + clubboxConfig.changeSclubbox + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 66% 648%;
}

.clubboxp-item:nth-child(1) {
  margin-left: 3%;
 

}
.clubboxp-item:nth-child(4) img,.clubboxp-item:nth-child(3) img{
  width: 55%;
}
.clubboxp-item:nth-child(2) {
    /* margin-left: 55%; */
 
}
.clubboxp-item:nth-child(3),.clubboxp-item:nth-child(4) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + clubboxConfig.anyclubbox + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 176% 70%;
}
.clubboxp-hidden .clubboxp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + clubboxConfig.changeDclubbox + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 176% 70%;
}
.clubboxp-itemM {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
    height: 24%;
  background: v-bind("'url(' + clubboxConfig.changeMclubbox + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 66% 648%;
}
.clubboxp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.clubboxp-item-img img {
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
  align-items: flex-stclubbox;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + clubboxConfig.dialogclubbox + ')'") no-repeat; */
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

.stclubbox-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stclubbox-bg img {
  width: 100%;
}

.modelclubbox-list {
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
.modelclubbox-item {
  margin-bottom: 11px;
}
.modelclubbox-total {
  padding: 7px 14px;
}

.headclubbox {
  position: absolute;
  top: -0;
    width: 33%;
    z-index: 9;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + clubboxConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + clubboxConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + clubboxConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + clubboxConfig.animation12 + ')'");
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

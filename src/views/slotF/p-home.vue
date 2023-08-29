<script>
import playcharacter from "@/assets/slotF2/playcharacter.png";
import playcharacter2 from "@/assets/slotF2/playcharacter2.png";
// import playcharacter3 from "@/assets/slotF2/playcharacter3.png";
import boxcharacter from "@/assets/slotF2/boxcharacter.jpg";
import anycharacter from "@/assets/slotF2/changecharacter.png";
import anyBoxcharacter from "@/assets/slotF2/anyBoxcharacter.png";
import homecharacter from "@/assets/slotF2/homecharacter.png";
// import againcharacter from "@/assets/slotF2/againcharacter.png";
import peicharacter from "@/assets/slotF2/peicharacter.png";

import countcharacter from "@/assets/slotF2/countcharacter.png";
// import rulecharacter from "@/assets/slotF2/rulecharacter.png";
// import ruleDialogcharacter from "@/assets/slotF2/ruleDialogcharacter.jpg";
// import resultcharacter from "@/assets/slotF2/resultcharacter.png";
// import headcharacter from "@/assets/slotF2/headcharacter.png";

// import star from "@/assets/slotF2/starcharacter.gif";
import { useRouter, useRoute } from "vue-router";
import character1 from "@/assets/slotF2/character1.png";
import character2 from "@/assets/slotF2/character2.png";
import character3 from "@/assets/slotF2/character3.png";
import character4 from "@/assets/slotF2/character4.png";
import character5 from "@/assets/slotF2/character5.png";
import character6 from "@/assets/slotF2/character6.png";
import character7 from "@/assets/slotF2/character7.png";

// import animation1 from "@/assets/slotF2/dong/00001.png";
// import animation4 from "@/assets/slotF2/dong/00004.png";
// import animation8 from "@/assets/slotF2/dong/00008.png";
// import animation12 from "@/assets/slotF2/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotF2/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue = ref(false);
    let countValue = ref(1000);
    let peiValue = ref(100);
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
    const characterConfig = reactive({
      // headcharacter,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      peicharacter,
      anycharacter,
      playcharacter,
      playcharacter2,
      // playcharacter3,
      // againcharacter,
      anyBoxcharacter,
      boxcharacter,
      homecharacter,
      //   star,
      // senioritycharacter,
      countcharacter,
      // rulecharacter,
      // ruleDialogcharacter,
      // resultcharacter
    });
    const characterList = reactive([
      {
        name: "item1",
        size: 4,
        imgList: [],
      },
      {
        name: "item2",
        size: 8,
        imgList: [],
      },
      {
        name: "item3",
        size: 12,
        imgList: [],
      },
      {
        name: "item4",
        size: 12,
        imgList: [],
      },
      {
        name: "item5",
        size: 12,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stcharacter = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: character1,
        name: "character2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: character2,
        name: "character1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: character3,
      },
      {
        img: character4,
      },
      {
        img: character5,
      },
      {
        img: character6,
      },
      {
        img: character7,
        name: "character3",
        className: "animation",
        count: 2200 * magnification.value,
      },
    ];
    const allMethods = {
      peiCount:(type)=>{
        if(type){
          if(peiValue.value<500){
            peiValue.value+=100
          }else{
            peiValue.value=100
          }
          
        }else{
          if(peiValue.value>100){
            peiValue.value-=100
          }else{
            peiValue.value=500
          }
          

        }
      },
      run: (value) => {
        let magn=peiValue.value/100||1;
        if (open.value) {
          return;
        }
        if (!buttonStatus.value) {
          return;
        }
        countValue.value -= peiValue.value;
        allMethods.randomImg();
        buttonStatus.value = false;

        allMethods.clear();
        const boxLists = characterList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".characterp-item-img").forEach((child) => {
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
        const content = document.getElementById("characterp-he");
        const box2 = document.getElementById("characterp");
        const coords = { x: 0, y: 0 }; // Stcharacter at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
            if (timeOhter > 0 && timeOhter <= 3000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
          tween.start(); // Stcharacter the tween immediately.
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
          if (i > 7) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 4) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".characterp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".characterp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".characterp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".characterp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".characterp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
           
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".characterp-item-img").forEach((child) => {
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
        const totalImages = 15;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(characterList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "character1") {
            arrCount[0].value++;
          } else if (item.name == "character2") {
            arrCount[1].value++;
          } else if (item.name == "character3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给characterList
      assignImageList(characterList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组

        let currentIndex = 0;

        characterList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        return characterList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      peiValue,
      open,
      stcharacter,
      characterConfig,
      randomImages,
      characterList,
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
    <!-- <img class="headcharacter" :src="characterConfig.headcharacter" alt=""> -->
    <div class="characterp" id="characterp">
      <div class="characterp-he" id="characterp-he">
        <!-- <img class="character-rule" @click="showRule" :src="characterConfig.rulecharacter" alt=""> -->
        <div class="characterp-hidden">
          <div
            class="characterp-item"
            :id="item.name"
            v-for="(item, index) in characterList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'characterp-item-img ' + imgItem.className
                  : 'characterp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttoncharacter-box">
        <div class="buttons" @click="close"></div>

        <div class="buttonscharacter2" >
          <div class="count" @click="peiCount(true)"></div>
          <div class="count-v">{{ peiValue }}</div>
          <div class="count" @click="peiCount(false)"></div>
        </div>
       
        <!-- <div class="buttonscharacterBack" @click="run()"></div> -->


        <div class="character-count" >
          <!-- <img class="character-rule" :src="characterConfig.rulecharacter" alt="" /> -->
          <img :src="characterConfig.countcharacter" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        <div class="buttons2" @click="run()"></div>

      </div>
      <div class="characterd-characterp">
        <div class="characterd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="characterConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="characterConfig.resultcharacter" alt="" /> -->
        <!-- <div class="modelcharacter-list">
          <div
            class="modelcharacter-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelcharacter-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="characterConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="characterConfig.ruleDialogcharacter" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.characterd-characterp {
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
  margin: 0 0 0 37%;
    color: #FFF;
    font-size: 18px;
}

.character-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  
  z-index: -1;
}
.character-count .character-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.characterd-back {
  /* background: v-bind("'url(' + characterConfig.homecharacter + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stcharacter {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + characterConfig.playcharacter + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + characterConfig.boxcharacter + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.characterp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  overflow: hidden;

  background: v-bind("'url(' + characterConfig.anyBoxcharacter + ')'") no-repeat;
  background-size: 66%;
    background-position: center 85%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttoncharacter-box {
  position: absolute;
  top: 5%;
    left: 17%;
  display: flex;
  /* flex-direction: column; */

  width: 60%;
  height: 25%;
  /* justify-content: space-between; */
}
.character-count {
  position: relative;
  width: 33%;
    height: 39%;
    margin-left: 4%;
    margin-top: -4%;
 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    z-index: 1;
}

.buttons {
  margin-left: 5%;
  margin-top: -3%;
    width: 12%;

    height: 43%;
  z-index: 999;
  background: v-bind("'url(' + characterConfig.homecharacter + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  margin-left: 9%;
    margin-top: 54%;
    width: 18%;
    height: 86%;
  background: v-bind("'url(' + characterConfig.playcharacter + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttonscharacterBack{
  position: absolute;
  left: 34.5%;
    margin-top: 57%;
    width: 38%;
    height: 58.5%;
  z-index: 999;
  /* background: v-bind("'url(' + characterConfig.againcharacter + ')'") no-repeat; */
  background-size: 100% 100%;
}

.buttonscharacter2{
  display: flex;
  margin-left: -13%;
    margin-top: 63%;
    width: 35%;
    height: 36.5%;
color: #fff;
  z-index: 999;
  background: v-bind("'url(' + characterConfig.peicharacter + ')'") no-repeat;
  background-size: 100% 100%;
}
.count{
  flex: 1;
}
.count-v{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
   
}
.characterp-he {
    position: relative;
    margin-right: 0%;
    margin-top: 2%;
    width: 103%;
    height: 43vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}

.characterp-hidden {
  /* margin-top: 2%; */
  /* margin-left: 1%; */
  margin-top: -4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.characterp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + characterConfig.anycharacter + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
  background-size: 83% 238%;
}
.characterp-item:nth-child(2){
  /* margin-right: 20%; */
}
.characterp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.characterp-item-img img {
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
  align-items: flex-stcharacter;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + characterConfig.dialogcharacter + ')'") no-repeat; */
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

.stcharacter-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stcharacter-bg img {
  width: 100%;
}

.modelcharacter-list {
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
.modelcharacter-item {
  margin-bottom: 11px;
}
.modelcharacter-total {
  padding: 7px 14px;
}

.headcharacter {
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + characterConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + characterConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + characterConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + characterConfig.animation12 + ')'");
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

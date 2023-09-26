<script>



import playmyFruit from "@/assets/slotD32/playmyFruit.png";
// import playmyFruit3 from "@/assets/slotD32/playmyFruit3.png";
// import playmyFruit2 from "@/assets/slotD32/playmyFruit2.png";
import boxmyFruit from "@/assets/slotD32/boxmyFruit.jpg";
import anymyFruit from "@/assets/slotD32/changeHmyFruit.png";
import changeDmyFruit from "@/assets/slotD32/changeDmyFruit.png";
import changeMmyFruit from "@/assets/slotD32/changeMmyFruit.png";
import changeSmyFruit from "@/assets/slotD32/changeSmyFruit.png";
import anyBoxmyFruit from "@/assets/slotD32/anyBoxmyFruit.png";
import homemyFruit from "@/assets/slotD32/homemyFruit.png";

// import senioritymyFruit from "@/assets/slotD32/senioritymyFruit.png";
import countmyFruit from "@/assets/slotD32/countmyFruit.png";
// import rulemyFruit from "@/assets/slotD32/rulemyFruit.png";
// import ruleDialogmyFruit from "@/assets/slotD32/ruleDialogmyFruit.jpg";
// import resultmyFruit from "@/assets/slotD32/resultmyFruit.png";
// import headmyFruit from "@/assets/slotD32/headmyFruit.png";

// import star from "@/assets/slotD32/starmyFruit.gif";
import { useRouter, useRoute } from "vue-router";
import myFruit1 from "@/assets/slotD32/myFruit1.png";
import myFruit2 from "@/assets/slotD32/myFruit2.png";
import myFruit3 from "@/assets/slotD32/myFruit3.png";
import myFruit4 from "@/assets/slotD32/myFruit4.png";
import myFruit5 from "@/assets/slotD32/myFruit5.png";
import myFruit6 from "@/assets/slotD32/myFruit6.png";
// import myFruit7 from "@/assets/slotD32/myFruit7.png";
// import myFruit8 from "@/assets/slotD32/myFruit8.png";

// import animation1 from "@/assets/slotD32/dong/00001.png";
// import animation4 from "@/assets/slotD32/dong/00004.png";
// import animation8 from "@/assets/slotD32/dong/00008.png";
// import animation12 from "@/assets/slotD32/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotD32/football.png";
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
    const myFruitConfig = reactive({
      // headmyFruit,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSmyFruit,
      changeDmyFruit,
      changeMmyFruit,
      anymyFruit,
      playmyFruit,
      anyBoxmyFruit,
      // playmyFruit2,
      // playmyFruit3,
      boxmyFruit,
      homemyFruit,
      //   star,
      // senioritymyFruit,
      countmyFruit,
      // rulemyFruit,
      // ruleDialogmyFruit,
      // resultmyFruit
    });
    const myFruitList = reactive([
      {
        name: "item1",
        size:3,
        imgList: [],
      },
      {
        name: "item2",
        size: 3,
        imgList: [],
      },
      {
        name: "item3",
        size: 3,
        imgList: [],
      },
      {
        name: "item4",
        size: 3,
        imgList: [],
      },
      {
        name: "item5",
        size: 4,
        imgList: [],
      },
    ]);
    let timeOhter = 0;
    let id;
    let stmyFruit = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: myFruit1,
        name: "myFruit2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: myFruit2,
        name: "myFruit1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: myFruit3,
      },
      {
        img: myFruit4,
      },
      {
        img: myFruit5,
      },
      {
        img: myFruit6,
        name: "myFruit3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      // {
      //   img: myFruit7,
      // },
      // {
      //   img: myFruit8,
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
        const boxLists = myFruitList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".myFruitp-item-img").forEach((child) => {
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
        const content = document.getElementById("myFruitp-he");
        const box2 = document.getElementById("myFruitp");
        const coords = { x: 0, y: 0 }; // StmyFruit at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
      
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[4].classList.toggle("myFruitp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // StmyFruit the tween immediately.
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
            //   boxLists[4].classList.toggle("myFruitp-itemM");
            // }
         

            if ( timeOhter > 0 && timeOhter <= myFruitList.length * 1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("myFruitp-itemM");
            }
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("myFruitp-itemM");
            }
            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("myFruitp-itemM");
            }
            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("myFruitp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // StmyFruit the tween immediately.
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
          if (i > myFruitList.length + 2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < myFruitList.length) {
            if (i==5) {
              boxLists[i].style.setProperty("background-position-y", "center");
            } else {
              boxLists[i].style.setProperty("background-position-x", "center");
            }
            boxLists[i].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });

          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-y", 600 + "px");
            boxLists[4].querySelectorAll(".myFruitp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            countValue.value += useCount.value * magn;

          }
          // if (i == 8) {
          //   boxLists[5].style.setProperty("background-position-y", 600 + "px");
          //   boxLists[5].querySelectorAll(".myFruitp-item-img").forEach((child) => {
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

        allMethods.assignImageList(myFruitList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "myFruit1") {
            arrCount[0].value++;
          } else if (item.name == "myFruit2") {
            arrCount[1].value++;
          } else if (item.name == "myFruit3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给myFruitList
      assignImageList(myFruitList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        myFruitList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........myFruitList.........",
          "color:#31ef0e",
          myFruitList
        );
        return myFruitList;
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
      stmyFruit,
      myFruitConfig,
      randomImages,
      myFruitList,
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
    <!-- <img class="headmyFruit" :src="myFruitConfig.playmyFruit2" alt=""> -->
    <div class="myFruitp" id="myFruitp">
      <div class="myFruitp-he" id="myFruitp-he">
        <!-- <img class="myFruit-rule" @click="showRule" :src="myFruitConfig.rulemyFruit" alt=""> -->
        <div class="myFruitp-hidden">
          <div
            class="myFruitp-item"
            :id="item.name"
            v-for="(item, index) in myFruitList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'myFruitp-item-img ' + imgItem.className
                  : 'myFruitp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonmyFruit-box">
        <div class="buttonsmyFruitBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="myFruit-count" @click="showRule">
          <!-- <img class="myFruit-rule" :src="myFruitConfig.rulemyFruit" alt="" /> -->
          <img :src="myFruitConfig.countmyFruit" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
      </div>
      <div class="myFruitd-myFruitp">
        <div class="myFruitd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="myFruitConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="myFruitConfig.resultmyFruit" alt="" /> -->
        <!-- <div class="modelmyFruit-list">
          <div
            class="modelmyFruit-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelmyFruit-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

   
    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="myFruitConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="myFruitConfig.ruleDialogmyFruit" alt="" /> -->
      </div>
    </Teleport>
  </div>

 
</template>

<style scoped>
.myFruit {
  display: none;
}
.football {
  margin-top: 2rem;

  width: 280px;
}
.myFruitd-myFruitp {
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

.myFruit-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.myFruit-count .myFruit-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.myFruitd-back {
  /* background: v-bind("'url(' + myFruitConfig.homemyFruit + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stmyFruit {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + myFruitConfig.playmyFruit + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + myFruitConfig.boxmyFruit + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.myFruitp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + myFruitConfig.anyBoxmyFruit + ')'") no-repeat;
  background-size: auto 70%;
    background-position: center 22%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonmyFruit-box {
  position: absolute;
  top: -1%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 25%;
  /* justify-content: space-between; */
}
.myFruit-count {
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
  background: v-bind("'url(' + myFruitConfig.playmyFruit + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
  height: 47%;
  margin-left: 3%;
  margin-top: 41.5%;
  /* background: v-bind("'url(' + myFruitConfig.playmyFruit3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsmyFruitBack {
  margin-left: 3.5%;
    margin-top: 4.5%;
    width: 7%;
    height: 40.5%;

  z-index: 999;
  background: v-bind("'url(' + myFruitConfig.homemyFruit  + ')'") no-repeat;
  background-size: 100% 100%;
}
.myFruitp-he {
  position: relative;
  margin-top: 7%;
  width: 100%;
  height: 42vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.58);
}

.myFruitp-hidden {
  margin-left: 8%;
    margin-top: -17%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-items: center;
    width: 87%;
    height: 126%;
}

.myFruitp-item {
  margin-right: 4%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 60%;
  background: v-bind("'url(' + myFruitConfig.changeSmyFruit + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 79% 290%;
}

/* .myFruitp-item:nth-child(1) {
  margin-left: 3%;
 

} */
.myFruitp-item:nth-child(5) img{
  width: 60%;
    height: 49%;
}
.myFruitp-item:nth-child(2) {
    /* margin-left: 55%; */
 
}
.myFruitp-item:nth-child(5) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + myFruitConfig.anymyFruit + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 178% 64%;
}
.myFruitp-hidden .myFruitp-itemD {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + myFruitConfig.changeDmyFruit + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 178% 64%;
}
.myFruitp-itemM {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 60%;
  background: v-bind("'url(' + myFruitConfig.changeMmyFruit + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: 14px;
  background-size: 79% 290%;
}
.myFruitp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.myFruitp-item-img img {
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
  align-items: flex-stmyFruit;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + myFruitConfig.dialogmyFruit + ')'") no-repeat; */
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

.stmyFruit-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stmyFruit-bg img {
  width: 100%;
}

.modelmyFruit-list {
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
.modelmyFruit-item {
  margin-bottom: 11px;
}
.modelmyFruit-total {
  padding: 7px 14px;
}

.headmyFruit {
  position: absolute;
  top: -0;
    width: 33%;
    z-index: 9;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + myFruitConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + myFruitConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + myFruitConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + myFruitConfig.animation12 + ')'");
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

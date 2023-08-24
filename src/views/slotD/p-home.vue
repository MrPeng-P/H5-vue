<script>
import playbooks from "@/assets/slotD13/playbooks.png";
// import playbooks3 from "@/assets/slotD13/playbooks3.png";
import playbooks2 from "@/assets/slotD13/playbooks2.jpg";
import boxbooks from "@/assets/slotD13/playbooks2.jpg";
import anybooks from "@/assets/slotD13/changeHbooks.png";
import changeDbooks from "@/assets/slotD13/changeDbooks.png";
import changeMbooks from "@/assets/slotD13/changeMbooks.png";
import changeSbooks from "@/assets/slotD13/changeSbooks.png";
import anyBoxbooks from "@/assets/slotD13/anyBoxbooks.jpg";
import homebooks from "@/assets/slotD13/homebooks.png";

// import senioritybooks from "@/assets/slotD13/senioritybooks.png";
import countbooks from "@/assets/slotD13/countbooks.png";
// import rulebooks from "@/assets/slotD13/rulebooks.png";
// import ruleDialogbooks from "@/assets/slotD13/ruleDialogbooks.jpg";
// import resultbooks from "@/assets/slotD13/resultbooks.png";
// import headbooks from "@/assets/slotD13/headbooks.png";

// import star from "@/assets/slotD13/starbooks.gif";
import { useRouter, useRoute } from "vue-router";
import books1 from "@/assets/slotD13/books1.png";
import books2 from "@/assets/slotD13/books2.png";
import books3 from "@/assets/slotD13/books3.png";
import books4 from "@/assets/slotD13/books4.png";
import books5 from "@/assets/slotD13/books5.png";
import books6 from "@/assets/slotD13/books6.png";
import books7 from "@/assets/slotD13/books7.png";
// import books8 from "@/assets/slotD13/books8.png";

// import animation1 from "@/assets/slotD13/dong/00001.png";
// import animation4 from "@/assets/slotD13/dong/00004.png";
// import animation8 from "@/assets/slotD13/dong/00008.png";
// import animation12 from "@/assets/slotD13/dong/00012.png";

import { inject } from "vue";
// import football from "@/assets/slotD13/football.png";
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
    const booksConfig = reactive({
      // headbooks,
      // animation1,
      // animation4,
      // animation8,
      // animation12,
      changeSbooks,
      changeDbooks,
      changeMbooks,
      anybooks,
      playbooks,
      anyBoxbooks,
      playbooks2,
      // playbooks3,
      boxbooks,
      homebooks,
      //   star,
      // senioritybooks,
      countbooks,
      // rulebooks,
      // ruleDialogbooks,
      // resultbooks
    });
    const booksList = reactive([
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
    let stbooks = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: books1,
        name: "books2",
        className: "animation",
        count: 1800 * magnification.value,
      },
      {
        img: books2,
        name: "books1",
        className: "animation",
        count: 1000 * magnification.value,
      },
      {
        img: books3,
      },
      {
        img: books4,
      },
      {
        img: books5,
      },
      {
        img: books6,
        name: "books3",
        className: "animation",
        count: 2200 * magnification.value,
      },
      {
        img: books7,

      },
      // {
      //   img: books8,
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
        const boxLists = booksList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-y", "center");
        boxLists[0].querySelectorAll(".booksp-item-img").forEach((child) => {
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
        const content = document.getElementById("booksp-he");
        const box2 = document.getElementById("booksp");
        const coords = { x: 0, y: 0 }; // Stbooks at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: (1120 * content.clientWidth) / box2.clientWidth, y: 0 }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 5000 && timeOhter <= 8000 ) {
              boxLists[5].style.setProperty(
                "background-position-x",
                -coords.x + "px"
              );
              boxLists[5].classList.toggle("booksp-itemD");
            }
           
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween.start(); // Stbooks the tween immediately.
        const tween2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1120 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 600) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
          
            if (timeOhter > 1000 && timeOhter <= 4000 ) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[1].classList.toggle("booksp-itemM");

            }

            if (timeOhter > 2000 && timeOhter <= 5000) {
              boxLists[2].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[2].classList.toggle("booksp-itemM");
              
            }

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[3].classList.toggle("booksp-itemM");
            }
            if (timeOhter > 4000 && timeOhter <= 7000) {
              boxLists[4].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[4].classList.toggle("booksp-itemM");
            }
            if (timeOhter > 0 && timeOhter <= booksList.length*1000) {
              boxLists[0].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
              boxLists[0].classList.toggle("booksp-itemM");
            }
          })
          .repeat(Infinity)
          .yoyo(false)
          .repeatDelay(0);
        tween2.start(); // Stbooks the tween immediately.
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
          if (i > booksList.length+2) {
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < booksList.length) {
            if(i==5){
            boxLists[i].style.setProperty("background-position-y", "center");

            }else{
            boxLists[i].style.setProperty("background-position-x", "center");

            }
            boxLists[i]
              .querySelectorAll(".booksp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "none");
              });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 600 + "px");
            boxLists[0]
              .querySelectorAll(".booksp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 600 + "px");
            boxLists[1]
              .querySelectorAll(".booksp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 600 + "px");
            boxLists[2]
              .querySelectorAll(".booksp-item-img")
              .forEach((child) => {
                child.style.setProperty("display", "block");
              });

          }
          if (i == 6) {
            boxLists[3].style.setProperty("background-position-x", 600 + "px");
            boxLists[3].querySelectorAll(".booksp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
            // countValue.value += useCount.value;
          }
          if (i == 7) {
            boxLists[4].style.setProperty("background-position-x", 600 + "px");
            boxLists[4].querySelectorAll(".booksp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 8) {
            boxLists[5].style.setProperty("background-position-y", 600 + "px");
            boxLists[5].querySelectorAll(".booksp-item-img").forEach((child) => {
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

        allMethods.assignImageList(booksList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
          if (item.name == "books1") {
            arrCount[0].value++;
          } else if (item.name == "books2") {
            arrCount[1].value++;
          } else if (item.name == "books3") {
            arrCount[2].value++;
          }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给booksList
      assignImageList(booksList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
        console.log(
          "%c ..........shuffledImages.........",
          "color:#31ef0e",
          shuffledImages
        );
        let currentIndex = 0;
        booksList.forEach((item) => {
          const numImages = Math.min(item.size, 5);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });
        console.log(
          "%c ..........booksList.........",
          "color:#31ef0e",
          booksList
        );
        return booksList;
      },
      goSeniority: () => {
        router.push("/list");
      },
    };
    onMounted(() => {});
    return {
      className,
      open,
      stbooks,
      booksConfig,
      randomImages,
      booksList,
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
    <!-- <img class="headbooks" :src="booksConfig.playbooks2" alt=""> -->
    <div class="booksp" id="booksp">
      <div class="booksp-he" id="booksp-he">
        <!-- <img class="books-rule" @click="showRule" :src="booksConfig.rulebooks" alt=""> -->
        <div class="booksp-hidden">
          <div
            class="booksp-item"
            :id="item.name"
            v-for="(item, index) in booksList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'booksp-item-img ' + imgItem.className
                  : 'booksp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonbooks-box">

        <div class="buttonsbooksBack" @click="close"></div>
        <div class="buttons" @click="run()"></div>
        <!-- <div class="buttons2" @click="run()"></div> -->
        <div class="books-count" @click="showRule">
          <!-- <img class="books-rule" :src="booksConfig.rulebooks" alt="" /> -->
          <img :src="booksConfig.countbooks" alt="" />
          <div class="countValue">{{ countValue }}</div>
        </div>
        
        
      </div>
      <div class="booksd-booksp">
        <div class="booksd-back" @click="close"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="booksConfig.star" alt="" /> -->
        <!-- <img class="model-img-bg" :src="booksConfig.resultbooks" alt="" /> -->
        <!-- <div class="modelbooks-list">
          <div
            class="modelbooks-item"
            v-for="(item, index) in arrCount"
            :key="index"
          >
            {{ item.count + "X" + item.value }}
          </div>
          <div class="modelbooks-total">{{ useCount }}</div>
        </div> -->
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="booksConfig.star" alt="" /> -->
        <!-- <img class="model-img" :src="booksConfig.ruleDialogbooks" alt="" /> -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.booksd-booksp {
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
  color: #ffffff;
}

.books-count img {
  width: 100%;
  position: absolute;
  height: 100%;
  /* top: -16%; */
  z-index: -1;
}
.books-count .books-rule {
  position: absolute;
  left: -9%;
  width: 45px;
  height: 45px;
}
.booksd-back {
  /* background: v-bind("'url(' + booksConfig.homebooks + ')'") no-repeat; */

  width: 36px;
  height: 42px;
  background-size: 100%;
  z-index: 999;
}
.stbooks {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + booksConfig.playbooks + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + booksConfig.boxbooks + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}

.booksp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  /* overflow: hidden; */

  background: v-bind("'url(' + booksConfig.anyBoxbooks + ')'") no-repeat;
  background-size: auto 99%;
    background-position: center -10%;

  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonbooks-box {
  position: absolute;
  top: 0%;
  left: 12%;
  display: flex;
  /* flex-direction: column; */

  width: 90%;
  height: 25%;
  /* justify-content: space-between; */
}
.books-count {
  position: relative;
  width: 40%;
    height: 45%;
    margin-left: 1.5%;
    margin-top: 31.7%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1;
}

.buttons {

  margin-left: -4%;
    margin-top: 31.6%;
    width: 13%;
    height: 46%;


  z-index: 999;
  background: v-bind("'url(' + booksConfig.playbooks + ')'") no-repeat;
  background-size: 100% 100%;
}
.buttons2 {
  width: 12%;
    height: 47%;
    margin-left: 3%;
    margin-top: 41.5%;
  /* background: v-bind("'url(' + booksConfig.playbooks3 + ')'") no-repeat; */
  background-size: 100% 100%;
}
.buttonsbooksBack {
  margin-left: 4.5%;
    margin-top: 0;
    width: 16%;
    height: 47.5%;

  z-index: 999;
  background: v-bind("'url(' + booksConfig.homebooks  + ')'") no-repeat;
  background-size: 100% 100%;
}
.booksp-he {
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

.booksp-hidden {
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

.booksp-item {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + booksConfig.changeSbooks + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;

}
/* .booksp-item:nth-child(3){
  margin-right: 20%;
} */
.booksp-item:nth-child(6) {
  /* margin-bottom: 20%; */
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction:row;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + booksConfig.anybooks + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.booksp-hidden .booksp-itemD {
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-image: v-bind("'url(' + booksConfig.changeDbooks + ')'");
  background-position-y: center;
  background-repeat-y: no-repeat;
  background-position-x: 11px;
  background-size: 161% 73%
}
.booksp-itemM{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
  height: 56%;
  background: v-bind("'url(' + booksConfig.changeMbooks + ')'");
  /* background-position-x: 0px; */
  background-position-x: center;
  background-repeat-x: no-repeat;
  background-position-y: -10px;
    background-size: 73% 422%;
}
.booksp-item-img {
  position: relative;

  display: none;
  width: 100%;
  height: 100%;
}
.booksp-item-img img {
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
  align-items: flex-stbooks;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + booksConfig.dialogbooks + ')'") no-repeat; */
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

.stbooks-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.stbooks-bg img {
  width: 100%;
}

.modelbooks-list {
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
.modelbooks-item {
  margin-bottom: 11px;
}
.modelbooks-total {
  padding: 7px 14px;
}

.headbooks {
  position: absolute;
    top: -0;

    width: 15%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
    background-image: v-bind("'url(' + booksConfig.animation1 + ')'");
  }

  25% {
    background-image: v-bind("'url(' + booksConfig.animation4 + ')'");
  }

  75% {
    background-image: v-bind("'url(' + booksConfig.animation8 + ')'");
  }

  100% {
    background-image: v-bind("'url(' + booksConfig.animation12 + ')'");
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

<script>
import playfructification from "@/assets/slotN3/playfructification2.png";
import boxfructification from "@/assets/slotN3/boxfructification.jpg";
import anyfructification from "@/assets/slotN3/changefructification.png";
import anyBoxfructification from "@/assets/slotN3/anyBoxfructification.png";
import backfructification from "@/assets/slotN3/backfructification.png";
import seniorityfructification from "@/assets/slotN3/seniorityfructification.png";
import countfructification from "@/assets/slotN3/countfructification.png";
// import rulefructification from "@/assets/slotN3/rulefructification.png";
import ruleDialogfructification from "@/assets/slotN3/ruleDialogfructification.png";
import resultfructification from "@/assets/slotN3/resultfructification.png";
// import headfructification from "@/assets/slotN3/headfructification.png";

// import star from "@/assets/slotN3/starfructification.gif";
import { useRouter, useRoute } from "vue-router";
import fructification1 from "@/assets/slotN3/fructification1.png";
import fructification2 from "@/assets/slotN3/fructification2.png";
import fructification3 from "@/assets/slotN3/fructification3.png";
import fructification4 from "@/assets/slotN3/fructification4.png";
import fructification5 from "@/assets/slotN3/fructification5.png";
import fructification6 from "@/assets/slotN3/fructification6.png";
import fructification7 from "@/assets/slotN3/fructification7.png";
import fructification8 from "@/assets/slotN3/fructification8.png";

import animation1 from "@/assets/slotN3/dong/00001.png";
import animation4 from "@/assets/slotN3/dong/00004.png";
import animation8 from "@/assets/slotN3/dong/00008.png";
import animation12 from "@/assets/slotN3/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotN3/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue=ref(false)
    let countValue = ref(1000);
    let useCount = ref(0);
    let arrCount=reactive([{
        count:'1000',
        value:0
    },{
        count:'1800',
        value:0
    },{
        count:'2200',
        value:0
    }])
    countValue.value = sessionStorage.getItem("countValue")
      ? sessionStorage.getItem("countValue")
      : 1000;
    const className = "container";
    const router = new useRouter();
    // 随机生成 12 张图的数组
    let randomImages = [];
    const fructificationConfig = reactive({
      // headfructification,
      animation1,
      animation4,
      animation8,
      animation12,
      resultfructification,
      anyfructification,
      playfructification,
      anyBoxfructification,
      boxfructification,
      backfructification,
      //   star,
      seniorityfructification,
      countfructification,
      // rulefructification,
      ruleDialogfructification,
      resultfructification
    });
    const fructificationList = reactive([
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
      // {
      //   name: "item4",
      //   size: 12,
      //   imgList: [],
      // },
    ]);
    let timeOhter = 0;
    let id;
    let start = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: fructification1,
      
      },
      {
        img: fructification2,
     
      },
      {
        img: fructification3,
        name:'fructification2',
        className: "animation",
        count: 1800,
      },
      {
        img: fructification4,
       
      },
      {
        img: fructification5,
        
      },
      {
        img: fructification6,
        name:'fructification1',
        className: "animation",
        count: 1000,
      },
      {
        img: fructification7,
        name:'fructification3',
        className: "animation",
        count: 2200,
      },
      {
        img: fructification8,

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
        const boxLists = fructificationList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".fructificationp-item-img").forEach((child) => {
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
        const content = document.getElementById("fructificationp-he");
        const box2 = document.getElementById("fructificationp");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to(
            { x: 0, y: (1120 * content.clientHeight) / box2.clientHeight },
            100
          ) // Move to (300, 200) in 1 second.
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

            // if (timeOhter > 3000 && timeOhter <= 6000) {
            //   boxLists[3].style.setProperty(
            //     "background-position-y",
            //     -coords.y + "px"
            //   );
            // }

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
        tween.start(); // Start the tween immediately.
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
          if (i > 6) {
            countValue.value += useCount.value;
            sessionStorage.setItem("countValue", countValue.value);

            open.value = true;

            tween.stop();
            clearInterval(timeany);
          }
          if (i > 0 && i < 3) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".fructificationp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 200 + "px");
            boxLists[0].querySelectorAll(".fructificationp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 200 + "px");
            boxLists[1].querySelectorAll(".fructificationp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 200 + "px");
            boxLists[2].querySelectorAll(".fructificationp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          // if (i == 6) {
            
          //   boxLists[3].style.setProperty("background-position-x", 200 + "px");
          //   boxLists[3].querySelectorAll(".fructificationp-item-img").forEach((child) => {
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
        // ceshi();
      },
      showRule:()=>{
        showRuleValue.value= !showRuleValue.value
      },
      close: () => {
        open.value = false;
        router.push("/");
      },
      randomImg() {
        randomImages = [];
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 9;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(fructificationList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
            if(item.name=='fructification1'){
                arrCount[0].value++
            }else if(item.name=='fructification2'){
                arrCount[1].value++
            }else if(item.name=='fructification3'){
                arrCount[2].value++
            }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给fructificationList
      assignImageList(fructificationList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
    
        let currentIndex = 0;

        fructificationList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });

        return fructificationList;
      },
      goSeniority:()=>{
        router.push('/list')
      }
    };
    onMounted(() => {});
    return {
      className,
      open,
      start,
      fructificationConfig,
      randomImages,
      fructificationList,
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
  <div class="fructificationd-fructificationp">
    <div class="fructificationd-back" @click="close"></div>
    <div class="fructification-count" @click="showRule">
        <img :src="fructificationConfig.countfructification" alt="">
        {{ countValue }}
    </div>
    
  </div>
  <div :class="className">
    <!-- <img class="headfructification" :src="fructificationConfig.headfructification" alt=""> -->
    <div class="fructificationp" id="fructificationp">
      <div class="fructificationp-he"  id="fructificationp-he">
        <!-- <img class="fructification-rule" @click="showRule" :src="fructificationConfig.rulefructification" alt=""> -->
        <div class="fructificationp-hidden">
          <div
            class="fructificationp-item"
            :id="item.name"
            v-for="(item, index) in fructificationList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'fructificationp-item-img ' + imgItem.className
                  : 'fructificationp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonfructification-box">
        <div class="buttons" @click="run"></div>
      <div class="buttons2" @click="goSeniority"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="fructificationConfig.star" alt="" /> -->
        <img class="model-img-bg" :src="fructificationConfig.resultfructification" alt="" />
        <div class="modelfructification-list">
            <div class="modelfructification-item" v-for="(item,index) in arrCount" :key="index">
                {{ item.count+'X'+item.value }}
            </div>
            <div class="modelfructification-total">{{ useCount }}</div>
        </div>
    
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="fructificationConfig.star" alt="" /> -->
        <img class="model-img" :src="fructificationConfig.ruleDialogfructification" alt="" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.fructificationd-fructificationp {
  margin-top: 10vh;
    display: flex;
    align-items: center;
  padding: 60px 15px;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 375px;
  height: 60px;
  color: #fff;
}
.fructification-count{
  padding-right: 40px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;

}
.fructification-count img{
  position: absolute;
    top: -11px;
    right: 1px;
    z-index: -1;
    width: 132px;
}
.fructificationd-back {

  background: v-bind("'url(' + fructificationConfig.backfructification + ')'") no-repeat;
 
  width: 45px;
    height: 46px;
    background-size: 100%;
    z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + fructificationConfig.playfructification + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + fructificationConfig.boxfructification + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fructificationp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: v-bind("'url(' + fructificationConfig.anyBoxfructification + ')'") no-repeat;
  background-size: 100%;
  background-position: center 0;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonfructification-box{
    margin-top: -70px;
    display: flex;
    width: 100%;
    justify-content: space-evenly   ;
}
.buttons {
margin:0 0 0 40px;
  width: 100px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + fructificationConfig.playfructification + ')'") no-repeat;
  background-size: 100%;
}
.buttons2 {
  margin:0 40px 0 0;
  width: 100px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + fructificationConfig.seniorityfructification + ')'") no-repeat;
  background-size: 100%;
}

.fructificationp-he {
  position: relative;
    margin-top: 21%;
    width: 123%;
    height: 112vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.55);
}

.fructification-rule{
  position: absolute;
    top: -223px;
    right: -129px;
}
.fructificationp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.fructificationp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + fructificationConfig.anyfructification + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.fructificationp-item-img {
  position: relative;

  display: none;
  width: 120px;
  height: 120px;
 
}
.fructificationp-item-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: -1;
  width: 100%;
  height: 80%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + fructificationConfig.dialogfructification + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star {
  position: absolute;
  width: 50%;
}
.model-img {
  position: absolute;
    left: 48%;
    top: 35%;
    transform: translate(-50%,-50%);
    width: 70%;
}
.model-img-bg{
  position: absolute;
    left: 48%;
    top: 35%;
    transform: translate(-50%,-50%);
    width: 70%;
}

.start-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.start-bg img {
  width: 100%;
}

.modelfructification-list{
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
.modelfructification-item{
    margin-bottom: 11px;
}
.modelfructification-total{
    padding: 7px 14px;   
}

.headfructification{
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
                background-image: v-bind("'url(' + fructificationConfig.animation1 + ')'");
            }

            25% {
                background-image: v-bind("'url(' + fructificationConfig.animation4 + ')'");
            }

            75% {
                background-image: v-bind("'url(' + fructificationConfig.animation8 + ')'");
            }

            100% {
                background-image: v-bind("'url(' + fructificationConfig.animation12 + ')'");
            }
}

/* 设置动画元素样式和动画 */
.animation {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position-y: center;
  /* background-size: cover; */
  /* 2秒钟的步长图片动画，5帧图片，无限循环 */
    background-position-y: center;
    background-position-x: center;
    background-size:  99%;;
    
    animation: image-animation 2s steps(4) infinite;
}
</style>

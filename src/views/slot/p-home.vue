<script>
import playfrutas from "@/assets/slotN2/playfrutas2.png";
import boxfrutas from "@/assets/slotN2/boxfrutas.jpg";
import anyfrutas from "@/assets/slotN2/changefrutas.png";
import anyBoxfrutas from "@/assets/slotN2/anyBoxfrutas.png";
import backfrutas from "@/assets/slotN2/backfrutas.png";
import seniorityfrutas from "@/assets/slotN2/seniorityfrutas.png";
import countfrutas from "@/assets/slotN2/countfrutas.png";
import rulefrutas from "@/assets/slotN2/rulefrutas.png";
import ruleDialogfrutas from "@/assets/slotN2/ruleDialogfrutas.png";
import resultfrutas from "@/assets/slotN2/resultfrutas.png";
import headfrutas from "@/assets/slotN2/headfrutas.png";

// import star from "@/assets/slotN2/starfrutas.gif";
import { useRouter, useRoute } from "vue-router";
import frutas1 from "@/assets/slotN2/frutas1.png";
import frutas2 from "@/assets/slotN2/frutas2.png";
import frutas3 from "@/assets/slotN2/frutas3.png";
import frutas4 from "@/assets/slotN2/frutas4.png";
import frutas5 from "@/assets/slotN2/frutas5.png";
import frutas6 from "@/assets/slotN2/frutas6.png";
import frutas7 from "@/assets/slotN2/frutas7.png";
import frutas8 from "@/assets/slotN2/frutas8.png";

import animation1 from "@/assets/slotN2/dong/00001.png";
import animation4 from "@/assets/slotN2/dong/00004.png";
import animation8 from "@/assets/slotN2/dong/00008.png";
import animation12 from "@/assets/slotN2/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotN2/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue=ref(false)
    let countValue = ref(1000);
    let useCount = ref(0);
    let arrCount=reactive([{
        count:'700',
        value:0
    },{
        count:'600',
        value:0
    },{
        count:'900',
        value:0
    }])
    countValue.value = sessionStorage.getItem("countValue")
      ? sessionStorage.getItem("countValue")
      : 1000;
    const className = "container";
    const router = new useRouter();
    // 随机生成 12 张图的数组
    let randomImages = [];
    const frutasConfig = reactive({
      headfrutas,
      animation1,
      animation4,
      animation8,
      animation12,
      resultfrutas,
      anyfrutas,
      playfrutas,
      anyBoxfrutas,
      boxfrutas,
      backfrutas,
      //   star,
      seniorityfrutas,
      countfrutas,
      rulefrutas,
      ruleDialogfrutas,
      resultfrutas
    });
    const frutasList = reactive([
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
        img: frutas1,
      
      },
      {
        img: frutas2,
     
      },
      {
        img: frutas3,
   
      },
      {
        img: frutas4,
        name:'frutas1',
        className: "animation",
        count: 700,
      },
      {
        img: frutas5,
        
      },
      {
        img: frutas6,
        name:'frutas2',
        className: "animation",
        count: 600,
      },
      {
        img: frutas7,
       
      },
      {
        img: frutas8,
        name:'frutas3',
        className: "animation",
        count: 900,
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
        const boxLists = frutasList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".frutasp-item-img").forEach((child) => {
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
        const content = document.getElementById("frutasp-he");
        const box2 = document.getElementById("frutasp");
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
            boxLists[i].querySelectorAll(".frutasp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 200 + "px");
            boxLists[0].querySelectorAll(".frutasp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 200 + "px");
            boxLists[1].querySelectorAll(".frutasp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            boxLists[2].style.setProperty("background-position-x", 200 + "px");
            boxLists[2].querySelectorAll(".frutasp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          // if (i == 6) {
            
          //   boxLists[3].style.setProperty("background-position-x", 200 + "px");
          //   boxLists[3].querySelectorAll(".frutasp-item-img").forEach((child) => {
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

        allMethods.assignImageList(frutasList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
            if(item.name=='frutas1'){
                arrCount[0].value++
            }else if(item.name=='frutas2'){
                arrCount[1].value++
            }else if(item.name=='frutas3'){
                arrCount[2].value++
            }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给frutasList
      assignImageList(frutasList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
    
        let currentIndex = 0;

        frutasList.forEach((item) => {
          const numImages = Math.min(item.size, 3);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });

        return frutasList;
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
      frutasConfig,
      randomImages,
      frutasList,
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
  <div class="frutasd-frutasp">
    <div class="frutasd-back" @click="close"></div>
    <div class="frutas-count">
        <img :src="frutasConfig.countfrutas" alt="">
        {{ countValue }}
    </div>
    
  </div>
  <div :class="className">
    <img class="headfrutas" :src="frutasConfig.headfrutas" alt="">
    <div class="frutasp" id="frutasp">
      <div class="frutasp-he"  id="frutasp-he">
        <img class="frutas-rule" @click="showRule" :src="frutasConfig.rulefrutas" alt="">
        <div class="frutasp-hidden">
          <div
            class="frutasp-item"
            :id="item.name"
            v-for="(item, index) in frutasList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'frutasp-item-img ' + imgItem.className
                  : 'frutasp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonfrutas-box">
        <div class="buttons" @click="run"></div>
      <div class="buttons2" @click="goSeniority"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="frutasConfig.star" alt="" /> -->
        <img class="model-img-bg" :src="frutasConfig.resultfrutas" alt="" />
        <div class="modelfrutas-list">
            <div class="modelfrutas-item" v-for="(item,index) in arrCount" :key="index">
                {{ item.count+'X'+item.value }}
            </div>
            <div class="modelfrutas-total">{{ useCount }}</div>
        </div>
    
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="frutasConfig.star" alt="" /> -->
        <img class="model-img" :src="frutasConfig.ruleDialogfrutas" alt="" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.frutasd-frutasp {
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
.frutas-count{
    padding-right: 40px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;

}
.frutas-count img{
    position: absolute;
    top: -7px;
    right: 0px;
    z-index: -1;
    width: 150px;
}
.frutasd-back {
  width: 50px;
  height: 50px;
  background: v-bind("'url(' + frutasConfig.backfrutas + ')'") no-repeat;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + frutasConfig.playfrutas + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
  background: v-bind("'url(' + frutasConfig.boxfrutas + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frutasp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: v-bind("'url(' + frutasConfig.anyBoxfrutas + ')'") no-repeat;
  background-size: 100%;
  background-position: center 0;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonfrutas-box{
    margin-top: -95px;
    display: flex;
    width: 100%;
    justify-content: space-evenly   ;
}
.buttons {
margin:0 0 0 40px;
  width: 100px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + frutasConfig.playfrutas + ')'") no-repeat;
  background-size: 100%;
}
.buttons2 {
  margin:0 40px 0 0;
  width: 100px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + frutasConfig.seniorityfrutas + ')'") no-repeat;
  background-size: 100%;
}

.frutasp-he {
  position: relative;
  /* margin-top: 34%; */
  width: 148%;
  height: 106vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.4);
}

.frutas-rule{
  position: absolute;
    top: -223px;
    right: -129px;
}
.frutasp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.frutasp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + frutasConfig.anyfrutas + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.frutasp-item-img {
  position: relative;

  display: none;
  width: 120px;
  height: 120px;
 
}
.frutasp-item-img img {
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
  align-items: flex-start;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + frutasConfig.dialogfrutas + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star {
  position: absolute;
  width: 50%;
}
.model-img {
  width: 90%;
  margin-top: 20vh;
}
.model-img-bg{
  position: absolute;
    left: 50%;
    top: 38%;
    transform: translate(-50%,-50%) rotate(29deg);
    width: 90%;
}

.start-bg {
  position: absolute;

  top: 0;
  z-index: 1;
}
.start-bg img {
  width: 100%;
}

.modelfrutas-list{
  position: absolute;
    left: 60%;
    top: 29%;
    transform: translate(-50%, -50%);
    width: 103px;
    /* top: 102px; */
    color: #893412;
    font-size: 18px;
    transform: rotate(7deg) translateX(-36px);
}
.modelfrutas-item{
    margin-bottom: 21px;
}
.modelfrutas-total{
    padding: 7px 14px;   
}

.headfrutas{
  margin-top: 10vh;
  width: 80%;
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
                background-image: v-bind("'url(' + frutasConfig.animation1 + ')'");
            }

            25% {
                background-image: v-bind("'url(' + frutasConfig.animation4 + ')'");
            }

            75% {
                background-image: v-bind("'url(' + frutasConfig.animation8 + ')'");
            }

            100% {
                background-image: v-bind("'url(' + frutasConfig.animation12 + ')'");
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
    background-size:  140%;;
    
    animation: image-animation 2s steps(4) infinite;
}
</style>

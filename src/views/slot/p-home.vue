<script>
import playfood from "@/assets/slotN1/playfood2.png";
import boxfood from "@/assets/slotN1/boxfood.jpg";
import anyfood from "@/assets/slotN1/changefood.png";
import anyBoxfood from "@/assets/slotN1/anyBoxfood.png";
import backfood from "@/assets/slotN1/backfood.png";
import seniorityfood from "@/assets/slotN1/seniorityfood.png";
import countfood from "@/assets/slotN1/countfood.png";
import rulefood from "@/assets/slotN1/rulefood.png";
import ruleDialogfood from "@/assets/slotN1/ruleDialogfood.png";
import resultfood from "@/assets/slotN1/resultfood.png";

// import star from "@/assets/slotN1/starfood.gif";
import { useRouter, useRoute } from "vue-router";
import food1 from "@/assets/slotN1/food1.png";
import food2 from "@/assets/slotN1/food2.png";
import food3 from "@/assets/slotN1/food3.png";
import food4 from "@/assets/slotN1/food4.png";
import food5 from "@/assets/slotN1/food5.png";
import food6 from "@/assets/slotN1/food6.png";
import food7 from "@/assets/slotN1/food7.png";
import food8 from "@/assets/slotN1/food8.png";
import food9 from "@/assets/slotN1/food9.png";
import food10 from "@/assets/slotN1/food10.png";
import food11 from "@/assets/slotN1/food11.png";
import foodDong from "@/assets/slotN1/dong.png";
import animation1 from "@/assets/slotN1/dong/00001.png";
import animation4 from "@/assets/slotN1/dong/00004.png";
import animation8 from "@/assets/slotN1/dong/00008.png";
import animation12 from "@/assets/slotN1/dong/00012.png";


import { inject } from "vue";
// import football from "@/assets/slotN1/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const ceshi = inject("reload");
    const showRuleValue=ref(false)
    let countValue = ref(1000);
    let useCount = ref(0);
    let arrCount=reactive([{
        count:'2000',
        value:0
    },{
        count:'3000',
        value:0
    },{
        count:'5500',
        value:0
    }])
    countValue.value = sessionStorage.getItem("countValue")
      ? sessionStorage.getItem("countValue")
      : 1000;
    const className = "container";
    const router = new useRouter();
    // 随机生成 12 张图的数组
    let randomImages = [];
    const foodConfig = reactive({
      animation1,
      animation4,
      animation8,
      animation12,
      resultfood,
      anyfood,
      playfood,
      anyBoxfood,
      boxfood,
      backfood,
      //   star,
      foodDong,
      seniorityfood,
      countfood,
      rulefood,
      ruleDialogfood,
      resultfood
    });
    const foodList = reactive([
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
    ]);
    let timeOhter = 0;
    let id;
    let start = ref(false);
    let open = ref(false);
    let buttonStatus = ref(true);
    const images = [
      {
        img: food1,
        name:'food1',
        className: "animation",
        count: 2000,
      },
      {
        img: food2,
        name:'food2',
        className: "animation",
        count: 3000,
      },
      {
        img: food3,
        name:'food3',
        className: "animation",
        count: 5500,
      },
      {
        img: food4,
        
      },
      {
        img: food5,
      },
      {
        img: food6,
      },
      {
        img: food7,
       
      },
      {
        img: food8,
      },
      {
        img: food9,
      },
      {
        img: food10,
      },
      {
        img: food11,
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
        const boxLists = foodList.map((item) => {
          return document.getElementById(item.name);
        });
        boxLists[0].style.setProperty("background-position-x", "center");
        boxLists[0].querySelectorAll(".foodp-item-img").forEach((child) => {
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
        const content = document.getElementById("foodp-he");
        const box2 = document.getElementById("foodp");
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

            if (timeOhter > 3000 && timeOhter <= 6000) {
              boxLists[3].style.setProperty(
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
          if (i > 0 && i < 4) {
            boxLists[i].style.setProperty("background-position-x", "center");
            boxLists[i].querySelectorAll(".foodp-item-img").forEach((child) => {
              child.style.setProperty("display", "none");
            });
          }
          if (i == 3) {
            boxLists[0].style.setProperty("background-position-x", 200 + "px");
            boxLists[0].querySelectorAll(".foodp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 4) {
            boxLists[1].style.setProperty("background-position-x", 200 + "px");
            boxLists[1].querySelectorAll(".foodp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 5) {
            console.log('%c ..........boxLists[2].style.........','color:#31ef0e',boxLists[2].clientWidth)
            boxLists[2].style.setProperty("background-position-x", 200 + "px");
            boxLists[2].querySelectorAll(".foodp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
          }
          if (i == 6) {
            
            boxLists[3].style.setProperty("background-position-x", 200 + "px");
            boxLists[3].querySelectorAll(".foodp-item-img").forEach((child) => {
              child.style.setProperty("display", "block");
            });
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
        const totalImages = 16;

        while (randomImages.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.push(randomImage);
        }

        allMethods.assignImageList(foodList, randomImages);
      },
      // 随机生成图像列表
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        array.forEach((item) => {
            if(item.name=='food1'){
                arrCount[0].value++
            }else if(item.name=='food2'){
                arrCount[1].value++
            }else if(item.name=='food3'){
                arrCount[2].value++
            }
          if (item.count) {
            useCount.value += item.count;
          }
        });
        return array;
      },

      // 将图像列表分配给foodList
      assignImageList(foodList, images) {
        const shuffledImages = allMethods.shuffleArray(images.slice()); // 避免修改原始数组
    
        let currentIndex = 0;

        foodList.forEach((item) => {
          const numImages = Math.min(item.size, 4);
          item.imgList = shuffledImages.slice(
            currentIndex,
            currentIndex + numImages
          );
          currentIndex += numImages;
        });

        return foodList;
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
      foodConfig,
      randomImages,
      foodList,
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
  <div class="foodd-foodp">
    <div class="foodd-back" @click="close"></div>
    <div class="food-count">
        <img :src="foodConfig.countfood" alt="">
        {{ countValue }}
    </div>
    
  </div>
  <div :class="className">
    <div class="foodp" id="foodp">
      <div class="foodp-he"  id="foodp-he">
        <img class="food-rule" @click="showRule" :src="foodConfig.rulefood" alt="">
        <div class="foodp-hidden">
          <div
            class="foodp-item"
            :id="item.name"
            v-for="(item, index) in foodList"
          >
            <div
              v-for="(imgItem, imgIndex) in item.imgList"
              :class="
                imgItem.className
                  ? 'foodp-item-img ' + imgItem.className
                  : 'foodp-item-img'
              "
            >
              <img :src="imgItem.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttonfood-box">
        <div class="buttons" @click="run"></div>
      <div class="buttons2" @click="goSeniority"></div>
      </div>
    </div>
    <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="foodConfig.star" alt="" /> -->
        <img class="model-img-bg" :src="foodConfig.resultfood" alt="" />
        <div class="modelfood-list">
            <div class="modelfood-item" v-for="(item,index) in arrCount" :key="index">
                {{ item.count+'X'+item.value }}
            </div>
            <div class="modelfood-total">{{ useCount }}</div>
        </div>
    
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showRuleValue" class="modal" @click="showRule">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="foodConfig.star" alt="" /> -->
        <img class="model-img" :src="foodConfig.ruleDialogfood" alt="" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.football {
  margin-top: 2rem;

  width: 280px;
}
.foodd-foodp {
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
.food-count{
    padding-right: 40px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;

}
.food-count img{
    position: absolute;
    top: -16px;
    right: 0px;
    z-index: -1;
    width: 150px;
}
.foodd-back {
  margin-top: 20px;
  width: 50px;
  height: 50px;
  background: v-bind("'url(' + foodConfig.backfood + ')'") no-repeat;
  background-size: 100%;
  z-index: 999;
}
.start {
  margin-top: -30%;
  width: 160px;
  height: 80px;
  background: v-bind("'url(' + foodConfig.playfood + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;
}
.container {
  background: v-bind("'url(' + foodConfig.boxfood + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foodp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: v-bind("'url(' + foodConfig.anyBoxfood + ')'") no-repeat;
  background-size: 100%;
  background-position: center 136px;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}

.buttonfood-box{
    margin-top: -60px;
    display: flex;
    width: 100%;
    justify-content: space-evenly   ;
}
.buttons {

  width: 120px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + foodConfig.playfood + ')'") no-repeat;
  background-size: 100%;
}
.buttons2 {
 
  width: 120px;
  height: 80px;
  z-index: 999;
  background: v-bind("'url(' + foodConfig.seniorityfood + ')'") no-repeat;
  background-size: 100%;
}

.foodp-he {
  position: relative;
  margin-top: 9%;
  width: 188%;
  height: 138vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.46);
}

.food-rule{
    position: absolute;
    top: -60px;
    right: -60px;
}
.foodp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.foodp-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  flex: 1;
  background: v-bind("'url(' + foodConfig.anyfood + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}
.foodp-item-img {
  position: relative;

  display: none;
  width: 120px;
  height: 120px;
 
}
.foodp-item-img img {
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
  /* background: v-bind("'url(' + foodConfig.dialogfood + ')'") no-repeat; */
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
  transform: translate(-50%,-50%);
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

.modelfood-list{
    position: absolute;
    left: 60%;
    top: 38%;
    transform: translate(-50%, -50%);
    width: 103px;
    /* top: 102px; */
    color: #893412;
    font-size: 18px;
}
.modelfood-item{
    margin-bottom: 8px;
}
.modelfood-total{
    padding: 7px 14px;   
}
/* 定义步长图片动画关键帧 */
@keyframes image-animation {
  0% {
                background-image: v-bind("'url(' + foodConfig.animation1 + ')'");
            }

            25% {
                background-image: v-bind("'url(' + foodConfig.animation4 + ')'");
            }

            75% {
                background-image: v-bind("'url(' + foodConfig.animation8 + ')'");
            }

            100% {
                background-image: v-bind("'url(' + foodConfig.animation12 + ')'");
            }
}

/* 设置动画元素样式和动画 */
.animation {
  width: 150px;
  height: 150px;
  background-image: v-bind("'url(' + foodConfig.foodDong + ')'");
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

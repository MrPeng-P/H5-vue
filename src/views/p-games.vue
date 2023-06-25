<script>

import dialog from "../assets/slot/dialog.png";
import startImage from "../assets/slot/start.png";
import bgImage from "../assets/slot/bg-2.jpg";
import mainImage from "../assets/slot/bg-3.png";
import bgItemImage from "../assets/slot/change.png";
import contentBg from "../assets/slot/bg-4.png";
import gpBg from "../assets/slot/back.png";
import star from "../assets/slot/star.gif";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const className = "container";
    const cssConfig = reactive({
      dialog,
      bgItemImage,
      startImage,
      contentBg,
      bgImage,
      gpBg,
      mainImage,
      star
    });
    const ItemList = [
      {
        name: "item1",
        size: 11,
      },
      {
        name: "item2",
        size: 11,
      },
      {
        name: "item3",
        size: 11,
      },
    ];
      console.log('%c ..........111.........','color:#31ef0e',111)
    let timeOhter = 0;
    let id;
    let start=ref(true)
    let open = ref(false);
    let buttonStatus=ref(true)
    const allMethods = {
      run: () => {
        if(open.value){
          return
        }
        if(!buttonStatus){
          return
        }
        buttonStatus.value=false
        allMethods.clear();
        const boxLists = ItemList.map((item) => {
          return document.getElementById(item.name);
        });
        const content = document.getElementById("content-he");
        const box2 = document.getElementById("content");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (980 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 200) in 1 second.
          .easing() // Use an easing function to make the animation smooth.
          .onUpdate(() => {
            if (timeOhter > 1000 && timeOhter <= 4000) {
              boxLists[1].style.setProperty(
                "background-position-y",
                -coords.y + "px"
              );
            }

            if (timeOhter > 2000 && timeOhter < 5000) {
              boxLists[2].style.setProperty(
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
          if (i > 5) {
            open.value = true;
          
            tween.stop();
            clearInterval(timeany);
          }
          if (i == 3) {
            boxLists[0].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 980) / 140) * 140 + "px"
            );
          }
          if (i == 4) {
            boxLists[1].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 980) / 140) * 140 + "px"
            );
          }
          if (i == 5) {
            boxLists[2].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 980) / 140) * 140 + "px"
            );
          }
        }, 1000);
      },
      clear: () => {
        timeOhter = 0;
        cancelAnimationFrame(id);
      },
      openDialog:()=>{
        open.value=false
        buttonStatus.value=true
      },
      close:()=>{
        start.value=!start.value
        open.value=false
      }
    };
    onMounted(() => {
    });
    return {
      className,
      open,
      start,
      cssConfig,
      ItemList,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div v-show="!start" class="head-content">
    <div class="head-back" @click="close"></div>
  </div>
  <div :class="className">
    <!-- <img src="../assets/slot/bian.gif" alt=""> -->
    <div v-if="start" class="start-bg"><img :src="cssConfig.mainImage" alt=""></div>
    <div v-if="start" class="start" @click="start=false">
    
    </div>

    <div v-else class="content" id="content">
      <div class="content-he" id="content-he">
        <div class="content-hidden">
          <div
          class="content-item"
          :id="item.name"
          v-for="(item, index) in ItemList"
        ></div>
        </div>
      </div>
      <div class="buttons" @click="run">
    </div>
    </div>
    <Teleport to="body">
      <div  v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <img class="model-star" :src="cssConfig.star" alt="">
        <img  class="model-img" :src="cssConfig.dialog" alt="">
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.head-content{
  padding:20px 30px;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 375px;
  height: 60px;
  
}
.head-back{
  width: 50px;
  height: 50px;
  background: v-bind("'url(' + cssConfig.gpBg + ')'") no-repeat;
  background-size: 100%;
  z-index: 999;
}
.start{
    width: 170px;
    height: 80px;
  background: v-bind("'url(' + cssConfig.startImage + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + cssConfig.bgImage + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: v-bind("'url(' + cssConfig.contentBg + ')'") no-repeat;
  background-size: 120%;
  background-position: center 0;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}
.buttons {
  /* position: absolute;
    top: 66%; */
    width: 159px;
    height: 80px;
  z-index: 999;
  background: v-bind("'url(' + cssConfig.startImage + ')'") no-repeat;
  background-size: 100%;
}
.content-he {
    margin-top: 5.3rem;
    position: relative;
    width: 135%;
    height: 420px;
    display: flex;
    justify-content: space-between;
    transform: scale(0.6);
}
.content-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.content-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + cssConfig.bgItemImage + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + cssConfig.dialog + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 100%;

}

.start-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.start-bg img{
    width: 100%;
}
</style>

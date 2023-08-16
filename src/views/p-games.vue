<script>

import dialogneon from "../assets/slot10/dialogneon.png";
import playneon from "../assets/slot10/playneon.png";
import boxneon from "../assets/slot10/boxneon.jpg";
import anyneon from "../assets/slot10/changeneon.png";
import anyBoxneon from "../assets/slot10/heneon.png";
import backneon from "../assets/slot10/backneon.png";
// import star from "../assets/slot10/starneon.gif";
// import football from "../assets/slot10/football.png";
import { onMounted, reactive, ref } from "vue";
import * as TWEEN from "@tweenjs/tween.js";
export default {
  setup() {
    const className = "container";
    const neonConfig = reactive({
      dialogneon,
      anyneon,
      playneon,
      anyBoxneon,
      boxneon,
      backneon,
      // star
    });
    const neonList = [
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
      }, {
        name: "item4",
        size: 11,
      },
     
     
     
    ];
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
        if(!buttonStatus.value){
          return
        }
        buttonStatus.value=false
        allMethods.clear();
        const boxLists = neonList.map((item) => {
          return document.getElementById(item.name);
        });
        const content = document.getElementById("neonp-he");
        const box2 = document.getElementById("neonp");
        const coords = { x: 0, y: 0 }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
          .to({ x: 0, y: (1404 * content.clientHeight) / box2.clientHeight }, 100) // Move to (300, 200) in 1 second.
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
            open.value = true;
          
            tween.stop();
            clearInterval(timeany);
          }
          if (i == 3) {
            boxLists[0].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 1404) / 156) * 156 + "px"
            );
          }
          if (i == 4) {
            boxLists[1].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 1404) / 156) * 156 + "px"
            );
          }
          if (i == 5) {
            boxLists[2].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 1404) / 156) * 156 + "px"
            );
          }
          if (i == 6) {
            boxLists[3].style.setProperty(
              "background-position-y",
              -0-parseInt(Math.ceil(Math.random() * 1404) / 156) * 156 + "px"
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
      neonConfig,
      neonList,
      ...allMethods,
    };
  },
};
</script>
<template>
  <div v-show="!start" class="neond-neonp">
    <div class="neond-back" @click="close"></div>
  </div>
  <div :class="className">
    <!-- <img src="../assets/slot/bian.gif" alt=""> -->
    <!-- <div v-if="start" class="start-bg"><img :src="neonConfig.mainImage" alt=""></div> -->
    <div v-if="start" class="start" @click="start=false">
    
    </div>

    <div v-else class="neonp" id="neonp">

      <div class="neonp-he" id="neonp-he">

        <div class="neonp-hidden">
          
          <div
          class="neonp-item"
          :id="item.name"
          v-for="(item, index) in neonList"
        ></div>
        </div>
      </div>
      <div class="buttons" @click="run">
    </div>
    </div>
    <Teleport to="body">
      <div  v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <!-- <img class="model-star" :src="neonConfig.star" alt=""> -->
        <img  class="model-img" :src="neonConfig.dialogneon" alt="">
      </div>
    </Teleport>
  </div>
</template>

<style scoped>

.football{
  margin-top: 2rem;

  width: 280px;
}
.neond-neonp{
  padding:20px 15px;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 375px;
  height: 60px;
  
}
.neond-back{
  margin-top: 20px;
    width: 50px;
    height: 50px;
  background: v-bind("'url(' + neonConfig.backneon + ')'") no-repeat;
  background-size: 100%;
  z-index: 999;
}
.start{
  margin-top: -30%;
  width: 160px;
    height: 80px;
  background: v-bind("'url(' + neonConfig.playneon + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + neonConfig.boxneon + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.neonp {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 90vw;
  height: 100vh;
  overflow: hidden;
  background: v-bind("'url(' + neonConfig.anyBoxneon + ')'") no-repeat;
  background-size: 100%;
  background-position: center 100px;
  color: #fff;
  font-weight: 600;
  font-size: 26;
}
.buttons {
  /* position: absolute;
    top: 66%; */
    /* margin-top: -60px; */
    width: 150px;
    height: 80px;
  z-index: 999;
  background: v-bind("'url(' + neonConfig.playneon + ')'") no-repeat;
  background-size: 100%;
}
.neonp-he {
  position: relative;
    margin-top: 28%;
    width: 162%;
    height: 116vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.55);
}
.neonp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.neonp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + neonConfig.anyneon + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
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
  /* background: v-bind("'url(' + neonConfig.dialogneon + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

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

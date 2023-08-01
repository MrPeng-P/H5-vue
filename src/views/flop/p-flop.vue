<script setup>
import { onMounted, reactive, ref } from "vue";
import kingdomBg from "@/assets/flop5/kingdomBg.jpg";
import kingdomGui from "@/assets/flop5/kingdomGui.png";
// import box from "@/assets/flop5/box.png";
import imgGui1 from "@/assets/flop5/kingdom1.png";
import imgGui3 from "@/assets/flop5/kingdom3.png";
import imgGui4 from "@/assets/flop5/kingdom4.png";
import imgGui5 from "@/assets/flop5/kingdom5.png";
// import imgGui2 from "@/assets/flop5/kingdom2.png";
import kingdomBack from "@/assets/flop5/kingdomBack.png";
import kingdomOver from "@/assets/flop5/kingdomOver.png";
import kingdomAgain from "@/assets/flop5/kingdomAgain.png";
import kingdomTime from "@/assets/flop5/kingdomTime.png";
// import kingdomHead from "@/assets/flop5/kingdomHead.png";
import { useRouter } from "vue-router";
import { inject } from "vue";
const ceshi = inject("reload");
const imageObj = {
  kingdomBg,
  kingdomGui,
  kingdomBack,
  kingdomTime,
  kingdomOver,
  kingdomAgain,
  // kingdomHead
  // box
};
const flotList = [
  { name: "p-diamond", img: imgGui1 },
  { name: "p-diamond", img: imgGui1 },

  { name: "p-anchor", img: imgGui3 },
  { name: "p-anchor", img: imgGui3 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-P10", img: imgGui5 },
  { name: "p-P10", img: imgGui5 },

];
const step = ref("");
const setp = ref(true);
const open = ref(true);
let FlopData = reactive({
  boxList: [],
  changeList: [],
  active: [],
  mattch: [],
});
function routeAll() {
  const router = new useRouter();
  function goDetail() {
    router.push("/detail");
  }
  function goHome() {
   
    router.push("/");
  }

  return {
    goDetail,
    goHome,
    
  };
}

const { goDetail, goHome } = routeAll();

function useFlot() {
  function reset() {
    FlopData = {
      boxList: [],
      changeList: [],
      active: [],
      mattch: [],
    };
  }
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  function run() {
    FlopData.boxList = shuffle(flotList); //"shuffle" 方法对数组中的卡片进行洗牌
  }
  function openDialog() {
    open.value = !open.value;
    ceshi()

  }

  function pclick(val, index) {
    if (!setp.value) return false;
    setp.value = false;

    if (FlopData.changeList[0]?.id == index || FlopData.mattch.includes(index)) {
      FlopData.active = [];
      FlopData.changeList = [];
      setTimeout(() => {
        setp.value = true;
      }, 500);

      return false;
    }
    FlopData.changeList.push({
      name: val.name,
      id: index,
    });

    FlopData.active.push(index);
    if (FlopData.changeList.length == 2) {
      setTimeout(() => {
        //校验
        if (FlopData.changeList[0].name == FlopData.changeList[1].name) {
          FlopData.mattch = [
            ...FlopData.mattch,
            FlopData.changeList[0].id,
            FlopData.changeList[1].id,
          ];
          if (FlopData.mattch.length == FlopData.boxList.length) {
            open.value = false;
            // reset()
            // run()
            console.log("%c ........结束...........", "color:#31ef0e");
          }
        }
        FlopData.active = [];
        FlopData.changeList = [];
      }, 1000);
    }
    setTimeout(() => {
      step.value++;
      setp.value = true;
    }, 500);
  }
  return {
    shuffle,
    run,
    pclick,
    openDialog,
  };
}
onMounted(async () => {
  const { run } = useFlot();
  await run();
});
</script>

<template>
  <div class="content">
    <div class="back-img" @click="goHome()">
      <img :src="imageObj.kingdomBack" alt="" />
    </div>
    <!-- <img class="kingdomHead" :src="imageObj.kingdomHead" alt=""> -->
    <ul class="kingdom-box">
      <li
        v-for="(item, index) in FlopData.boxList"
        class="kingdom-item"
        :class="
          FlopData.mattch.includes(index)
            ? 'mattch'
            : FlopData.active.includes(index)
            ? ''
            : 'active'
        "
        @click="useFlot().pclick(item, index)"
      >
        <div class="backkingdom"><img :src="item.img" alt="" /></div>
        <div class="backkingdom-bg"></div>
      </li>
    </ul>
    <div class="kingdom-box">
      <div class="kingdom-txt">{{ step }}</div>
      <img class="kingdom-time" :src="imageObj.kingdomTime" alt="" />
    </div>
  </div>
  <Teleport to="body">
    <div v-if="!open" class="model-kingdom" @click="useFlot().openDialog()">
      <img class="model-kingdom-star" :src="imageObj.kingdomOver" alt="" />
      <img class="model-kingdom-img" :src="imageObj.kingdomAgain" alt="" />
    </div>
  </Teleport>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  background: v-bind("'url(' + imageObj.kingdomBg + ')'") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column  ;
  align-items: center;
  box-sizing: border-box;
}
.back-img {
  position: absolute;
  top: 34px;
  left: 10%;
  /* padding:34px 20px ;
   */
}


/* .kingdom-item:nth-child(2n){
  margin:0 5px;
} */
.kingdom-box {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
}
.kingdom-txt {
  display: flex;
    justify-content: center;
    margin-right: -23px;
    width: 100px;
    text-align: center;
    font-size: 26px;
}
.kingdomHead{
  margin: -60px 0 0 20%;
width: 280px;
}
.kingdom-time {
  position: absolute;
  
  width: 270px;
}

.back-img img {
  width: 55px;
}
.kingdom-box {
  /* padding: 66px 70px 26px 67px; */
  /* background: v-bind("'url(' + imageObj.box + ')'") no-repeat; */
  background-size: 100% 100%;
  width: 67%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   /* transform: scale(0.6); */

}
.kingdom-item {
  margin-right: 4%;
  margin-bottom: 1%;
  width: 26%;
  display: flex;
  justify-content: center;
  align-items: center;
 

  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(0) ;
  transform-style: preserve-3d;
  transform-origin: center 0;
  background: v-bind("'url(' + imageObj.kingdomGui + ')'") no-repeat;
  background-size: 100% 100%;
}
.kingdom-item:nth-child(1){
  margin-left: 20%;
}
.kingdom-item:nth-child(2){
  margin-right: 20%;
}

@keyframes vanish {
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(180deg);
    opacity: 1;
  }
}

.active {
 

  /* animation: vanish 1s forwards; */
  /* transform: perspective(800px) rotateY(180deg); */
  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform:  rotateY(180deg);
  transform-origin: center 0;
  transform-style: preserve-3d;
}
.backkingdom {
  backface-visibility: hidden;
}
.mattch {
  /* background-color: aqua; */
}
.backkingdom img {
  width: 100%;
  height: 100%;
}
.backkingdom-bg {
}

.model-kingdom {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
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
.model-kingdom-star {
  /* position: absolute; */
  margin-top: -3%;
    width: 44%;
}
.model-kingdom-img {
  margin-top: 20px;
    width: 30%;
}
</style>

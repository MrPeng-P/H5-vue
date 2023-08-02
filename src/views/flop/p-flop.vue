<script setup>
import { onMounted, reactive, ref } from "vue";
import fantasyBg from "@/assets/flop7/fantasyBg.jpg";
import fantasyGui from "@/assets/flop7/fantasyGui.jpg";
// import box from "@/assets/flop7/box.png";
// import imgGui1 from "@/assets/flop7/fantasy1.jpg";
import imgGui3 from "@/assets/flop7/fantasy3.jpg";
import imgGui4 from "@/assets/flop7/fantasy4.jpg";
import imgGui5 from "@/assets/flop7/fantasy5.jpg";
import imgGui2 from "@/assets/flop7/fantasy2.jpg";
import fantasyBack from "@/assets/flop7/fantasyBack.png";
import fantasyOver from "@/assets/flop7/fantasyOver.png";
import fantasyAgain from "@/assets/flop7/fantasyAgain.png";
import fantasyTime from "@/assets/flop7/fantasyTime.png";
// import fantasyHead from "@/assets/flop7/fantasyHead.png";
import { useRouter } from "vue-router";
import { inject } from "vue";
const ceshi = inject("reload");
const imageObj = {
  fantasyBg,
  fantasyGui,
  fantasyBack,
  fantasyTime,
  fantasyOver,
  fantasyAgain,
  // fantasyHead
  // box
};
const flotList = [
  // { name: "p-diamond", img: imgGui1 },
  // { name: "p-diamond", img: imgGui1 },

  { name: "p-anchor", img: imgGui3 },
  { name: "p-anchor", img: imgGui3 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-P10", img: imgGui5 },
  { name: "p-P10", img: imgGui5 },
  { name: "p-P2", img: imgGui2 },
  { name: "p-P2", img: imgGui2 },
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
      <img :src="imageObj.fantasyBack" alt="" />
    </div>
    <!-- <img class="fantasyHead" :src="imageObj.fantasyHead" alt=""> -->
    <ul class="fantasy-box">
      <li
        v-for="(item, index) in FlopData.boxList"
        class="fantasy-item"
        :class="
          FlopData.mattch.includes(index)
            ? 'mattch'
            : FlopData.active.includes(index)
            ? ''
            : 'active'
        "
        @click="useFlot().pclick(item, index)"
      >
        <div class="backfantasy"><img :src="item.img" alt="" /></div>
        <div class="backfantasy-bg"></div>
      </li>
    </ul>
    <div class="fantasy-box">
      <div class="fantasy-txt">{{ step }}</div>
      <img class="fantasy-time" :src="imageObj.fantasyTime" alt="" />
    </div>
  </div>
  <Teleport to="body">
    <div v-if="!open" class="model-fantasy" @click="useFlot().openDialog()">
      <img class="model-fantasy-star" :src="imageObj.fantasyOver" alt="" />
      <img class="model-fantasy-img" :src="imageObj.fantasyAgain" alt="" />
    </div>
  </Teleport>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.fantasyBg + ')'") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column  ;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.back-img {
  position: absolute;
  top: 34px;
  left: 10%;
  /* padding:34px 20px ;
   */
}


/* .fantasy-item:nth-child(2n){
  margin:0 5px;
} */
.fantasy-box {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
}
.fantasy-txt {
  display: flex;
    justify-content: center;
    margin-right: -23px;
    width: 100px;
    height: 31px;
    text-align: center;
    font-size: 26px;
}
.fantasyHead{
  margin: -60px 0 0 20%;
width: 280px;
}
.fantasy-time {
  position: absolute;
  
  width: 270px;
}

.back-img img {
  width: 55px;
}
.fantasy-box {
  /* padding: 66px 70px 26px 67px; */
  /* background: v-bind("'url(' + imageObj.box + ')'") no-repeat; */
  background-size: 100% 100%;
  width: 67%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   /* transform: scale(0.6); */

}
.fantasy-item {
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
  background: v-bind("'url(' + imageObj.fantasyGui + ')'") no-repeat;
  background-size: 100% 100%;
}
.fantasy-item:nth-child(1){
  margin-left: 20%;
}
.fantasy-item:nth-child(2){
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
.backfantasy {
  backface-visibility: hidden;
}
.mattch {
  /* background-color: aqua; */
}
.backfantasy img {
  width: 100%;
  height: 100%;
}
.backfantasy-bg {
}

.model-fantasy {
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
.model-fantasy-star {
  /* position: absolute; */
  margin-top: -3%;
    width: 44%;
}
.model-fantasy-img {
  margin-top: 20px;
    width: 30%;
}
</style>

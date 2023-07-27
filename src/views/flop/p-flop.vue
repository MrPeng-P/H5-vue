<script setup>
import { onMounted, reactive, ref } from "vue";
import elvesBg from "@/assets/flop3/elvesBg.jpg";
import elvesGui from "@/assets/flop3/elvesGui.png";
// import box from "@/assets/flop3/box.png";
import imgGui1 from "@/assets/flop3/elves1.png";
import imgGui2 from "@/assets/flop3/elves2.png";
import imgGui3 from "@/assets/flop3/elves3.png";
import imgGui4 from "@/assets/flop3/elves4.png";
import imgGui5 from "@/assets/flop3/elves5.png";
// import imgGui6 from "@/assets/flop3/elves6.png";
import elvesBack from "@/assets/flop3/elvesBack.png";
import elvesOver from "@/assets/flop3/elvesOver.png";
import elvesAgain from "@/assets/flop3/elvesAgain.png";
import elvesTime from "@/assets/flop3/elvesTime.png";
import { useRouter } from "vue-router";
import { inject } from "vue";
const ceshi = inject("reload");
const imageObj = {
  elvesBg,
  elvesGui,
  elvesBack,
  elvesTime,
  elvesOver,
  elvesAgain,
  // box
};
const flotList = [
  { name: "p-diamond", img: imgGui1 },
  { name: "p-diamond", img: imgGui1 },
  { name: "p-paper-plane-o", img: imgGui2 },
  { name: "p-paper-plane-o", img: imgGui2 },
  { name: "p-anchor", img: imgGui3 },
  { name: "p-anchor", img: imgGui3 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-bolt", img: imgGui4 },
  { name: "p-P10", img: imgGui5 },
  { name: "p-P10", img: imgGui5 },
  // { name: "p-P6", img: imgGui6 },
  // { name: "p-P6", img: imgGui6 },
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
      <img :src="imageObj.elvesBack" alt="" />
    </div>
    <ul class="flop-box">
      <li
        v-for="(item, index) in FlopData.boxList"
        class="flop-item"
        :class="
          FlopData.mattch.includes(index)
            ? 'mattch'
            : FlopData.active.includes(index)
            ? ''
            : 'active'
        "
        @click="useFlot().pclick(item, index)"
      >
        <div class="backface"><img :src="item.img" alt="" /></div>
        <div class="backface-bg"></div>
      </li>
    </ul>
    <div class="use-box">
      <div class="use-txt">{{ step }}</div>
      <img class="use-time" :src="imageObj.elvesTime" alt="" />
    </div>
  </div>
  <Teleport to="body">
    <div v-if="!open" class="modal" @click="useFlot().openDialog()">
      <img class="model-star" :src="imageObj.elvesOver" alt="" />
      <img class="model-img" :src="imageObj.elvesAgain" alt="" />
    </div>
  </Teleport>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.elvesBg + ')'") no-repeat;
  background-size: 100% 100%;
}
.back-img {
  padding: 60px 20px 0px;
}

.flop-item:nth-child(1){
  margin-left: 10px;
  /* margin-left: 10%; */
}
.flop-item:nth-child(2){
  margin-right: 10px;
}
.use-box {
  position: relative;

  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
}
.use-txt {
  display: flex;
  justify-content: center;
  margin-right: -7px;
  width: 100px;
  text-align: center;
  font-size: 20px;
}
.use-time {
  position: absolute;

  width: 200px;
}
.back-img img {
  width: 55px;
}
.flop-box {
  padding: 66px 70px 26px 67px;
  /* background: v-bind("'url(' + imageObj.box + ')'") no-repeat; */
  background-size: 100% 100%;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform: scale(1.05);
}
.flop-item {
  width: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;

  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(0) ;
  transform-style: preserve-3d;
  transform-origin: center 0;
  background: v-bind("'url(' + imageObj.elvesGui + ')'") no-repeat;
  background-size: 100% 100%;
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
.backface {
  backface-visibility: hidden;
}
.mattch {
  /* background-color: aqua; */
}
.backface img {
  width: 100%;
  height: 100%;
}
.backface-bg {
}

.modal {
  padding-top: 140px;
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
.model-star {
  /* position: absolute; */
  width: 80%;
}
.model-img {
  margin-top: 20px;
  width: 60%;
}
</style>

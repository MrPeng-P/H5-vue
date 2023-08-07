<script setup>
import { onMounted, reactive, ref } from "vue";
import beachBg from "@/assets/flop10/beachBg.jpg";
import beachGui from "@/assets/flop10/beachGui.png";
// import box from "@/assets/flop10/box.png";
import imgGui1 from "@/assets/flop10/beach1.png";
import imgGui3 from "@/assets/flop10/beach3.png";
import imgGui4 from "@/assets/flop10/beach4.png";
import imgGui5 from "@/assets/flop10/beach5.png";
import imgGui2 from "@/assets/flop10/beach2.png";
import beachBack from "@/assets/flop10/beachBack.png";
import beachOver from "@/assets/flop10/beachOver.png";
import beachAgain from "@/assets/flop10/beachAgain.png";
import beachTime from "@/assets/flop10/beachTime.png";
// import beachHead from "@/assets/flop10/beachHead.png";
import { useRouter } from "vue-router";
import { inject } from "vue";
const ceshi = inject("reload");
const imageObj = {
  beachBg,
  beachGui,
  beachBack,
  beachTime,
  beachOver,
  beachAgain,
  // beachHead
  // box
};
const flotList = [
  { name: "p-diamond", img: imgGui5 },
  { name: "p-diamond", img: imgGui5 },

  { name: "p-anchor", img: imgGui3 },
  { name: "p-anchor", img: imgGui3 },
  { name: "p-bolt", img: imgGui1 },
  { name: "p-bolt", img: imgGui1 },
  { name: "p-P10", img: imgGui4 },
  { name: "p-P10", img: imgGui4 },
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
      <img :src="imageObj.beachBack" alt="" />
    </div>
    <!-- <img class="beachHead" :src="imageObj.beachHead" alt=""> -->
    <ul class="beach-box">
      <li
        v-for="(item, index) in FlopData.boxList"
        class="beach-item"
        :class="
          FlopData.mattch.includes(index)
            ? 'mattch'
            : FlopData.active.includes(index)
            ? ''
            : 'active'
        "
        @click="useFlot().pclick(item, index)"
      >
        <div class="backbeach"><img :src="item.img" alt="" /></div>
        <div class="backbeach-bg"></div>
      </li>
    </ul>
    <div class="beach-boxs">
      <div class="beach-txt">{{ step }}</div>
      <img class="beach-time" :src="imageObj.beachTime" alt="" />
    </div>
  </div>
  <Teleport to="body">
    <div v-if="!open" class="model-beach" @click="useFlot().openDialog()">
      <img class="model-beach-star" :src="imageObj.beachOver" alt="" />
      <img class="model-beach-img" :src="imageObj.beachAgain" alt="" />
    </div>
  </Teleport>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.beachBg + ')'") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column  ;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}
.back-img {
  position: absolute;
  top: 34px;
  right: 15%;
  /* padding:34px 20px ;
   */
}


/* .beach-item:nth-child(2n){
  margin:0 5px;
} */
.beach-boxs {
  position: absolute;
  bottom: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
}
.beach-txt {
  display: flex;
    justify-content: center;
    margin-right: -23px;
    width: 100px;
    height: 80px;
    text-align: center;
    font-size: 26px;
}
.beachHead{
  margin: -60px 0 0 20%;
width: 280px;
}
.beach-time {
  position: absolute;
  
  width:33%;
}

.back-img img {
  width: 55px;
}
.beach-box {
  /* padding: 66px 70px 26px 67px; */
  /* background: v-bind("'url(' + imageObj.box + ')'") no-repeat; */
  background-size: 100% 100%;
  width: 75%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   /* transform: scale(0.6); */

}
.beach-item {
  margin-right: 2%;
  margin-bottom: 1%;
  width: 20%;
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
 

  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(0) ;
  transform-style: preserve-3d;
  transform-origin: center 0;
  background: v-bind("'url(' + imageObj.beachGui + ')'") no-repeat;
  background-size: 100% 100%;
}
.beach-item:nth-child(1){
  margin:0  40%;
}
.beach-item:nth-child(2){
  margin-top: -3%;
  margin-left: 10%;
}
.beach-item:nth-child(4){
  margin-top: -3%;
  margin-right: 10%;
}
.beach-item:nth-child(5){
  /* margin-top: -10%; */
  margin-right: 46%;
}
.beach-item:nth-child(5){
  /* margin-top: -10%; */
  margin-right: 46%;
}
.beach-item:nth-child(n+5){
  margin-bottom: 4%;
  margin-top: -4%;
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
.backbeach {
  backface-visibility: hidden;
}
.mattch {
  /* background-color: aqua; */
}
.backbeach img {
  width: 100%;
  height: 100%;
}
.backbeach-bg {
}

.model-beach {
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
.model-beach-star {
  /* position: absolute; */
  margin-top: -3%;
    width: 44%;
}
.model-beach-img {
  margin-top: 20px;
    width: 30%;
}
</style>

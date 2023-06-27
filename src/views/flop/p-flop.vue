<script setup>
import { onMounted, reactive, ref } from "vue";
import bgBox from "@/assets/flop/bg-2.jpg";
import picZ from "@/assets/flop/pic-z.png";
import picF from "@/assets/flop/pic-f.png";
import picT from "@/assets/flop/pic-t.png";
import imgPicA from "@/assets/flop/a.png";
import imgPicJ from "@/assets/flop/j.png";
import imgPicK from "@/assets/flop/k.png";
import imgPicQ from "@/assets/flop/q.png";
import imgPic10 from "@/assets/flop/p10.png";
import imgBack from "@/assets/flop/back.png";
import imgOver from "@/assets/flop/over.png";
import imgAgain from "@/assets/flop/again.png";
import useTime from "@/assets/flop/use-time.png";
import { useRouter } from "vue-router";
import { inject } from "vue";
const ceshi = inject("reload");
const imageObj = {
  bgBox,
  picZ,
  picF,
  picT,
  imgBack,
  useTime,
  imgOver,
  imgAgain,
};
const flotList = [
  { name: "p-diamond", img: imgPicA },
  { name: "p-diamond", img: imgPicA },
  { name: "p-paper-plane-o", img: imgPicJ },
  { name: "p-paper-plane-o", img: imgPicJ },
  { name: "p-anchor", img: imgPicK },
  { name: "p-anchor", img: imgPicK },
  { name: "p-bolt", img: imgPicQ },
  { name: "p-bolt", img: imgPicQ },
  { name: "p-P10", img: imgPic10 },
  { name: "p-P10", img: imgPic10 },
];
const step = ref("");
const setp = ref(true);
const open = ref(true);
let Parr = reactive({
  dataList: [],
  clickList: [],
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
    Parr = {
      dataList: [],
      clickList: [],
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
    Parr.dataList = shuffle(flotList); //"shuffle" 方法对数组中的卡片进行洗牌
  }
  function openDialog() {
    open.value = !open.value;
    ceshi()

  }

  function pclick(val, index) {
    if (!setp.value) return false;
    setp.value = false;

    if (Parr.clickList[0]?.id == index || Parr.mattch.includes(index)) {
      Parr.active = [];
      Parr.clickList = [];
      setTimeout(() => {
        setp.value = true;
      }, 500);

      return false;
    }
    Parr.clickList.push({
      name: val.name,
      id: index,
    });

    Parr.active.push(index);
    if (Parr.clickList.length == 2) {
      setTimeout(() => {
        //校验
        if (Parr.clickList[0].name == Parr.clickList[1].name) {
          Parr.mattch = [
            ...Parr.mattch,
            Parr.clickList[0].id,
            Parr.clickList[1].id,
          ];
          if (Parr.mattch.length == Parr.dataList.length) {
            open.value = false;
            // reset()
            // run()
            console.log("%c ........结束...........", "color:#31ef0e");
          }
        }
        Parr.active = [];
        Parr.clickList = [];
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
      <img :src="imageObj.imgBack" alt="" />
    </div>
    <ul class="flop-box">
      <li
        v-for="(item, index) in Parr.dataList"
        class="flop-item"
        :class="
          Parr.mattch.includes(index)
            ? 'mattch'
            : Parr.active.includes(index)
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
      <img class="use-time" :src="imageObj.useTime" alt="" />
    </div>
  </div>
  <Teleport to="body">
    <div v-if="!open" class="modal" @click="useFlot().openDialog()">
      <img class="model-star" :src="imageObj.imgOver" alt="" />
      <img class="model-img" :src="imageObj.imgAgain" alt="" />
    </div>
  </Teleport>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + imageObj.bgBox + ')'") no-repeat;
  background-size: cover;
}
.back-img {
  padding: 20px;
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
  margin-right: 20px;
  width: 100px;
  text-align: center;
  font-size: 20px;
}
.use-time {
  position: absolute;

  width: 200px;
}
.back-img img {
  width: 40px;
}
.flop-box {
  padding: 0 10%;

  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform: scale(1.05);
}
.flop-item {
  width: 27%;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 80px;
  background: v-bind("'url(' + imageObj.picF + ')'") no-repeat;
  background-size: 100% 100%;

  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(0);
  transform-style: preserve-3d;
}
.flop-item:nth-child(1) {
  margin-left: 20%;
}
.flop-item:nth-child(2) {
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
  background: v-bind("'url(' + imageObj.picZ + ')'") no-repeat;
  background-size: 100% 100%;

  /* animation: vanish 0.5s forwards; */
  /* transform: perspective(800px) rotateY(180deg); */
  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(180deg);
  transform-style: preserve-3d;
}
.backface {
  backface-visibility: hidden;
}
.mattch {
  /* background-color: aqua; */
  background: v-bind("'url(' + imageObj.picT + ')'") no-repeat;
  background-size: 100% 100%;
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

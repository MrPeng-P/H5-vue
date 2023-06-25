<script setup>
import bgTree from "@/assets/flop/back-1.jpg";

import { onMounted, reactive,ref } from "vue";

const flotList = [
  "p-diamond",
  "p-diamond",
  "p-paper-plane-o",
  "p-paper-plane-o",
  "p-anchor",
  "p-anchor",
  "p-bolt",
  "p-bolt",
  "p-cube",
  "p-cube",
  "p-anchor",
  "p-anchor",
  "p-leaf",
  "p-leaf",
  "p-bicycle",
  "p-bicycle",
];
const step=ref('')
const setp=ref(true)
let Parr = reactive({
  dataList: [],
  clickList: [],
  active: [],
  mattch: [],
});

function useFlot() {
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

  function pclick(val, index) {

    if(!setp.value) return false
    setp.value=false
    
    if (Parr.clickList[0]?.id == index) {
        Parr.active = [];
        Parr.clickList = [];
        setTimeout(()=>{
        setp.value=true
    },500)

      return false;
    }
    Parr.clickList.push({
      name: val,
      id: index,
    });
    step.value++
   
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
        }
        Parr.active = [];
        Parr.clickList = [];
        
      }, 1000);
    }
    setTimeout(()=>{
        setp.value=true
    },500)
 
  }
  return {
    shuffle,
    run,
    pclick,
  };
}
onMounted(async () => {
  const { run } = useFlot();
  await run();
});
</script>

<template>
  <div class="content">
    <div>步数：{{ step }}</div>
    <ul class="flop-box">
      <li
        v-for="(item, index) in Parr.dataList"
        class="flop-item   "
        :class="
          Parr.mattch.includes(index)
            ? 'mattch'
            : Parr.active.includes(index)
            ? ''
            : 'active'
        "
        @click="useFlot().pclick(item, index)"
      >
       <div class="backface"> {{ item }}</div>
       <div class="backface-bg"></div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.content {
   
  width: 100%;
  height: 100%;
}
.flop-box {
    width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flop-item {
  height: 100px;
  width: 80px;
  border: 1px solid #ccc;
  background-color: red;
    transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(0);
    transform-style: preserve-3d;
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

.mattch {
  background-color: aqua;

}
.active {
    background-color: #000;

  /* animation: vanish 0.5s forwards; */
  /* transform: perspective(800px) rotateY(180deg); */
  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: perspective(800px) rotateY(180deg);
    transform-style: preserve-3d;
}
.backface{
    backface-visibility:hidden;
}
.backface-bg{

}
</style>

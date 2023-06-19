<script>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import bgTree from "@/assets/image-route/bg-tree.jpg";

import imgback from "@/assets/image-route/back.png";
import play from "@/assets/image-route/play.png";
import start from "@/assets/image-route/start.png";
import center from "@/assets/image-route/center.png";
import bgAuto from "@/assets/image-route/bg-auto.png";
import auto1n from "@/assets/image-route/auto1.png";
import auto2 from "@/assets/image-route/auto2.png";
import auto3 from "@/assets/image-route/auto3.png";
import auto4 from "@/assets/image-route/auto4.png";
import auto5 from "@/assets/image-route/auto5.png";
import auto6 from "@/assets/image-route/auto6.png";
import auto7 from "@/assets/image-route/auto7.png";
import auto8 from "@/assets/image-route/auto8.png";
import auto9 from "@/assets/image-route/auto9.png";
import auto10 from "@/assets/image-route/auto10.png";
import auto11 from "@/assets/image-route/auto11.png";
import auto12 from "@/assets/image-route/auto12.png";
export default {
  setup() {
    let imageReat=reactive({
      bgAuto,
    })
    const imageObj = {
      center,
      bgTree,
      imgback,
      play,
      start,
      auto1n,
      auto2,
      auto3,
      auto4,
      auto5,
      auto6,
      auto7,
      auto8,
      auto9,
      auto10,
      auto11,
      auto12,
    };
    const router = new useRouter();
    const open=ref(false)
    const item1 = ref("item1");
    function randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    }
    let obj = reactive({
      resultList: [
        {
          prize_img: imageObj.auto1n,
          prize_id: "c10",
          order: 1,
        },
        {
          prize_img: imageObj.auto2,
          prize_id: "c20",
          order: 2,
        },
        {
          prize_img: imageObj.auto3,
          prize_id: "c30",
          order: 3,
        },
        {
          prize_img: imageObj.auto4,
          prize_id: "c30",
          order: 4,
        },
        {
          prize_img: imageObj.auto12,
          prize_id: "c120",
          order: 12,
        },
        {
          prize_img: imageObj.auto5,
          prize_id: "c50",
          order: 5,
        },

        { order: -9 },
        {
          prize_img: imageObj.auto11,
          prize_id: "c110",
          order: 11,
        },

        {
          prize_img: imageObj.auto6,
          prize_id: "c60",
          order: 6,
        },

        {
          prize_img: imageObj.auto10,
          prize_id: "c100",
          order: 10,
        },

        {
          prize_img: imageObj.auto9,
          prize_id: "c90",
          order: 9,
        },
        {
          prize_img: imageObj.auto8,
          prize_id: "c80",
          order: 8,
        },
        {
          prize_img: imageObj.auto7,
          prize_id: "c70",
          order: 7,
        },
      ], // 奖品列表
      isTurn: true, // 是否可以抽奖
      index: 2, //当前转动到哪个位置，起点位置
      lotterywin: -9, // 中奖位置
      lottery: {
        count: 12, //总共有多少个位置
        timer: 0, //setTimeout的ID，用clearTimeout清除
        speed: 35, //初始转动速度
        times: 0, //转动次数
        cynum: randomNum(40, 60), // 圈数
        win: 0, //中奖位置 0 默认不中奖
      },
    });
    const allMethods = {
      startLottery: () => {
        var slots = document.getElementsByClassName("slot");
        // 移除所有slot的结果类名
        for (var i = 0; i < slots.length; i++) {
          slots[i].classList.remove("result");
        }

        // 随机选取一个结果
        var randomIndex = Math.floor(Math.random() * slots.length);

        // 添加结果类名
        slots[randomIndex].classList.add("result");

        // 滚动到选中的结果位置
        var board = document.getElementById("roulette-board");
        var selectedSlot = slots[randomIndex];
        var boardRect = board.getBoundingClientRect();
        var selectedSlotRect = selectedSlot.getBoundingClientRect();
        var offsetTop = selectedSlotRect.top - boardRect.top;
        var offsetLeft = selectedSlotRect.left - boardRect.left;
        board.style.transform =
          "translate(" + -offsetLeft + "px, " + -offsetTop + "px)";

        // 显示抽奖结果
        var result = slots[randomIndex].innerText;
        alert("抽奖结果：" + result);

        // 3秒后重置轮盘位置
        setTimeout(function () {
          board.style.transform = "translate(0, 0)";
        }, 3000);
      },
      startGo() {
        if (!obj.isTurn) return;
        obj.isTurn = false; // 等待下一次开启 注：接口失败等异常情况 需要重置
        // await api 获取中奖信息 （因为数据结构的定义，这里拿到中奖位置将变得非常 esay）
        let win = randomNum(1, 8); // 中奖位置
        if (!win) return;
        //   this.$emit('change', 'start', {})
        obj.lotterywin = win;
        allMethods._rolling();
      },
      resetData() {
        // 数据重置
        obj.index = 2;
        obj.isTurn = true;
        obj.lottery = {
          count: 12, // 位置数量 九宫格八个奖品位置
          timer: 0, // setTimeout 容器
          speed: 35, //初始转动速度
          times: 0, //转动次数
          cynum: randomNum(40, 60), // 圈数
          end: 0, //中奖位置 0 默认不中奖
        };
        
      },
      _roll_actived() {
        // running 选中的状态
        if (obj.index > obj.lottery.count) obj.index = 1;
      },
      _rolling() {
        obj.lottery.times++;

        allMethods._roll_actived();

        // +10 将速度降下来的圈数周期
        if (
          obj.lottery.times > obj.lottery.cynum + 10 &&
          obj.lotterywin === obj.index
        ) {
          open.value=true
          router.push('/over')
          clearTimeout(obj.lottery.timer);
          setTimeout(() => {
            allMethods.resetData();
            //   this.$emit('change', 'fin', {})
          }, 1000); // 此时间给予用户感受中奖反馈时间
        } else {
          obj.index++;

          if (obj.lottery.times > obj.lottery.cynum) obj.lottery.speed += 20; // 惯性 越来越慢
          obj.lottery.timer = setTimeout(
            allMethods._rolling,
            obj.lottery.speed
          );
        }
      },
      openDialog(){
        open.value=!open.value
      },goBack(){
        router.push('/')
      }
    };

    return {
      ...allMethods,
      item1,
      obj,
      imageObj,
      imageReat,
      open,
    };
  },
};
</script>

<template>
  <div class="sudoku-container">
    <div class="sudoku-back" @click="goBack">
      <img :src="imageObj.imgback" alt="" />
    </div>
    <div class="sudoku-wrap">
      <ul>
        <li
          v-for="(item, index) in obj.resultList"
          :ref="`item${item.order}`"
          :data-index="item.order"
          :class="
            item.order >= 1
              ? item.order == obj.index - 1
                ? 'rw active'
                : 'rw'
              : ''
          "
          :key="item.prize_id"
        >
          <div v-if="item.order !== -9">
            <div class="header"><img :src="item.prize_img" alt="" /></div>
            <div class="name">
            </div>
          </div>
          <div v-else class="start" >
            <img :src="imageObj.center" alt=""> 

          </div>
        </li>
      </ul>
    </div>

    <div class="button-box">
      <div class="buttom-item" @click.stop.prevent="startGo"><img :src="imageObj.play" alt=""> </div>
      <div class="buttom-item" @click.stop.prevent="startGo"><img :src="imageObj.start" alt=""> </div>

    </div>
  </div>
  <!-- <Teleport to="body">
      <div v-if="open" class="modal" @click="openDialog">
        <img  class="model-img" :src="imageObj.imgResult" alt="">
      </div>
    </Teleport> -->
</template>
<style scoped>
/* @import url("@/assets/reset.css"); */
.button-box{
  margin-top: 10vh;
  display: flex;
  justify-content: space-evenly;
}

.buttom-item{
  width: 100px;
}
.buttom-item img{
  width: 100%;
}
.modal{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.model-img{
  width: 90%;
}
.sudoku-back{
  margin-top: 20px;
  width: 100px;
}
.sudoku-back img{
  margin-left: 20px;
  width: 80%;
  height: 80%;
}
.sudoku-container {
  width:100vw;
  height: 100vh;
  display: inline-block;
  background: v-bind("'url(' + imageObj.bgTree + ')'") no-repeat;
  background-size: cover;
  background-position: 45%;

}
.sudoku-container section {
  margin: 0 auto;
}
.sudoku-wrap {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 20px auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  /* background: v-bind("'url(' + imageObj.bgBox + ')'") no-repeat; */
  background-size: 100%;
}
.sudoku-wrap ul {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  /* grid-row-gap: 4px;
  grid-column-gap:4px; */
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  width: 85vw;
  height: 85vw;
  margin: 0 auto;
  background-color: rgb(0, 0, 0,0.3);
  border-radius: 10px;
}
.sudoku-wrap ul li {
  
  width: 100%;
  height: 100%;

  position: relative;
}

.sudoku-wrap ul li:nth-child(7) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
}
.sudoku-wrap ul li:nth-child(3),
.sudoku-wrap ul li:nth-child(6),
.sudoku-wrap ul li:nth-child(9) {
  margin-right: 0;
}
.sudoku-wrap ul li:nth-child(7),
.sudoku-wrap ul li:nth-child(8),
.sudoku-wrap ul li:nth-child(9) {
  margin-bottom: 0;
}
.sudoku-wrap ul li img {
  width: 100%;
}
.sudoku-wrap ul .start {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-image: url('img/start.png'); */
  /* background: v-bind("'url(' + imageObj.play + ')'") no-repeat; */
  
  background-repeat: no-repeat;
  background-size: 80% 80%;
  background-position: center center;
}
.sudoku-wrap ul li.xx .item-xx {
  width: 1rem;
  height: 1rem;
  line-height: 0.4rem;
  margin: 0.2rem auto 0 auto;
  background-color: #041726;
  padding: 0.14rem 0.14rem 0.14rem 0.16rem;
  font-size: 0.33rem;
  color: #035d68;
}
.sudoku-wrap ul li.rw {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: v-bind("'url(' + imageReat.bgItem + ')'") ; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}
.sudoku-wrap ul li.rw .header {
  height: 30%;
}
.sudoku-wrap ul li.rw img {
  width: 87%;
  height: 87%;
  margin: 0 auto;
}
.sudoku-wrap ul li.rw .name {
  width: 100%;
  height: 100%;
  line-height: 0.32rem;
  margin: 0 auto;
  text-align: center;
  font-size: 0.23rem;
  /* background-image: url("img/name_bg.png"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  color: #00ffff;
}
.sudoku-wrap ul li.active{
  background-image: v-bind("'url(' + imageReat.bgAuto + ')'") ;
  background-size: cover;

}
.sudoku-wrap ul li.active::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0.05rem;
  width: 100%;
  height: 100%;
  /* background-color: rgba(188, 133, 28, 0.3); */

}
.sudoku-wrap ul li.active .name {
  /* background-image: url('img/name_current_bg.png'); */
  /* background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  color: #fff; */
}
</style>

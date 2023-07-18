<template>
  <div class="original-animate-wrap">
    <div class="original-bg" >
      <img :src="stateData.prize_img" alt="" />
    </div>
    <div class="original-run" @click="run" :style="rotateStyle">
      <img :src="objImg.originalIndex" alt="" />
    </div>
    <div class="original-mork-wrap" @touchmove.prevent.stop v-if="isrun"></div>
    <!-- 抽奖进行中，禁用页面所有操作 z-index: 99; -->
    <img class="box-originalHead" :src="objImg.originalHead" alt="" />
  </div>
  <div class="original-index">
    <img class="originalPlay" @click="run" :src="objImg.originalPlay" alt="" />
  </div>
  <div class="original-index">
    <img class="originalPlay-result" :src="objImg.originalTime" alt="" />
  </div>

  <Teleport to="body">
    <div v-if="open" class="modal" @click="openDialog">
      <!-- 12312 -->
      <div class="model-img">
        <img class="model-bg" :src="objImg.originalDialog" alt="" />
        <!-- <img  class="model-item" :src="objImg.originalStar" alt=""> -->
      </div>
      <div class="model-txt">
        Congratulations on winning： {{ dialImg.dialImg.coin }}
      </div>
    </div>
  </Teleport>
</template>
<script>
import { reactive, ref, computed, watchEffect } from "vue";
import originalIndex from "@/assets/dial10/originalIndex.png";
import originalPlay from "@/assets/dial10/originalPlay.png";
import originalTime from "@/assets/dial10/originalTime.png";
import originalDialog from "@/assets/dial10/originalDialog.png";

import originalHead from "@/assets/dial10/originalHead.png";
// import originalStar from "@/assets/dial10/originalStar.gif";

export default {
  props: {
    httpData: {}, // 接口调用所需参数
    stateData: {
      type: Object,
      default: () => {
        return {
          coin: 0, // 超级币数量
          prize_img: "", // 转盘图片
        };
      },
    },
  },
  setup(props, content) {
    const { emit } = content;
    let isrun = ref(false);
    const rotateItem = 360 / 8; //每一项角度
    let open = ref(false);
    let rotateAngle = ref(0);
    const objImg = reactive({
      originalIndex,
      originalPlay,
      originalTime,
      originalDialog,
      originalHead,
      // originalStar
    });

    let config = reactive({
      duration: 5000, // 总旋转时间 ms级
      circle: 5 + parseInt(Math.ceil(Math.random() * 100)) / 100, // 旋转圈数
      mode: "ease-in-out", // 由快到慢 惯性效果都省了
    });
    let dialImg = reactive({
      dialImg: {},
    });
    let dialList = [
      {
        name: "p1",
        deg: 8,
        coin: 1000,
      },
      {
        name: "p2",
        deg: 7,
        coin: 800,
      },
      {
        name: "p3",
        deg: 6,
        coin: -1000 ,
      },
      {
        name: "p4",
        deg: 5,
        coin: +2000,
      },
      {
        name: "p5",
        deg: 4,
        coin: 500,
      },
      {
        name: "p6",
        deg: 3,
        coin: 300,
      },
      {
        name: "p7",
        deg: 2,
        coin: 500,
      },
      {
        name: "p8",
        deg: 1,
        coin: -600,
      },
     
    ];
    let cricleAdd = ref(1);
    let drawIndex = ref(0);
    // 计算属性
    const _c = config;
    let rotateStyle = ref(`
        -webkit-transition: transform ${_c.duration}ms ${_c.mode};
        transition: transform ${_c.duration}ms ${_c.mode};
        -webkit-transform: rotate(${rotateAngle.value}deg);
            transform: rotate(${rotateAngle.value }deg);`);

    watchEffect(() => {
      console.log("open.value:", open.value);
      console.log(
        "%c ..........rotateAngle.value.........",
        "color:#31ef0e",
        rotateAngle.value
      );

      if (!open.value) {
        rotateStyle.value = `
        -webkit-transition: transform ${_c.duration}ms ${_c.mode};
        transition: transform ${_c.duration}ms ${_c.mode};
        -webkit-transform: rotateZ(${rotateAngle.value+25.5}deg);
            transform: rotateZ(${rotateAngle.value+25.5 }deg);`;
        if (rotateAngle.value == 0) {
          rotateStyle.value = `
        -webkit-transition: transform ${0}ms ${_c.mode};
        transition: transform ${0}ms ${_c.mode};
        -webkit-transform: rotateZ(${25.5}deg);
            transform: rotateZ(${25.5}deg);`;
        }
      } else {
      }
    });
    const allMethods = {
      openDialog: () => {
        rotateAngle.value = 0;
        // rotateStyle
        open.value = false;
      },
      async run() {
        if (props.stateData.coin < 100) {
          console.log("超级币不足");
          return;
        }
        if (isrun.value) return;
        config.circle = 5 + parseInt(Math.ceil(Math.random() * 100)) / 100;
        // const data = await this.goDraw()
        // 可以作为弹窗等信息展示
        emit("draw_fin", "originalPlay");
        //更新积分
        emit("changeCoin", {
          coin: props.stateData.coin - 100,
        });
        // this.$set(props.stateData, "coin", 0); // 更新数据，此处仅为示例，推荐使用 draw_fin方法的 originalPlay/fin 进行相应数据更新
        isrun.value = true;
        rotateAngle.value =
          config.circle * 360 * cricleAdd.value - drawIndex.value * 45 +25.5;
        // 圈数位置解析
        // this.config.circle * 360 * this.cricleAdd 顺时针总圈数/累积总圈数
        // 25.5 + this.drawIndex * 45 ===> (奖品位置 === this.drawIndex * 45) (指针中间位置 === 25.5)
        //旋转角度
        const rotates = rotateAngle.value % 360;

        const dialItem = dialList.filter((item) => {
          return (
            rotates / rotateItem < item.deg &&
            rotates / rotateItem > item.deg - 1
          );
        });
        console.log(
          "%c ..........dialItem.........",
          "color:#31ef0e",
          "恭喜中奖：" + dialItem[0].name
        );
        dialImg.dialImg = { ...dialItem[0] };
        // cricleAdd.value++;
        setTimeout(() => {
          open.value = true;
          isrun.value = false;
          emit("changeCoin", {
            coin: props.stateData.coin + dialItem[0].coin,
          });

          // rotateAngle.value=0
        }, config.duration);
      },
      goDraw() {
        // 请求接口拿到中奖商品
        // 加下自己项目的样式 loading 用户体验
        return new Promise(async (resolve, reject) => {
          // await 奖品接口
          resolve({
            msg: "抽奖明细",
          });
        });
      },
    };
    return {
      isrun,
      rotateAngle,
      config,
      cricleAdd,
      drawIndex,
      ...allMethods,
      rotateStyle,
      objImg,
      open,
      dialImg,
    };
  },
};
</script>
<style scoped>


.box-originalHead {
  position: absolute;
    top: -18%;
    width: 100%;
    z-index: -1;
   
  animation: scaleAnimation 2s infinite; /* 应用动画效果，持续时间为3秒，无限循环 */
}
.original-mork-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

.original-animate-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow-y: hidden; */
  z-index: 1;
}
.original-bg {
  margin-top: 60px;
  /* transform: rotate(23deg); */
}
.original-animate-wrap .original-bg img {
  width: 100%;
  height: 100%;
}

.original-animate-wrap .original-run {
  width: 3rem;
    height: 3rem;
    /* background-size: contain; */
    /* background-position: center -20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 7%;
    right: 0;
    top: -9%;
    bottom: 0;
    margin: auto;
    text-align: center;
}

.original-animate-wrap .original-run img {
  margin-top: -49%;
    width: 21%;
}

.original-animate-wrap .original-run div {
  font-size: 0.3rem;
  font-weight: bold;
  color: #ff1717;
  line-height: 0.3rem;
  padding-top: 1.22rem;
  padding-bottom: 0.21rem;
}

.original-animate-wrap .original-run p {
  font-size: 0.2rem;
  font-weight: bold;
  color: #834f36;
  line-height: 0.2rem;
}
.originalPlay {
  margin: 0vh auto 0;
  width: 130px;
  animation: scaleAnimation 1.5s infinite; /* 应用动画效果，持续时间为3秒，无限循环 */

}

.originalPlay-result {
  margin: 10px auto 0;
  width: 100px;
}
.original-index{
  position: relative;
  z-index: 2;
}
.modal {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: absolute;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  color: #fff;
  font-size: 16px;
  /* background: v-bind("'url(' + cssConfig.bgImage + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-img {
  margin-top: 120px;
  position: relative;
  width: 100%;
}
.model-bg {
  margin: 0 auto;
  margin-left: 23px;
  width: 85%;
}
.model-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
}

.model-txt {
  margin-top: -10px;
}


@keyframes scaleAnimation {
  0% {
    transform: scale(1) ; /* 初始状态，文字大小不变 */

  }
  50% {
    transform: scale(1.2) ; /* 中间状态，文字放大到原大小的1.5倍 */

  }
  100% {
    transform: scale(1) ; /* 结束状态，文字大小恢复原大小 */

  }
}


</style>

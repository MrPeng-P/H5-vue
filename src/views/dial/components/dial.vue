<template>
  <div class="dining-animate-wrap">
    <div class="dining-bg" :style="rotateStyle">
      <img :src="stateData.prize_img" alt="" />
    </div>
    <div class="dining-run" @click="run">
      <img :src="objImg.diningIndex" alt="" />
    </div>
    <div class="dining-mork-wrap" @touchmove.prevent.stop v-if="isrun"></div>
    <!-- 抽奖进行中，禁用页面所有操作 z-index: 99; -->
    <img class="box-diningHead" :src="objImg.diningHead" alt="" />
  </div>
  <div>
    <img class="diningPlay" @click="run" :src="objImg.diningPlay" alt="" />
  </div>
  <div>
    <img class="diningPlay-result" :src="objImg.diningTime" alt="" />
  </div>

  <Teleport to="body">
    <div v-if="open" class="modal" @click="openDialog">
      <!-- 12312 -->
      <div class="model-img">
        <img class="model-bg" :src="objImg.diningDialog" alt="" />
        <img  class="model-item" :src="objImg.diningStar" alt="">
      </div>
      <div class="model-txt">
        Congratulations on winning： {{ dialImg.dialImg.coin }}
      </div>
    </div>
  </Teleport>
</template>
<script>
import { reactive, ref, computed, watchEffect } from "vue";
import diningIndex from "@/assets/dial6/diningIndex.png";
import diningPlay from "@/assets/dial6/diningPlay.png";
import diningTime from "@/assets/dial6/diningTime.png";
import diningDialog from "@/assets/dial6/diningDialog.png";

import diningHead from "@/assets/dial6/diningHead.png";
import diningStar from "@/assets/dial6/diningStar.gif";

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
    const rotateItem = 360 / 6; //每一项角度
    let open = ref(false);
    let rotateAngle = ref(0);
    const objImg = reactive({
      diningIndex,
      diningPlay,
      diningTime,
      diningDialog,
      diningHead,
      diningStar
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
        coin: 30 * 200,
      },
      {
        name: "p2",
        deg: 1,
        coin: 60 * 100,
      },
      {
        name: "p3",
        deg: 2,
        coin: 80 * 200,
      },
      {
        name: "p4",
        deg: 3,
        coin: 50 * 70,
      },
      {
        name: "p5",
        deg: 4,
        coin: 150 * 30,
      },
      {
        name: "p6",
        deg: 5,
        coin: 500 * 20,
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
        -webkit-transform: rotate(${rotateAngle.value}deg);
            transform: rotate(${rotateAngle.value }deg);`;
        if (rotateAngle.value == 0) {
          rotateStyle.value = `
        -webkit-transition: transform ${0}ms ${_c.mode};
        transition: transform ${0}ms ${_c.mode};
        -webkit-transform: rotate(${0}deg);
            transform: rotate(${0}deg);`;
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
        emit("draw_fin", "diningPlay");
        //更新积分
        emit("changeCoin", {
          coin: props.stateData.coin - 100,
        });
        // this.$set(props.stateData, "coin", 0); // 更新数据，此处仅为示例，推荐使用 draw_fin方法的 diningPlay/fin 进行相应数据更新
        isrun.value = true;
        rotateAngle.value =
          config.circle * 360 * cricleAdd.value - drawIndex.value * 60;
        // 圈数位置解析
        // this.config.circle * 360 * this.cricleAdd 顺时针总圈数/累积总圈数
        // 22.5 + this.drawIndex * 45 ===> (奖品位置 === this.drawIndex * 45) (指针中间位置 === 22.5)
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
.box-diningHead {
  position: absolute;
  top: -16%;
  left: 50%;
  width: 290px;
  transform: translateX(-50%);
}
.dining-mork-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

.dining-animate-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow-y: hidden; */
}
.dining-bg {
  transform: rotate(23deg);
}
.dining-animate-wrap .dining-bg img {
  width: 100%;
  height: 100%;
}

.dining-animate-wrap .dining-run {
  width: 5rem;
  height: 5rem;
  /* background: v-bind("'url(' + objImg.diningIndex + ')'") no-repeat; */

  /* background-size: contain; */
  /* background-position: center -20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 28%;
  bottom: 0;
  margin: auto;
  text-align: center;
}

.dining-animate-wrap .dining-run img {
  margin-top: -86%;
  width: 9%;
}

.dining-animate-wrap .dining-run div {
  font-size: 0.3rem;
  font-weight: bold;
  color: #ff1717;
  line-height: 0.3rem;
  padding-top: 1.22rem;
  padding-bottom: 0.21rem;
}

.dining-animate-wrap .dining-run p {
  font-size: 0.2rem;
  font-weight: bold;
  color: #834f36;
  line-height: 0.2rem;
}
.diningPlay {
  margin: 5vh auto 0;
  width: 130px;
}

.diningPlay-result {
  margin: 10px auto 0;
  width: 100px;
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
</style>

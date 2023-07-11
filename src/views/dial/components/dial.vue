<template>
  <div class="dial-animate-wrap">
    <div class="dial-bg" :style="rotateStyle">
      <img :src="stateData.prize_img" alt="" />
    </div>
    <div class="dial-run" @click="run">
      <img :src="objImg.prizeIndex" alt="" />
    </div>
    <div class="dial-mork-wrap" @touchmove.prevent.stop v-if="isrun"></div>
    <!-- 抽奖进行中，禁用页面所有操作 z-index: 99; -->
  <img class="box-liwu" :src="objImg.liwu" alt="">

  </div>
  <div>
    <img class="start" @click="run" :src="objImg.start" alt="" />
  </div>
  <div>
    <img class="start-result" :src="objImg.playResult" alt="" />
  </div>
  
  <Teleport to="body">
      <div  v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <div class="model-img">
          <img  class="model-bg" :src="objImg.dialog" alt="">
          <!-- <img  class="model-item" :src="dialImg.dialImg.img" alt=""> -->
        </div>
        <div class="model-txt">Congratulations on winning： {{  dialImg.dialImg.coin}}</div>
      </div>
   
    </Teleport>

</template>
<script>
import { reactive, ref, computed } from "vue";
import prizeIndex from "@/assets/dial3/prizei.png";
import start from "@/assets/dial3/play.png";
import playResult from "@/assets/dial3/times.png";
import dialog from "@/assets/dial3/boxDialog.png";

import liwu from "@/assets/dial3/head.png";

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
    let open=ref(false)
    let rotateAngle = ref(0);
    const objImg = reactive({
      prizeIndex,
      start,
      playResult,
      dialog,
      liwu
    });
    
    let config = reactive({
      duration: 5000, // 总旋转时间 ms级
      circle: 5 + parseInt(Math.ceil(Math.random() * 100)) / 100, // 旋转圈数
      mode: "ease-in-out", // 由快到慢 惯性效果都省了

    });
    let dialImg=reactive({
      dialImg:{}
    })
    let dialList = [
    {
        name: "3千",
        deg: 8,
        coin: 20*3,
      },
      {
        name: "2万",
        deg: 1,
        coin: 20*40,
      },
      {
        name: "5千",
        deg: 2,
        coin: 80*400,
      },
      {
        name: "2千",
        deg: 3,
        coin: 20*7,
      },
      {
        name: "3万",
        deg: 4,
        coin: 40*500,
      },
      {
        name: "1千",
        deg: 5,
        coin: 20*400,
      },
      {
        name: "1万",
        deg: 6,
        coin: 80*300,
      },
      {
        name: "1万",
        deg: 7,
        coin: 40*300,
      },
      
    ];
    let cricleAdd = ref(1);
    let drawIndex = ref(0);
    // 计算属性
    let rotateStyle = computed(() => {
      const _c = config;
      return !open.value?`
        -webkit-transition: transform ${_c.duration}ms ${_c.mode};
        transition: transform ${_c.duration}ms ${_c.mode};
        -webkit-transform: rotate(${rotateAngle.value}deg);
            transform: rotate(${rotateAngle.value-22.5}deg);`:`
        -webkit-transition: transform ${0}ms ${_c.mode};
        transition: transform ${0}ms ${_c.mode};
        -webkit-transform: rotate(${0}deg);
            transform: rotate(${-22.5}deg);`;
    });
    const allMethods = {
      openDialog:()=>{
        rotateAngle.value=0
        open.value=false
      },
      async run() {
        if (props.stateData.coin < 60) {
          console.log("超级币不足");
          return;
        }
        if (isrun.value) return;
        config.circle = 5 + parseInt(Math.ceil(Math.random() * 100)) / 100;
        // const data = await this.goDraw()
        // 可以作为弹窗等信息展示
        emit("draw_fin", "start");
        //更新积分
        emit("changeCoin", {
          coin: props.stateData.coin - 60,
        });
        // this.$set(props.stateData, "coin", 0); // 更新数据，此处仅为示例，推荐使用 draw_fin方法的 start/fin 进行相应数据更新
        isrun.value = true;
        rotateAngle.value =
          config.circle * 360 * cricleAdd.value - (22.5 + drawIndex.value * 45);
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
        dialImg.dialImg={...dialItem[0]}
        // cricleAdd.value++;
        setTimeout(() => {
          emit("changeCoin", {
          coin: props.stateData.coin +dialItem[0].coin  ,
        });
        open.value=true
          isrun.value = false;
   
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
      dialImg
    };
  },
};
</script>
<style scoped>

.box-liwu{
  position: absolute;
    top: -16%;
    left: 50%;
    width: 290px;
    transform: translateX(-50%);
    
}
.dial-mork-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

.dial-animate-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow-y: hidden; */
}
.dial-bg{
  transform: rotate(23deg)
}
.dial-animate-wrap .dial-bg img {
  width: 100%;
  height: 100%;
}

.dial-animate-wrap .dial-run {
  width: 5rem;
  height: 5rem;
  /* background: v-bind("'url(' + objImg.prizeIndex + ')'") no-repeat; */

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

.dial-animate-wrap .dial-run img {
  margin-top: 87%;
    width: 26%;
    margin-left: 83%;
}

.dial-animate-wrap .dial-run div {
  font-size: 0.3rem;
  font-weight: bold;
  color: #ff1717;
  line-height: 0.3rem;
  padding-top: 1.22rem;
  padding-bottom: 0.21rem;
}

.dial-animate-wrap .dial-run p {
  font-size: 0.2rem;
  font-weight: bold;
  color: #834f36;
  line-height: 0.2rem;
}
.start {
  margin: 5vh  auto 0;
  width: 130px;
}

.start-result{
  margin: 10px auto 0;
  width: 100px;
}

.modal{
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
.model-img{
  margin-top: 120px;
  position: relative;
  width: 100%;

 
}
.model-bg{
  margin: 0 auto;
  width: 85%;
}
.model-item{
  position: absolute;
  top: 50%;
  left: 50%;
transform: translate(-50%,-50%);
width: 45%;
}

.model-txt{
  margin-top: -10px;
}
</style>

<template>
  <div class="beach-animate-wrap">
    <div class="beach-bg" :style="rotateStyle">
      <img :src="stateData.prize_img" alt="" />
    </div>
    <div class="beach-run" @click="run">
      <img :src="objImg.beachIndex" alt="" />
    </div>
    <div class="beach-mork-wrap" @touchmove.prevent.stop v-if="isrun"></div>
    <!-- 抽奖进行中，禁用页面所有操作 z-index: 99; -->
  <img class="box-beachHead" :src="objImg.beachHead" alt="">

  </div>
  <div>
    <img class="beachPlay" @click="run" :src="objImg.beachPlay" alt="" />
  </div>
  <div>
    <img class="beachPlay-result" :src="objImg.beachTime" alt="" />
  </div>
  
  <Teleport to="body">
      <div  v-if="open" class="modal" @click="openDialog">
        <!-- 12312 -->
        <div class="model-img">
          <img  class="model-bg" :src="objImg.beachDialog" alt="">
          <!-- <img  class="model-item" :src="objImg.beachStar" alt=""> -->
        </div>
        <div class="model-txt">Congratulations on winning： {{  dialImg.dialImg.coin}}</div>
      </div>
   
    </Teleport>

</template>
<script>
import { reactive, ref, computed } from "vue";
import beachIndex from "@/assets/dial5/beachIndex.png";
import beachPlay from "@/assets/dial5/beachPlay.png";
import beachTime from "@/assets/dial5/beachTime.png";
import beachDialog from "@/assets/dial5/beachDialog.png";

import beachHead from "@/assets/dial5/beachHead.png";
// import beachStar from "@/assets/dial5/star.gif";

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
      beachIndex,
      beachPlay,
      beachTime,
      beachDialog,
      beachHead,
      // beachStar
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
        name: "p1",
        deg: 8,
        coin: 10*5,
      },
      {
        name: "p2",
        deg: 1,
        coin: 50*100,
      },
      {
        name: "p3",
        deg: 2,
        coin: 3*10,
      },
      {
        name: "p4",
        deg: 3,
        coin: 50*7,
      },
      {
        name: "p5",
        deg: 4,
        coin: 3*5,
      },
      {
        name: "p6",
        deg: 5,
        coin: 100*20,
      },
      {
        name: "p7",
        deg: 6,
        coin: 10*2,
      },
      {
        name: "p8",
        deg: 7,
        coin: 5*3,
      },
      {
        name: "p9",
        deg: 9,
        coin: 30*50,
      },


      {
        name: "P10",
        deg: 10,
        coin: 5*2,
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
        emit("draw_fin", "beachPlay");
        //更新积分
        emit("changeCoin", {
          coin: props.stateData.coin - 60,
        });
        // this.$set(props.stateData, "coin", 0); // 更新数据，此处仅为示例，推荐使用 draw_fin方法的 beachPlay/fin 进行相应数据更新
        isrun.value = true;
        rotateAngle.value =
          config.circle * 360 * cricleAdd.value - ( drawIndex.value * 36);
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
          open.value=true
          isrun.value = false;
          emit("changeCoin", {
          coin: props.stateData.coin +dialItem[0].coin  ,
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
      dialImg
    };
  },
};
</script>
<style scoped>

.box-beachHead{
  position: absolute;
    top: -16%;
    left: 50%;
    width: 290px;
    transform: translateX(-50%);
    
}
.beach-mork-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

.beach-animate-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow-y: hidden; */
}
.beach-bg{
  transform: rotate(23deg)
}
.beach-animate-wrap .beach-bg img {
  width: 100%;
  height: 100%;
}

.beach-animate-wrap .beach-run {
  width: 5rem;
  height: 5rem;
  /* background: v-bind("'url(' + objImg.beachIndex + ')'") no-repeat; */

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

.beach-animate-wrap .beach-run img {
  margin-top: -86%;
    width: 9%;

}

.beach-animate-wrap .beach-run div {
  font-size: 0.3rem;
  font-weight: bold;
  color: #ff1717;
  line-height: 0.3rem;
  padding-top: 1.22rem;
  padding-bottom: 0.21rem;
}

.beach-animate-wrap .beach-run p {
  font-size: 0.2rem;
  font-weight: bold;
  color: #834f36;
  line-height: 0.2rem;
}
.beachPlay {
  margin: 5vh  auto 0;
  width: 130px;
}

.beachPlay-result{
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
  margin-left: 23px;
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

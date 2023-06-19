<template>
  <div class="dial-animate-wrap">
    <div class="dial-bg" :style="rotateStyle">
      <img :src="stateData.prize_img" alt="" />
    </div>
    <div class="dial-run" @click="run">
      <div>点击抽奖</div>
      <p>10超级币/次</p>
    </div>
    <div class="dial-mork-wrap" @touchmove.prevent.stop v-if="isrun"></div>
    <!-- 抽奖进行中，禁用页面所有操作 z-index: 99; -->
  </div>
</template>
<script>
import { reactive, ref, computed } from "vue";

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
    const rotateItem=360/8 //每一项角度
    let rotateAngle = ref(0);
    let config = reactive({
      duration: 5000, // 总旋转时间 ms级
      circle: 5+parseInt(Math.ceil(Math.random() * 100))/100, // 旋转圈数
      mode: "ease-in-out", // 由快到慢 惯性效果都省了
    });
    let dialList=[{
      name:'积分10',
      deg:1,
      coin:10
    },{
      name:'积分20',
      deg:2,
      coin:20
    },{
      name:'积分30',
      deg:3,
      coin:30
    },{
      name:'积分40',
      deg:4,
      coin:40
    },{
      name:'积分50',
      deg:5,
      coin:50
    },{
      name:'积分60',
      deg:6,
      coin:60
    },{
      name:'积分70',
      deg:7,
      coin:70
    },{
      name:'积分80',
      deg:8,
      coin:80
    }]
    let cricleAdd = ref(1);
    let drawIndex = ref(0);
    // 计算属性
    let rotateStyle = computed(() => {
      const _c = config;
      return `
        -webkit-transition: transform ${_c.duration}ms ${_c.mode};
        transition: transform ${_c.duration}ms ${_c.mode};
        -webkit-transform: rotate(${rotateAngle.value}deg);
            transform: rotate(${rotateAngle.value}deg);`;
    });
    const allMethods = {
      async run() {
        if (props.stateData.coin < 10) {
          console.log("超级币不足");
          return;
        }
        if (isrun.value) return;
        config.circle=5+parseInt(Math.ceil(Math.random() * 100))/100
        // const data = await this.goDraw()
        // 可以作为弹窗等信息展示
        emit("draw_fin", "start");
        //更新积分
        emit("changeCoin",{
          coin:props.stateData.coin-10
        })
        // this.$set(props.stateData, "coin", 0); // 更新数据，此处仅为示例，推荐使用 draw_fin方法的 start/fin 进行相应数据更新
        isrun.value = true;
        rotateAngle.value =
          config.circle * 360 * cricleAdd.value - (22.5 + drawIndex.value * 45);
        // 圈数位置解析
        // this.config.circle * 360 * this.cricleAdd 顺时针总圈数/累积总圈数
        // 22.5 + this.drawIndex * 45 ===> (奖品位置 === this.drawIndex * 45) (指针中间位置 === 22.5)
        //旋转角度
        const rotates=rotateAngle.value%360
        
       const dialItem= dialList.filter((item)=>{
          return rotates/rotateItem<item.deg&&rotates/rotateItem>item.deg-1
        })
        console.log('%c ..........dialItem.........','color:#31ef0e','恭喜中奖：'+dialItem[0].name)
        cricleAdd.value++;
        setTimeout(() => {
          emit("draw_fin", "fin");
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
    };
  },
};
</script>
<style scoped>
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
  overflow-y: hidden;
}

.dial-animate-wrap .dial-bg img {
  width: 100%;
  height: 100%;
}

.dial-animate-wrap .dial-run {
  width: 3rem;
  height: 3rem;
  background: url("../dial/dial-center-icon.png") no-repeat;

  background-size: contain;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
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
</style>

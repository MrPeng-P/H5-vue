<script>
import { onMounted, reactive, ref } from "vue";

import platinum1 from "@/assets/slotAA/platinum1.png";
import platinum2 from "@/assets/slotAA/platinum2.png";
import platinum3 from "@/assets/slotAA/platinum3.png";
import platinum4 from "@/assets/slotAA/platinum4.png";
import platinum5 from "@/assets/slotAA/platinum5.png";
import platinum6 from "@/assets/slotAA/platinum6.png";

import boxplatinum from "@/assets/slotAA/boxplatinum.jpg";
import anyBoxplatinum from "@/assets/slotAA/anyBoxplatinum.jpg";
import homeplatinum from "@/assets/slotAA/homeplatinum.png";
import playplatinum from "@/assets/slotAA/playplatinum.png";
import countplatinum from "@/assets/slotAA/countplatinum.png";
import peiplatinum from "@/assets/slotAA/peiplatinum.png";


import { inject } from "vue";

export default {
  setup() {
    const showRuleValue = ref(false);
    const platinumVal=ref(1000)
    const ceshiplatinum = inject("reload");
    const platinumimgList = {
      boxplatinum,
      anyBoxplatinum,
      homeplatinum,
      playplatinum,
      peiplatinum,
      countplatinum
    };
    let platinumImageList = [
      platinum1,
      platinum2,
      platinum3,
      platinum4,
      platinum5,
      platinum6,
    ];
    let platinumrandomImages = reactive({
      imageList: [],
      image2List: [],
      image3List: [],
    });
    let platinumcssObj = {
      img: 100,
      change: -80,
    };
    let platinumimgClassObj = reactive({
      imgClassList: [
        {
          imgClass: "",
          imageList: [],
        },
        {
          imgClass: "",
          imageList: [],
        },
        {
          imgClass: "",
          imageList: [],
        },
       
      ],
    });

    let timer = 0;
    const platinumallMethods = {
      platinumpei:()=>{

      },
      platinumRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
      showRuleplatinum: () => {
        console.log('%c ..........111.........','color:#31ef0e',showRuleValue.value)
        showRuleValue.value = !showRuleValue.value;
        platinumallMethods.reset()
      },
      reset() {
        ceshiplatinum();
      },
      async platinumrandomImg(type) {
        //  platinumallMethods.reset()
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 60;
        platinumimgClassObj.imgClassList.forEach((item, index) => {
          while (item.imageList.length < totalImages) {
            // 从原始图片数组中随机选择一张图片
            const randomIndex = Math.floor(Math.random() * platinumImageList.length);
            const randomImage = platinumImageList[randomIndex];

            // 将选中的图片加入到随机图片数组中
            item.imageList.push(randomImage);
          }
        });

        if (type) {
          platinumimgClassObj.imgClassList[0].imgClass = "platinumrandomImages";
          const timeInter = setInterval(() => {
            timer++;

            if (platinumimgClassObj.imgClassList.length > timer) {
              platinumimgClassObj.imgClassList[timer].imgClass = "platinumrandomImages";
            } else {
              !showRuleValue.value&&(showRuleValue.value=true)
              platinumVal.value=platinumVal.value+platinumallMethods.platinumRandomNumber(1000,5000)
              sessionStorage.setItem('platinumVal',platinumVal.value)
              clearInterval(timeInter);
            }
          }, 1000);
        }
      },
    };
    onMounted(() => {
      platinumallMethods.platinumrandomImg(false);
    });
    return {
      platinumimgClassObj,
      platinumrandomImages,
      showRuleValue,
      platinumimgList,
      platinumcssObj,
      platinumVal,
      ...platinumallMethods,
    };
  },
};
</script>

<template>
  <div class="platinumimg-content">
    <div  class="platinumimg-container-box">
      <div class="platinumimg-container">
      <div
        class="platinumimg-box"
        v-for="(item, index) of platinumimgClassObj.imgClassList"
        :key="index"
      >
        <div :class="item.imgClass">
          <div v-for="imgs in item.imageList" class="platinumimg-img">
            <img :src="imgs" alt="" />
          </div>
        </div>
      </div>

      <div class="platinumimg-buttons">
        <div class="platinumimg-back" @click="reset()"></div>

        <div class="platinumimg-start" @click="platinumrandomImg(true)"></div>
        <div class="platinumimg-pei" @click="platinumpei()"></div>
        <div class="platinumimg-count" >
          <div class="platinumimg-countValue">{{ platinumVal }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Teleport to="body">
      <div v-if="showRuleValue" class="platinumimg-modal" @click="showRuleplatinum">
    
      </div>
    </Teleport>
</template>
<style scoped>
.platinumimg-modal {
  display: flex;
  justify-content: center;
  align-items: flex-stlion;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  color: #fff;
  font-size: 16px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background: v-bind("'url(' + lionConfig.dialoglion + ')'") no-repeat; */
  /* background-size: 100%; */
}
.platinumimg-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind("'url(' + platinumimgList.boxplatinum + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.platinumimg-container-box{
  position: relative;

display: flex;
justify-content: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + platinumimgList.anyBoxplatinum + ')'") no-repeat;
  background-size:100%;
  background-position: center;
}
.platinumimg-container {
  position: relative;
  margin-left: 2%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;


}
.platinumimg-box {
  flex: 1;
  max-width: 20%;
  height: 73%;
  /* border: 2px solid red; */
  overflow: hidden;
}

.platinumimg-img{
  display: flex;
  justify-content: center;
}
.platinumrandomImages {
  animation: image-animation 2s;
  transform: translateY(v-bind("platinumcssObj.change+'px'"));
}

.platinumimg-buttons {
  display: flex;
    position: absolute;
    left: 41%;
    top: 0%;
    width: 100%;
    height: 10vw;
}

.platinumimg-back{
  position: absolute;
    left: -58%;
    width: 46px;
    height: 44px;
  background: v-bind("'url(' + platinumimgList.homeplatinum + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.platinumimg-start {
  position: absolute;
  left: -37%;
    top: 361%;
    width: 32%;
    height: 52%;
  background: v-bind("'url(' + platinumimgList.playplatinum + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}

.platinumimg-pei{
  position: absolute;
  left: -1%;
    top: 361%;
    width: 61%;
    height: 52%;
  background: v-bind("'url(' + platinumimgList.peiplatinum + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.platinumimg-count{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 63%;
    top: 52%;
    width: 11%;
    height: 321%;
  background: v-bind("'url(' + platinumimgList.countplatinum + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.platinumimg-countValue{
  margin:107% 0% 0% -4%;
  color: #fff;
  font-size: 16px;
  z-index:9;
  transform: rotateZ(90deg);
}
img {

  margin: 0 0 0 -6%;
  width: v-bind("platinumcssObj.img+'%'");
  height: v-bind("platinumcssObj.img+'%'");
  
}

@keyframes image-animation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(v-bind("platinumcssObj.change+'%'"));
  }
}
</style>

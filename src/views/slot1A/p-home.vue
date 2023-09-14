<script>
import { onMounted, reactive, ref } from "vue";

import starlight1 from "@/assets/slotAA3/starlight1.png";
import starlight2 from "@/assets/slotAA3/starlight2.png";
import starlight3 from "@/assets/slotAA3/starlight3.png";
import starlight4 from "@/assets/slotAA3/starlight4.png";
import starlight5 from "@/assets/slotAA3/starlight5.png";
import starlight6 from "@/assets/slotAA3/starlight6.png";

import boxstarlight from "@/assets/slotAA3/boxstarlight.jpg";
import anyBoxstarlight from "@/assets/slotAA3/anyBoxstarlight.jpg";
import homestarlight from "@/assets/slotAA3/homestarlight.png";
import playstarlight from "@/assets/slotAA3/playstarlight.png";
import countstarlight from "@/assets/slotAA3/countstarlight.png";
// import peistarlight from "@/assets/slotAA3/peistarlight.png";
import { useRouter, useRoute } from "vue-router";

import { inject } from "vue";

export default {
  setup() {
    const router = new useRouter();
    const showRuleValue = ref(false);
    const starlightVal=ref(sessionStorage.getItem('starlightVal')?parseInt(sessionStorage.getItem('starlightVal')):1000)
    const ceshistarlight = inject("reload");
    const starlightimgList = {
      boxstarlight,
      anyBoxstarlight,
      homestarlight,
      playstarlight,
      // peistarlight,
      countstarlight
    };
    let starlightImageList = [
      starlight1,
      starlight2,
      starlight3,
      starlight4,
      starlight5,
      starlight6,
    ];
    let starlightrandomImages = reactive({
      imageList: [],
      image2List: [],
      image3List: [],
    });
    let starlightcssObj = {
      img: 100,
      change: -80,
    };
    let starlightimgClassObj = reactive({
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
        },  {
          imgClass: "",
          imageList: [],
        },
      ],
    });

    let timer = 0;
    const starlightallMethods = {
      goBack:()=>{
        router.push("/")
      },
      starlightpei:()=>{

      },
      starlightRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
      showRulestarlight: () => {
        console.log('%c ..........111.........','color:#31ef0e',showRuleValue.value)
        showRuleValue.value = !showRuleValue.value;
        starlightallMethods.reset()
      },
      reset() {
        ceshistarlight();
      },
      async starlightrandomImg(type) {
        //  starlightallMethods.reset()
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 60;
        starlightimgClassObj.imgClassList.forEach((item, index) => {
          while (item.imageList.length < totalImages) {
            // 从原始图片数组中随机选择一张图片
            const randomIndex = Math.floor(Math.random() * starlightImageList.length);
            const randomImage = starlightImageList[randomIndex];

            // 将选中的图片加入到随机图片数组中
            item.imageList.push(randomImage);
          }
        });

        if (type) {
          starlightimgClassObj.imgClassList[0].imgClass = "starlightrandomImages";
          const timeInter = setInterval(() => {
            timer++;

            if (starlightimgClassObj.imgClassList.length > timer) {
              starlightimgClassObj.imgClassList[timer].imgClass = "starlightrandomImages";
            } else {
              !showRuleValue.value&&(showRuleValue.value=true)
              starlightVal.value=starlightVal.value+starlightallMethods.starlightRandomNumber(1000,5000)
              sessionStorage.setItem('starlightVal',starlightVal.value)
              clearInterval(timeInter);
            }
          }, 1000);
        }
      },
    };
    onMounted(() => {
      starlightallMethods.starlightrandomImg(false);
    });
    return {
      starlightimgClassObj,
      starlightrandomImages,
      showRuleValue,
      starlightimgList,
      starlightcssObj,
      starlightVal,
      ...starlightallMethods,
    };
  },
};
</script>

<template>
  
  <div class="starlightimg-content">
    <div  class="starlightimg-container-box">
      <div class="starlightimg-container">
      <div
        class="starlightimg-box"
        v-for="(item, index) of starlightimgClassObj.imgClassList"
        :key="index"
      >
        <div :class="item.imgClass">
          <div v-for="imgs in item.imageList" class="starlightimg-img">
            <img :src="imgs" alt="" />
          </div>
        </div>
      </div>

      <div class="starlightimg-buttons">
        <div class="starlightimg-back" @click="goBack()"></div>

        <div class="starlightimg-start" @click="starlightrandomImg(true)"></div>
        <div class="starlightimg-pei" @click="starlightpei()"></div>
        <div class="starlightimg-count" >
          <div class="starlightimg-countValue">{{ starlightVal }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Teleport to="body">
      <div v-if="showRuleValue" class="starlightimg-modal" @click="showRulestarlight">
    
      </div>
    </Teleport>
</template>
<style scoped>
.starlightimg-modal {
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
.starlightimg-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind("'url(' + starlightimgList.boxstarlight + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.starlightimg-container-box{
  position: relative;

display: flex;
justify-content: center;
  width: 100%;
  height: 100%;
  background: v-bind("'url(' + starlightimgList.anyBoxstarlight + ')'") no-repeat;
  background-size:100%;
  background-position: center;
}
.starlightimg-container {
  position: relative;
  margin-left: -2%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;


}
.starlightimg-box {
  flex: 1;
  max-width: 20%;
  height: 31vw;
  /* border: 2px solid red; */
  overflow: hidden;
}
.starlightimg-box:nth-child(2),.starlightimg-box:nth-child(3) {
  flex: 1;
  max-width: 20%;
  margin-top: -20%;
  height:10vw;
  /* border: 2px solid red; */
  overflow: hidden;
}
.starlightimg-img{
  display: flex;
  justify-content: center;
}
.starlightrandomImages {
  animation: image-animation 2s;
  transform: translateY(v-bind("starlightcssObj.change+'%'"));
}

.starlightimg-buttons {
  display: flex;
    position: absolute;
    left: 41%;
    top: 0%;
    width: 100%;
    height: 10vw;
}

.starlightimg-back{
  position: absolute;
    left: -58%;
    width: 46px;
    height: 44px;
  background: v-bind("'url(' + starlightimgList.homestarlight + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.starlightimg-start {
  position: absolute;
  left: -37%;
    top: 2%;
    width: 24%;
    height: 52%;
  background: v-bind("'url(' + starlightimgList.playstarlight + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}

.starlightimg-pei{
  position: absolute;
  left: -1%;
    top: 361%;
    width: 61%;
    height: 52%;
  /* background: v-bind("'url(' + starlightimgList.peistarlight + ')'") no-repeat; */
  background-size: cover;
  background-position: center;
}
.starlightimg-count{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
    top: 1%;
    width: 46%;
    height: 54%;
  background: v-bind("'url(' + starlightimgList.countstarlight + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.starlightimg-countValue{
  margin: 0% 0% 0% 29%;
  color: #fff;
  font-size: 16px;
  z-index:9;
  /* transform: rotateZ(90deg); */
}
img {

  margin: 0 0 0 -6%;
  width: v-bind("starlightcssObj.img+'%'");
  height: v-bind("starlightcssObj.img+'%'");
  
}

@keyframes image-animation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(v-bind("starlightcssObj.change+'%'"));
  }
}
</style>

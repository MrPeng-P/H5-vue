<script>
import { onMounted, reactive, ref } from "vue";

import diamond1 from "@/assets/slotAA4/diamond1.png";
import diamond2 from "@/assets/slotAA4/diamond2.png";
import diamond3 from "@/assets/slotAA4/diamond3.png";
import diamond4 from "@/assets/slotAA4/diamond4.png";
import diamond5 from "@/assets/slotAA4/diamond5.png";
import diamond6 from "@/assets/slotAA4/diamond6.png";

import boxdiamond from "@/assets/slotAA4/boxdiamond.jpg";
import anyBoxdiamond from "@/assets/slotAA4/anyBoxdiamond.png";
import homediamond from "@/assets/slotAA4/homediamond.png";
import playdiamond from "@/assets/slotAA4/playdiamond.png";
import countdiamond from "@/assets/slotAA4/countdiamond.png";
// import peidiamond from "@/assets/slotAA4/peidiamond.png";
import { useRouter, useRoute } from "vue-router";

import { inject } from "vue";

export default {
  setup() {
    const router = new useRouter();
    const showRuleValue = ref(false);
    const diamondVal=ref(sessionStorage.getItem('diamondVal')?parseInt(sessionStorage.getItem('diamondVal')):1000)
    const ceshidiamond = inject("reload");
    const diamondimgList = {
      boxdiamond,
      anyBoxdiamond,
      homediamond,
      playdiamond,
      // peidiamond,
      countdiamond
    };
    let diamondImageList = [
      diamond1,
      diamond2,
      diamond3,
      diamond4,
      diamond5,
      diamond6,
    ];
    let diamondrandomImages = reactive({
      imageList: [],
      image2List: [],
      image3List: [],
    });
    let diamondcssObj = {
      img: 100,
      change: -80,
    };
    let diamondimgClassObj = reactive({
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
    const diamondallMethods = {
      goBack:()=>{
        router.push("/")
      },
      diamondpei:()=>{

      },
      diamondRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
      showRulediamond: () => {
        console.log('%c ..........111.........','color:#31ef0e',showRuleValue.value)
        showRuleValue.value = !showRuleValue.value;
        diamondallMethods.reset()
      },
      reset() {
        ceshidiamond();
      },
      async diamondrandomImg(type) {
        //  diamondallMethods.reset()
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 60;
        diamondimgClassObj.imgClassList.forEach((item, index) => {
          while (item.imageList.length < totalImages) {
            // 从原始图片数组中随机选择一张图片
            const randomIndex = Math.floor(Math.random() * diamondImageList.length);
            const randomImage = diamondImageList[randomIndex];

            // 将选中的图片加入到随机图片数组中
            item.imageList.push(randomImage);
          }
        });

        if (type) {
          diamondimgClassObj.imgClassList[0].imgClass = "diamondrandomImages";
          const timeInter = setInterval(() => {
            timer++;

            if (diamondimgClassObj.imgClassList.length > timer) {
              diamondimgClassObj.imgClassList[timer].imgClass = "diamondrandomImages";
            } else {
              !showRuleValue.value&&(showRuleValue.value=true)
              diamondVal.value=diamondVal.value+diamondallMethods.diamondRandomNumber(1000,5000)
              sessionStorage.setItem('diamondVal',diamondVal.value)
              clearInterval(timeInter);
            }
          }, 1000);
        }
      },
    };
    onMounted(() => {
      diamondallMethods.diamondrandomImg(false);
    });
    return {
      diamondimgClassObj,
      diamondrandomImages,
      showRuleValue,
      diamondimgList,
      diamondcssObj,
      diamondVal,
      ...diamondallMethods,
    };
  },
};
</script>

<template>
  
  <div class="diamondimg-content">
    <div  class="diamondimg-container-box">
      <div class="diamondimg-container">
      <div
        class="diamondimg-box"
        v-for="(item, index) of diamondimgClassObj.imgClassList"
        :key="index"
      >
        <div :class="item.imgClass">
          <div v-for="imgs in item.imageList" class="diamondimg-img">
            <img :src="imgs" alt="" />
          </div>
        </div>
      </div>

      <div class="diamondimg-buttons">
        <div class="diamondimg-back" @click="goBack()"></div>

        <div class="diamondimg-start" @click="diamondrandomImg(true)"></div>
        <div class="diamondimg-pei" @click="diamondpei()"></div>
        <div class="diamondimg-count" >
          <div class="diamondimg-countValue">{{ diamondVal }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Teleport to="body">
      <div v-if="showRuleValue" class="diamondimg-modal" @click="showRulediamond">
    
      </div>
    </Teleport>
</template>
<style scoped>
.diamondimg-modal {
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
.diamondimg-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind("'url(' + diamondimgList.boxdiamond + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.diamondimg-container-box{
  position: relative;

display: flex;
justify-content: center;
  width: 61%;
  height: 100%;
  background: v-bind("'url(' + diamondimgList.anyBoxdiamond + ')'") no-repeat;
  background-size:100%;
  background-position: center;
}
.diamondimg-container {
  position: relative;
    margin-left: -1%;
    margin-top: -1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 81%;


}
.diamondimg-box {
  flex: 1;
  max-width: 20%;
  height: 36vw;
  /* border: 2px solid red; */
  overflow: hidden;
}
.diamondimg-box:nth-child(2),.diamondimg-box:nth-child(3) {
  /* flex: 1;
  max-width: 20%;
  margin-top: -20%;
  height:10vw;
  overflow: hidden; */
}
.diamondimg-img{
  display: flex;
  justify-content: center;
}
.diamondrandomImages {
  animation: image-animation 2s;
  transform: translateY(v-bind("diamondcssObj.change+'%'"));
}

.diamondimg-buttons {
  display: flex;
    position: absolute;
    left: 32%;
    top: 7%;
    width: 100%;
    height: 10vw;
}

.diamondimg-back{
  position: absolute;
  left: -58%;
    width: 52px;
    height: 44px;
  background: v-bind("'url(' + diamondimgList.homediamond + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}
.diamondimg-start {
  position: absolute;
  left: -37%;
  top: 2%;
    width: 29%;
    height: 65%;
  background: v-bind("'url(' + diamondimgList.playdiamond + ')'") no-repeat;
  background-size: cover;
  background-position: center;
}

.diamondimg-pei{
  position: absolute;
  left: -1%;
    top: 361%;
    width: 61%;
    height: 52%;
  /* background: v-bind("'url(' + diamondimgList.peidiamond + ')'") no-repeat; */
  background-size: cover;
  background-position: center;
}
.diamondimg-count{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16%;
    top: 5%;
    width: 56%;
    height: 58%;
  background: v-bind("'url(' + diamondimgList.countdiamond + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.diamondimg-countValue{
  margin: 0% 0% 0% 29%;
  color: #fff;
  font-size: 16px;
  z-index:9;
  /* transform: rotateZ(90deg); */
}
img {

  margin: 0 0 0 -6%;
  width: v-bind("diamondcssObj.img+'%'");
  height: v-bind("diamondcssObj.img+'%'");
  
}

@keyframes image-animation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(v-bind("diamondcssObj.change+'%'"));
  }
}
</style>

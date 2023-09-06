<script>
import { onMounted, reactive, ref } from "vue";

import arms1 from "@/assets/slotF5/arms1.png";
import arms2 from "@/assets/slotF5/arms2.png";
import arms3 from "@/assets/slotF5/arms3.png";
import arms4 from "@/assets/slotF5/arms4.png";
import arms5 from "@/assets/slotF5/arms5.png";
import arms6 from "@/assets/slotF5/arms6.png";
import { inject } from "vue";

export default {
  setup() {
    const ceshi = inject("reload");
    let armImageList = [arms1, arms2, arms3, arms4, arms5, arms6];
    let randomImages = reactive({
      imageList: [],
      image2List: [],
      image3List: [],
    });
    let cssObj = {
      img: 100,
      change: -2000,
    };
    let imgClassObj = reactive({
      imgClassList: [
        {
          imgClass: "",
          imageList:[]
        },
        {
          imgClass: "",
          imageList:[]
        },
        {
          imgClass: "",
          imageList:[]
        },
        {
          imgClass: "",
          imageList:[]
        },
      ],
    });

    let timer = 0;
    const allMethods = {
      reset() {
        ceshi();
     
      },
      async randomImg(type) {
        //  allMethods.reset()
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 60;
        imgClassObj.imgClassList.forEach((item,index)=>{
          while (item.imageList.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * armImageList.length);
          const randomImage = armImageList[randomIndex];

          // 将选中的图片加入到随机图片数组中
          item.imageList.push(randomImage);
        }
        })
       
   
        if (type) {
          imgClassObj.imgClassList[0].imgClass="randomImages"
          const timeInter = setInterval(() => {
            timer++;
            

            if(imgClassObj.imgClassList.length>timer){
              imgClassObj.imgClassList[timer].imgClass="randomImages"
            }else{
              clearInterval(timeInter);
            }
          }, 1000);
        }
      },
    };
    onMounted(() => {
      allMethods.randomImg(false);
    });
    return {
      imgClassObj,
      randomImages,
  
      cssObj,
      ...allMethods,
    };
  },
};
</script>

<template>
  <div class="content">
    <div class="container">
    <div class="box" v-for="(item,index) of imgClassObj.imgClassList" :key="index">
      <div :class="item.imgClass">
        <div v-for="imgs in item.imageList">
          <img :src="imgs" alt="" />
        </div>
      </div>
    </div>

    <div class="buttons">
      <div class="start" @click="randomImg(true)">开始</div>
      <div class="start" @click="reset()">重置</div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  
  display: flex;
  justify-content: space-between;
  width: 600px;
}
.box {
  width: 100px;
  height: 300px;
  border: 2px solid red;
  overflow: hidden;
}

.randomImages {
  animation: image-animation 2s;
  transform: translateY(v-bind("cssObj.change+'px'"));
}

.buttons{
  display: flex;
  position: absolute;
  bottom: -30px;
}
.start {
  width: 100px;
  height: 30px;
  background-color: aqua;
}
img {
  width: v-bind("cssObj.img+'px'");
  height: v-bind("cssObj.img+'px'");
}

@keyframes image-animation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(v-bind("cssObj.change+'px'"));
  }
}
</style>

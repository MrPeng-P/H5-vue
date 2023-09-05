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

    let imgClass = ref("");
    const allMethods = {
      reset() {
        ceshi();
        imgClass.value = "";
        randomImages.imageList = [];
        randomImages.image2List = [];
        randomImages.image3List = [];
      },
      async randomImg(type) {
        //  allMethods.reset()
        // 定义 8 张图的数组

        // 定义需要生成的总图片数量
        const totalImages = 60;

        while (randomImages.imageList.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * armImageList.length);
          const randomImage = armImageList[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.imageList.push(randomImage);
        }
        while (randomImages.image2List.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * armImageList.length);
          const randomImage = armImageList[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.image2List.push(randomImage);
        }
        while (randomImages.image3List.length < totalImages) {
          // 从原始图片数组中随机选择一张图片
          const randomIndex = Math.floor(Math.random() * armImageList.length);
          const randomImage = armImageList[randomIndex];

          // 将选中的图片加入到随机图片数组中
          randomImages.image3List.push(randomImage);
        }
        if (type) {
          imgClass.value = "randomImages";
        }
      },
    };
    onMounted(() => {
      allMethods.randomImg(false);
    });
    return {
      randomImages,
      imgClass,
      ...allMethods,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="box">
      <div :class="imgClass">
        <div v-for="item in randomImages.imageList">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <div :class="imgClass">
        <div v-for="item in randomImages.image2List">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <div :class="imgClass">
        <div v-for="item in randomImages.image3List">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div class="start" @click="randomImg(true)">开始</div>
      <div class="start" @click="reset()">重置</div>
    </div>
    <!-- <div class="start" @click="randomImg()">重新开始</div> -->
  </div>
</template>
<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  width: 400px;
}
.box {
  width: 100px;
  height: 300px;
  border: 2px solid red;
  overflow: hidden;
}

.randomImages {
  animation: image-animation 2s;
  transform: translateY(-2000px);
}
.start {
  width: 100px;
  height: 30px;
  background-color: aqua;
}
img {
  width: 100px;
  height: 100px;
}

@keyframes image-animation {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-2000px);
  }
}
</style>

<script>

import playmagicFruit from "@/assets/slotB11/playmagicFruit2.png";
import boxmagicFruit from "@/assets/slotB11/boxmagicFruit.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const magicFruitConfig = reactive({
      playmagicFruit,
      boxmagicFruit,
    });
   

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
    onMounted(() => {
    });
    return {
        className,
      magicFruitConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stmagicFruit" >
      
    </div>
  </div>
</template>

<style scoped>


.stmagicFruit{
  margin-top: 9%;
    width: 49%;
    height: 252px;
  background: v-bind("'url(' + magicFruitConfig.playmagicFruit + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + magicFruitConfig.boxmagicFruit + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.magicFruitp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.magicFruitp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.magicFruitp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + magicFruitConfig.anymagicFruit + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stmagicFruit;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + magicFruitConfig.dialogmagicFruit + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stmagicFruit-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stmagicFruit-bg img{
    width: 100%;
}
</style>

<script>

import playlion2 from "@/assets/slotF8/playlion.png";
import boxlion from "@/assets/slotF8/boxlion.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const lionConfig = reactive({
      playlion2,
      boxlion,
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
      lionConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stlion" >
    </div>
  </div>
</template>

<style scoped>


.stlion{
  margin-top: 1%;
    width: 20%;
    height: 252px;
  /* background: v-bind("'url(' + lionConfig.playlion2 + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + lionConfig.boxlion + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.lionp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.lionp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.lionp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + lionConfig.anylion + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stlion;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + lionConfig.dialoglion + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stlion-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stlion-bg img{
    width: 100%;
}
</style>

<script>

import playlisa from "@/assets/slotC2/playlisa2.png";
import boxlisa from "@/assets/slotC2/boxlisa.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const lisaConfig = reactive({
      playlisa,
      boxlisa,
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
      lisaConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stlisa" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stlisa{
  margin-top: 14%;
    width: 280px;
    height: 252px;
  background: v-bind("'url(' + lisaConfig.playlisa + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + lisaConfig.boxlisa + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.lisap-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.lisap-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.lisap-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + lisaConfig.anylisa + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stlisa;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + lisaConfig.dialoglisa + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stlisa-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stlisa-bg img{
    width: 100%;
}
</style>

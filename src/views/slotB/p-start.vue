<script>

import playamazonMelon from "@/assets/slotB14/playamazonMelon2.png";
import boxamazonMelon from "@/assets/slotB14/boxamazonMelon.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const amazonMelonConfig = reactive({
      playamazonMelon,
      boxamazonMelon,
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
      amazonMelonConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stamazonMelon" >
      
    </div>
  </div>
</template>

<style scoped>


.stamazonMelon{
  margin-top: 9%;
    width: 34%;
    height: 252px;
  background: v-bind("'url(' + amazonMelonConfig.playamazonMelon + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + amazonMelonConfig.boxamazonMelon + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.amazonMelonp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.amazonMelonp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.amazonMelonp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + amazonMelonConfig.anyamazonMelon + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stamazonMelon;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + amazonMelonConfig.dialogamazonMelon + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stamazonMelon-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stamazonMelon-bg img{
    width: 100%;
}
</style>

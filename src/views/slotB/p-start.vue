<script>

import playAlice from "@/assets/slotB1/playAlice2.png";
import boxAlice from "@/assets/slotB1/boxAlice.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const AliceConfig = reactive({
      playAlice,
      boxAlice,
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
      AliceConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stAlice" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stAlice{
  margin-top: 9%;
    width: 280px;
    height: 252px;
  background: v-bind("'url(' + AliceConfig.playAlice + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + AliceConfig.boxAlice + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.Alicep-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.Alicep-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.Alicep-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + AliceConfig.anyAlice + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stAlice;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + AliceConfig.dialogAlice + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stAlice-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stAlice-bg img{
    width: 100%;
}
</style>

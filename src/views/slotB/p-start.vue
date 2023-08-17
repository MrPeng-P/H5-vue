<script>

import playOaks from "@/assets/slotB8/playOaks2.png";
import boxOaks from "@/assets/slotB8/boxOaks.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const OaksConfig = reactive({
      playOaks,
      boxOaks,
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
      OaksConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stOaks" >
    </div>
  </div>
</template>

<style scoped>


.stOaks{
  margin-top: 4%;
    width: 65%;
    height: 252px;
  background: v-bind("'url(' + OaksConfig.playOaks + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + OaksConfig.boxOaks + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.Oaksp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.Oaksp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.Oaksp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + OaksConfig.anyOaks + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stOaks;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + OaksConfig.dialogOaks + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stOaks-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stOaks-bg img{
    width: 100%;
}
</style>

<script>

import playgeisha from "@/assets/slotC3/playgeisha2.png";
import boxgeisha from "@/assets/slotC3/boxgeisha.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const geishaConfig = reactive({
      playgeisha,
      boxgeisha,
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
      geishaConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stgeisha" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stgeisha{
  margin-top: 14%;
    width: 280px;
    height: 252px;
  background: v-bind("'url(' + geishaConfig.playgeisha + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + geishaConfig.boxgeisha + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.geishap-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.geishap-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.geishap-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + geishaConfig.anygeisha + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stgeisha;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + geishaConfig.dialoggeisha + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stgeisha-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stgeisha-bg img{
    width: 100%;
}
</style>

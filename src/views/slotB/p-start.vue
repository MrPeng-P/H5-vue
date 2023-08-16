<script>

import playthegods from "@/assets/slotB7/playthegods2.png";
import boxthegods from "@/assets/slotB7/boxthegods.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const thegodsConfig = reactive({
      playthegods,
      boxthegods,
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
      thegodsConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stthegods" >
    </div>
  </div>
</template>

<style scoped>


.stthegods{
  margin-top: 4%;
    width: 50%;
    height: 252px;
  background: v-bind("'url(' + thegodsConfig.playthegods + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + thegodsConfig.boxthegods + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.thegodsp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.thegodsp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.thegodsp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + thegodsConfig.anythegods + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stthegods;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + thegodsConfig.dialogthegods + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stthegods-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stthegods-bg img{
    width: 100%;
}
</style>

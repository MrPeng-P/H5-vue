<script>

// import playDragon from "@/assets/slotC6/playDragon2.png";
import boxDragon from "@/assets/slotC6/boxDragon.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const DragonConfig = reactive({
      // playDragon,
      boxDragon,
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
      DragonConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stDragon" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stDragon{
  margin-top: 14%;
    width: 280px;
    height: 252px;
  /* background: v-bind("'url(' + DragonConfig.playDragon + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + DragonConfig.boxDragon + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.Dragonp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.Dragonp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.Dragonp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + DragonConfig.anyDragon + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stDragon;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + DragonConfig.dialogDragon + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stDragon-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stDragon-bg img{
    width: 100%;
}
</style>

<script>

// import playnavigation from "@/assets/slotD22/playnavigation2.png";
import boxnavigation from "@/assets/slotD22/boxnavigation.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const navigationConfig = reactive({
      // playnavigation,
      boxnavigation,
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
      navigationConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stnavigation" >
    </div>
  </div>
</template>

<style scoped>


.stnavigation{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + navigationConfig.playnavigation + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + navigationConfig.boxnavigation + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.navigationp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.navigationp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.navigationp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + navigationConfig.anynavigation + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stnavigation;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + navigationConfig.dialognavigation + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stnavigation-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stnavigation-bg img{
    width: 100%;
}
</style>

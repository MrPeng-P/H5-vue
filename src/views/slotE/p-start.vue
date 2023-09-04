<script>

// import playstorm from "@/assets/slotE5/playstorm.png";
import boxstorm from "@/assets/slotE5/boxstorm.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const stormConfig = reactive({
      // playstorm,
      boxstorm,
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
      stormConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="ststorm" >
    </div>
  </div>
</template>

<style scoped>


.ststorm{
  margin-top: 27%;
    width: 30%;
    height: 252px;
  /* background: v-bind("'url(' + stormConfig.playstorm + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + stormConfig.boxstorm + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.stormp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.stormp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.stormp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + stormConfig.anystorm + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-ststorm;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + stormConfig.dialogstorm + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.ststorm-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.ststorm-bg img{
    width: 100%;
}
</style>

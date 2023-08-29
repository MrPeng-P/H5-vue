<script>

// import playpoker2 from "@/assets/slotF4/playpoker2.png";
import boxpoker from "@/assets/slotF4/boxpoker2.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const pokerConfig = reactive({
      // playpoker2,
      boxpoker,
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
      pokerConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stpoker" >
    </div>
  </div>
</template>

<style scoped>


.stpoker{
  margin-top: 1%;
    width: 20%;
    height: 252px;
  /* background: v-bind("'url(' + pokerConfig.playpoker2 + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + pokerConfig.boxpoker + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.pokerp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.pokerp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.pokerp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + pokerConfig.anypoker + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stpoker;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + pokerConfig.dialogpoker + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stpoker-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stpoker-bg img{
    width: 100%;
}
</style>

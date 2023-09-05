<script>

// import playharvest from "@/assets/slotE7/playharvest.png";
import boxharvest from "@/assets/slotE7/boxharvest.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const harvestConfig = reactive({
      // playharvest,
      boxharvest,
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
      harvestConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stharvest" >
    </div>
  </div>
</template>

<style scoped>


.stharvest{
  margin-top: 27%;
    width: 30%;
    height: 252px;
  /* background: v-bind("'url(' + harvestConfig.playharvest + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + harvestConfig.boxharvest + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.harvestp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.harvestp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.harvestp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + harvestConfig.anyharvest + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stharvest;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + harvestConfig.dialogharvest + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stharvest-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stharvest-bg img{
    width: 100%;
}
</style>

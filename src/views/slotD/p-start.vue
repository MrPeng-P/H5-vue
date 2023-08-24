<script>

// import playicehouse from "@/assets/slotD11/playicehouse2.png";
import boxicehouse from "@/assets/slotD11/playicehouse2.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const icehouseConfig = reactive({
      // playicehouse,
      boxicehouse,
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
      icehouseConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="sticehouse" >
    </div>
  </div>
</template>

<style scoped>


.sticehouse{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + icehouseConfig.playicehouse + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + icehouseConfig.boxicehouse + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}


.icehousep-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.icehousep-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.icehousep-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + icehouseConfig.anyicehouse + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-sticehouse;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + icehouseConfig.dialogicehouse + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.sticehouse-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.sticehouse-bg img{
    width: 100%;
}
</style>

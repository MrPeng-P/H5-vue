<script>

import playjaguar2 from "@/assets/slotF7/playjaguar.png";
import boxjaguar from "@/assets/slotF7/boxjaguar.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const jaguarConfig = reactive({
      playjaguar2,
      boxjaguar,
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
      jaguarConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stjaguar" >
    </div>
  </div>
</template>

<style scoped>


.stjaguar{
  margin-top: 1%;
    width: 20%;
    height: 252px;
  /* background: v-bind("'url(' + jaguarConfig.playjaguar2 + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + jaguarConfig.boxjaguar + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.jaguarp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.jaguarp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.jaguarp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + jaguarConfig.anyjaguar + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stjaguar;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + jaguarConfig.dialogjaguar + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stjaguar-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stjaguar-bg img{
    width: 100%;
}
</style>

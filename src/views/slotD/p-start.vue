<script>

import playinvention from "@/assets/slotD6/playinvention2.png";
import boxinvention from "@/assets/slotD6/boxinvention.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const inventionConfig = reactive({
      playinvention,
      boxinvention,
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
      inventionConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stinvention" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stinvention{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  background: v-bind("'url(' + inventionConfig.playinvention + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + inventionConfig.boxinvention + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.inventionp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.inventionp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.inventionp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + inventionConfig.anyinvention + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stinvention;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + inventionConfig.dialoginvention + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stinvention-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stinvention-bg img{
    width: 100%;
}
</style>

<script>

import playgem from "@/assets/slotD5/playgem2.png";
import boxgem from "@/assets/slotD5/boxgem.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const gemConfig = reactive({
      playgem,
      boxgem,
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
      gemConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stgem" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stgem{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  background: v-bind("'url(' + gemConfig.playgem + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + gemConfig.boxgem + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.gemp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.gemp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.gemp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + gemConfig.anygem + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stgem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + gemConfig.dialoggem + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stgem-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stgem-bg img{
    width: 100%;
}
</style>

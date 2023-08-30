<script>

// import playpyramid from "@/assets/slotD19/playpyramid2.png";
import boxpyramid from "@/assets/slotD19/boxpyramid.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const pyramidConfig = reactive({
      // playpyramid,
      boxpyramid,
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
      pyramidConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stpyramid" >
    </div>
  </div>
</template>

<style scoped>


.stpyramid{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + pyramidConfig.playpyramid + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + pyramidConfig.boxpyramid + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.pyramidp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.pyramidp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.pyramidp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + pyramidConfig.anypyramid + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stpyramid;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + pyramidConfig.dialogpyramid + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stpyramid-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stpyramid-bg img{
    width: 100%;
}
</style>

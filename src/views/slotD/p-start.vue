<script>



import playsuspects from "@/assets/slotD33/playsuspects2.png";
import boxsuspects from "@/assets/slotD33/boxsuspects.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";



export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const suspectsConfig = reactive({
      playsuspects,
      boxsuspects,
    });
   

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
  
    return {
        className,
      suspectsConfig,
      ...allMethods,
    };
  },
};


</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stsuspects" >

      
    </div>
    
  </div>
  
</template>

<style scoped>
.suspects{
  display: none;
}

.stsuspects{
  margin-top: 3%;
    width: 25%;
    height: 50%;
  background: v-bind("'url(' + suspectsConfig.playsuspects + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + suspectsConfig.boxsuspects + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.suspectsp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.suspectsp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.suspectsp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + suspectsConfig.anysuspects + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stsuspects;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + suspectsConfig.dialogsuspects + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stsuspects-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stsuspects-bg img{
    width: 100%;
}
</style>

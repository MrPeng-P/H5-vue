<script>



// import playsuperman from "@/assets/slotD29/playsuperman2.png";
import boxsuperman from "@/assets/slotD29/boxsuperman.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";



export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const supermanConfig = reactive({
      // playsuperman,
      boxsuperman,
    });
   

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
  
    return {
        className,
      supermanConfig,
      ...allMethods,
    };
  },
};


</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stsuperman" >

      
    </div>
    
  </div>
  
</template>

<style scoped>
.superman{
  display: none;
}

.stsuperman{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + supermanConfig.playsuperman + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + supermanConfig.boxsuperman + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.supermanp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.supermanp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.supermanp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + supermanConfig.anysuperman + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stsuperman;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + supermanConfig.dialogsuperman + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stsuperman-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stsuperman-bg img{
    width: 100%;
}
</style>

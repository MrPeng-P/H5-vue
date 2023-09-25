<script>



// import playclubbox from "@/assets/slotD31/playclubbox2.png";
import boxclubbox from "@/assets/slotD31/boxclubbox.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";



export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const clubboxConfig = reactive({
      // playclubbox,
      boxclubbox,
    });
   

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
  
    return {
        className,
      clubboxConfig,
      ...allMethods,
    };
  },
};


</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stclubbox" >

      
    </div>
    
  </div>
  
</template>

<style scoped>
.clubbox{
  display: none;
}

.stclubbox{
  margin-top: -2%;
    width: 36%;

    height: 136px;
  /* background: v-bind("'url(' + clubboxConfig.playclubbox + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + clubboxConfig.boxclubbox + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.clubboxp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.clubboxp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.clubboxp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + clubboxConfig.anyclubbox + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stclubbox;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + clubboxConfig.dialogclubbox + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stclubbox-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stclubbox-bg img{
    width: 100%;
}
</style>

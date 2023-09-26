<script>



import playmyFruit from "@/assets/slotD32/playmyFruit2.png";
import boxmyFruit from "@/assets/slotD32/boxmyFruit.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";



export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const myFruitConfig = reactive({
      playmyFruit,
      boxmyFruit,
    });
   

    const allMethods = {
     
        goHome:()=>{
            router.push("/home")
        }
    };
  
    return {
        className,
      myFruitConfig,
      ...allMethods,
    };
  },
};


</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stmyFruit" >

      
    </div>
    
  </div>
  
</template>

<style scoped>
.myFruit{
  display: none;
}

.stmyFruit{
  margin-top: 3%;
    width: 25%;
    height: 50%;
  background: v-bind("'url(' + myFruitConfig.playmyFruit + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + myFruitConfig.boxmyFruit + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.myFruitp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.myFruitp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.myFruitp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + myFruitConfig.anymyFruit + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stmyFruit;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + myFruitConfig.dialogmyFruit + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stmyFruit-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stmyFruit-bg img{
    width: 100%;
}
</style>

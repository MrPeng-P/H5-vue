<script>

// import playjackpot from "@/assets/slotD12/playjackpot2.png";
import boxjackpot from "@/assets/slotD12/playjackpot2.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const jackpotConfig = reactive({
      // playjackpot,
      boxjackpot,
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
      jackpotConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stjackpot" >
    </div>
  </div>
</template>

<style scoped>


.stjackpot{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + jackpotConfig.playjackpot + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + jackpotConfig.boxjackpot + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}


.jackpotp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.jackpotp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.jackpotp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + jackpotConfig.anyjackpot + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stjackpot;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + jackpotConfig.dialogjackpot + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stjackpot-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stjackpot-bg img{
    width: 100%;
}
</style>

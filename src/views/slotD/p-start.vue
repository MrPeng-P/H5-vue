<script>

// import playQueen from "@/assets/slotD23/playQueen2.png";
import boxQueen from "@/assets/slotD23/boxQueen.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const QueenConfig = reactive({
      // playQueen,
      boxQueen,
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
      QueenConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stQueen" >
    </div>
  </div>
</template>

<style scoped>


.stQueen{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + QueenConfig.playQueen + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + QueenConfig.boxQueen + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.Queenp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.Queenp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.Queenp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + QueenConfig.anyQueen + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stQueen;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + QueenConfig.dialogQueen + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stQueen-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stQueen-bg img{
    width: 100%;
}
</style>

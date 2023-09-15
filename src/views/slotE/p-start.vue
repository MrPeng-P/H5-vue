<script>

// import playRome from "@/assets/slotE13/playRome.png";
import boxRome from "@/assets/slotE13/boxRome.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";


export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const RomeConfig = reactive({
      // playRome,
      boxRome,
    });

    const allMethods = {
      goHome: () => {
      

        router.push("/home");
      },
    };
    onMounted(()=>{

    })
    return {
      className,
      RomeConfig,
      ...allMethods,
    };
  },
};


</script>
<template>

  <div :class="className" @click="goHome">
    
   <div class="stRome">
    
   </div>
  </div>

</template>

<style scoped>
.Rome{
  display: none;
}
.stRome {
  margin-top: 27%;
  width: 30%;
  height: 252px;
  /* background: v-bind("'url(' + RomeConfig.playRome + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;
}
.container {
  background: v-bind("'url(' + RomeConfig.boxRome + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Romep-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.Romep-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Romep-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + RomeConfig.anyRome + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal {
  padding-top: 155px;
  display: flex;
  justify-content: center;
  align-items: flex-stRome;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + RomeConfig.dialogRome + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star {
  position: absolute;
  width: 50%;
}
.model-img {
  width: 90%;
}

.stRome-bg {
  position: absolute;
  top: 0;
  z-index: 1;
}
.stRome-bg img {
  width: 100%;
}
.swan{
  display: none;
}
</style>

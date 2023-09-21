<script>

// import playwild from "@/assets/slotE14/playwild.png";
import boxwild from "@/assets/slotE14/boxwild.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";


export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const wildConfig = reactive({
      // playwild,
      boxwild,
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
      wildConfig,
      ...allMethods,
    };
  },
};


</script>
<template>

  <div :class="className" @click="goHome">
    
   <div class="stwild">
    
   </div>
  </div>

</template>

<style scoped>
.wild{
  display: none;
}
.stwild {
  margin-top: 27%;
  width: 30%;
  height: 252px;
  /* background: v-bind("'url(' + wildConfig.playwild + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;
}
.container {
  background: v-bind("'url(' + wildConfig.boxwild + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wildp-he {
  position: relative;
  margin-top: 26%;
  width: 140%;
  height: 105vw;
  display: flex;
  justify-content: space-between;
  transform: scale(0.65);
}
.wildp-hidden {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wildp-item {
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + wildConfig.anywild + ')'");
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal {
  padding-top: 155px;
  display: flex;
  justify-content: center;
  align-items: flex-stwild;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + wildConfig.dialogwild + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star {
  position: absolute;
  width: 50%;
}
.model-img {
  width: 90%;
}

.stwild-bg {
  position: absolute;
  top: 0;
  z-index: 1;
}
.stwild-bg img {
  width: 100%;
}
.swan{
  display: none;
}
</style>

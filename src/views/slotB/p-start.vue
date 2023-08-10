<script>

import playwisdom from "@/assets/slotB2/playwisdom2.png";
import boxwisdom from "@/assets/slotB2/boxwisdom.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const wisdomConfig = reactive({
      playwisdom,
      boxwisdom,
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
      wisdomConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className">
    <div class="stwisdom" @click="goHome">
    </div>
  </div>
</template>

<style scoped>


.stwisdom{
  margin-top: 20%;
    width: 280px;
    height: 252px;
  background: v-bind("'url(' + wisdomConfig.playwisdom + ')'") no-repeat;
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + wisdomConfig.boxwisdom + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.wisdomp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.wisdomp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.wisdomp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + wisdomConfig.anywisdom + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stwisdom;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + wisdomConfig.dialogwisdom + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stwisdom-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stwisdom-bg img{
    width: 100%;
}
</style>

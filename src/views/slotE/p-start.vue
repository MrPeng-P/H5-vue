<script>

// import playCleopatra from "@/assets/slotE8/playCleopatra.png";
import boxCleopatra from "@/assets/slotE8/boxCleopatra.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const CleopatraConfig = reactive({
      // playCleopatra,
      boxCleopatra,
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
      CleopatraConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stCleopatra" >
    </div>
  </div>
</template>

<style scoped>


.stCleopatra{
  margin-top: 27%;
    width: 30%;
    height: 252px;
  /* background: v-bind("'url(' + CleopatraConfig.playCleopatra + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}
.container {
  background: v-bind("'url(' + CleopatraConfig.boxCleopatra + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.Cleopatrap-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.Cleopatrap-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.Cleopatrap-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + CleopatraConfig.anyCleopatra + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stCleopatra;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + CleopatraConfig.dialogCleopatra + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stCleopatra-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stCleopatra-bg img{
    width: 100%;
}
</style>

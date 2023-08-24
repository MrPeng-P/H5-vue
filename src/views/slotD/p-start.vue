<script>

// import playlubricating from "@/assets/slotD9/playlubricating2.png";
import boxlubricating from "@/assets/slotD9/playlubricating2.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const lubricatingConfig = reactive({
      // playlubricating,
      boxlubricating,
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
      lubricatingConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stlubricating" >
    </div>
  </div>
</template>

<style scoped>


.stlubricating{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + lubricatingConfig.playlubricating + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + lubricatingConfig.boxlubricating + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}


.lubricatingp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.lubricatingp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.lubricatingp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + lubricatingConfig.anylubricating + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stlubricating;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + lubricatingConfig.dialoglubricating + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stlubricating-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stlubricating-bg img{
    width: 100%;
}
</style>

<script>

// import playbooks from "@/assets/slotD13/playbooks2.png";
import boxbooks from "@/assets/slotD13/playbooks2.jpg";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = new useRouter();
    const className = "container";
    const booksConfig = reactive({
      // playbooks,
      boxbooks,
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
      booksConfig,
      ...allMethods,
    };
  },
};
</script>
<template>
  
  <div :class="className" @click="goHome">
    <div class="stbooks" >
    </div>
  </div>
</template>

<style scoped>


.stbooks{
  margin-top: -2%;
    width: 36%;

    height: 252px;
  /* background: v-bind("'url(' + booksConfig.playbooks + ')'") no-repeat; */
  background-size: 100%;
  z-index: 99;

}        
.container {
  background: v-bind("'url(' + booksConfig.boxbooks + ')'") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center 2%;
  align-items: center;
}


.booksp-he {
  position: relative;
    margin-top: 26%;
    width: 140%;
    height: 105vw;
    display: flex;
    justify-content: space-between;
    transform: scale(0.65);
}
.booksp-hidden{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.booksp-item {
  
  height: 100%;
  flex: 1;
  background: v-bind("'url(' + booksConfig.anybooks + ')'") ;
  background-position-x: center;
  background-position-y: -0px;
  background-repeat-x: no-repeat;
}

.modal{
  padding-top: 155px;
    display: flex;
    justify-content: center;
    align-items: flex-stbooks;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  /* background: v-bind("'url(' + booksConfig.dialogbooks + ')'") no-repeat; */
  /* background-size: 100%; */
}
.model-star{
    position: absolute;
    width: 50%;
}
.model-img{
  width: 90%;

}

.stbooks-bg{
    position: absolute;
    top: 0;
    z-index: 1;
}
.stbooks-bg img{
    width: 100%;
}
</style>

<template>
  <div class="dial-container">
    <header>
    <div>总积分：{{ stateData.coin }}</div>

    </header>
    <section>
      <dialWrap ref="dialWrap" @changeCoin="changeCoin" :stateData="stateData"></dialWrap>
    </section>
  </div>
</template>

<script>
import { reactive } from "vue";
import dialWrap from "./components/dial.vue";
import prizeImg from "./dial/dial.png";
export default {
  components: { dialWrap },
  setup() {
    const stateData = reactive({
      coin: 20,
      prize_img: prizeImg,
    });
    const allMethods={
      changeCoin:(val)=>{
        stateData.coin=val.coin
        console.log('%c ..........val.........','color:#31ef0e',stateData.coin)
      }
    }
    return {
      stateData,
      ...allMethods
    };
  },
};
</script>
<style scoped>
.dial-container {
  width: 100%;
  height: 100%;
  background: url(./dial/home-bg.png) no-repeat, rgb(255, 107, 5);

  background-size: cover;
  display: inline-block;
}

section {
  width: 6.7rem;
  height: 6.7rem;
  margin: 0 auto;
  margin-top: 2.28rem;
}
</style>

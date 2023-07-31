<script>
// import pGame from './components/p-game.vue'
// import pRoate from './views/p-roate/p-roate.vue'
import { ref, nextTick, provide } from "vue";
export default {
  name: "App",
  setup() {
    // 局部组件刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);

    // 锁定横屏

    // 解除横屏锁定
    // unlockOrientation();

    return {
      isRouterAlive,
    };
  },
};
</script>

<template>
  <!-- <pGame /> -->

    <router-view v-if="isRouterAlive"></router-view>
   
  <!-- <pRoate></pRoate> -->
</template>

<style scoped>
/* 在横屏方向时，强制页面显示为横屏 */
.buttonsT {
  position: fixed;
  top: 0;
}
.boxd {
  width: 100vw;
  height: 100vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

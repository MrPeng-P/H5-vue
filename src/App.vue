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
    const step = ref(false);
    function lockLandscapeOrientation() {
      const element = document.documentElement; // 获取整个文档元素
      // 判断浏览器是否支持全屏 API
      const requestFullscreen =
        element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen ||
        element.msRequestFullscreen;

      if (requestFullscreen) {
        requestFullscreen.call(element); // 请求全屏
      } else {
        console.log("当前浏览器不支持全屏功能。");
      }
      // 先弹出提示框，让用户确认是否进行屏幕旋转
      // 用户确认后执行屏幕旋转
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock("landscape").then(
          function success() {
            console.log("横屏锁定成功！");
            step.value = true;
          },
          function error(err) {
            console.log("横屏锁定失败: ", err);
          }
        );
      } else if (window.screen.lockOrientation) {
        window.screen.orientation.lock("landscape");
      } else {
        console.log("当前浏览器不支持屏幕旋转锁定。");
      }
    }

    function unlockOrientation() {
      if (step.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        // 判断是否支持屏幕旋转
        if (window.screen.orientation && window.screen.orientation.unlock) {
          window.screen.orientation.unlock();
          console.log("解除横屏锁定成功！");
        } else if (window.screen.unlockOrientation) {
          // 兼容性处理，部分浏览器支持 unlockOrientation 方法
          window.screen.unlockOrientation();
          console.log("解除横屏锁定成功1！");
        } else {
          console.log("当前浏览器不支持屏幕旋转锁定。");
        }
      } 
    }

    // 锁定横屏

    // 解除横屏锁定
    // unlockOrientation();

    return {
      isRouterAlive,
      lockLandscapeOrientation,
      unlockOrientation,
    };
  },
};
</script>

<template>
  <!-- <pGame /> -->
    <router-view v-if="isRouterAlive"></router-view>
    <!-- <button class="buttonsT" @click.stop="unlockOrientation()">非全屏</button> -->
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

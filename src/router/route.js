import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
// export const routes = [
//     {
//       path: "/",
//       name: "sea",
//       component: () => import("@/views/p-games.vue"),
//     },

//   ];
// export const routes = [{
//     path: '/',
//     name: 'home',
//     component: () => import('@/views/p-roate/p-home.vue'),
// },{
//     path: '/detail',
//     name: 'detail',
//     component: () => import('@/views/p-roate/p-roate.vue'),
// },{
//     path: '/over',
//     name: 'over',
//     component: () => import('@/views/p-roate/p-over.vue'),
// }]

// export const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: () => import("@/views/dial/p-home.vue"),
//   },
//   {
//     path: "/original",
//     name: "original",
//     component: () => import("@/views/dial/p-dial.vue"),
//   },
// ];

//翻牌
export const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/flop/p-home.vue'),
},
{
    path: '/flop',
    name: 'flop',
    component: () => import('@/views/flop/p-flop.vue'),
}
]

// //复杂老虎机
// export const routes = [
//   {
//     path: "/",
//     name: "start",
//     component: () => import("@/views/slot/p-start.vue"),
//   },

//   {
//     path: "/home",
//     name: "home",
//     component: () => import("@/views/slot/p-home.vue"),
//   },
//   {
//     path: "/list",
//     name: "list",
//     component: () => import("@/views/slot/p-list.vue"),
//   },
// ];

const routerConfig = createRouter({
  // history: createWebHistory(), // ===>mode:"history"
  history: createWebHashHistory(), // ===>mode:"哈希"
  routes,
});
export default routerConfig;

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
// export const routes = [{
//     path: '/',
//     name: 'home',
//     component: () => import('@/views/flop/p-home.vue'),
// },
// {
//     path: '/flop',
//     name: 'flop',
//     component: () => import('@/views/flop/p-flop.vue'),
// }
// ]

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

//复杂老虎机-简化
export const routes = [
  {
    path: "/",
    name: "startA",
    component: () => import("@/views/slotA/p-start.vue"),
  },

  {
    path: "/home",
    name: "homeA",
    component: () => import("@/views/slotA/p-home.vue"),
  },
  {
    path: "/list",
    name: "listA",
    component: () => import("@/views/slotA/p-list.vue"),
  },
];
//复杂老虎机-简化-五排行
// export const routes = [
//   {
//     path: "/",
//     name: "startB",
//     component: () => import("@/views/slotB/p-start.vue"),
//   },

//   {
//     path: "/home",
//     name: "homeB",
//     component: () => import("@/views/slotB/p-home.vue"),
//   },

// ];
//复杂老虎机-简化-横排滚动-wu排行
// export const routes = [
//   {
//     path: "/",
//     name: "startB",
//     component: () => import("@/views/slotC/p-start.vue"),
//   },

//   {
//     path: "/home",
//     name: "homeB",
//     component: () => import("@/views/slotC/p-home.vue"),
//   },
  // {
  //   path: "/list",
  //   name: "listA",
  //   component: () => import("@/views/slotB/p-list.vue"),
  // },
// ];


const routerConfig = createRouter({
  // history: createWebHistory(), // ===>mode:"history"
  history: createWebHashHistory(), // ===>mode:"哈希"
  routes,
});
export default routerConfig;

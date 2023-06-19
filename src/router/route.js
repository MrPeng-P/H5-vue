
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router"

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

export const routes = [{
        path: '/',
        name: 'home',
        component: () => import('@/views/dial/p-dial.vue'),
    }
]
    

const routerConfig = createRouter({
    // history: createWebHistory(), // ===>mode:"history"
    history: createWebHashHistory(), // ===>mode:"哈希"
    routes
})
export default routerConfig

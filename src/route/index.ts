import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/files',
        name: 'files',
        component: ()=>import("@/views/filesupload.vue"),
        children: [
            {
                path: '/files/singleImg',
                name: 'singleImg',
                component: ()=>import("@/views/Files/singleImg.vue")
            },
            {
                path: '/files/multiImg',
                name: 'multiImg',
                component: ()=>import("../views/Files/multiImg.vue")
            },
            {
                path: '/files/video',
                name: 'video',
                component:()=>import("../views/Files/video.vue")
            },

        ]
    },
    {
        path:'/todo',
        name:'todolist',
        component:()=>import("../views/todolist.vue"),
    },
    {
        path:'/theme',
        name:'theme',
        component:()=>import("../views/theme.vue")
    },
    {
        path:'/images',
        name:'images',
        component:()=>import("../views/images.vue")
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router
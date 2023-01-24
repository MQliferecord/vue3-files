import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import multiImg from '../views/Files/multiImg.vue'
import singleImg from '../views/Files/singleImg.vue'
import video from '../views/Files/video.vue'
import index from '../views/index.vue'
import filesupload from '../views/filesupload.vue'
import todolist from '../views/todolist.vue'
import theme from '../views/theme.vue'
import images from '../views/images.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/files',
        name: 'files',
        component: filesupload,
        children: [
            {
                path: '/files/singleImg',
                name: 'singleImg',
                component: singleImg
            },
            {
                path: '/files/multiImg',
                name: 'multiImg',
                component: multiImg
            },
            {
                path: '/files/video',
                name: 'video',
                component: video
            },

        ]
    },
    {
        path:'/todo',
        name:'todolist',
        component:todolist,
    },
    {
        path:'/theme',
        name:'theme',
        component:theme
    },
    {
        path:'/images',
        name:'images',
        component:images
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router
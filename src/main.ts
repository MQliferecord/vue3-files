import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/reset.css'
import './style/global.scss'
import 'animate.css'
import lazyImg from '@/hooks/useDirective'


createApp(App).use(Vant).use(store).use(router).use(lazyImg).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/reset.css'
import './style/global.scss'
createApp(App).use(Vant).use(router).mount('#app')


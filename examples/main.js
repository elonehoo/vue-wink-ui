import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import winkUi from './../packages'

createApp(App).use(router).use(winkUi).mount('#app')

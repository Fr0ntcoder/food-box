import { createApp } from 'vue'
import App from './App.vue'
import router from './src/router'
import './src/assets/styles/main.css'

createApp(App).use(router).mount('#app')

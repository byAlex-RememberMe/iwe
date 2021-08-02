import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/fontello.css'
import './bootstrap/js/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).mount('#app')

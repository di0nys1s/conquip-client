import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router/index.js'
// import store from './store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
// app.use(store)
app.mount('#app')

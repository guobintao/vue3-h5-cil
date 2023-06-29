import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'

const app = createApp(App)
app.use(vant)
app.use(store)
app.use(router)
app.mount('#app')

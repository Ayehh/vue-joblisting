import '@/assets/main.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'

import VueToastificationPlugin from 'vue-toastification'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'




const app = createApp(App)

app.use(router)
app.use(VueToastificationPlugin)
app.mount('#app')

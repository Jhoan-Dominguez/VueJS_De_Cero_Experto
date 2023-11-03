import { createApp } from 'vue'
import App from './App.vue'

import router from "@/modules/routes/router"

createApp(App)
    .use(router)
    .mount('#app')

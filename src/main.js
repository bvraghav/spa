import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from '@/App.vue'
import router from '@/router'
import fa from '@/use/fa'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(createMetaManager())

app.use(router)
app.use(fa)

app.mount('#app')

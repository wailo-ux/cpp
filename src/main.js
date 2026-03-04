import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts"; // <--- Tambah ini

import './style.css'

const app = createApp(App)

app.use(router)
app.use(VueApexCharts) // <--- Registrasi ini
app.mount('#app')
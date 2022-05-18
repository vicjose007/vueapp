import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

axios.defaults.baseURL = "https://localhost:7090/"

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios) 
app.mount('#app')


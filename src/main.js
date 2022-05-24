import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

axios.defaults.baseURL = "https://localhost:7090/"

const app = createApp(App).component('fa', FontAwesomeIcon)
library.add(fas)
app.use(router)
app.use(VueAxios, axios) 
app.mount('#app')


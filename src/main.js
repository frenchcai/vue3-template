import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import route from "./route"
import { createPinia } from 'pinia'
import  fitMobileWidth  from './utils/mobileFit'
import vigoUi from "vigo-ui-caifw"
import "vigo-ui-caifw/lib/vigo-ui-caifw.css"
const pinia = createPinia()
const app = createApp(App)
app.component("vg-button",vigoUi.button)
app.use(pinia).use(route).use(vigoUi).use(fitMobileWidth).mount('#app')

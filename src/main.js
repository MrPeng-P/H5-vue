import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/route'
import 'amfe-flexible'//导入
const app = createApp(App)
// 引入 Vconsole
import Vconsole from 'vconsole'
// 所有环境均使用
new Vconsole()

app.use(router)
app.mount('#app')

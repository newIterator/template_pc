import { createApp } from 'vue';
import './style.css'
import "vant/lib/index.css" // 引入vant样式
import 'virtual:svg-icons-register' // 阿里巴巴雪碧图
import Router from './router'
import Store from './store'
import App from './App.vue'
import Directives from "./directives/index"
import "../src/plugins/api/mock/index.js" // 引入mock.js

// 引入自定义的封装事件
import globalC from './plugins/components/direative'
import http from './plugins/api/http'

// 引入自定的指令事件
// import direatives from './plugins/direative'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(http)
// app.use(direatives)
app.use(Directives)
app.use(globalC)
// app.use(VueFullPage)
app.mount('#app')

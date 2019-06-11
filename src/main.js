import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 在main.js文件中引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 样式文件得单独引用进来， reset.css 是样式重置文件，根据自己项目情况引入
// import 'element-ui/lib/theme-chalk/reset.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

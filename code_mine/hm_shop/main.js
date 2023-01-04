import App from './App'
// 导入api.js
import { myRequest } from './util/api.js'
//将myRequest挂载到全局
Vue.prototype.$myRequest = myRequest
//定义全局过滤器，格式化时间
Vue.filter('formatDate',(date)=>{
	const ndate = new Date(date);
	const year = ndate.getFullYear()
	const mouth = ndate.getMonth().toString().padStart(2,0)
	const day = ndate.getDay().toString().padStart(2,0)
	console.log(year,mouth,day);
	return year+'-'+mouth+'-'+day
})
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

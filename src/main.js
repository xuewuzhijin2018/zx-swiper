import Vue from 'vue'
import App from './App.vue'
import zxSwiper from '../components/export.js'
Vue.component('byui-swiper', zxSwiper)
Vue.config.productionTip = false
new Vue({
	render: h => h(App),
}).$mount('#app')

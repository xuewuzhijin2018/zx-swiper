import swiper from './swiper'
export default swiper
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('zx-swiper', swiper)
}

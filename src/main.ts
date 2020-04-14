import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'lib-flexible/flexible'
// 全局插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// @ts-ignore
import animated from 'animate.css'
Vue.use(animated)
// @ts-ignore
import * as swiperAnimate from './assets/js/swiper.animate1.0.3.min.js'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$swiperAnimateCache = swiperAnimate.swiperAnimateCache
Vue.prototype.$swiperAnimate = swiperAnimate.swiperAnimate
Vue.prototype.$clearSwiperAnimate = swiperAnimate.clearSwiperAnimate

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入注册全局函数
import func from './utils/func'
Vue.prototype.func = func;

//挂载全局toast
import toast from './utils/toast.js'
Vue.prototype.$toast = toast;
import create from './utils/create.js'
Vue.prototype.$create = create;

//全局过滤器
Vue.filter('timeago', function(value) {
  return func.timeago(value)
})

// router.beforeEach((to, from, next) => {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0; 
//   window.pageYOffset = 0;
//   next();
// }),

// router.afterEach((to, from, next) => {

//   window.scrollTo(0, 0);

// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

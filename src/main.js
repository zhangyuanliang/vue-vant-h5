// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

// 导入样式
import './styles/common.scss'

import App from './App'
import router from './router'
import store from './store'

import './utils/rem'

Vue.config.productionTip = false
Vue.use(Vant)
// options 为可选参数，无则不传
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

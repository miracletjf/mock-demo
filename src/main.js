/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 22:31:11
 * @LastEditTime: 2019-08-21 23:21:14
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入 mock
import './mock'

// 引入 axios
import axios from 'axios'

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

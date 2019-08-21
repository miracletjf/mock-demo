/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 22:40:18
 * @LastEditTime: 2019-08-21 23:24:40
 * @LastEditors: Please set LastEditors
 */
import Mock from 'mockjs'
import articleAPI from './article'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的情况
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if(this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  } 
  this.proxy_send(...arguments)
}

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)

export default Mock

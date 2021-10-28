import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';
// Vue.use(Toast);

// 创建一个单例（实例）
const instance = axios.create({
  baseURL: 'http://kumanxuan1.f3322.net:8001',
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
  // 因为添加购物车发送请求要请求头中携带用户的token（后台要判断加入到哪个用户的购物车中），所以要在请求拦截中headers字段上加入token，X-Nideshop-Token为请求后台时传入的参数
  // 获取token
  let token = localStorage.getItem('usertoken');
  if (token) {
      // 在配置里加上请求头
      config.headers['X-Nideshop-Token'] = token
  }
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  return config
}, err => {
  return Promise.reject(err);
});

// 响应拦截
instance.interceptors.response.use(res => {
  Toast.clear();
  return res.data
}, err => {
  return Promise.reject(err);
});

export default instance
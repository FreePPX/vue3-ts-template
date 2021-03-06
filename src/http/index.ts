import axios from 'axios';
import {getStorage} from '../storage';

// axios 配置
axios.defaults.timeout = 180000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json';

// http request 拦截器
axios.interceptors.request.use(
  (config: any) => {
    let token = getStorage('token');
    if (!!token) {
      config.headers.token = token;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          break;
        case 401:
          // 401 清除token信息并跳转到登录页面
          break;
        case 500:
          // console.log('500', error);
          break;
      }
    }
    return error.response;
  });

export default axios;

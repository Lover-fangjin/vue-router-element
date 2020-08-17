import axios from 'axios'
import store from '../store/index.js';
import Mock from '../mock/index.js' // mock.js文件

let base = config.services;
//axios基本配置
axios.defaults.baseURL = base;
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';

//请求开始拦截
axios.interceptors.request.use(conf => {
    conf.headers['Authorization'] = sessionStorage.getItem('token')+'';
    return conf
  }, error => ({ status: 0, msg: error.message })
)
//请求返回拦截
axios.interceptors.response.use(response => {
  return Promise.resolve(response).then(checkCode)
},error => {
  return Promise.reject(error)
})

// 后台自定义 code错误处理
const checkCode = (res) => {
  if(res.data.code === 403){
    console.log("error: ", res.data);
    store.commit('updateMessage', res.data);
    return false
  }else{
    if(res.data.code !== 200){
      store.commit('updateMessage', res.data);
    }
    return res.data;
  }
}

/**
 * 接口请求部分
 * @param param
 */

// export const postData = (param) => { return axios.get(`/posts`, {data: param}).then(res => res) }            //例：Mock数据的get 请求
//登录
export const login = (param) => { return axios.post(`/user/login`,  param).then(res => res) }            //例：post 请求
export const logout = () => { return axios.get(`/user/logout`, {}).then(res => res) } // 退出登录请求

export const getDisplaceList = () => { return axios.get(`/monitor/displace`, {}).then(res => res) } // 退出登录请求


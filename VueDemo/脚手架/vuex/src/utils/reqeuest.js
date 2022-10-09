import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  timeout: 2000
})

//请求拦截器     前端给后端的参数   还没到后盾响应
instance.interceptors.request.use(function (config) {
  //发生请求前
  console.log(1);
  return config
}, function (error) {
  return Promise.reject(error)
})


//响应拦截器     后端给前端的数据   
instance.interceptors.response.use(function (response) {
  console.log(2);
  return response
}, function (error) {
  return Promise.reject(error)

})

export default instance

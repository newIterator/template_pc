import Axios from 'axios'
const loadEnv = import.meta.env
const baseURL = loadEnv.VITE_HTTP_URL

// Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service:any = Axios.create({
  baseURL,
  timeout: 300000, // 请求超时时间
  withCredentials: false,
  headers: {
    AccessToken: ''
  }
})

// request拦截器
service.interceptors.request.use((config:any) => {
  let token:any = null // 获取token
  if (token) {
    // config.headers.common.Authorization = 'Bearer ' + token
    config.headers.AccessToken = token
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url:string = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value:any = config.params[propName];
      var part:any = encodeURIComponent(propName) + "=";
      if (value !== null && typeof(value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params:any = propName + '[' + key + ']';
            var subPart:any = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, (error:any) => {
  throw error
})
// respone拦截器
service.interceptors.response.use(
  (response:any) => {
    const code:number = response.data.code || 200;
    if (code !== 200) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error:any) => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    return Promise.reject(error)
  }
)
export default {
  install (Vue:any, name:string = '$http') {
    // 注意事项：VUE3的Vue有没有prototype配置项
    Object.defineProperty(Vue.config.globalProperties, name, {
      value: service.request
    })
  }
}

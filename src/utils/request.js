import axios from 'axios'
import store from '@/store'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 8*60*1000 // request timeout
})

// json转FormData
const jsonToFormData = (jsonData) => {
  const formData = new FormData()
  for (const key in jsonData) {
    formData.append(key, jsonData[key])
  }
  return formData
}

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.data) {
      if (config.method === 'post' && !config.data.isNotFormData) {
        config.data = jsonToFormData(config.data)
      }
      if (config.method === 'get') {
        config.paramsSerializer = function(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      }
      return config
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (+res.status !== 1) {
      // Message({
      //   message: res.msg || 'status 错误',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      //
      return Promise.reject(res.msg || 'Error')
    } else {
      return res.data
    }
  },
  error => {
    // Message({
    //   message: error.msg || '服务器报错',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // return Promise.reject(error)
  }
)

export default service

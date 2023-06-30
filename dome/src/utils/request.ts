/*
 * @Author: guobintao
 * @Date: 2023-06-30 20:31:38
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-06-30 20:31:59
 */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { showToast, Toast } from 'vant'
const request: AxiosInstance = axios.create({
  timeout: 3000
})

request.interceptors.request.use(
  (config: any) => {
    config.headers['Content-Type'] = 'application/json'
    if (localStorage.getItem('TOKEN')) {
      const Authorization = localStorage.getItem('TOKEN')
      config.headers['Authorization'] = `${Authorization}`
    }
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    const status = error.response?.status
    switch (status) {
      case 401:
        showToast({
          type: 'fail',
          message: '暂无数据',
          onClose() {
            const pathUrl = location.href.split('/')
            window.location.href = `/user/login?redirect=${encodeURIComponent('/' + pathUrl[3])}`
          }
        })
        break
      case 406:
        Toast.fail('暂无数据')
        showToast({
          type: 'fail',
          message: '暂无数据'
        })
        break
      case 500:
        Toast.fail('暂无数据')
        showToast({
          type: 'fail',
          message: '服务端报错'
        })
        break
      default:
        showToast({
          type: 'fail',
          message: '未知错误，请刷新页面'
        })
        break
    }

    return Promise.reject(error)
  }
)

export { request, axios }

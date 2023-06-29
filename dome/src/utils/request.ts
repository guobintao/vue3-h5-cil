import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { showToast } from 'vant'
const request: AxiosInstance = axios.create({
  timeout: 3000
})

request.interceptors.request.use(
  (config: any) => {
    config.headers['ContentType'] = 'application/json'
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
   
    return Promise.reject(error)
  }
)

export {request,axios}
/*
 * @Author: guobintao
 * @Date: 2023-07-01 07:35:57
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-07-02 19:46:00
 */
import { request } from '@/utils/request'
import { API_HOME_CONFIG } from '@/config/api/home'
import { UserManageType } from '@/interface/model/user'
import { AxiosError } from 'axios'

interface HomeServiceInterface {
  getSwiperList: (params: { type?: number; pagesize?: number; pagecont?: number }) => Promise<any>
  getGoodsList: (params: { pagesize?: number; pagecont?: number }) => Promise<any>
}

export const useHomeSerivice = (): HomeServiceInterface => {
  class HomeService {
    getSwiperList(params: { type?: number; pagesize?: number; pagecont?: number }) {
      const url = API_HOME_CONFIG.getSwiperList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    getGoodsList(params: { pagesize?: number; pagecont?: number }) {
      const url = API_HOME_CONFIG.getGoodsList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new HomeService()
}

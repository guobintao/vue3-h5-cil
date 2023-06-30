/*
 * @Author: guobintao
 * @Date: 2023-06-30 20:18:46
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-06-30 20:58:44
 */
import { request } from '@/utils/request'
import { API_USER_CONFIG } from '@/config/api/user'
import { UserManageType } from '@/interface/model/user'
import { AxiosError } from 'axios'

interface UserserviceInterface {
  login: (params: UserManageType.UserLoginFormState) => Promise<any>
  registry: (params: UserManageType.UserRegistryFormState) => Promise<any>
}

export const useUserSerivice = (): UserserviceInterface => {
  class UserService {
    login(params: UserManageType.UserLoginFormState) {
      const url = API_USER_CONFIG.login()
      return request
        .post(url, params)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    registry(params: UserManageType.UserRegistryFormState) {
      const url = API_USER_CONFIG.registry()
      return request
        .post(url, params)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new UserService()
}

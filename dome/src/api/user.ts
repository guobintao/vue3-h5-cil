/*
 * @Author: guobintao
 * @Date: 2023-06-30 20:18:46
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-06-30 20:33:28
 */
import { request } from '@/utils/request'
import { API_USER_CONFIG } from '@/config/api/user'
import { UserManageType } from '@/interface/model/user'
import { AxiosError } from 'axios'

interface UserserviceInterface {
  login: (params: UserManageType.UserLoginFormState) => Promise<any>
  registry: (params: { username: string; password: string }) => Promise<any>
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
    registry(params: { username: string; password: string }) {
      return Promise.resolve(1)
    }
  }
  return new UserService()
}

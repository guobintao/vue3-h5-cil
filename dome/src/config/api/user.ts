/*
 * @Author: guobintao
 * @Date: 2023-06-30 11:38:10
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-06-30 20:16:08
 */
import { resUrl } from '@/utils'

export const API_USER_CONFIG = {
  login: () => resUrl('/user/login'),
  registry: () => resUrl('/user/registry')
}

/*
 * @Author: guobintao
 * @Date: 2023-06-29 20:01:06
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-06-30 19:55:49
 */

import { BASE_URL } from '@/config'

export const resUrl = (url: string): string => {
  return BASE_URL + url
}

/*
 * @Author: guobintao
 * @Date: 2023-06-30 21:48:31
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-07-02 20:35:13
 */
import { resUrl } from '@/utils'

export const API_HOME_CONFIG = {
  getSwiperList: () => resUrl('/carousel/list'),
  getGoodsList: () => resUrl('/product/list')
}

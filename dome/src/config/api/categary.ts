/*
 * @Author: guobintao 
 * @Date: 2023-07-03 19:46:46 
 * @Last Modified by:   guobintao 
 * @Last Modified time: 2023-07-03 19:46:46 
 */
import { resUrl } from '@/utils'

export const API_CATEARY_CONFIG = {
  firstCategaryList: () => resUrl('/getTypeList'),
  secondCategaryList: () => resUrl('/getSortList'),
  getProductList: () => resUrl('/product/typeList')
}

/*
 * @Author: guobintao
 * @Date: 2023-06-29 14:47:28
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-07-03 19:51:04
 */
export namespace BasiMangeType {
  export interface Data<T> {
    [key: string]: T
  }
  export interface IAxiosResponse {
    code: number
    msg?: string
    result?: any
    data?: any
  }
  export interface PaginationInterface {
    pagesize: number
    pagecount: number
  }
}

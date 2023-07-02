/*
 * @Author: guobintao
 * @Date: 2023-06-29 14:48:42
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-07-01 08:35:32
 */
export interface CommitInterface<T> {
  commit: (type: string, value: any) => void
  state: T
}
export interface Ipayload {
  type: string
  payload?: any
}

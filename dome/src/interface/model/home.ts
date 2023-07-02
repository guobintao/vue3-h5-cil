/*
 * @Author: guobintao
 * @Date: 2023-07-02 19:38:02
 * @Last Modified by: guobintao
 * @Last Modified time: 2023-07-02 19:38:36
 */
export namespace HomeManageType {
  export interface SwiperInterface {
    cid: string
    tit: string
    start_time: string
    end_time: string
    img: string
    type: number
  }
  export interface ProductInterface {
    pid: string
    pname: string
    imgUrl: string
    sales: string
    original_price: string
    sale_price: string
    mode: string
    carousel: string
    desc: string
    s_text: string
    s_type: number
    t_type: number
    cid: string | null
  }
}

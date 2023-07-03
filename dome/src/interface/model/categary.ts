import { BasiMangeType } from '@/interface/common'

export namespace CategaryManageType {
  export interface FirsetCategaryInterface {
    t_text: string
    t_type: number
    tid: string
  }
  export interface SecondCategaryInterface {
    s_text: string
    t_type: number
    s_type: number
  }
  export interface CategaryProductInterface extends BasiMangeType.PaginationInterface {
    t_type: number
    s_type: number
  }
}
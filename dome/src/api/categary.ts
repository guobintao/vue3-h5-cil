import { request } from '@/utils/request'
import { API_CATEARY_CONFIG } from '@/config/api/categary'
import { CategaryManageType } from '@/interface/model/categary'
import { LoadingDecorator } from '@/utils/loading'

interface UseCategaryServiceInterface {
  firstCategaryList: () => Promise<any>
  secondCategaryList: (params: { t_type: number }) => Promise<any>
  getProductList(params: CategaryManageType.CategaryProductInterface): Promise<any>
}

export const useCategarySerivice = (): UseCategaryServiceInterface => {
  class CategaryService {
    public firstCategaryList() {
      const url = API_CATEARY_CONFIG.firstCategaryList()
      return request
        .get(url)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch(error => {
          return Promise.reject(error)
        })
    }
    public secondCategaryList(params: { t_type: number }) {
      const url = API_CATEARY_CONFIG.secondCategaryList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch(error => {
          return Promise.reject(error)
        })
    }
    @LoadingDecorator(true)
    public getProductList(params: CategaryManageType.CategaryProductInterface) {
      const url = API_CATEARY_CONFIG.getProductList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch(error => {
          return Promise.reject(error)
        })
    }
  }
  return new CategaryService()
}

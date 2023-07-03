import store from '@/store'

type LoadingDecoratorType = (loading: boolean) => (target: any, key: string, descriptor: PropertyDescriptor) => void

//  loading 修饰符
export const LoadingDecorator: LoadingDecoratorType = (loading = false) => {
  return (target, key, descriptor) => {
    const origin = descriptor.value

    descriptor.value = async (...rest: any[]) => {
      if (loading) {
        let result: any
        /*eslint no-useless-catch: "error"*/
        try {
          store.commit({ type: 'app/UPDATE_LOAD', payload: true })
          result = await origin.apply(this, rest)
        } catch (error) {
          result = error
        } finally {
          store.commit({ type: 'app/UPDATE_LOAD', payload: false })
        }
        return result
      } else {
        return origin
      }
    }
  }
}

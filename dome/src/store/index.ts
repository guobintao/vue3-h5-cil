import { createStore } from 'vuex'
import { CommitInterface } from '@/interface/store'
import { BasiMangeType } from '@/interface/common'

const moduleCreator = function () {
  const modules: BasiMangeType.Data<CommitInterface<string>> = {}
  const context = require.context('./modules', true, /\.ts|js$/)
  const files = context.keys().map(key => context(key))
  files.forEach(file => {
    modules[file.default.name] = file.default
  })
  console.log(modules)

  return modules
}

export default createStore({
  modules: moduleCreator()
})

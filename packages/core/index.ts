import { makeInstaller } from '@ep-toy/utils'
import components from './components'
import '@ep-toy/theme/index.css'
const installer = makeInstaller(components)

// 导出组件 供按需导入使用
export * from '@ep-toy/components'
// 默认导出 供全量导入使用
export default installer
import {createPinia} from 'pinia'
import perist from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
// 使用持久化插件
pinia.use(perist)

// 默认导出，给main.ts使用
export default pinia

// 模块统一导出
export * from './module/test'
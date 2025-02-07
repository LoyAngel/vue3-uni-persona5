import { createSSRApp } from "vue";
import App from "./App.vue";

// 引入 pinia 实例
import pinia from "./stores";
// 引入share mixin
import share from "./utils/share";

export function createApp() {
    // 创建vue实例
    const app = createSSRApp(App);

    // 使用pinia
    app.use(pinia);

    // 混入share
    app.mixin(share);

    return {
        app,
    };
}

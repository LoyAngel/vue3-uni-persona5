/**
 * 添加拦截器：
 *  1. 拦截request请求
 *  2. 拦截uploadFile文件上传
 *
 */

import { testStore } from "@/stores";

const baseURL = "http://127.0.0.1:4523/m1/5747273-5430083-default/api";

// 添加拦截器
const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 1. 非 http 开头需要拼接 baseURL
        if (!options.url.startsWith("http")) {
            options.url = baseURL + options.url;
        }
        console.log(options.url);
        // 2. 请求超时10s
        options.timeout = 10000;
        // 3. 添加小程序端请求头标识
        options.header = {
            ...options.header,
            "source-client": "miniapp",
        };
        // 4. 添加token
        const memberStore = testStore();
        const token = memberStore.test?.token;
        if (token) {
            options.header.Authorization = token;
        }
    },
};
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

interface Data<T>{
    code: string;
    msg: string;
    result: T;
}

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 *  1. 返回Promise对象
 *  2. 请求成功
 *    2.1 提取数据res.data
 *    2.2 返回数据
 *  3. 请求失败
 *    3.1 网络错误 -> 提示用户切换网络
 *    3.2 401 -> 清除token
 *    3.3 其他错误 -> 轻提示
 */
export const http = <T>(options: UniApp.RequestOptions) => {
    // 1. 返回Promise对象
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            // 2. 请求成功
            success(res) {
                console.log(res);
                const { data, statusCode } = res;
                if (statusCode >= 200 && statusCode < 300) {
                    resolve(data as Data<T>);
                } else if (res.statusCode === 401) {
                    // 401 -> 清除token
                    const store = testStore();
                    store.clearProfile();
                    uni.navigateTo({
                        url: "/pages/login/login",
                    });
                    reject();
                } else {
                    // 其他错误 -> 轻提示
                    uni.showToast({
                        icon: "none",
                        title: (data as Data<T>).msg || "请求失败",
                    });
                }
            },
            // 响应失败
            fail(err) {
                console.log(err);
                uni.showToast({
                    icon: "none",
                    title: "网络错误",
                });
            },
        });
    });
};

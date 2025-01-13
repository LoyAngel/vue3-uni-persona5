import { defineStore } from "pinia";
import { ref } from "vue";

const test2 = ref();
// 定义 Store
export const testStore = defineStore("test", () => {

    // 获取信息
    const test = ref();

    // 保存信息
    const setProfile = (val: Object) => {
        test.value = val;
    }

    // 清除信息
    const clearProfile = () => {
        test.value = undefined;
    }

    return {
        test,
        setProfile,
        clearProfile
    }
},
// 持久化
{
    // 网页端
    // persist: true,
    // 小程序端
    persist:{
        
        storage: {
            getItem: (key: string) => {
                return uni.getStorageSync(key);
            },
            setItem: (key: string, value: any) => {
                return uni.setStorageSync(key, value);
            }
        }
    }
}
)

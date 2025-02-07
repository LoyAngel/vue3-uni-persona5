import { defineStore } from "pinia";
import { ref } from "vue";
import { TranslationMap, type PersonaMap } from "@/types/data";

export const personaStore = defineStore(
    "personaMap",
    () => {
        // persona_map 数据，默认空对象
        const persona_map = ref<PersonaMap>({});

        // 更新 persona_map 数据
        const setPersonaMap = (data: PersonaMap) => {
            persona_map.value = data;
        };
        // 清空 persona_map 数据
        const clearPersonaMap = () => {
            persona_map.value = {};
        };

        return {
            persona_map,
            setPersonaMap,
            clearPersonaMap,
        };
    },
    // 持久化配置，参照 test.ts
    {
        persist: {
            storage: {
                getItem: (key: string) => {
                    return uni.getStorageSync(key);
                },
                setItem: (key: string, value: any) => {
                    uni.setStorageSync(key, value);
                },
            },
        },
    }
);

import { defineStore } from "pinia";
import { ref } from "vue";
import type { TranslationMap, PersonaMap, SkillMap } from "@/types/data";

export const pictorialStore = defineStore(
    "pictorialStore",
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

        const skill_map = ref<SkillMap>({});

        // 更新 skill_map 数据
        const setSkillMap = (data: SkillMap) => {
            skill_map.value = data;
        };

        // 清空 skill_map 数据
        const clearSkillMap = () => {
            skill_map.value = {};
        };

        return {
            persona_map,
            setPersonaMap,
            clearPersonaMap,

            skill_map,
            setSkillMap,
            clearSkillMap,
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

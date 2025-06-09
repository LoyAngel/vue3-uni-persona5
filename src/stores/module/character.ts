import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CharacterData } from '@/types/character';

export const characterStore = defineStore(
    'characterStore',
    () => {
        // character_map 数据，默认空对象
        const character_list = ref<CharacterData[]>([]);

        // 更新 character_map 数据
        const setCharacterList = (data: CharacterData[]) => {
            character_list.value = data;
        };
        // 清空 character_map 数据
        const clearCharacterList = () => {
            character_list.value = [];
        };

        return {
            character_list,
            setCharacterList,
            clearCharacterList,
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
                }
            }
        }
    }
);

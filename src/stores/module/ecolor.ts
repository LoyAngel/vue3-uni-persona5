import type { ElemMapItem, ElemMapItem } from "@/types/pictorial";
import { defineStore } from "pinia";
import { ref } from "vue";

export const ecolorStore = defineStore(
    "ecolorMap",
    () => {
        const elem_map = ref<ElemMapItem[]>([
            { id: 1, elem_name: "物", color: "#EF9710" },
            { id: 2, elem_name: "枪", color: "#EF9710" },
            { id: 3, elem_name: "火", color: "#ED1F21" },
            { id: 4, elem_name: "冰", color: "#1E90FF" },
            { id: 5, elem_name: "电", color: "#FFD700" },
            { id: 6, elem_name: "风", color: "#00FF7F" },
            { id: 7, elem_name: "念", color: "#FF69B4" },
            { id: 8, elem_name: "核", color: "#3CE2DA" },
            { id: 9, elem_name: "祝", color: "#F4F7AF" },
            { id: 10, elem_name: "咒", color: "#E3002F" },
        ]);

        const inherit_map = ref<ElemMapItem[]>([
            { id: 1, inherit_name: "物", color: "#EF9710" },
            { id: 2, inherit_name: "枪", color: "#EF9710" },
            { id: 3, inherit_name: "火", color: "#ED1F21" },
            { id: 4, inherit_name: "冰", color: "#1E90FF" },
            { id: 5, inherit_name: "电", color: "#FFD700" },
            { id: 6, inherit_name: "风", color: "#00FF7F" },
            { id: 7, inherit_name: "念", color: "#FF69B4" },
            { id: 8, inherit_name: "核", color: "#3CE2DA" },
            { id: 9, inherit_name: "祝", color: "#F4F7AF" },
            { id: 10, inherit_name: "咒", color: "#E3002F" },
            { id: 11, inherit_name: "异", color: "#A92EEE" },
            { id: 12, inherit_name: "复", color: "#13EF8F" },
        ]);

        const extra_map = ref<ElemMapItem[]>([
            { id: 13, elem_name: "万能", color: "#8A2BE2" },    // 新颜色
            { id: 14, elem_name: "被", color: "#808080" },      // 灰色表示被动
            { id: 15, elem_name: "辅", color: "#FFA500" },      // 橙色
            { id: 16, elem_name: "特", color: "#00BFFF" },       // 深天蓝
        ])

        return {
            elem_map,
            inherit_map,
            extra_map
        };
    },
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
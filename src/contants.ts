import type { ElemMapItem } from "@/types/pictorial";

const ELEM_COLOR: ElemMapItem[] = [
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
];

const INHERIT_COLOR: ElemMapItem[] = [
    ...ELEM_COLOR,
    { id: 11, elem_name: "异", color: "#A92EEE" },
    { id: 12, elem_name: "复", color: "#13EF8F" },
];

const EXTRA_COLOR: ElemMapItem[] = [
    ...INHERIT_COLOR,
    { id: 13, elem_name: "万能", color: "#8A2BE2" },    // 新颜色
    { id: 14, elem_name: "被", color: "#808080" },      // 灰色表示被动
    { id: 15, elem_name: "辅", color: "#FFA500" },      // 橙色
    { id: 16, elem_name: "特", color: "#00BFFF" },       // 深天蓝
];

export {
    ELEM_COLOR,
    INHERIT_COLOR,
    EXTRA_COLOR
};
import type { ElemMapEntry } from "@/types/pictorial";

const SKILL_ELEM_MAP: ElemMapEntry[] = [
    { id: 1, elem_name: "全部", color: "#ffffff", icon: "✨" },
    { id: 2, elem_name: "物", color: "#EF9710", icon: "👊" },
    { id: 3, elem_name: "枪", color: "#EF9710", icon: "🔫" },
    { id: 4, elem_name: "火", color: "#ED1F21", icon: "🔥" },
    { id: 5, elem_name: "冰", color: "#1E90FF", icon: "❄️" },
    { id: 6, elem_name: "电", color: "#FFD700", icon: "⚡" },
    { id: 7, elem_name: "风", color: "#00FF7F", icon: "💨" },
    { id: 8, elem_name: "念", color: "#FF69B4", icon: "💭" },
    { id: 9, elem_name: "核", color: "#3CE2DA", icon: "⚛️" },
    { id: 10, elem_name: "祝", color: "#F4F7AF", icon: "🙏" },
    { id: 11, elem_name: "咒", color: "#E3002F", icon: "🔮" },
];

const SKILL_INHERIT_MAP: ElemMapEntry[] = [
    ...SKILL_ELEM_MAP,
    { id: 12, elem_name: "异", color: "#A92EEE", icon: "👻" },
    { id: 13, elem_name: "复", color: "#13EF8F", icon: "💉" },
];

const SKILL_EXTRA_MAP: ElemMapEntry[] = [
    ...SKILL_INHERIT_MAP,
    { id: 14, elem_name: "万能", color: "#8A2BE2", icon: "🌟" },    // 新颜色
    { id: 15, elem_name: "被", color: "#808080", icon: "🛡️" },      // 灰色表示被动
    { id: 16, elem_name: "辅", color: "#FFA500", icon: "⚕️" },      // 橙色
    { id: 17, elem_name: "特", color: "#00BFFF", icon: "⭐" },       // 深天蓝
];

export {
    SKILL_ELEM_MAP,
    SKILL_INHERIT_MAP,
    SKILL_EXTRA_MAP
};
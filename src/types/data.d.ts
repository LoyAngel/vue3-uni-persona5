// ============================================================================
// Persona 5 Royal - 类型定义文件
// 提供完整的类型安全和可读性，支持物品、角色、技能、翻译等数据结构
// ============================================================================

// ----------------------------------------------------------------------------
// 基础枚举类型定义
// ----------------------------------------------------------------------------

/** 继承元素类型 - 决定Persona技能继承的属性类别 */
export type InheritElemsType =
    | 'Physical' // 物理
    | 'Fire' // 火
    | 'Ice' // 冰
    | 'Electric' // 雷
    | 'Wind' // 风
    | 'Psy' // 念力
    | 'Nuclear' // 核热
    | 'Bless' // 祝福
    | 'Curse' // 诅咒
    | 'Healing' // 恢复
    | 'Ailment' // 异常状态
    | 'Almighty'; // 万能

/** 奥义名称类型 - P5R中所有的奥义名称 */
export type ArcanaType =
    | 'Fool' // 愚者
    | 'Magician' // 魔术师
    | 'Priestess' // 女教皇
    | 'Empress' // 女帝
    | 'Emperor' // 皇帝
    | 'Hierophant' // 教皇
    | 'Lovers' // 恋人
    | 'Chariot' // 战车
    | 'Justice' // 正义
    | 'Hermit' // 隐者
    | 'Fortune' // 命运之轮
    | 'Strength' // 力量
    | 'Hanged' // 倒吊人
    | 'Death' // 死神
    | 'Temperance' // 节制
    | 'Devil' // 恶魔
    | 'Tower' // 塔
    | 'Star' // 星星
    | 'Moon' // 月亮
    | 'Sun' // 太阳
    | 'Judgement' // 审判
    | 'Faith' // 信念（P5R新增）
    | 'Councillor' // 顾问官（P5R新增）
    | 'World'; // 世界

/** 技能元素类型 - 所有技能的元素分类 */
export type SkillElementType =
    | 'phys' // 物理
    | 'gun' // 枪击
    | 'fire' // 火炎
    | 'ice' // 冰结
    | 'electric' // 电击
    | 'wind' // 疾风
    | 'psy' // 念力
    | 'nuclear' // 核热
    | 'bless' // 祝福
    | 'curse' // 诅咒
    | 'almighty' // 万能
    | 'ailment' // 异常状态
    | 'support' // 辅助
    | 'passive' // 被动
    | 'healing' // 恢复
    | 'trait'; // 特性

/** 元素抗性类型 - Persona对各种攻击的抗性 */
export type ElementResistanceType =
    | 'wk' // 弱点 (Weak)
    | 'rs' // 抗性 (Resist)
    | 'nu' // 无效 (Null)
    | 'rp' // 反射 (Repel)
    | 'ab' // 吸收 (Absorb)
    | '-' // 普通伤害
    // 显示用的可读格式
    | 'Weak'
    | 'Resist'
    | 'Null'
    | 'Repel'
    | 'Absorb';


// ----------------------------------------------------------------------------
// 融合系统相关类型定义
// ----------------------------------------------------------------------------

/** 奥义融合组合 - 定义两个奥义融合的结果 */
export interface ArcanaCombo {
    /** 融合所需的两个奥义 */
    source: [ArcanaType, ArcanaType];
    /** 融合后得到的奥义 */
    result: ArcanaType;
}

/** 特殊融合组合 - 需要特定Persona的特殊融合 */
export interface SpecialCombo {
    /** 融合所需的Persona名称列表 */
    sources: string[];
    /** 融合后得到的Persona名称 */
    result: string;
}

/** 稀有融合修正值 - 各奥义与稀有Persona融合时的等级修正 */
export interface RareCombos {
    /** 奥义名称作为键，对应9个稀有Persona的修正值数组 */
    [arcana: string]: number[];
}

/** 奥义融合映射表 - 快速查找两个奥义的融合结果 */
export interface ArcanaMap {
    [arcana1: string]: {
        [arcana2: string]: ArcanaType;
    };
}

/** 继承图表 - 定义各继承类型可以传承哪些技能类型 */
export interface InheritanceChart {
    [key in InheritElemsType]: string[];
}

/** 融合配方 - 定义融合的来源、结果与消费 */
export interface Recipe {
    sources: PersonaData[];
    result: PersonaData;
    cost?: number;
    isAllRare?: boolean;
}

// ----------------------------------------------------------------------------
// 物品相关类型定义
// ----------------------------------------------------------------------------

/** 物品数据映射 */
export interface ItemMap {
    [itemName: string]: ItemData;
}

/** 物品数据结构 */
export interface ItemData {
    /** 物品英文名 */
    name?: string;
    /** 物品中文名 */
    c_name?: string;
    /** 物品描述 */
    description?: string;
    /** 物品类型 */
    type?: string;
    /** 稀有度等级 */
    rarity?: number;
    /** 攻击力加成 */
    attack?: number;
    /** 命中率加成 */
    accuracy?: number;
    /** 特殊效果描述 */
    effect?: string;
    /** 物品价格 */
    price?: number;
    /** 物品类别（武器、防具等） */
    category?: string;
    /** 中文类别名称 */
    c_type?: string;
    /** 物品图像URL */
    img_url?: string;
    /** 物品拥有者 */
    owner?: string;
    /** 物品来源 */
    source?: string;
    /** 来源详细信息 */
    source_detail?: string;
}

// ----------------------------------------------------------------------------
// Persona相关类型定义
// ----------------------------------------------------------------------------

/** Persona数据映射 */
export interface PersonaMap {
    [personaName: string]: PersonaData;
}

/** Persona完整数据结构 */
export interface PersonaData {
    // === 基础信息 ===
    /** Persona英文名（列表转换时使用） */
    name?: string;
    /** Persona中文显示名 */
    c_name?: string;
    /** Persona图像URL */
    img_url?: string;
    /** 所属奥义 */
    arcana: ArcanaType;
    /** 等级 */
    level: number;
    /** 基础属性值 [力量, 魔力, 耐久, 敏捷, 运气] */
    stats: [number, number, number, number, number];
    /** 元素抗性数组 [物理,枪击,火,冰,电,风,念力,核热,祝福,诅咒] */
    elems: ElementResistanceType[];
    /** 学会的技能映射 { 技能名: 学会等级 } */
    skills: {
        [skillName: string]: number;
    };

    // === 特殊属性标记 ===
    /** 性格类型 */
    personality?: string;
    /** 是否为特殊Persona（需要特殊融合） */
    special?: boolean;
    /** 是否为满级Persona */
    max?: boolean;
    /** 是否为DLC Persona */
    dlc?: boolean;
    /** 备注信息 */
    note?: string;
    /** 是否为稀有Persona（宝石类） */
    rare?: boolean;

    // === P5R新增数据 ===
    /** 继承属性类型 */
    inherits?: InheritElemsType;
    /** 继承元素显示名（用于界面显示） */
    inherit_elems?: string[];
    /** 道具化获得的普通物品 */
    item?: string;
    /** 道具化获得的稀有物品 */
    itemr?: string;
    /** 物品类型显示名 */
    item_type?: string;
    /** 道具化是否产出技能卡 */
    skillCard?: boolean;
    /** 特性技能名称 */
    trait?: string;

    // === 属性值拆分（列表转换时使用） ===
    strength?: number; // 力量
    magic?: number; // 魔力
    endurance?: number; // 耐久
    agility?: number; // 敏捷
    luck?: number; // 运气

    // === 抗性值显示（用于界面） ===
    physical?: string; // 物理抗性显示
    gun?: string; // 枪击抗性显示
    fire?: string; // 火炎抗性显示
    ice?: string; // 冰结抗性显示
    electric?: string; // 电击抗性显示
    wind?: string; // 疾风抗性显示
    psychic?: string; // 念力抗性显示
    nuclear?: string; // 核热抗性显示
    bless?: string; // 祝福抗性显示
    curse?: string; // 诅咒抗性显示

    // === 抗性排序用数值 ===
    physicalValue?: number;
    gunValue?: number;
    fireValue?: number;
    iceValue?: number;
    electricValue?: number;
    windValue?: number;
    psychicValue?: number;
    nuclearValue?: number;
    blessValue?: number;
    curseValue?: number;

    // === 印象世界位置数据 ===
    /** 所在区域路径名 */
    area?: string;
    /** 所在楼层信息 */
    floor?: string;
}

// ----------------------------------------------------------------------------
// 技能相关类型定义
// ----------------------------------------------------------------------------

/** 技能数据映射 */
export interface SkillMap {
    [skillName: string]: SkillData;
}

/** 技能完整数据结构 */
export interface SkillData {
    // === 基础信息 ===
    /** 技能英文名 */
    name?: string;
    /** 技能中文名 */
    c_name?: string;
    /** 消耗成本（SP或HP%） */
    cost?: number;
    /** 技能效果描述 */
    effect: string;
    /** 技能元素类型 */
    element: SkillElementType;
    /** 中文元素名称 */
    c_element?: string;

    // === 获取方式 ===
    /** 学会此技能的Persona映射 { Persona名: 学会等级 } */
    personas?: {
        [personaName: string]: number;
    };
    /** 通过对话获得的Persona名 */
    talk?: string;
    /** 对话Persona显示名 */
    talkPersonas?: string;
    /** 通过融合获得的Persona名（单个或数组） */
    fuse?: string | string[];
    /** 技能卡来源 */
    card?: string;
    /** 专属技能归属者 */
    unique?: string;
    /** 是否为DLC技能 */
    dlc?: boolean;
    /** 备注信息 */
    note?: string;

    // === 显示用字段（界面渲染） ===
    /** 元素类型显示名 */
    elemDisplay?: string;
    /** 消耗显示字符串 */
    costDisplay?: string;
    /** 学会Persona列表显示 */
    personaDisplay?: string;
    /** 对话获得显示 */
    talkDisplay?: string;
    /** 融合获得显示 */
    fuseDisplay?: string;
}

// ----------------------------------------------------------------------------
// 翻译和其他辅助类型
// ----------------------------------------------------------------------------

/** 翻译映射表 */
export interface TranslationMap {
    [key: string]: string;
}

/** DLC Persona组合 - DLC包中的Persona配对 */
export type DLCPersonaGroup = string[];

// ----------------------------------------------------------------------------
// 常量类型定义
// ----------------------------------------------------------------------------

/** 继承图表符号 */
export type InheritanceSymbol = '✓' | '✘';

// ----------------------------------------------------------------------------
// 导出所有类型以供外部使用
// ----------------------------------------------------------------------------

export type {
    // 基础枚举
    ArcanaType,
    SkillElementType,
    ElementResistanceType,

    // 融合系统
    ArcanaCombo,
    SpecialCombo,
    RareCombos,
    ArcanaMap,
    InheritanceChart,

    // 核心数据结构
    ItemMap,
    ItemData,
    PersonaMap,
    PersonaData,
    SkillMap,
    SkillData,

    // 辅助类型
    TranslationMap,
    DLCPersonaGroup,
    InheritanceSymbol
};

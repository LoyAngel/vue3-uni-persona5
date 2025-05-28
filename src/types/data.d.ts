// items, personas, skills, tranlations
export type InheritElemsType = 'Physical' | 'Fire' | 'Ice' | 'Electric' | 'Wind' | 'Psy' | 'Nuclear' | 'Bless' | 'Curse' | 'Healing' | 'Ailment' | 'Almighty';
export interface ItemMap {
    [index: string]: ItemData;
}
export interface ItemData {
    name?: string;
    c_name?: string; // 中文名称，与PersonaData、SkillData保持一致
    description?: string;
    type?: string;
    rarity?: number; // 稀有度
    attack?: number; // 攻击力
    accuracy?: number; // 命中率
    effect?: string; // 特殊效果
    price?: number; // 价格
    category?: string; // 武器类别（近战、远程、防具等）
    img_url?: string; // 图片URL
}


export interface PersonaMap {
    [index: string]: PersonaData;
}

export interface PersonaData {
    name?: string; // only for when converted to list
    c_name?: string; // for display
    img_url?: string;
    arcana: string;
    level: number;
    stats: number[];
    elems: string[];
    skills: {
        [index: string]: number;
    }
    personality?: string;
    special?: boolean;
    max?: boolean;
    dlc?: boolean;
    note?: string;
    rare?: boolean;

    // from new data for p5r
    inherits?: InheritElemsType;
    inherit_elems?: string[]; // for display
    item?: string;
    itemr?: string;
    item_type?: string; // for display
    skillCard?: boolean; //determines if this persona's itemization results in a skill card
    trait?: string;

    // only for when converted to list
    strength?: number;
    magic?: number;
    endurance?: number;
    agility?: number;
    luck?: number;

    physical?: string;
    gun?: string;
    fire?: string;
    ice?: string;
    electric?: string;
    wind?: string;
    psychic?: string;
    nuclear?: string;
    bless?: string;
    curse?: string;

    // for sorting purpose
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

    //mementos location data
    area?: string; //path name
    floor?: string; //path level
}

export interface SkillMap {
    [index: string]: SkillData;
}
export interface SkillData {
    name?: string;
    c_name?: string;
    cost?: number;
    effect: string;
    element: "phys" | "gun" | "fire" | "ice" | "electric" | "wind" | "psy" | "nuclear" | "bless" | "curse" |
        "almighty" | "ailment" | "support" | "passive" | "healing" | "trait";
    c_element?: string;
    personas?: {
        [name: string]: number;
    };
    talk?: string;
    talkPersonas?: string;
    fuse?: string | string[];
    card?: string
    unique?: string;
    dlc?: boolean;
    note?: string;

    // for display in list
    elemDisplay?: string;
    costDisplay?: string;
    personaDisplay?: string;
    talkDisplay?: string;
    fuseDisplay?: string;
}

export interface TranslationMap {
    [index: string]: string;
}

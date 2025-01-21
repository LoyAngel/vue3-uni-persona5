// items, personas, skills, tranlations
interface ItemMap {
    [index: string]: ItemData;
}
interface ItemData {
    name?: string;
    description?: string;
    type?: string;
}


interface PersonaMap {
    [index: string]: PersonaData;
}
interface PersonaData {
    name?: string; // only for when converted to list
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
    inherits?: string;
    item?: string;
    itemr?: string;
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

interface SkillMap {
    [index: string]: SkillData;
}
interface SkillData {
    name?: string;
    cost?: number;
    effect: string;
    element: "phys" | "gun" | "fire" | "ice" | "electric" | "wind" | "psy" | "nuclear" | "bless" | "curse" |
        "almighty" | "ailment" | "support" | "passive" | "healing" | "trait";
    personas?: {
        [name: string]: number;
    };
    talk?: string;
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

interface TranslationMap {
    [index: string]: string;
}
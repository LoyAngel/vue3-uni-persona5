import { itemMapRoyal as itemMap } from '@/data/ItemDataRoyal';
import { skillMapRoyal as skillMap } from '@/data/SkillDataRoyal';
import { personaMapRoyal as personaMap } from '@/data/PersonaDataRoyal';
import {
    arcana2CombosRoyal as arcana2Combos,
    specialCombosRoyal as specialCombos,
    inheritanceChartRoyal as inheritanceChart
} from '@/data/Data5Royal';
import type {
    PersonaData,
    SkillData,
    ItemData,
    ArcanaMap,
    ArcanaType,
    SkillElementType,
    InheritElemsType
} from '@/types/data';

/**
 * 数据处理工具类 - P5R版本
 */

function isDlcPersonaOwned(dlcPersona: string): boolean {
    // if (!localStorage['dlcPersona']) return false;

    // return JSON.parse(localStorage['dlcPersona'])[dlcPersona] === true;

    return true;
}

/**
 * 根据用户配置，可能移除DLC角色的角色列表
 */
const customPersonaList: PersonaData[] = (() => {
    let arr: PersonaData[] = [];
    for (let key in personaMap) {
        if (personaMap.hasOwnProperty(key)) {
            let persona = personaMap[key];
            if (persona.dlc && !isDlcPersonaOwned(key)) {
                continue;
            }
            persona.name = key;
            arr.push(persona);
        }
    }
    return arr;
})();

const fullPersonaList: PersonaData[] = (() => {
    let arr: PersonaData[] = [];
    for (let key in personaMap) {
        if (personaMap.hasOwnProperty(key)) {
            let persona = personaMap[key];
            persona.name = key;
            arr.push(persona);
        }
    }
    return arr;
})();

const skillList: SkillData[] = (() => {
    let arr: SkillData[] = [];
    for (let key in skillMap) {
        if (skillMap.hasOwnProperty(key)) {
            let skill = skillMap[key];
            skill.name = key;
            skill.elemDisplay = capitalizeFirstLetter(skill.element);
            skill.costDisplay = getSkillCost(skill);
            skill.personaDisplay = getSkillPersonaList(skill);
            if (skill.talk) {
                skill.talkDisplay = createPersonaLink(skill.talk);
            }
            if (skill.fuse) {
                if (typeof skill.fuse === 'string') {
                    skill.fuseDisplay = createPersonaLink(skill.fuse);
                } else {
                    let arr: string[] = [];
                    for (let i = 0; i < skill.fuse.length; i++) {
                        arr.push(createPersonaLink(skill.fuse[i]));
                    }
                    skill.fuseDisplay = arr.join(', ');
                }
            }
            arr.push(skill);
        }
    }
    return arr;
})();

/**
 * 基于完整角色列表的奥义分组
 */
const fullPersonaeByArcana: { [arcana: string]: PersonaData[] } = (() => {
    let personaeByArcana_: { [arcana: string]: PersonaData[] } = {};
    for (let i = 0; i < fullPersonaList.length; i++) {
        let persona = fullPersonaList[i];
        if (!personaeByArcana_[persona.arcana]) {
            personaeByArcana_[persona.arcana] = [];
        }
        personaeByArcana_[persona.arcana].push(persona);
    }

    for (let key in personaeByArcana_) {
        personaeByArcana_[key].sort((a: PersonaData, b: PersonaData) => a.level - b.level);
    }

    // 无论DLC设置如何，确保这个始终存在
    if (!personaeByArcana_['World']) {
        personaeByArcana_['World'] = [];
    }

    return personaeByArcana_;
})();

/**
 * 基于自定义角色列表的奥义分组
 */
const customPersonaeByArcana: { [arcana: string]: PersonaData[] } = (() => {
    let personaeByArcana_: { [arcana: string]: PersonaData[] } = {};
    for (let i = 0; i < customPersonaList.length; i++) {
        let persona = customPersonaList[i];
        if (!personaeByArcana_[persona.arcana]) {
            personaeByArcana_[persona.arcana] = [];
        }
        personaeByArcana_[persona.arcana].push(persona);
    }

    for (let key in personaeByArcana_) {
        personaeByArcana_[key].sort((a: PersonaData, b: PersonaData) => a.level - b.level);
    }

    // 无论DLC设置如何，确保这个始终存在
    if (!personaeByArcana_['World']) {
        personaeByArcana_['World'] = [];
    }

    return personaeByArcana_;
})();

const arcanaMap: { [arcana1: string]: { [arcana2: string]: ArcanaType } } = (() => {
    let map: { [arcana1: string]: { [arcana2: string]: ArcanaType } } = {};
    for (let i = 0; i < arcana2Combos.length; i++) {
        let combo = arcana2Combos[i];
        if (!map[combo.source[0]]) map[combo.source[0]] = {};
        map[combo.source[0]][combo.source[1]] = combo.result as ArcanaType;

        if (!map[combo.source[1]]) map[combo.source[1]] = {};
        map[combo.source[1]][combo.source[0]] = combo.result as ArcanaType;
    }
    return map;
})();

const getResultArcana = (arcana1: string, arcana2: string): ArcanaType | undefined => {
    return arcanaMap[arcana1]?.[arcana2];
};

const special2Combos = (() => {
    let combos: typeof specialCombos = [];
    for (let i = 0; i < specialCombos.length; i++) {
        if (specialCombos[i].sources.length == 2) {
            combos.push(specialCombos[i]);
        }
    }
    return combos;
})();

function getElems(personaName: string): string[] {
    let elems = [...personaMap[personaName].elems]; // 创建副本以避免修改原数组
    for (let i = 0; i < elems.length; i++) {
        if (elems[i] == 'wk') elems[i] = 'Weak';
        else if (elems[i] == 'rs') elems[i] = 'Resist';
        else if (elems[i] == 'ab') elems[i] = 'Absorb';
        else if (elems[i] == 'rp') elems[i] = 'Repel';
        else if (elems[i] == 'nu') elems[i] = 'Null';
    }
    return elems;
}

function getSkills(personaName: string) {
    let skills = personaMap[personaName].skills;
    let sorted: [string, number][] = [];
    for (let name in skills) {
        if (skills.hasOwnProperty(name)) {
            sorted.push([name, skills[name]]);
        }
    }

    sorted.sort(function (a, b) {
        return a[1] - b[1];
    });

    let resSkills: any[] = [];
    for (let i = 0; i < sorted.length; i++) {
        let skillData = skillMap[sorted[i][0]];
        resSkills.push({
            name: sorted[i][0],
            level: sorted[i][1],
            description: skillData.effect,
            unique: skillData.unique,
            elem: capitalizeFirstLetter(skillData.element),
            cost: getSkillCost(skillData)
        });
    }

    if (personaMap[personaName].trait) {
        let traitData = skillMap[personaMap[personaName].trait!];
        resSkills.unshift({
            name: personaMap[personaName].trait,
            level: 0,
            description: traitData.effect,
            unique: traitData.unique,
            elem: 'Trait',
            cost: '-'
        });
    }

    return resSkills;
}

function getSkillCardInfo(skillCard: string) {
    let skillData: any[] = [];
    let skill = skillMap[skillCard];
    skillData.push({
        name: skillCard,
        description: skill.effect,
        elem: capitalizeFirstLetter(skill.element),
        cost: getSkillCost(skill)
    });

    return skillData;
}
function getItem(itemName: string) {
    let itemData: any[] = [];
    let item = itemMap[itemName];
    itemData.push({
        name: itemName,
        type: item.type,
        description: item.description
    });

    return itemData;
}
function getInheritance(inheritanceType: string) {
    return inheritanceChart[inheritanceType as keyof typeof inheritanceChart];
}

function getSkillPersonaList(skill: SkillData): string {
    let arr: string[] = [];
    for (let key in skill.personas) {
        if (skill.personas.hasOwnProperty(key)) {
            let level = skill.personas[key];
            let keyHref = createPersonaLink(key);
            arr.push(keyHref + (level !== 0 ? ' (' + level + ')' : ''));
        }
    }
    let str = arr.join(', ');
    if (skill.note) {
        str = (str ? str + '. ' : '') + skill.note;
    }
    return str;
}

function createPersonaLink(personaName: string): string {
    return `<a href='#/persona/${personaName}'>${personaName}</a>`;
}

function capitalizeFirstLetter(s: SkillElementType): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function getSkillCost(skill: SkillData): string {
    if (skill.element !== 'passive' && skill.element !== 'trait') {
        if (skill.cost && skill.cost < 100) {
            return String(skill.cost) + '% HP';
        } else if (skill.cost) {
            return String(skill.cost / 100) + ' SP';
        } else {
            return '-';
        }
    } else {
        return '-';
    }
}

export {
    fullPersonaList,
    customPersonaList,
    skillList,
    fullPersonaeByArcana,
    customPersonaeByArcana,
    arcanaMap,
    getResultArcana,
    special2Combos,
    getElems,
    getSkills,
    getSkillCardInfo,
    getItem,
    getInheritance,
    getSkillPersonaList,
    createPersonaLink,
    capitalizeFirstLetter,
    getSkillCost
};

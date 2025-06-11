import {
    arcana2CombosRoyal as arcana2Combos,
    specialCombosRoyal as specialCombos,
    rareCombosRoyal as rareCombos,
    rarePersonaeRoyal as rarePersonae
} from '@/data/Data5Royal';
import { personaMapRoyal as personaMap } from '@/data/PersonaDataRoyal';
import { customPersonaList, getResultArcana, special2Combos } from '@/utils/dataRoyalUtil';
import type { PersonaData, RareCombos, ArcanaType, Recipe } from '@/types/data';

/**
 * Persona融合计算器。提供融合2个Persona和获取Persona配方的方法。
 */
class FusionCalculator {
    private personaeByArcana: { [arcana: string]: PersonaData[] };

    constructor(personaeByArcana: { [arcana: string]: PersonaData[] }) {
        this.personaeByArcana = personaeByArcana;
    }

    /**
     * 融合2个Persona。可以处理普通融合、稀有融合或特殊融合。
     * @param persona1 要融合的第一个Persona
     * @param persona2 要融合的第二个Persona
     * @returns 融合结果Persona，如果融合不可能则返回null
     */
    public fuse(persona1: PersonaData, persona2: PersonaData): PersonaData | null {
        // 特殊融合
        let result = this.getSpecialFuseResult(persona1, persona2);
        if (result !== null) {
            return result;
        }

        // 稀有融合
        if ((persona1.rare && !persona2.rare) || (!persona1.rare && persona2.rare)) {
            let rarePersona = persona1.rare ? persona1 : persona2;
            let normalPersona = persona1.rare ? persona2 : persona1;
            result = this.fuseRare(rarePersona, normalPersona);
            return result;
        }

        // 都是稀有或都是普通 => 普通融合
        result = this.fuseNormal(persona1, persona2);
        return result;
    }

    /**
     * 获取以给定Persona作为材料之一的所有2融合配方
     * @param persona 要融合的Persona
     * @returns 配方列表。在每个配方的材料中，给定的Persona保证是第一个。
     */
    public getAllResultingRecipesFrom(persona: PersonaData): Recipe[] {
        let recipes: Recipe[] = [];
        for (let i = 0; i < customPersonaList.length; i++) {
            let result = this.fuse(persona, customPersonaList[i]);
            if (result !== null) {
                let recipe: Recipe = {
                    sources: [persona, customPersonaList[i]],
                    result: result
                };

                this.addRecipe(recipe, recipes, false);
            }
        }

        return recipes;
    }

    /**
     * 如果2个给定的Persona是特殊配方的一部分，返回结果Persona
     * @param persona1 第一个Persona
     * @param persona2 第二个Persona
     * @returns 如果persona1 + persona2是特殊配方则返回结果Persona，否则返回null
     */
    private getSpecialFuseResult(persona1: PersonaData, persona2: PersonaData): PersonaData | null {
        for (let x = 0; x < special2Combos.length; x++) {
            let combo = special2Combos[x];
            if (
                (persona1.name === combo.sources[0] && persona2.name === combo.sources[1]) ||
                (persona2.name === combo.sources[0] && persona1.name === combo.sources[1])
            ) {
                return personaMap[combo.result];
            }
        }

        return null;
    }

    /**
     * 融合2个Persona。不处理稀有融合和特殊融合。
     * @param persona1 要融合的第一个Persona
     * @param persona2 要融合的第二个Persona
     * @returns 融合结果Persona，当融合不可能、是稀有融合或是特殊融合时返回null。
     */
    private fuseNormal(persona1: PersonaData, persona2: PersonaData): PersonaData | null {
        // 不处理普通Persona和稀有Persona之间的稀有融合
        if ((persona1.rare && !persona2.rare) || (persona2.rare && !persona1.rare)) {
            return null;
        }

        // 不处理2-Persona特殊融合
        if (this.getSpecialFuseResult(persona1, persona2) !== null) {
            return null;
        }

        let level = 1 + Math.floor((persona1.level + persona2.level) / 2);
        let arcana = getResultArcana(persona1.arcana, persona2.arcana);
        if (!arcana) {
            // 只有 审判 + [正义/力量/战车/死神] 会导致这种情况
            return null;
        }

        let personae = this.personaeByArcana[arcana];

        let persona: PersonaData | null = null;
        let found = false;
        if (persona1.arcana === persona2.arcana) {
            // 同level融合
            for (let i = personae.length - 1; i >= 0; i--) {
                persona = personae[i];
                if (persona.level <= level) {
                    if (
                        persona.special ||
                        persona.rare ||
                        persona === persona1 ||
                        persona === persona2
                    )
                        continue;
                    found = true;
                    break;
                }
            }
        } else {
            // 不同level融合
            for (let i = 0; i < personae.length; i++) {
                persona = personae[i];
                if (persona.level >= level) {
                    if (persona.special || persona.rare) continue;
                    found = true;
                    break;
                }
            }
        }

        return found ? persona : null;
    }

    /**
     * 融合稀有Persona和普通Persona。
     * @param rarePersona 稀有Persona
     * @param mainPersona 普通Persona
     * @returns 融合结果Persona，当融合不可能时返回null。
     */
    private fuseRare(rarePersona: PersonaData, mainPersona: PersonaData): PersonaData | null {
        // 类型断言以确保rareCombos能够被正确访问
        const typedRareCombos = rareCombos as RareCombos;
        let modifier = typedRareCombos[mainPersona.arcana][rarePersonae.indexOf(rarePersona.name!)];
        let personae = this.personaeByArcana[mainPersona.arcana];
        let mainPersonaIndex = personae.indexOf(mainPersona);
        let newPersona = personae[mainPersonaIndex + modifier];

        if (!newPersona) {
            return null;
        }

        while (newPersona && (newPersona.special || newPersona.rare)) {
            if (modifier > 0) modifier++;
            else if (modifier < 0) modifier--;

            newPersona = personae[mainPersonaIndex + modifier];
        }

        if (!newPersona) {
            return null;
        }
        return newPersona;
    }

    /**
     * 获取特殊Persona的配方
     * @param persona 特殊Persona
     * @returns 包含该Persona配方的单元素数组
     */
    private getSpecialRecipe(persona: PersonaData): Recipe[] {
        if (!persona.special) {
            throw new Error('Persona不是特殊类型!)');
        }
        let allRecipe: Recipe[] = [];
        for (let i = 0; i < specialCombos.length; i++) {
            let combo = specialCombos[i];
            if (persona.name === combo.result) {
                let recipe: Recipe = {
                    sources: [],
                    result: personaMap[combo.result]
                };
                for (let j = 0; j < combo.sources.length; j++) {
                    recipe.sources.push(personaMap[combo.sources[j]]);
                }
                this.addRecipe(recipe, allRecipe, true);
                return allRecipe;
            }
        }
        return allRecipe;
    }

    /**
     * 获取给定Persona的所有配方列表
     * @param persona 结果Persona
     * @returns 给定Persona的所有配方列表
     */
    public getRecipes(persona: PersonaData): Recipe[] {
        let allRecipe: Recipe[] = [];
        // 稀有Persona不能被融合
        if (persona.rare) {
            return allRecipe;
        }

        // 检查特殊配方
        if (persona.special) {
            return this.getSpecialRecipe(persona);
        }

        let recipes = this.getArcanaRecipes(persona.arcana);
        recipes = recipes.filter((value, index, array) => {
            return this.isGoodRecipe(value, persona);
        });
        for (let i = 0; i < recipes.length; i++) {
            this.addRecipe(recipes[i], allRecipe, true);
        }

        return allRecipe;
    }

    /**
     * 如果给定配方对期望结果有效，返回true。
     * 配方有效的条件是：材料与期望结果不同，且实际结果与期望结果相同。
     * @param recipe 要检查的配方
     * @param expectedResult 期望的结果Persona
     * @returns 如果配方对给定Persona有效则返回true，否则返回false
     */
    private isGoodRecipe(recipe: Recipe, expectedResult: PersonaData): boolean {
        if (recipe.sources[0].name === expectedResult.name) return false;
        if (recipe.sources[1].name === expectedResult.name) return false;
        return recipe.result.name === expectedResult.name;
    }

    /**
     * 获取所有结果为给定奥义的Persona的配方
     * @param arcana 结果奥义
     * @returns 配方列表
     */
    private getArcanaRecipes(arcana: ArcanaType): Recipe[] {
        let recipes: Recipe[] = [];
        let arcanaCombos = arcana2Combos.filter((x: any) => x.result === arcana);

        // 正常融合2个Persona（包括降级）
        for (let i = 0, combo = null; (combo = arcanaCombos[i]); i++) {
            let personae1 = this.personaeByArcana[combo.source[0]];
            let personae2 = this.personaeByArcana[combo.source[1]];
            for (let j = 0, persona1 = null; (persona1 = personae1[j]); j++) {
                for (let k = 0, persona2 = null; (persona2 = personae2[k]); k++) {
                    // 对于同奥义融合，只考虑k > j以避免重复
                    if (persona1.arcana === persona2.arcana && k <= j) continue;

                    // 稀有融合将单独处理
                    if (persona1.rare && !persona2.rare) continue;
                    if (persona2.rare && !persona1.rare) continue;

                    let result = this.fuseNormal(persona1, persona2);
                    if (!result) continue;
                    recipes.push({
                        sources: [persona1, persona2],
                        result: result
                    });
                }
            }
        }

        // 稀有融合：一个是稀有Persona，另一个是普通Persona
        for (let i = 0; i < rarePersonae.length; i++) {
            let rarePersona = personaMap[rarePersonae[i]];
            let personae = this.personaeByArcana[arcana];
            for (let j = 0; j < personae.length; j++) {
                let mainPersona = personae[j];
                if (rarePersona === mainPersona) continue;
                let result = this.fuseRare(rarePersona, mainPersona);
                if (!result) continue;
                recipes.push({
                    sources: [rarePersona, mainPersona],
                    result: result
                });
            }
        }

        return recipes;
    }

    /**
     * 向配方列表添加配方。在添加之前，为配方添加估算成本并排序配方的材料。
     * @param recipe 要添加的配方
     * @param allRecipes 要添加到的配方列表
     * @param sortIngredients 如果为true，材料列表将被排序
     */
    private addRecipe(recipe: Recipe, allRecipes: Recipe[], sortIngredients: boolean): void {
        // 添加近似成本
        recipe.cost = this.getApproxCost(recipe);

        if (sortIngredients) {
            // 排序材料，使最高等级的Persona排在前面
            recipe.sources.sort((a, b) => b.level - a.level);
        }

        // 帮助稀有Persona融合警告
        let isAllRare = true;
        for (let i = 0; i < recipe.sources.length; i++) {
            isAllRare = isAllRare && (recipe.sources[i].rare ?? false);
        }
        recipe.isAllRare = isAllRare;

        allRecipes.push(recipe);
    }

    private getApproxCost(recipe: Recipe): number {
        let cost = 0;
        for (let i = 0, source = null; (source = recipe.sources[i]); i++) {
            let level = source.level;
            cost += 27 * level * level + 126 * level + 2147;
        }

        return cost;
    }
}


export default FusionCalculator;

import { http } from "@/utils/http";
import { Data } from "@/types/http";
import { SkillMap, SkillData, TranslationMap } from "@/types/data";
import { skillMapRoyal } from "@/data/SkillDataRoyal";
import { itemMapRoyal } from "@/data/ItemDataRoyal";
import translationFunc from "@/data/TranslationFunc";

/**
 * @Description: 获得技能图鉴
 * @return {Promise}
 */
export const getSkillMap = (): Promise<Data<SkillMap>> => {
    let res = Object.fromEntries(
        Object.entries(skillMapRoyal).map(([key, value]: [string, SkillData]) => [
            key,
            <SkillData>{
                ...value,
                name: key,
                c_name: translationFunc(key, "Skill"),
                elem: translationFunc(value.elem, "Elem"),
                item: translationFunc(value.item, value.skillCard ? "Skill" : "Item"),
                itemr: translationFunc(value.itemr, value.skillCard ? "Skill" : "Item"),
                item_type: value.skillCard ? "技能卡" : translationFunc(itemMapRoyal[value.item as keyof typeof itemMapRoyal].type, "ItemType"),
            },
        ])
    );
    return new Promise<Data<SkillMap>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};

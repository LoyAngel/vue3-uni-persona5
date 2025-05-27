import { http } from "@/utils/http";
import type { Data } from "@/types/http";
import type { PersonaData, PersonaMap, TranslationMap } from "@/types/data";
import { personaMapRoyal } from "@/data/PersonaDataRoyal";
import { inheritanceChartRoyal } from "@/data/Data5Royal";
import { itemMapRoyal } from "@/data/ItemDataRoyal";
import translationFunc from "@/data/TranslationFunc";

/**
 * @Description: 获得人格面具图鉴
 * @return {Promise}
 */
export const getPersonaMap = (): Promise<Data<PersonaMap>> => {
    let res = Object.fromEntries(
        Object.entries(personaMapRoyal).map(([key, value]: [string, PersonaData]) => [
            key,
            <PersonaData>{
                ...value,
                area: translationFunc(value.area, "Area"),
                name: key,
                c_name: translationFunc(key, "Persona"),
                arcana: translationFunc(value.arcana, "Arcana"),
                img_url: translationFunc(key, "PersonaImg"),
                elems: value.elems.map((elem) => translationFunc(elem, "ElemEfc")),
                inherit_elems: value.inherits ? inheritanceChartRoyal[value.inherits] : [],
                skills: Object.fromEntries(
                    Object.entries(value.skills).map(([key, value]) => [
                        translationFunc(key, "Skill"),
                        value,
                    ])
                ),
                item: translationFunc(value.item, value.skillCard ? "Skill" : "Item"),
                itemr: translationFunc(value.itemr, value.skillCard ? "Skill" : "Item"),
                item_type: value.skillCard ? "技能卡" : translationFunc(itemMapRoyal[value.item as keyof typeof itemMapRoyal].type, "ItemType"),
                trait: translationFunc(value.trait, "Skill"),
            },
        ])
    );
    return new Promise<Data<PersonaMap>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};

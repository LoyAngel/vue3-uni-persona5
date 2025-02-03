import { http } from "@/utils/http";
import { Data } from "@/types/http";
import { PersonaMap, TranslationMap } from "@/types/data";
import { personaMapRoyal } from "@/data/PersonaDataRoyal";
import translationFunc from "@/data/TranslationFunc";

/**
 * @Description: 获取首页banner
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */
export const getPersonaMap = (): Promise<Data<PersonaMap>> => {
    let res = Object.fromEntries(
        Object.entries(personaMapRoyal).map(([key, value]) => [
            key,
            {
                ...value,
                name: key,
                c_name: translationFunc(key, "Persona"),
                arcana: translationFunc(value.arcana, "Arcana") || "",
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

export const getPersonaImgMap = (): Promise<Data<TranslationMap>> => {
    let res = Object.fromEntries(
        Object.entries(personaMapRoyal).map(([key, value]) => [
            key,
            translationFunc(key, "PersonaImg") || "",
        ])
    );
    return new Promise<Data<TranslationMap>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};

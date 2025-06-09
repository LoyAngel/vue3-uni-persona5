import { http } from '@/utils/http';
import type { Data } from '@/types/http';
import type { CharacterData } from '@/types/character';

/**
 * @Description: 
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */
export const getCharacterList = (): Promise<Data<CharacterData[]>> => {
    let res = <CharacterData[]>[];

    return new Promise<Data<CharacterData[]>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};

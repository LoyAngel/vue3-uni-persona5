import { http } from '@/utils/http';
import type { RequestData } from '@/types/http';
import type { CharacterData } from '@/types/character';

/**
 * @Description: 
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */
export const getCharacterList = (): Promise<RequestData<CharacterData[]>> => {
    let res = <CharacterData[]>[];

    return new Promise<RequestData<CharacterData[]>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};

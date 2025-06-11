import { http } from '@/utils/http';
import type { RequestData } from '@/types/http';
import type { StrategyMainData } from '@/types/strategy';
import { resAnswer, resArea, resConfidant, resCoop } from '@/data/Stragedy';
/**
 * @Description: 获取首页banner
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */

export const getStrategyMainDataAPI = (type: string) => {
    let res = <StrategyMainData[]>[];

    switch (type) {
        case 'coop': res = resCoop; break;
        case 'answer': res = resAnswer; break;
        case 'confidant': res = resConfidant; break; 
        case 'area': res = resArea; break;
        default: res = []; break;
    }

    return new Promise<RequestData<StrategyMainData[]>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};

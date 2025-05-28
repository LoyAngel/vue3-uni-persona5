import { http } from '@/utils/http';
import type { Data } from '@/types/http';
import type { ItemMap, ItemData } from '@/types/data';
import { itemMapRoyal } from '@/data/ItemDataRoyal';
import translationFunc from '@/data/TranslationFunc';

export const getItemMap = (): Promise<Data<ItemMap>> => {
    let res = Object.fromEntries(
        Object.entries(itemMapRoyal).map(([key, value]: [string, ItemData]) => [
            key,
            <ItemData>{
                ...value,
                name: key,
                c_name: translationFunc(key, 'Item'),
                // 其他字段转换...
            }
        ])
    );
    return new Promise<Data<ItemMap>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};
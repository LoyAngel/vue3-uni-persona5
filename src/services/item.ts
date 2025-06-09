import { http } from '@/utils/http';
import type { Data } from '@/types/http';
import type { ItemMap, ItemData } from '@/types/data';
// import { itemMapRoyal } from '@/data/ItemDataRoyal';
import { itemMapTranslation } from '@/data/ItemDataTranslation';

export const getItemMap = (): Promise<Data<ItemMap>> => {
    let res = Object.fromEntries(
        Object.entries(itemMapTranslation).map(([key, value]: [string, ItemData]) => [
            key,
            <ItemData>{
                ...value,
                name: key,
                c_name: key,
                c_type: value.type
                // 其他字段转换...
            }
        ])
    );
    console.log(res);
    return new Promise<Data<ItemMap>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};

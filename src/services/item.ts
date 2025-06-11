import { http } from '@/utils/http';
import type { RequestData } from '@/types/http';
import type { ItemMap, ItemData } from '@/types/data';
// import { itemMapRoyal } from '@/data/ItemDataRoyal';
import { itemMapTranslation } from '@/data/ItemDataTranslation';

export const getItemMap = (): Promise<RequestData<ItemMap>> => {
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
    return new Promise<RequestData<ItemMap>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};

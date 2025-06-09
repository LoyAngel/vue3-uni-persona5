import type { ItemTypeEntry, ItemOwnerEntry } from '@/types/pictorial';

const ITEM_CATEGORY_MAP: ItemTypeEntry[] = [
    { id: 1, type_name: '全部', icon: '🔍' },
    { id: 2, type_name: '近战', icon: '⚔️' },
    { id: 3, type_name: '防具', icon: '👚' },
    { id: 4, type_name: '饰品', icon: '💎' },
    { id: 5, type_name: '枪械', icon: '🔫' }
];

const ITEM_OWNER_MAP: ItemOwnerEntry[] = [
    { id: 1, owner_name: '通用', img: ''},
    { id: 2, owner_name: '男', img: ''},
    { id: 3, owner_name: '女', img: ''},
    { id: 4, owner_name: 'JOKER', img: ''},
    { id: 5, owner_name: '摩尔加纳', img: ''},
    { id: 6, owner_name: '坂田龙司', img: ''},
    { id: 7, owner_name: '高卷杏', img: ''},
    { id: 8, owner_name: '喜多川祐介', img: ''},
    { id: 9, owner_name: '新岛真', img: ''},
    { id: 10, owner_name: '佐仓双叶', img: ''},
    { id: 11, owner_name: '奥村春', img: ''},
    { id: 12, owner_name: '明智吾郎', img: ''},
]

export {
    ITEM_CATEGORY_MAP,
    ITEM_OWNER_MAP
};

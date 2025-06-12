<script setup lang="ts">
import PictorialSearchBar from './components/pictorialSearchBar.vue';
import PictorialTabBar from './components/pictorialTabBar.vue';
import PictorialContentView from './components/pictorialContentView.vue';

import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { pictorialStore, characterStore } from '@/stores';

import type { PersonaMap, SkillMap, ItemMap, PersonaData, SkillData, ItemData } from '@/types/data';
import type { PortraitTabBarType } from '@/types/portrait';

import { getPersonaMap } from '@/services/persona';
import { getSkillMap } from '@/services/skill';
import { getItemMap } from '@/services/item';
import { getCharacterList } from '@/services/character';

import { SKILL_EXTRA_MAP } from '@/constants/skill';
import { PERSONA_ARCANA_MAP } from '@/constants/persona';
import { ITEM_OWNER_MAP, ITEM_CATEGORY_MAP } from '@/constants/item';

// store 存储请求数据，用于跳转后访问
const pictorial_store = pictorialStore();
const character_store = characterStore();

// map存储请求数据
const persona_map = ref<PersonaMap>({});
const skill_map = ref<SkillMap>({});
const item_map = ref<ItemMap>({});

// tab 的索引
const tab_bars_index = ref(0);

// 搜索框初始化
const search_value = ref('');
const selected_category = ref('全部');

// 显示数据相关逻辑，涉及搜索与分类
const filtered_personas = computed(() => {
    return Object.values(persona_map.value).filter((persona) => {
        const matches_search =
            persona?.c_name?.includes(search_value.value) ||
            persona?.nick_name?.includes(search_value.value) ||
            persona?.arcana?.includes(search_value.value) ||
            persona?.level?.toString().includes(search_value.value);
        const matches_category =
            selected_category.value === '全部' || persona?.arcana === selected_category.value;
        return matches_search && matches_category;
    });
});

const filtered_skills = computed(() => {
    return Object.values(skill_map.value).filter((skill) => {
        const matches_search =
            skill?.c_name?.includes(search_value.value) ||
            skill?.c_element?.includes(search_value.value) ||
            skill?.cost?.toString().includes(search_value.value);
        const matches_category =
            selected_category.value === '全部' || skill?.c_element === selected_category.value;
        return matches_search && matches_category;
    });
});

const filtered_items = computed(() => {
    return Object.values(item_map.value).filter((item) => {
        const matches_search =
            item?.c_name?.includes(search_value.value) ||
            item?.c_type?.includes(search_value.value) ||
            item?.owner?.toLowerCase().includes(search_value.value.toLowerCase());
        const matches_category =
            selected_category.value === '全部' || item?.c_type === selected_category.value;
        return matches_search && matches_category;
    });
});

// 异步获取数据
const getPersonaMapData = async () => {
    const { result } = await getPersonaMap();
    const personaList = Object.values(result) as PersonaData[]; // 明确类型

    // 先按arcana_map顺序排序
    personaList.sort((a: PersonaData, b: PersonaData) => {
        const arcanaA = PERSONA_ARCANA_MAP.findIndex((entry) => entry.arcana_name === a.arcana);
        const arcanaB = PERSONA_ARCANA_MAP.findIndex((entry) => entry.arcana_name === b.arcana);
        return arcanaA - arcanaB;
    });

    // 再按level排序
    personaList.sort((a: PersonaData, b: PersonaData) => a.level - b.level);

    // 回归到PersonaMap格式
    const sortedPersonaMap: PersonaMap = {};
    personaList.forEach((p: PersonaData) => {
        sortedPersonaMap[p.name || ''] = p;
    });

    persona_map.value = sortedPersonaMap;
    pictorial_store.setPersonaMap(sortedPersonaMap);
};

const getSkillMapData = async () => {
    const { result } = await getSkillMap();
    const skillList = Object.values(result) as SkillData[]; // 明确类型

    // 先按element排序
    skillList.sort((a: SkillData, b: SkillData) => {
        const elementA = SKILL_EXTRA_MAP.findIndex((entry) => entry.elem_name === a.c_element);
        const elementB = SKILL_EXTRA_MAP.findIndex((entry) => entry.elem_name === b.c_element);
        return elementA - elementB;
    });

    // 再按cost排序
    skillList.sort((a: SkillData, b: SkillData) => (a.cost ? a.cost : 0) - (b.cost ? b.cost : 0));

    // 回归到SkillMap格式
    const sortedSkillMap: SkillMap = {};
    skillList.forEach((s: SkillData) => {
        sortedSkillMap[s.name || ''] = s;
    });
    skill_map.value = sortedSkillMap;

    pictorial_store.setSkillMap(sortedSkillMap);
};

const getItemMapData = async () => {
    const { result } = await getItemMap();

    const itemList = Object.values(result) as ItemData[]; // 明确类型

    // 再按category排序
    itemList.sort((a: ItemData, b: ItemData) => {
        const categoryA = ITEM_CATEGORY_MAP.findIndex((entry) => entry.type_name === a.c_type);
        const categoryB = ITEM_CATEGORY_MAP.findIndex((entry) => entry.type_name === b.c_type);
        return categoryA - categoryB;
    });

    // 先按owner排序
    itemList.sort((a: ItemData, b: ItemData) => {
        const ownerA = ITEM_OWNER_MAP.findIndex((entry) => entry.owner_name === a.owner);
        const ownerB = ITEM_OWNER_MAP.findIndex((entry) => entry.owner_name === b.owner);
        return ownerA - ownerB;
    });

    // 回归到ItemMap格式
    const sortedItemMap: ItemMap = {};
    itemList.forEach((i: ItemData) => {
        sortedItemMap[i.name || ''] = i;
    });

    item_map.value = sortedItemMap;
    pictorial_store.setItemMap(sortedItemMap);
};

const getCharacterData = async () => {
    const { result } = await getCharacterList();

    character_store.setCharacterList(result);
};

// tab 的切换与重置
const checkTabBarsIndex = (index: number) => {
    // 切换标签时清空搜索值
    if (tab_bars_index.value !== index) {
        // 清空搜索值, 并且重置选择的分类
        search_value.value = '';
        selected_category.value = '全部';
    }
    tab_bars_index.value = index;
};

const tab_bars: PortraitTabBarType[] = [
    { type: 'persona', title: '面具' },
    { type: 'skill', title: '技能' },
    { type: 'item', title: '道具' }
];

// 动态计算当前选中的标签类型
const current_tab_type = computed(() => {
    return tab_bars[tab_bars_index.value].type;
});

// 动态计算搜索框的提示文本
const search_placeholder = computed(() => {
    const placeholders = {
        persona: '搜索面具',
        skill: '搜索技能',
        item: '搜索道具'
    };
    return placeholders[current_tab_type.value as keyof typeof placeholders] || '搜索';
});

onLoad(async () => {
    try {
        await Promise.all([
            getPersonaMapData(),
            getSkillMapData(),
            getItemMapData(),
            getCharacterData()
        ]);
    } catch (error) {
        console.error('Error fetching data:', error);
        uni.showToast({
            title: '数据加载失败',
            icon: 'error',
            mask: true
        });
    }
});
</script>

<template>
    <P5rNavbar />
    <!-- tabbar选项能够切换searchbar后的组件，包括persona, skill, item -->
    <PictorialTabBar
        :nav_index="tab_bars_index"
        :tab_bars="tab_bars"
        @checkIndex="checkTabBarsIndex"
    />
    <PictorialSearchBar
        v-model:search_query="search_value"
        :search_placeholder="search_placeholder"
    />

    <!-- 使用统一的内容视图组件 -->
    <PictorialContentView
        :filtered_data="
            current_tab_type === 'persona'
                ? filtered_personas
                : current_tab_type === 'skill'
                  ? filtered_skills
                  : filtered_items
        "
        v-model:selected_category="selected_category"
        :current_tab_type="current_tab_type"
        class="content-view"
    />
</template>

<style>
page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden; /* 防止页面级别的滚动 */
}
</style>

<style scoped lang="scss">
.content-view {
    width: 100%;
    flex: 1; /* 占用剩余空间 */
    box-sizing: border-box;
    overflow: hidden; /* 移除页面级别的滚动，交给内部scroll-view处理 */
}
</style>

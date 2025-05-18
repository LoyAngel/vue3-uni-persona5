<script setup lang="ts">
import PictorialSearchbar from './components/pictorialSearchbar.vue';
import PictorialTabBar from './components/pictorialTabBar.vue';
import BizPersona from './biz/pictorialBizPersona.vue';
import BizSkill from './biz/pictorialBizSkill.vue'
import BizItem from './biz/pictorialBizItem.vue'

import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { personaStore } from '@/stores';
import { arcanaStore } from '@/stores';
import { PersonaMap, SkillMap, ItemMap, PersonaData } from '@/types/data';
import { getPersonaMap } from '@/services/persona';
import { PortraitTabBarType } from '@/types/portrait';

// 使用示例数据
const persona_store = personaStore();
const persona_map = ref<PersonaMap>({});
const arcana_store = arcanaStore();
const arcana_map = arcana_store.arcana_map;
// 为测试添加，可替换为实际数据获取
const skill_map = ref<SkillMap>({});
// const item_map = ref<ItemMap>({});

const search_value = ref('');
const selected_category = ref('全部');

const filtered_personas = computed(() => {
    return Object.values(persona_map.value).filter(persona => {
        const matches_search = persona?.c_name?.includes(search_value.value);
        const matches_category = selected_category.value === '全部' || persona?.arcana === selected_category.value;
        return matches_search && matches_category;
    });
});

const filtered_skills = computed(() => {
    return Object.values(skill_map.value).filter(skill => {
        const matches_search = skill?.name?.includes(search_value.value);
        return matches_search;
    });
});

// const filtered_items = computed(() => {
//     return Object.values(item_map.value).filter(item => {
//         const matches_search = item?.name?.includes(search_value.value);
//         return matches_search;
//     });
// });

// 异步获取数据
const getPersonaMapData = async () => {
    const { result } = await getPersonaMap();
    const personaList = Object.values(result) as PersonaData[]; // 明确类型

    // 先按level排序
    personaList.sort((a: PersonaData, b: PersonaData) => a.level - b.level);

    // 再按arcana_map顺序排序
    personaList.sort((a: PersonaData, b: PersonaData) => {
        const arcanaA = arcana_map.findIndex(entry => entry.arcana_name === a.arcana);
        const arcanaB = arcana_map.findIndex(entry => entry.arcana_name === b.arcana);
        return arcanaA - arcanaB;
    });

    // 回归到PersonaMap格式
    const sortedPersonaMap: PersonaMap = {};
    personaList.forEach((p: PersonaData) => {
        sortedPersonaMap[p.name || ''] = p;
    });

    persona_map.value = sortedPersonaMap;
    persona_store.setPersonaMap(sortedPersonaMap);
};
const getSkillMapData = async () => {
    // const { result } = await getSkillMap();
    // skill_map.value = result;
    // persona_store.setSkillMap(result);
    skill_map.value = {
        "Absorb Bless": {
            "name": "Absorb Bless",
            "effect": "Absorb Bless attacks.",
            "element": "passive",
            "personas": { "Cybele": 87, "Vohu Manah": 82 }
        },
        "Absorb Curse": {
            "name": "Absorb Curse",
            "effect": "Absorb Curse attacks.",
            "element": "passive",
            "fuse": ["Attis"],
            "personas": { "Attis": 86, "Loa": 73, "Lucifer": 0, "Tsukiyomi": 0, "Tsukiyomi Picaro": 0 }
        },
        "Absorb Fire": {
            "name": "Absorb Fire",
            "card": "Full Moon ???",
            "effect": "Absorb Fire attacks.",
            "element": "passive",
            "fuse": ["Chimera"],
            "personas": { "Moloch": 64 }
        },
    }
};

const tab_bars_index = ref(0);
const checkTabBarsIndex = (index: number) => {
    console.log(index);
    // 切换标签时清空搜索值
    if (tab_bars_index.value !== index) {
        search_value.value = '';
        // 如果需要，也可以在这里重置选择的分类
        // selected_category.value = '全部';
        console.log(search_value.value);
    }
    tab_bars_index.value = index;
};

const test_tab_bars: PortraitTabBarType[] = [
    { type: 'persona', title: '面具' },
    { type: 'skill', title: '技能' },
    { type: 'item', title: '道具' },
]

// 动态计算当前选中的标签类型
const current_tab_type = computed(() => {
    return test_tab_bars[tab_bars_index.value].type;
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
    await getPersonaMapData();
    await getSkillMapData();
    // await getItemMapData();
})
</script>

<template>
    <P5rNavbar />
    <!-- tabbar选项能够切换searchbar后的组件，包括persona, skill, item -->
    <PictorialTabBar
        :nav_index="tab_bars_index"
        :tab_bars="test_tab_bars"
        @checkIndex="checkTabBarsIndex"
    />
    <PictorialSearchbar
        v-model:search_query="search_value"
        :search_placeholder="search_placeholder"
    />

    <!-- 根据当前选中的标签类型动态显示对应组件 -->
    <template v-if="current_tab_type === 'persona'">
        <BizPersona
            :filtered_personas="filtered_personas"
            v-model:selected_category="selected_category"
            class="main-content"
        />
    </template>

    <template v-else-if="current_tab_type === 'skill'">
        <BizSkill
            :filtered_skills="filtered_skills"
            v-model:selected_category="selected_category"
            class="main-content"
        />
    </template>

    <!-- <template v-else-if="current_tab_type === 'item'">
        <BizItem
            :filtered_items="filtered_items"
            v-model:selected_category="selected_category"
            class="main-content"
        />
    </template> -->
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
}
</style>

<style scoped lang="scss">
.main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100vw;

    ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }
}
</style>
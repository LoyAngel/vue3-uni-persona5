<script setup lang="ts">
import PersonaItem from './components/personaItem.vue';
import personaSearchbar from './components/personaSearchbar.vue';
import personaSidebar from './components/personaSidebar.vue';

import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { personaStore } from '@/stores';
import { arcanaStore } from '@/stores';
import { PersonaMap } from '@/types/data';
import { getPersonaMap } from '@/services/persona';

// 使用示例数据
const persona_store = personaStore();
const persona_map = ref<PersonaMap>({});
const arcana_store = arcanaStore();
const arcana_map = arcana_store.arcana_map;

const search_value = ref('');
const selected_category = ref('全部');

const filtered_personas = computed(() => {
    return Object.values(persona_map.value).filter(persona => {
        const matches_search = persona?.c_name?.includes(search_value.value);
        const matches_category = selected_category.value === '全部' || persona?.arcana === selected_category.value;
        return matches_search && matches_category;
    });
});

const getPersonaMapData = async () => {
    const{ result } = await getPersonaMap();
    const personaList = Object.values(result); // 转换为数组

    // 先按level排序
    personaList.sort((a, b) => a.level - b.level);

    // 再按arcana_map顺序排序
    personaList.sort((a, b) => {
        const arcanaA = arcana_map.findIndex(item => item.arcana_name === a.arcana);
        const arcanaB = arcana_map.findIndex(item => item.arcana_name === b.arcana);
        return arcanaA - arcanaB;
    });

    // 回归到PersonaMap格式
    const sortedPersonaMap: PersonaMap = {};
    personaList.forEach(p => {
        sortedPersonaMap[p.name || ''] = p;
    });

    persona_map.value = sortedPersonaMap;
    persona_store.setPersonaMap(sortedPersonaMap);
};

onLoad(async () => {
    await getPersonaMapData();
})
</script>

<template>
    <P5rNavbar />
    <persona-searchbar
        v-model:search_query="search_value" />
    <view class="main-content">
        <persona-sidebar
            v-model:selected_category="selected_category"
        />
        <scroll-view
            class="content"
            scroll-y
            :show-scrollbar="false"
        >
            <view
                v-if="filtered_personas.length === 0"
                class="empty-view"
            >
                无搜索结果
            </view>
            <persona-item
                v-else
                v-for="persona_item in filtered_personas"
                :key="persona_item.name"
                :persona="persona_item"
                :img="persona_item.img_url ? persona_item.img_url : ''"
            />
        </scroll-view>
    </view>
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

    .content {
        flex: 1;
        padding: 32rpx;
        box-sizing: border-box;
        color: #ffffff;
        background-color: #000000;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;

        .empty-view {
            text-align: center;
            color: #ffffff;
            font-size: 32rpx;
            padding: 32rpx;
        }
    }
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
}

</style>
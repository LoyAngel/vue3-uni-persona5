<script setup lang="ts">
import { ref, computed } from 'vue';
import PersonaItem from './components/personaItem.vue';
import personaSearchbar from './components/personaSearchbar.vue';
import personaSidebar from './components/personaSidebar.vue';
import { PersonaMap, TranslationMap } from '@/types/data';
import { getPersonaImgMap, getPersonaMap } from '@/services/persona';
import { onLoad } from '@dcloudio/uni-app';
import P5rNavbar from '@/components/P5rNavbar.vue';

// 使用示例数据
// const test_persona_map: PersonaMap = {
//     "Abaddon": {
//         "name": "Abaddon",
//         "inherits": "Curse",
//         "item": "Megaton Raid Belt",
//         "itemr": "God's Hand Belt",
//         "level": 75,
//         "arcana": "Judgement",
//         "elems": ["ab", "ab", "-", "-", "-", "-", "-", "-", "rs", "ab"],
//         "skills": {
//             "Mabufudyne": 0,
//             "Megaton Raid": 0,
//             "Enduring Soul": 0,
//             "Flash Bomb": 78,
//             "Ailment Boost": 79,
//             "Absorb Phys": 80,
//             "Gigantomachia": 81
//         },
//         "stats": [51, 42, 58, 38, 43],
//         "trait": "Mouth of Savoring",
//         "area": "Da'at",
//         "floor": "All"
//     },
//     "Agathion": {
//         "name": "Agathion",
//         "inherits": "Electric",
//         "item": "Zio",
//         "itemr": "Mazio",
//         "skillCard": true,
//         "level": 3,
//         "arcana": "Chariot",
//         "elems": ["-", "rs", "-", "-", "rs", "wk", "-", "-", "-", "-"],
//         "skills": {"Dia": 0, "Baisudi": 0, "Lunge": 4, "Rakukaja": 6, "Zio": 7, "Dodge Elec": 8},
//         "stats": [3, 4, 5, 7, 3],
//         "trait": "Rare Antibody",
//         "area": "Aiyatsbus",
//         "floor": "L1"
//     },
// }

const persona_map = ref<PersonaMap>({});
const img_map = ref<TranslationMap>({});
const search_value = ref('');
const selectedCategory = ref('全部');
const filteredPersonas = computed(() => {
    return Object.values(persona_map.value).filter(persona => {
        const matchesSearch = persona?.c_name?.includes(search_value.value);
        const matchesCategory = selectedCategory.value === '全部' || persona?.arcana === selectedCategory.value;
        return matchesSearch && matchesCategory;
    });
});

const getPersonaMapData = async () => {
    // 获取数据
    const res = await getPersonaMap();
    persona_map.value = res.result;
}

const getPersonaImgMapData = async () => {
    // 获取数据
    const res = await getPersonaImgMap();
    img_map.value = res.result;
}

onLoad(async () => {
    await getPersonaMapData();
    await getPersonaImgMapData();
})
</script>

<template>
    <P5rNavbar />
    <persona-searchbar
        v-model:search_query="search_value" />
    <view class="main-content">
        <persona-sidebar
            v-model:selected_category="selectedCategory"
        />
        <scroll-view
            class="content"
            scroll-y
            :show-scrollbar="false"
        >
            <view
                v-if="filteredPersonas.length === 0"
                class="empty-view"
            >
                无搜索结果
            </view>
            <persona-item
                v-else
                v-for="persona_item in filteredPersonas"
                :key="persona_item.name"
                :persona="persona_item"
                :img="persona_item.name ? img_map[persona_item.name] : ''"
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
<script setup lang="ts">
import { ref } from 'vue';
import PersonaItem from './components/personaItem.vue';
import personaSearchbar from './components/personaSearchbar.vue';
import personaSidebar from './components/personaSidebar.vue';
import { PersonaMap, TranslationMap } from '@/types/data';
import { getPersonaImgMap, getPersonaMap } from '@/services/persona';
import { onLoad } from '@dcloudio/uni-app';

const persona_map = ref<PersonaMap>({});
const img_map = ref<TranslationMap>({});

const getPersonaMapData = async () => {
    // 获取数据
    const res = await getPersonaMap();
    persona_map.value = res.result;
    console.log(persona_map.value);
}

const getPersonaImgMapData = async () => {
    // 获取数据
    const res = await getPersonaImgMap();
    img_map.value = res.result;
    console.log(img_map.value);
}

onLoad(async () => {
    await getPersonaMapData();
    await getPersonaImgMapData();
})

const test_persona_list: PersonaMap = {
    "Abaddon": {
        "name": "Abaddon",
        "inherits": "Curse",
        "item": "Megaton Raid Belt",
        "itemr": "God's Hand Belt",
        "level": 75,
        "arcana": "Judgement",
        "elems": ["ab", "ab", "-", "-", "-", "-", "-", "-", "rs", "ab"],
        "skills": {
            "Mabufudyne": 0,
            "Megaton Raid": 0,
            "Enduring Soul": 0,
            "Flash Bomb": 78,
            "Ailment Boost": 79,
            "Absorb Phys": 80,
            "Gigantomachia": 81
        },
        "stats": [51, 42, 58, 38, 43],
        "trait": "Mouth of Savoring",
        "area": "Da'at",
        "floor": "All"
    },
    "Agathion": {
        "name": "Agathion",
        "inherits": "Electric",
        "item": "Zio",
        "itemr": "Mazio",
        "skillCard": true,
        "level": 3,
        "arcana": "Chariot",
        "elems": ["-", "rs", "-", "-", "rs", "wk", "-", "-", "-", "-"],
        "skills": {"Dia": 0, "Baisudi": 0, "Lunge": 4, "Rakukaja": 6, "Zio": 7, "Dodge Elec": 8},
        "stats": [3, 4, 5, 7, 3],
        "trait": "Rare Antibody",
        "area": "Aiyatsbus",
        "floor": "L1"
    },
}
</script>

<template>
    <persona-searchbar />
    <view class="main-content">
        <persona-sidebar />
        <scroll-view
            class="content"
            scroll-y
            :show-scrollbar="false"
        >
            <persona-item
                v-for="persona_item in persona_map"
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
    width: 100%;
    position: relative;
}
</style>

<style scoped lang="scss">
.main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
}

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
}
</style>
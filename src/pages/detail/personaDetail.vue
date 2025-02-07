<template>
  <view class="container">
    <PersonaDetailCard :persona="persona" />
  </view>
</template>

<script setup lang="ts">
import PersonaDetailCard from './components/personaDetailCard.vue'

import { ref, defineProps } from 'vue'
import { personaStore } from '@/stores';
import { PersonaData } from '@/types/data';
const persona_store = personaStore();
const props = defineProps<{
    persona_name: string;
}>();

const persona = ref<PersonaData>(
    persona_store.persona_map[props.persona_name]
);
// const testPersona = reactive({
//     "inherits": "Curse",
//     "item": "百万吨腰带",
//     "itemr": "神手腰带",
//     "level": 75,
//     "arcana": "审判",
//     "elems": ["吸", "吸", "-", "-", "-", "-", "-", "-", "耐", "吸"],
//     "skills": {
//         "玛哈布芙达因": 0,
//         "百万吨袭击": 0,
//         "不屈斗志": 0,
//         "闪光炸弹": 78,
//         "异常状态成功率UP": 79,
//         "物理吸收": 80,
//         "巨人之战": 81
//     },
//     "stats": [51, 42, 58, 38, 43],
//     "trait": "Mouth of Savoring",
//     "name": "Abaddon",
//     "c_name": "阿巴顿",
// })
</script>

<style>
.container {
  padding: 20px;
  background-color: #222222;
  min-height: 100vh;
}
</style>


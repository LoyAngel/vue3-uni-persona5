<script setup lang="ts">
import { ref } from 'vue';
import strategyTabbar from './components/strategyTabbar.vue';
import strategyContent from './components/strategyContent.vue';

const navIndex = ref(0);
const isCollapsed = ref(true);
const tabBars = ref<Array<{
    name: string;
    id: string;
    image: string;
    details: string;
}>>([
    { name: 'COOP 介绍', id: 'intro', image: `/static/strategy/strategy_coop_intro.png`, details: 'Introduction details...' },
    { name: 'COOP 详情', id: 'detail', image: 'path/to/detail.jpg', details: 'Detail information...' },
    { name: 'COOP 优先级推荐', id: 'recommonad', image: 'path/to/recommonad.jpg', details: 'Priority recommendations...' }
]);

function checkIndex(index: number): void {
    navIndex.value = index;
    isCollapsed.value = true; // Collapse the details when a new tab is selected
}

function toggleCollapse(): void {
    isCollapsed.value = !isCollapsed.value;
}
</script>

<template>
    <strategyTabbar
        :navIndex="navIndex"
        :tabBars="tabBars"
        @checkIndex="checkIndex"
    />
    <P5rBackground class="background-animation">
    <strategyContent
        :navIndex="navIndex"
        :tabBars="tabBars"
        :isCollapsed="isCollapsed"
        @toggleCollapse="toggleCollapse"
    />
    </P5rBackground>
</template>

<style>
page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
}
</style>

<style scoped>
.background-animation {
    flex: 1;
}

.background-animation :deep(.mainbox){
    justify-content: flex-start;
}
</style>
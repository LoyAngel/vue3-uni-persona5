<script setup lang="ts">
import type { StrategyMainData } from '@/types/strategy';
import { defineProps } from 'vue';
const props = defineProps<{
    navIndex: number;
    tabBars: StrategyMainData[];
}>();
</script>

<template>
    <view class="view-main">
        <view
            class="view-entry"
            v-for="(tab, index) in tabBars"
            :key="tab.type"
            :class="navIndex === index ? 'active' : ''"
            @click="$emit('checkIndex', index)"
            style="font-size: 0.9rem;"
        >
            {{ tab.title }}
        </view>
    </view>
</template>

<style scoped>
.active {
    color: #ff0000;
    border-bottom: 2px solid #ff0000;
    transition: color 0.3s, border-bottom 0.3s;
}

.view-main {
    white-space: nowrap;
    color: #CCCCCC;
    background-color: #000000;
    width: 100vw;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
}

.view-entry {
    flex: 1 1 auto;
    padding: 10px;
    text-align: center;
    transition: color 0.3s;
}

.view-entry:hover {
    color: #ff0000;
}
</style>
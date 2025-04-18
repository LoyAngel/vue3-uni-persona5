<script setup lang="ts">
import { PortraitTabBarType } from '@/types/portrait';
import { defineProps } from 'vue';
const props = defineProps<{
    nav_index: number;
    tab_bars: PortraitTabBarType[]
}>();
const emits = defineEmits<
    (event: 'checkIndex', index: number) => void
>();
</script>

<template>
    <view class="view-main">
        <view
            class="view-entry"
            v-for="(tab, index) in tab_bars"
            :key="tab.type"
            :class="nav_index === index ? 'active' : ''"
            @click="$emit('checkIndex', index)"
            style="font-size: 0.9rem;"
        >
            {{ tab.title }}
        </view>
    </view>
</template>

<style scoped>
@keyframes animated-border {
    0% {
        box-shadow: 0 0 0 0 #ff0000;
    }
    100% {
        box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
    }
}

.active {
    color: #000000;
    background-color: #ff0000;
    border: 2px dashed #ffffff;
    transition: color 0.8s, background-color 0.8s, transform 0.8s, border 0.8s;
    animation: animated-border 0.8s 
}

.view-main {
    white-space: nowrap;
    background-color: #000000;
    color: #ffffff;
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
    border: 2px dashed;
}

</style>
<script setup lang="ts">
import { computed } from 'vue';
import type { PersonaData } from '@/types/data';
import PictorialEntry from '../components/pictorialEntry.vue';
import PictorialSideBar from '../components/pictorialSideBar.vue';

const props = defineProps<{
    filtered_personas: PersonaData[];
    selected_category: string;
}>();
const emit = defineEmits(['update:selected_category']);
const selected_category_computed = computed({
    get: () => props.selected_category,
    set: (value: string) => {
        emit('update:selected_category', value);
    }
});
</script>

<template>
    <view>
        <PictorialSideBar
            v-model:selected_category="selected_category_computed"
            current_tab_type="persona"
        />
        <scroll-view class="content" scroll-y :show-scrollbar="false">
            <view v-if="filtered_personas.length === 0" class="empty-view">无搜索结果</view>
            <PictorialEntry
                v-else
                v-for="persona_entry in filtered_personas"
                :key="persona_entry.name"
                :data="persona_entry"
                :img="persona_entry.img_url ? persona_entry.img_url : ''"
                current_tab_type="persona"
            />
        </scroll-view>
    </view>
</template>

<style scoped lang="scss">
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
</style>

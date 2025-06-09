<script setup lang="ts">
import { computed } from 'vue';
import type { ItemData } from '@/types/data';
import PictorialSideBar from '../components/pictorialSideBar.vue';
import PictorialEntry from '../components/pictorialEntry.vue';

const props = defineProps<{
    filtered_items: ItemData[];
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
            current_tab_type="item"
            v-model:selected_category="selected_category_computed"
        />
        <scroll-view class="content" scroll-y :show-scrollbar="false">
            <view v-if="filtered_items.length === 0" class="empty-view">无搜索结果</view>
            <PictorialEntry
                v-else
                v-for="item_entry in filtered_items"
                :key="item_entry.name"
                current_tab_type="item"
                :data="item_entry"
                :img="''"
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

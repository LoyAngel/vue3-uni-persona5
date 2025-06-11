<script setup lang="ts">
import { computed } from 'vue';
import type { PersonaData, SkillData, ItemData } from '@/types/data';
import type { PortraitTabBarType } from '@/types/portrait';
import PictorialSideBar from './pictorialSideBar.vue';
import PictorialEntry from './pictorialEntry.vue';

// 通用数据类型
type ContentData = PersonaData | SkillData | ItemData;

const props = defineProps<{
    filtered_data: ContentData[];
    selected_category: string;
    current_tab_type: PortraitTabBarType['type'];
}>();

const emit = defineEmits(['update:selected_category']);

const selected_category_computed = computed({
    get: () => props.selected_category,
    set: (value: string) => {
        emit('update:selected_category', value);
    }
});

// 根据不同的tab类型获取图片URL
const getImageUrl = (data: ContentData): string => {
    if (props.current_tab_type === 'persona' && 'img_url' in data) {
        return data.img_url || '';
    }
    // skill和item类型暂时返回空字符串
    return '';
};
</script>

<template>
    <view class="main-content">
        <PictorialSideBar
            :current_tab_type="current_tab_type"
            v-model:selected_category="selected_category_computed"
        />
        <scroll-view class="content" scroll-y :show-scrollbar="false" enable-flex>
            <view v-if="filtered_data.length === 0" class="empty-view">无搜索结果</view>
            <PictorialEntry
                v-else
                v-for="data_entry in filtered_data"
                :key="data_entry.name"
                :current_tab_type="current_tab_type"
                :data="data_entry"
                :img="getImageUrl(data_entry)"
                class="pictorial-entry"
            />
        </scroll-view>
    </view>
</template>

<style scoped lang="scss">
.main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100vw;
    height: 100%;

    ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

    .content {
        flex: 1;
        padding: 32rpx;
        box-sizing: border-box;
        color: #ffffff;
        background-color: #000000;
        display: flex;
        justify-content: center;
        align-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        height: 100%;

        .empty-view {
            text-align: center;
            color: #ffffff;
            font-size: 32rpx;
            padding: 32rpx;
        }

        .pictorial-entry {
            width: 100%;
        }
    }
}
</style>

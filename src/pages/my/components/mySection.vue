<script setup lang="ts">
import { defineProps, computed, withDefaults } from 'vue'
const props = withDefaults(
    defineProps<{
        title: string,
        section_data_string: string,
        fontsize?: number,
        scroll_view_height?: number
    }>(),
    {
        fontsize: 24
    }
);

const section_data = computed(() => {
    return props.section_data_string
        ?.split('\n')
        .filter(item => item.trim() !== '')
        .map((item, index) => {
            return { id: index, text: item }
        }) || [];
})
</script>

<template>
    <view class="section">
        <view class="section-header">
            <text class="section-title">{{ title }}</text>
            <!-- 额外头部插槽 -->
            <slot name="extraHeader"></slot>
        </view>

        <scroll-view class="section-list" scroll-y :style= "scroll_view_height ? { height: `${scroll_view_height}rpx` } : {}">
            <view
                v-for="item in section_data"
                :key="item.id"
                class="section-item"
                :style="{ fontSize: `${fontsize}rpx` }"
            >
                <text>{{ item.text }}</text>
            </view>
        </scroll-view>

        <!-- 主要内容插槽 -->
        <slot />
    </view>
</template>

<style scoped>
.section {
    margin: 10rpx 30rpx;
    background-color: #ffffff;
    border-radius: 24rpx;
    padding: 24rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.section-title {
    font-size: 32rpx;
    font-weight: 500;
    color: #333;
}

.section-list {
    display: flex;
    flex-direction: column;
    gap: 16rpx;
}

.section-item {
    word-break: break-all;
    white-space: pre-wrap;
    color: #666;
    line-height: 1.5;
}
</style>
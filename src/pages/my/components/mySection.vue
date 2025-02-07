<script setup lang="ts">
import { defineProps, computed } from 'vue'
const props = defineProps({
    title: String,
    section_data_string: String
})
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
            <!-- 若需要在标题右侧增加其他元素，可通过插槽实现 -->
            <slot name="extraHeader"></slot>
        </view>
        <view class="section-list">
            <view
                v-for="item in section_data"
                :key="item.id"
                class="section-item"
            >
                <text>{{ item.text }}</text>
            </view>
        </view>
        <!-- 主要内容插槽 -->
        <slot />
    </view>
</template>

<style scoped>
.section {
    margin: 20rpx 30rpx;
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
    font-size: 28rpx;
    color: #666;
    line-height: 1.5;
}
</style>
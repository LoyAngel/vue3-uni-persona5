<script setup lang="ts">
import { computed } from 'vue';
import { pictorialStore } from '@/stores/module/pictorial';
import type { ItemData } from '@/types/data';
import DetailContainer from './components/detailContainer.vue';
import DetailCard from './components/detailCard.vue';
import { onLoad } from '@dcloudio/uni-app';

const props = defineProps<{
    item_name: string;
}>();

const item = computed<ItemData>(() => {
    return pictorialStore().item_map[props.item_name];
});

// 为DetailContainer组件准备数据
const badges = computed(() => [
    { text: item.value.c_type || '未知', color: '#c0392b' },
    { text: item.value.owner || '未知', color: '#2c3e50' }
]);

const tabs = {
    0: '物品信息',
    1: '拥有者信息',
    2: '获取来源'
};

onLoad(() => {
   if(!props.item_name) uni.reLaunch({ url: '/pages/404/404' })
})
</script>

<template>
    <DetailContainer :title="item.c_name || ''" :badges="badges" :tabs="tabs">
        <!-- 物品信息选项卡 -->
        <template #tab-0>
            <view class="item-info-container">
                <DetailCard
                    title="物品详情"
                    :data="[
                        { label: '物品类型', value: item.c_type || '' },
                        { label: '描述', value: item.description || '' }
                    ]"
                />
            </view>
        </template>

        <!-- 拥有者信息选项卡 -->
        <template #tab-1>
            <view class="owner-info-container">
                <DetailCard
                    v-if="item.owner"
                    title="拥有者详情"
                    :data="[
                        {
                            label: '拥有者',
                            value: item.owner || ''
                        }
                    ]"
                />
                <view v-else class="no-owner-message">
                    <text class="no-owner-text">该物品暂无明确拥有者</text>
                </view>
            </view>
        </template>

        <!-- 获取来源选项卡 -->
        <template #tab-2>
            <view class="source-info-container">
                <DetailCard
                    title="获取信息"
                    :data="[
                        { label: '获取来源', value: item.source || '未知来源' },
                        { label: '来源详情', value: item.source_detail || '无备注信息' }
                    ]"
                />
            </view>
        </template>
    </DetailContainer>
</template>

<style lang="scss" scoped>
// 物品信息样式
.item-info-container {
    display: flex;
    flex-direction: column;
    gap: 30rpx;
}

// 拥有者信息样式
.owner-info-container {
    display: flex;
    flex-direction: column;
    gap: 30rpx;

    .no-owner-message {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60rpx;
        background-color: rgba(40, 40, 40, 0.6);
        border-radius: 15rpx;
        border: 2rpx dashed rgba(255, 255, 255, 0.3);

        .no-owner-text {
            color: #a0a0a0;
            font-size: 32rpx;
            text-align: center;
        }
    }
}

// 来源信息样式
.source-info-container {
    display: flex;
    flex-direction: column;
    gap: 30rpx;
}
</style>

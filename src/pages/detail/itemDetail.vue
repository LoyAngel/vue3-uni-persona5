<script setup lang="ts">
import { ref } from 'vue'
import P5rBackground from '@/components/P5rBackground.vue';
import { pictorialStore } from '@/stores/module/pictorial';

// 定义物品数据类型
interface ItemData {
    name?: string;  // 装备名称
    description?: string; // 装备描述
    type?: string; // 装备类型
    rarity?: number; // 稀有度
    imageUrl?: string; // 物品图片
}

const props = defineProps<{ 
    item_name: string;
}>();
const item = ref<ItemData>(pictorialStore().item_map[props.item_name]);
</script>

<template>
    <P5rBackground class="background">
        <div class="item-detail-container">
            <div class="item-card">
                <div class="card-header">
                    <h1 class="item-name">{{ item.name }}
                    </h1>
                    <span class="item-type">{{ item.type
                    }}</span>
                </div>

                <div class="card-content">
                    <!-- 物品信息区域 -->
                    <div class="description-box">
                        <h3 class="description-label">描述
                        </h3>
                        <p class="description-value">{{
                            item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </P5rBackground>
</template>

<style>
page {
    height: 100%;
}
</style>

<style scoped lang="scss">
.background {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-detail-container {
    width: 90%;
    margin: 20rpx auto;
    position: relative;
}

.item-card {
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 15rpx;
    padding: 60rpx;
    color: #ffffff;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
    border-left: 10rpx solid #ff0000;

    .card-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin-bottom: 30rpx;
        border-bottom: 5rpx solid rgba(255, 0, 0, 0.5);
        padding-bottom: 30rpx;

        .item-name {
            font-size: 1.5em;
            font-weight: bold;
            color: #ff0000;
            margin: 0;
        }

        .item-type {
            background-color: #ff0000;
            color: white;
            padding: 10rpx 24rpx;
            border-radius: 40rpx;
            font-size: 0.8em;
            font-weight: bold;
            width: fit-content;
            margin: 20rpx 0 0;
        }
    }

    .card-content {
        display: flex;
        flex-direction: column;

        .description-box {
            background-color: rgba(40, 40, 40, 0.7);
            border-radius: 16rpx;
            padding: 30rpx;

            .description-label {
                color: #ff0000;
                font-size: 1.1em;
                margin-top: 0;
                margin-bottom: 20rpx;
                border-bottom: 1rpx solid rgba(255, 255, 255, 0.2);
                padding-bottom: 10rpx;
            }

            .description-value {
                color: #e0e0e0;
                font-size: 1em;
                line-height: 1.5;
                margin: 0;
            }
        }

    }

}
</style>
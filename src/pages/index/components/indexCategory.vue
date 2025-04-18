<script setup lang="ts">
import { IndexTitleData } from '@/types';

const props = defineProps<{ list: IndexTitleData[] }>();
const navigate = (url: string) => {
    uni.navigateTo({ url });
}
</script>

<template>
    <transition-group
        name="fade"
        tag="div"
        class="category-list"
    >
        <view
            v-for="(item, index) in list"
            :key="index"
            class="category-item"
            @click="navigate(item.url)"
        >
            <image
                :src="item.image"
                class="category-image"
                mode="heightFix"
            />
        </view>
    </transition-group>
</template>

<style scoped>
.category-list {
    display: flex;
    height: 725rpx;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 20rpx;
}

.category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rpx;
    min-width: 100rpx;
    max-width: 300rpx;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-item:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-image {
    height: 100rpx;
    border: 2px solid #c00;
    object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
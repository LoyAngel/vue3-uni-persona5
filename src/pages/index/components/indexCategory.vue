<script setup lang="ts">
import { TitleItem } from '@/types';

const navigate = (url: string) => {
    uni.navigateTo({ url });
}
const list = <TitleItem[]>[
    { title: 'COOP攻略', url: '/pages/strategy/strategy?type=coop', image: '/static/index_title1.png' },
    { title: '解答猜谜', url: '/pages/strategy/strategy?type=answer', image: '/static/index_title2.png' },
    { title: '人格指数', url: '/pages/strategy/strategy?type=confidant', image: '/static/index_title3.png' },
    { title: '街区指南', url: '/pages/strategy/strategy?type=area', image: '/static/index_title5.png' },
]
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
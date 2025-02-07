<script setup lang="ts">
import { PersonaData } from '@/types/data';


const props = defineProps<{
    persona: PersonaData;
    img: string;
}>();

const navigate = () => {
    uni.navigateTo({ url: `/pages/detail/personaDetail?persona_name=${props.persona.name}` });
}
</script>

<template>
    <view class="persona-card" @click="navigate()">
        <view class="persona-image-container">
            <image 
                :src="img" 
                class="persona-image"
                mode="aspectFit"
            />
        </view>
        <view class="persona-info">
            <view class="arcana-name">{{ persona.arcana }}</view>
            <view class="persona-name">{{ persona.c_name }}</view>
        </view>
    </view>
</template>

<style scoped>
.persona-card {
    display: flex;
    width: 60vw;
    flex-direction: row;
    align-items: center;
    margin: 5rpx;
    padding: 20rpx;
    background: #1a1a1a;
    border-radius: 12rpx;
    border-left: 8rpx solid #FF0000;
    transition: transform 0.3s ease;
}
.persona-card:hover {
    transform: translateY(-4rpx);
    box-shadow: 0 8rpx 16rpx rgba(255, 0, 0, 0.5);
}
.persona-image-container {
    width: 100rpx;
    height: 100rpx;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8rpx;
    overflow: hidden;
    margin-right: 20rpx;
}
.persona-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.persona-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
}
.arcana-name {
    text-align: center;
    font-size: 24rpx;
    color: #FF0000;
    margin-bottom: 8rpx;
    font-weight: bold;
}
.persona-name {
    text-align: center;
    font-size: 40rpx;
    color: #FFFFFF;
    font-weight: bold;
}
</style>
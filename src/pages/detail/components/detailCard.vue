<script setup lang="ts">
defineProps<{
  title: string;
  accent?: string;
  data: Array<{
    label: string;
    value: string;
  }>;
}>();
</script>

<template>
  <view class="info-block" :style="{ borderLeftColor: accent || '#ff0000' }">
    <view class="block-title" :style="{ color: accent || '#ff0000' }">{{ title }}</view>
    <view 
      v-for="(item, index) in data" 
      :key="index" 
      class="info-row"
    >
      <text class="info-label">{{ item.label }}：</text>
      <text class="info-value">{{ item.value }}</text>
    </view>
    <slot></slot>
  </view>
</template>

<style lang="scss" scoped>
.info-block {
  background-color: rgba(40, 40, 40, 0.6);
  border-radius: 15rpx;
  padding: 20rpx;
  border-left: 5rpx solid #ff0000;

  .block-title {
    color: #ff0000;
    margin-top: 0;
    margin-bottom: 20rpx;
    font-size: 30rpx;
    border-bottom: 1rpx solid rgba(255, 255, 255, 0.3);
    padding-bottom: 10rpx;
  }

  .info-row {
    display: flex;
    margin-bottom: 15rpx;

    .info-label {
      color: #cccccc;
      min-width: 140rpx;
    }

    .info-value {
      color: #ffffff;
      flex: 1;
    }
  }
}
</style>

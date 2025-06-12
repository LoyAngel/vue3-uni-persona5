<script setup lang="ts">

defineProps<{
  title: string;
  accent?: string;
  data: Array<{
    label: string;
    value: string;
    clickable?: boolean;
  }>;
}>();

const emit = defineEmits<{
    (e: 'entry-click', entry: { label: string; value: string; clickable?: boolean }, index: number): void
}>();

const handleEntryClick = (entry: { label: string; value: string; clickable?: boolean }, index: number) => {
  if (entry.clickable && entry.value) {
    emit('entry-click', entry, index);
  }
};
</script>

<template>
  <view class="info-block" :style="{ borderLeftColor: accent || '#ff0000' }">
    <view class="block-title" :style="{ color: accent || '#ff0000' }">{{ title }}</view>
    <view 
      v-for="(entry, index) in data" 
      :key="index" 
      class="info-row"
    >
      <text class="info-label">{{ entry.label }}：</text>
      <text 
        :class="['info-value', { 'clickable-link': entry.clickable && entry.value }]"
        @click="handleEntryClick(entry, index)"
      >{{ entry.value }}</text>
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
      
      &.clickable-link {
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
          color: #ff5050 !important;
          text-shadow: 0 0 8rpx rgba(255, 80, 80, 0.6);
          transform: scale(1.02);
        }
        
        &:active {
          color: #ff0000 !important;
          transform: scale(0.98);
        }
      }
    }
  }
}
</style>

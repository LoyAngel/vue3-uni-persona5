<script setup lang="ts">
const menuItems = [
  { id: 1, name: '全部', icon: '🔍' },
  { id: 2, name: '力量', icon: '💪' },
  { id: 3, name: '魔力', icon: '✨' },
  { id: 4, name: '恶魔', icon: '😈' },
  { id: 5, name: '皇帝', icon: '👑' },
  { id: 6, name: '女帝', icon: '👸' },
  { id: 7, name: '教皇', icon: '🏛️' },
  { id: 8, name: '战车', icon: '🚗' },
  { id: 9, name: '正义', icon: '⚖️' },
  { id: 10, name: '隐者', icon: '🧙' },
];
</script>

<template>
  <scroll-view class="sidebar" scroll-y>
    <view 
      v-for="item in menuItems" 
      :key="item.id" 
      class="menu-item"
      hover-class="menu-item-hover"
    >
      <text class="icon">{{ item.icon }}</text>
      <text class="text">{{ item.name }}</text>
    </view>
  </scroll-view>
</template>

<style scoped>
.sidebar {
  width: 25vw;
  background-color: #000000;
  border-right: 2rpx solid #FF0000;
  height: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 30rpx 20rpx;
  color: #ffffff;
  border-bottom: 2rpx solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.menu-item-hover {
  background-color: #FF0000;
}

.icon {
  font-size: 32rpx;
  margin-right: 16rpx;
}

.text {
  font-size: 28rpx;
  font-weight: 500;
}
</style>
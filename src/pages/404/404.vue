<template>
  <view class="page-404">
    <text class="title">404</text>
    <text class="subtitle">页面未找到</text>
    <navigator class="back-btn" @click="navigateBack">返回首页</navigator>
  </view>
</template>

<script setup>
// 404页面逻辑
const navigateBack = () => {
    uni.reLaunch({
        url: '/pages/index/index'
    })
}
</script>

<style scoped>
.page-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000000;
}

.title {
  font-size: 80rpx;
  color: #9f2011;
  margin-bottom: 40rpx;
}

.subtitle {
  font-size: 32rpx;
  color: #ffffff;
  margin-bottom: 80rpx;
}

.back-btn {
  padding: 20rpx 40rpx;
  background-color: #9f2011;
  color: #ffffff;
  border-radius: 10rpx;
  font-size: 32rpx;
}
</style>
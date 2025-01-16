<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
    <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 20 + 'rpx', paddingBottom: safeAreaInsets!.top/2 + 'rpx'  }">
        <view class="logo">
            <!-- logo文字 -->
            <image
                class="logo-image"
                src="@/static/logo.png"
            />
            <text class="logo-text">Persona 5 Royal</text>
        </view>
    </view>
</template>

<style scoped lang="scss">
// 红，黑，白为主色调，Persona 5的风格设计
.navbar {
    background-color: #ff0000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 100vw;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
    display: flex;
    align-items: center;
    margin: 5rpx 20rpx;
}

.logo-image {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    border: 2px solid #fff;
}

.logo-text {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.search {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    border-radius: 20px;
}

.icon-search,
.icon-scan {
    font-size: 24px;
    margin-left: 15px;
    cursor: pointer;
    color: #fff;
    transition: transform 0.2s;
}

.icon-search:hover,
.icon-scan:hover {
    transform: scale(1.2);
}
</style>

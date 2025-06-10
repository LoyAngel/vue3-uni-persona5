<script setup lang="ts">
import { ref } from 'vue'
import mySection from './components/mySection.vue'
import testCom from './components/testComponent.vue'
import { updatedContent, noProfitContent, otherContent } from '@/constants/my'

const onSupport = () => {
    uni.previewImage({
        urls: ["https://littlering.cn/persona5/static/my/no_profit_pic.jpg"],
    })
}
</script>

<template>
    <!-- 头部个人信息 -->
    <view class="header">
        <view class="avatar-container">
            <image
                class="avatar"
                src="http://littlering.cn/persona5/static/logo.png"
                mode="aspectFill"
            />
        </view>
        <text class="username">JOKER</text>
    </view>

    <!-- 更新日志部分 -->
    <my-section
        title="更新内容"
        :section_data_string="updatedContent"
        :scroll_view_height="350"
    >
    </my-section>

    <!-- 非盈利说明-->
    <my-section
        title="非盈利说明"
        :section_data_string="noProfitContent"
    >
        <template #extraHeader>
            <button
                class="ad-button"
                @click="onSupport"
                :style="`right: 0;`"
            >
                <text class="ad-icon">🐸</text>
                <text class="ad-text">打赏支持</text>
            </button>
        </template>
        <view class="button-group">
            <button
                class="action-button"
                openType="feedback"
            >
                <text class="button-text">🌸
                    有何建议欢迎反馈！Thanks♪(･ω･)ﾉ</text>
            </button>
        </view>
    </my-section>

    <!-- 其他信息部分 -->
    <my-section
        title="其他"
        :section_data_string="otherContent"
        :fontsize=24
    >
    </my-section>
</template>

<style>
page {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    background-color: #f5f5f5;
}
</style>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    gap: 10rpx;
    padding: 15rpx 20rpx;
    margin: 5rpx;
    align-items: center;
    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.05);

    .avatar-container {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        overflow: hidden;
        background-color: #f0f0f0;

        .avatar {
            width: 100%;
            height: 100%;
        }
    }

    .username {
        font-size: 1.1em;
        font-weight: 1000;
        color: #333;
    }
}

.ad-button {
    display: flex;
    align-items: center;
    background-color: #e8f5e9;
    border-radius: 32rpx;
    border: none;
    right: 0;

    .ad-icon {
        font-size: 28rpx;
        margin-right: 8rpx;
    }

    .ad-text {
        font-size: 24rpx;
        color: #2e7d32;
    }
}

.button-group {
    display: flex;
    margin-top: 20rpx;
    gap: 20rpx;

    .action-button {
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 16rpx;
        width: 500rpx;
        height: 100rpx;

        .button-text {
            font-size: 22rpx;
            color: #333;
        }
    }

    .action-button:active {
        background-color: #e0e0e0;
    }
}
</style>
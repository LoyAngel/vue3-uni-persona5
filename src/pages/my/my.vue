<script setup lang="ts">
import { ref } from 'vue'
import mySection from './components/mySection.vue'
import test from './components/test.vue'

const updatedData = ref(`当前版本：v0.2.2。
以下为更新日志:
2025.2.12 v0.2.2
1. 更新了persona图鉴部分数据（继承、出现地点、装备类型、翻译优化）；
2. 更新了十艘跳和街区指南。
2025.2.8 v0.2.1
小程序发布，包含攻略查询、persona图鉴查询等功能。`)
const toupdateData = ref(`1.更新装备、技能数据；
2.优化persona展示ui。`)
const otherContent = ref(`页面开发，数据整理，服务器维护都由本人独自完成，工作量较大，如果有发现疏忽不足的地方或者有功能界面建议，欢迎留言，感谢支持！ye(･ω･)ﾉ.
数据来源: 
https://wiki.biligame.com/persona
https://megamitensei.fandom.com/wiki/Persona_(Series)
https://github.com/chinhodado/persona5_calculator

本小程序仅供学习交流使用，不用于商业用途，如有侵权请联系删除。`)
const count = ref(0);
</script>

<template>
    <view class="page">
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
            :section_data_string="updatedData"
        >
            <template #extraHeader>
                <button
                    class="ad-button"
                    v-if="false"
                >
                    <text class="ad-icon">🐸</text>
                    <text class="ad-text">观看广告，激励我</text>
                </button>
            </template>
        </my-section>
        
        <!-- 下版本预告部分-->
        <my-section
            title="版本预告"
            :section_data_string="toupdateData"
        />

        <!-- 其他信息部分 -->
        <my-section
            title="其他"
            :section_data_string="otherContent"
            :fontsize=24
        >
            <view class="button-group" >
                <button class="action-button" openType="feedback">
                    <text class="button-text" >🌸 有何建议欢迎反馈！Thanks♪(･ω･)ﾉ</text>
                </button>
            </view>
        </my-section>
    </view>

    <test v-model:count="count" />
</template>

<style>
.page {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 32rpx;
}
</style>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    padding: 20rpx 30rpx;
    align-items: center;
    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.05);

    .avatar-container {
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
        overflow: hidden;
        background-color: #f0f0f0;

        .avatar {
            width: 100%;
            height: 100%;
        }
    }

    .username {
        font-size: 32rpx;
        font-weight: 500;
        color: #333;
    }
}

.ad-button {
    display: flex;
    align-items: center;
    background-color: #e8f5e9;
    padding: 12rpx 24rpx;
    border-radius: 32rpx;
    border: none;

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
    justify-content: center;
    margin-top: 30rpx;
    gap: 30rpx;

    .action-button {
        background-color: #f5f5f5;
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
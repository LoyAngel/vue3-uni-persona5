<script setup lang="ts">
import { ref } from 'vue'
import mySection from './components/mySection.vue'
import testCom from './components/testComponent.vue'

const updatedContent = ref(`当前版本：v0.2.3。
更新计划：
    1.更新装备、技能数据；
    2.优化persona展示ui。
更新日志:
  v0.2.3 2025.2.19
    1. 更新了coop中的对话、礼物选项，合并十艘跳到COOP对话中；
    2. 修复了部分数据错误；
    3. 修复了coop点击头像异常BUG。
  v0.2.2 2025.2.12
    1. 更新了persona图鉴部分数据（继承、出现地点、装备类型、翻译优化）；
    2. 更新了十艘跳和街区指南。
  v0.2.1 2025.2.8 
    小程序发布，包含攻略查询、persona图鉴查询等功能。`)
const noProfitContent = ref(`首先，在此声明，本小程序永远不会有任何任何商业盈利，即不会有任何广告，也不会有任何收费内容。
本小程序所有内容都来自于网络，我深知自己只是一个小小的搬运工，只是在尽自己微薄之力，将一些有用的信息整理出来，方便大家查阅。
如果有发现疏忽不足的地方或者有功能界面建议，欢迎留言，感谢支持！Thanks♪(･ω･)ﾉ`)
// 尽管如此，小程序的年审与服务器维护等费用还是需要一定程度的开销（DBQ我是讨口子TUT），即使一小包辣条捐赠的鼓励，也是对小程序极大的支持！
const otherContent = ref(`数据来源: 
https://wiki.biligame.com/persona
https://megamitensei.fandom.com/wiki/Persona_(Series)
https://github.com/chinhodado/persona5_calculator

本小程序仅供学习交流使用，不用于商业用途，如有侵权请联系删除。`)

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
                v-if = false
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

    <testCom />
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
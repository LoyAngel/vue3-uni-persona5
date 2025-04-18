<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import P5rBackground from '@/components/P5rBackground.vue';

interface Badge {
    text: string;
    color: string;
}

defineProps<{
    title: string;
    badges: Badge[];
    tabs: {
        [key: number]: string;
    };
    avatar?: string; // 添加可选的avatar属性
}>()

// 添加动画控制状态
const isLoaded = ref(false);
const selectedTabIndex = ref(0);
const showScrollHint = ref(false);
const tabsContainerRef = ref<HTMLElement | null>(null);

// 显示滑动提示，并设置自动消失
const showScrollTip = () => {
    showScrollHint.value = true;
    setTimeout(() => {
        showScrollHint.value = false;
    }, 2000);
};

// 模拟加载完成
onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
        // 初始加载完成后显示滑动提示
        showScrollTip();
    }, 300);
    nextTick(() => {
        const el = tabsContainerRef.value;
        showScrollHint.value = !!el && el.scrollWidth > el.clientWidth;
    });
});

const changeTab = (index: number) => {
    selectedTabIndex.value = index;
}
</script>

<template>
    <P5rBackground class="background">
        <view
            class="detail-container"
            :class="{ 'loaded': isLoaded }"
        >
            <view class="detail-card">
                <!-- 标题区域 -->
                <view class="card-header">
                    <!-- 头像区域 -->
                    <view
                        class="avatar-frame"
                        v-if="avatar"
                    >
                        <img
                            :src="avatar"
                            alt="Avatar"
                            class="avatar-image"
                        >
                    </view>
                    <view class="title-section">
                        <view class="detail-name">{{ title
                        }}</view>
                        <view
                            v-for="(badge, index) in badges"
                            :key="index"
                            class="badge-class"
                            :style="{ 'background-color': badge.color }"
                        >
                            <text>{{ badge.text }}</text>
                        </view>
                    </view>
                </view>

                <!-- 标签导航栏 -->
                <view
                    class="tabs-container"
                    ref="tabsContainerRef"
                >
                    <view
                        v-for="(tab, index2, index) in tabs"
                        :key="tab"
                        class="tab"
                        :class="{ 'active': selectedTabIndex === index, 'tab-divider': index !== Object.keys(tabs).length - 1 }"
                        @click="changeTab(index)"
                    >
                        {{ tab }}
                    </view>
                    <!-- 滑动提示 -->
                    <div
                        class="scroll-hint"
                        v-show="showScrollHint"
                    >
                        ← 滑动查看更多 →
                    </div>
                </view>

                <!-- 内容区域 -->
                <view class="tab-content">
                    <!-- 沟槽的小程序渲染，用第二个参数会污染name -->
                    <template
                        v-for="(tab, index2, index) in tabs"
                        :key="tab"
                    >
                        <view
                            v-if="selectedTabIndex === index"
                            class="animate-in"
                        >
                            <view class="info-title">{{ tab
                            }}</view>
                            <scroll-view
                                scroll-y
                                style="max-height: 650rpx;"
                            >
                                <slot
                                    :name="`tab-${index}`" />
                            </scroll-view>
                        </view>
                    </template>
                </view>
            </view>
        </view>
    </P5rBackground>
</template>

<style lang="scss" scoped>
// 动画关键帧
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(40rpx);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes glowShadow {
    0% {
        box-shadow: 0 0 10rpx rgba(255, 0, 0, 0.3);
    }

    50% {
        box-shadow: 0 0 30rpx rgba(255, 0, 0, 0.7);
    }

    100% {
        box-shadow: 0 0 10rpx rgba(255, 0, 0, 0.3);
    }
}

.background {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.detail-container {
    width: 90%;
    margin: 0 auto;
    transform: translateY(60rpx);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &.loaded {
        transform: translateY(0);
        opacity: 1;
    }
}

.detail-card {
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 32rpx;
    overflow: hidden;
    box-shadow: 0 20rpx 60rpx rgba(0, 0, 0, 0.5), 0 0 0 2rpx rgba(255, 0, 0, 0.2);
    animation: glowShadow 3s infinite;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 8rpx;
        background: linear-gradient(to right, #ff0000, #ff5050, #ff0000);
    }

    .card-header {
        padding: 48rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32rpx;
        background-color: rgba(30, 30, 30, 0.8);
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2rpx;
            background: linear-gradient(to right, transparent, rgba(255, 0, 0, 0.5), transparent);
        }

        .avatar-frame {
            width: 160rpx;
            height: 160rpx;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff0000, #cc0000);
            padding: 6rpx;
            box-shadow: 0 0 30rpx rgba(255, 0, 0, 0.6);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: -10%;
                left: -10%;
                width: 120%;
                height: 120%;
                background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.8), transparent);
                animation: rotate 3s linear infinite;
            }

            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            .avatar-image {
                width: 152rpx;
                height: 152rpx;
                border-radius: 50%;
                object-fit: cover;
                z-index: 2;
                border: 2rpx solid rgba(255, 255, 255, 0.3);
            }
        }

        .title-section {
            flex: 1;
            width: 100%;
            text-align: center;

            .detail-name {
                font-size: 1.75em;
                font-weight: bold;
                color: #ffffff;
                margin: 0 0 10rpx 0;
                text-shadow: 0 0 20rpx rgba(255, 0, 0, 0.7);
                white-space: pre-wrap;
            }

            .badge-class {
                display: inline-block;
                padding: 8rpx 20rpx;
                border-radius: 24rpx;
                margin: 0 10rpx;
                font-size: 0.875em;
                color: white;
                font-weight: bold;
            }
        }
    }

    .tabs-container {
        display: flex;
        background-color: rgba(20, 20, 20, 0.8);
        overflow-x: auto;
        scrollbar-width: none;
        position: relative;

        &::-webkit-scrollbar {
            display: none;
        }

        .scroll-hint {
            position: absolute;
            right: 16rpx;
            bottom: 10rpx;
            font-size: 0.75em;
            color: #fff;
            background: rgba(0, 0, 0, 0.7);
            padding: 6rpx 12rpx;
            border-radius: 8rpx;
            pointer-events: none;
            animation: fadeInOut 2s ease-in-out;
            z-index: 10;
        }

        .tab {
            padding: 32rpx 48rpx;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
            position: relative;
            transition: all 0.3s;
            white-space: nowrap;
            font-size: 1em;

            &.tab-divider {
                border-right: 2rpx solid rgba(255, 0, 0, 0.3);
            }

            &.active {
                color: #ff0000;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 10%;
                    width: 80%;
                    height: 6rpx;
                    background-color: #ff0000;
                    border-radius: 6rpx 6rpx 0 0;
                    animation: fadeIn 0.3s forwards;
                }
            }
        }
    }

    .tab-content {
        padding: 48rpx;
        min-height: 600rpx;

        .animate-in {
            animation: fadeIn 0.4s forwards;

            .info-title {
                font-size: 1.125em;
                color: #ff0000;
                margin-bottom: 32rpx;
                text-transform: uppercase;
                letter-spacing: 2rpx;
                font-weight: bold;
                border-bottom: 2rpx solid rgba(255, 0, 0, 0.3);
                padding-bottom: 16rpx;
            }
        }
    }
}
</style>

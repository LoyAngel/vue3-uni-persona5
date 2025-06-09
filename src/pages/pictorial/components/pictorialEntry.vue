<script setup lang="ts">
import type { ItemData, PersonaData, SkillData } from '@/types/data';
import { computed, ref } from 'vue';
import { SKILL_EXTRA_MAP } from '@/constants/skill';
import { ITEM_CATEGORY_MAP } from '@/constants/item';

const props = defineProps<{
    current_tab_type: string;
    data: PersonaData | SkillData | ItemData;
    img?: string;
}>();

// 图片加载状态
const imageLoading = ref(true);
const imageError = ref(false);

// 类型缩窄
const persona_data = computed(() => {
    return props.data as PersonaData;
});
const skill_data = computed(() => {
    return props.data as SkillData;
});
const item_data = computed(() => {
    return props.data as ItemData;
});

// skill的cost计算
const cost_show = computed(() => {
    if (skill_data.value?.cost)
        if (skill_data.value.cost > 100) return `${skill_data.value.cost / 100} SP`;
        else return `${skill_data.value.cost} HP`;
    else return '被动';
});

// 根据current_tab_type动态计算颜色
const show_color = computed(() => {
    if (props.current_tab_type === 'persona' || props.current_tab_type === 'item')
        return '#DC143C'; // Persona5经典红色
    else if (props.current_tab_type === 'skill')
        return (
            SKILL_EXTRA_MAP.find((item) => item.elem_name === skill_data.value?.c_element)?.color ||
            '#00BFFF'
        );
});

// 获取渐变背景色
const gradient_bg = computed(() => {
    const baseColor = show_color.value;
    const alpha = props.current_tab_type === 'persona' ? '0.15' : '0.12';
    return `linear-gradient(135deg, rgba(26, 26, 26, 0.95), ${baseColor}${alpha.replace('0.', '')})`;
});

// 图片加载处理
const handleImageLoad = () => {
    imageLoading.value = false;
};

const handleImageError = () => {
    imageLoading.value = false;
    imageError.value = true;
};

// 导航到详情页
const navigate = () => {
    if (props.current_tab_type === 'persona')
        uni.navigateTo({ url: `/pages/detail/personaDetail?persona_name=${props.data?.name}` });
    else if (props.current_tab_type === 'skill')
        uni.navigateTo({ url: `/pages/detail/skillDetail?skill_name=${props.data?.name}` });
    else if (props.current_tab_type === 'item')
        uni.navigateTo({ url: `/pages/detail/itemDetail?item_name=${props.data?.name}` });
};

// 获取技能图标
const getSkillIcon = (c_element: string | undefined) => {
    return SKILL_EXTRA_MAP.find((item) => item.elem_name === c_element)?.icon || '❓';
};

// 获取物品图标
const getItemIcon = (type: string | undefined) => {
    return ITEM_CATEGORY_MAP.find((item) => item.type_name === type)?.icon || '❓';
};
</script>

<template>
    <view
        class="entry-card"
        :class="[current_tab_type, { 'has-image': current_tab_type === 'persona' }]"
        @click="navigate()"
        :style="{
            background: gradient_bg,
            'border-left': `6rpx solid ${show_color}`,
            '--accent-color': show_color
        }"
    >
        <!-- Persona卡片内容 -->
        <template v-if="current_tab_type === 'persona'">
            <view class="entry-image-container">
                <!-- 加载状态 -->
                <view v-if="imageLoading" class="image-placeholder">
                    <view class="loading-spinner"></view>
                </view>
                <!-- 错误状态 -->
                <view v-else-if="imageError" class="image-error">
                    <text class="error-icon">?</text>
                </view>
                <!-- 正常图片 -->
                <image
                    v-else
                    :src="img"
                    mode="aspectFit"
                    @load="handleImageLoad"
                    @error="handleImageError"
                    class="persona-avatar"
                />
            </view>
            <view class="entry-info">
                <view class="entry-category" :style="{ color: show_color }">
                    {{ persona_data.arcana }}
                </view>
                <view class="entry-content">
                    <view class="entry-level-badge">
                        <text class="level-text">Lv.{{ persona_data.level }}</text>
                    </view>
                    <view class="entry-name">
                        {{ persona_data.c_name }}
                    </view>
                </view>
            </view>
            <view class="entry-arrow">
                <text class="arrow-icon">›</text>
            </view>
        </template>

        <!-- Skill卡片内容 -->
        <template v-else-if="current_tab_type === 'skill'">
            <view class="skill-icon">
                <text class="skill-symbol">{{ getSkillIcon(skill_data.c_element) }}</text>
            </view>
            <view class="entry-info">
                <view class="entry-name">{{ skill_data.c_name }}</view>
                <view class="entry-details">
                    <view class="entry-element" :style="{ color: show_color }">
                        {{ skill_data.c_element }}
                    </view>
                    <view class="entry-cost">{{ cost_show }}</view>
                </view>
            </view>
            <view class="entry-arrow">
                <text class="arrow-icon">›</text>
            </view>
        </template>

        <!-- Item卡片内容 -->
        <template v-else-if="current_tab_type === 'item'">
            <view class="item-icon">
                <text class="item-symbol">{{ getItemIcon(item_data.c_type) }}</text>
            </view>
            <view class="entry-info">
                <view class="entry-name">{{ item_data.c_name }}</view>
                <view class="entry-labels">
                    <view class="entry-type" :style="{ color: show_color }">
                        {{ item_data.c_type }}
                    </view>
                    <view class="entry-owner" :style="{ color: show_color }">
                        {{ item_data.owner || '未知' }}
                    </view>
                </view>
            </view>
            <view class="entry-arrow">
                <text class="arrow-icon">›</text>
            </view>
        </template>

        <!-- 悬停遮罩层 -->
        <view class="hover-overlay"></view>
    </view>
</template>

<style scoped lang="scss">
// Persona5 主题色彩系统
$p5-red: #dc143c;
$p5-red-dark: #b8001f;
$p5-black: #0d1117;
$p5-dark-gray: #1a1a1a;
$p5-medium-gray: #2d3748;
$p5-light-gray: #4a5568;
$p5-white: #ffffff;
$p5-gold: #ffd700;

// 功能色彩
$text-primary: #ffffff;
$text-secondary: #e2e8f0;
$text-muted: #a0adb8;
$bg-primary: rgba(26, 26, 26, 0.95);
$bg-secondary: rgba(45, 55, 72, 0.6);

// 阴影定义
$shadow-sm: 0 2rpx 8rpx rgba(0, 0, 0, 0.15);
$shadow-md: 0 8rpx 24rpx rgba(0, 0, 0, 0.25);
$shadow-lg: 0 16rpx 48rpx rgba(0, 0, 0, 0.35);
$shadow-accent: 0 8rpx 32rpx rgba(220, 20, 60, 0.3);

// 基础卡片样式
.entry-card {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 120rpx;
    flex-direction: row;
    align-items: center;
    margin: 12rpx 0;
    padding: 24rpx;
    border-radius: 20rpx;
    box-shadow: $shadow-sm;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    cursor: pointer;
    backdrop-filter: blur(10rpx);
    border: 1rpx solid rgba(255, 255, 255, 0.1);

    // 悬停遮罩层
    .hover-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05));
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    // 通用箭头图标
    .entry-arrow {
        margin-left: auto;
        padding-left: 20rpx;
        opacity: 0.6;
        transition: all 0.3s ease;

        .arrow-icon {
            font-size: 36rpx;
            color: var(--accent-color, $text-secondary);
            font-weight: bold;
        }
    }

    // 悬停效果
    &:hover {
        transform: translateY(-8rpx) scale(1.02);
        box-shadow: $shadow-lg;

        .hover-overlay {
            opacity: 1;
        }

        .entry-arrow {
            opacity: 1;
            transform: translateX(8rpx);
        }
    }

    &:active {
        transform: translateY(-4rpx) scale(1.01);
        transition: all 0.15s ease;
    }

    // Persona卡片特定样式
    &.persona {
        min-height: 140rpx;
        box-shadow: $shadow-accent;

        .entry-image-container {
            width: 100rpx;
            height: 100rpx;
            background: linear-gradient(135deg, $p5-black, $p5-medium-gray);
            border: 3rpx solid rgba(220, 20, 60, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 24rpx;
            position: relative;

            .persona-avatar {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .image-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .loading-spinner {
                    width: 40rpx;
                    height: 40rpx;
                    border: 4rpx solid rgba(220, 20, 60, 0.2);
                    border-top: 4rpx solid $p5-red;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
            }

            .image-error {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(220, 20, 60, 0.1);

                .error-icon {
                    font-size: 36rpx;
                    color: $p5-red;
                    font-weight: bold;
                }
            }
        }

        .entry-category {
            font-size: 24rpx;
            font-weight: 600;
            margin-bottom: 8rpx;
            text-transform: uppercase;
            letter-spacing: 1rpx;
            opacity: 0.9;
        }

        .entry-content {
            display: flex;
            flex-direction: column;
            gap: 8rpx;
        }

        .entry-level-badge {
            display: inline-flex;
            align-items: center;
            align-self: flex-start;
            padding: 6rpx 16rpx;
            background: linear-gradient(135deg, $p5-red, $p5-red-dark);
            border-radius: 20rpx;
            box-shadow: 0 4rpx 12rpx rgba(220, 20, 60, 0.3);

            .level-text {
                font-size: 24rpx;
                color: $text-primary;
                font-weight: 700;
                line-height: 1;
            }
        }

        &:hover {
            box-shadow: 0 20rpx 60rpx rgba(220, 20, 60, 0.4);
        }
    }

    // Skill卡片特定样式
    &.skill {
        .skill-icon {
            width: 80rpx;
            height: 80rpx;
            background: linear-gradient(135deg, rgba(0, 191, 255, 0.2), rgba(0, 191, 255, 0.1));
            border: 2rpx solid rgba(0, 191, 255, 0.3);
            border-radius: 16rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20rpx;

            .skill-symbol {
                font-size: 32rpx;
                color: var(--accent-color, #00bfff);
            }
        }

        .entry-element {
            font-size: 24rpx;
            font-weight: 600;
            padding: 8rpx 20rpx;
            border-radius: 24rpx;
            background: linear-gradient(135deg, rgba(0, 191, 255, 0.15), rgba(0, 191, 255, 0.05));
            border: 1rpx solid rgba(0, 191, 255, 0.2);
            letter-spacing: 0.5rpx;
        }

        .entry-details {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 16rpx;
            margin-top: 8rpx;

            .entry-cost {
                font-size: 22rpx;
                color: $text-secondary;
                font-weight: 500;
                padding: 6rpx 16rpx;
                border-radius: 16rpx;
                background: rgba(255, 255, 255, 0.1);
                border: 1rpx solid rgba(255, 255, 255, 0.1);
            }
        }

        &:hover {
            box-shadow: 0 12rpx 36rpx rgba(0, 191, 255, 0.25);
        }
    }

    // Item卡片特定样式
    &.item {
        .item-icon {
            width: 80rpx;
            height: 80rpx;
            background: linear-gradient(135deg, $p5-black, $p5-medium-gray);
            border: 3rpx solid rgba(220, 20, 60, 0.3);
            border-radius: 16rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20rpx;

            .item-symbol {
                font-size: 32rpx;
                color: $p5-gold;
            }
        }

        .entry-labels {
            display: flex;
            flex-direction: row;
            gap: 12rpx;
            margin-top: 8rpx;
            flex-wrap: wrap;

            .entry-type,
            .entry-owner {
                font-size: 24rpx;
                font-weight: 600;
                padding: 8rpx 20rpx;
                border-radius: 24rpx;
                background: linear-gradient(
                    135deg,
                    rgba(220, 20, 60, 0.15),
                    rgba(220, 20, 60, 0.05)
                );
                border: 1rpx solid rgba(220, 20, 60, 0.3);
                letter-spacing: 0.5rpx;
                align-self: flex-start;
            }
        }

        &:hover {
            box-shadow: 0 12rpx 36rpx rgba(220, 20, 60, 0.3);
        }
    }

    // 公共信息容器样式
    .entry-info {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        min-width: 0; // 防止文字溢出

        .entry-name {
            font-size: 32rpx;
            color: $text-primary;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 4rpx;
            text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);

            // 文字溢出处理
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>

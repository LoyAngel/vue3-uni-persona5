<script setup lang="ts">
import { ecolorStore } from '@/stores';
import { PersonaData, SkillData } from '@/types/data';
import { computed, ref } from 'vue';

const props = defineProps<{
    current_tab_type: string;
    data: PersonaData | SkillData;
    img?: string;
}>();

// 类型缩窄
const persona_data = computed(() => {
    return props.data as PersonaData;
});
const skill_data = computed(() => {
    return props.data as SkillData;
});

const cost_show = computed(() => {
    if(skill_data.value?.cost)
        if (skill_data.value.cost > 1000) return `${skill_data.value.cost / 1000} SP`
        else return  `${skill_data.value.cost} HP`
    else return "被动"
})

const navigate = () => {
    if(props.current_tab_type === "persona") uni.navigateTo({ url: `/pages/detail/personaDetail?persona_name=${props.data?.name}` });
    // 其他类型的导航也可以在这里添加
}
</script>

<template>
    <view
        class="entry-card"
        :class="current_tab_type"
        @click="navigate()"
    >
        <!-- Persona卡片内容 -->
        <template v-if="current_tab_type === 'persona'">
            <view class="entry-image-container">
                <image
                    :src="img"
                    mode="aspectFit"
                />
            </view>
            <view class="entry-info">
                <view class="entry-category">{{ persona_data.arcana }}</view>
                <view class="entry-label-box">
                    <view class="entry-level">Lv.{{ persona_data.level }}</view>
                    <view class="entry-name">{{ persona_data.c_name }}</view>
                </view>
            </view>
        </template>

        <!-- Skill卡片内容 -->
        <template v-else-if="current_tab_type === 'skill'">
            <view class="entry-info">
                <view class="entry-name">{{ skill_data.name }}</view>
                <view class="entry-details">
                    <view class="entry-element">{{ skill_data.element }}</view>
                    <view class="entry-cost">{{ cost_show }}</view>
                </view>
            </view>
        </template>
    </view>
</template>

<style scoped lang="scss">
// 提取的公共颜色变量
$persona-primary: #FF0000;
$persona-shadow: rgba(255, 0, 0, 0.5);

$skill-primary: #0066FF; 
$skill-shadow: rgba(0, 102, 255, 0.5);

$bg-color: #1a1a1a;
$text-color: #FFFFFF;
$text-secondary: #cccccc;

// 基础卡片样式
.entry-card {
    display: flex;
    width: 60vw;
    flex-direction: row;
    align-items: center;
    margin: 5rpx;
    padding: 20rpx;
    background: $bg-color;
    border-radius: 12rpx;
    transition: transform 0.3s ease;

    // Persona卡片特定样式
    &.persona {
        border-left: 8rpx solid $persona-primary;

        .entry-image-container {
            width: 100rpx;
            height: 100rpx;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8rpx;
            overflow: hidden;
            margin-right: 20rpx;
        }

        .entry-category {
            text-align: center;
            font-size: 24rpx;
            color: $persona-primary;
            margin-bottom: 8rpx;
            font-weight: bold;
        }

        &:hover {
            transform: translateY(-4rpx);
            box-shadow: 0 8rpx 16rpx $persona-shadow;
        }
    }

    // Skill卡片特定样式
    &.skill {
        border-left: 8rpx solid $skill-primary;

        .entry-element {
            font-size: 24rpx;
            color: $skill-primary;
            font-weight: bold;
            padding: 4rpx 16rpx;
            border-radius: 20rpx;
            background-color: rgba(0, 102, 255, 0.15);
        }

        &:hover {
            transform: translateY(-4rpx);
            box-shadow: 0 8rpx 16rpx $skill-shadow;
        }
    }

    // 公共信息容器样式
    .entry-info {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        .entry-label-box {
            display: flex;
            flex-direction: flex-start;
            justify-content: center;
            align-items: center;
        }

        .entry-name {
            flex: 1;
            text-align: center;
            font-size: 36rpx;
            color: $text-color;
            font-weight: bold;
            padding: 0 20rpx;
            margin-bottom: 10rpx;
        }

        .entry-level {
            text-align: center;
            font-size: 40rpx;
            color: $text-color;
            font-weight: bold;
        }

        .entry-details {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .entry-cost {
                font-size: 24rpx;
                color: $text-color;
                font-weight: bold;
                padding: 4rpx 16rpx;
                border-radius: 20rpx;
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
    }
}
</style>
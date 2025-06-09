<script setup lang="ts">
import { computed, ref } from 'vue';
import DetailContainer from './components/detailContainer.vue';
import type { SkillData } from '@/types/data';
import { pictorialStore } from '@/stores';
import { SKILL_EXTRA_MAP } from '@/constants/skill';
import type { ElemMapEntry } from '@/types/pictorial';

const props = defineProps<{
    skill_name: string; // 技能名称
}>();
const skill = ref<SkillData>(pictorialStore().skill_map[props.skill_name]);

const elementColor = computed<string>(() => {
    return (
        SKILL_EXTRA_MAP.find((entry: ElemMapEntry) => entry.elem_name === skill.value?.c_element)?.color ||
        '#FFFFFF'
    );
});

const skillCost = computed(() => {
    if (!skill.value?.cost) return '无消耗';
    return skill.value.cost > 100? `${skill.value.cost / 100} SP` : `${skill.value.cost}% HP`; 
})

// 准备组件数据
const tabs = {
    0: '技能效果',
    1: '可习得Personas',
    2: '获取方式'
};
const badges = [
    {
        text: skill.value?.c_element ? skill.value.c_element : skill.value.element,
        color: elementColor.value,
    },
    {
        text: skillCost.value,
        color: '#ff0000'
    }
];
</script>

<template>
    <DetailContainer :title="skill.c_name || ''" :badges="badges" :tabs="tabs">
        <!-- 效果选项卡 -->
        <template #tab-0>
            <view class="effect-card">
                <text class="effect-description">{{ skill.effect }}</text>
            </view>
        </template>

        <!-- 可习得Personas选项卡 -->
        <template #tab-1>
            <view class="personas-grid" v-if="Object.keys(skill.personas || {}).length > 0">
                <view
                    v-for="(level, persona, index) in skill.personas"
                    :key="persona"
                    class="persona-item"
                >
                    <view class="persona-details">
                        <view class="persona-name">{{ persona }}</view>
                        <view class="persona-level" v-if="level > 0">Lv.{{ level }}</view>
                        <view class="persona-level special" v-else>天生</view>
                    </view>
                </view>
            </view>
            <view class="empty-state" v-else>没有Persona可以习得此技能</view>
        </template>

        <!-- 获取方式选项卡 -->
        <template #tab-2>
            <view class="acquisition-methods">
                <view :class="['method-card', skill.unique ? 'special' : '']" v-if="skill.talk">
                    <view class="method-icon talk">对话</view>
                    <view class="method-details">
                        <view class="method-title">交涉获得</view>
                        <view class="method-value">
                            {{ skill.talkPersonas }}
                        </view>
                    </view>
                </view>

                <view :class="['method-card', skill.unique ? 'special' : '']" v-if="skill.fuse">
                    <view class="method-icon fuse">电刑</view>
                    <view class="method-details">
                        <view class="method-title">道具化获得</view>
                        <view class="method-value">
                            {{ Array.isArray(skill.fuse) ? skill.fuse.join(',') : skill.fuse }}
                        </view>
                    </view>
                </view>

                <view :class="['method-card', skill.unique ? 'special' : '']" v-if="skill.card">
                    <view class="method-icon card">其它</view>
                    <view class="method-details">
                        <view class="method-title">其它获得方式</view>
                        <view class="method-value">
                            {{ skill.card }}
                        </view>
                    </view>
                </view>

                <view
                    class="empty-state"
                    v-if="!skill.talk && !skill.fuse && !skill.card && !skill.unique"
                >
                    无特殊获取方式
                </view>
            </view>
        </template>
    </DetailContainer>
</template>

<style>
page {
    height: 100%;
    background-color: #000;
}
</style>

<style lang="scss" scoped>
// 效果选项卡
.effect-card {
    background-color: rgba(40, 40, 40, 0.6);
    border-radius: 24rpx;
    padding: 40rpx;
    margin-bottom: 48rpx;
    border-left: 6rpx solid #ff0000;

    .effect-description {
        color: #f0f0f0;
        font-size: 1em;
        line-height: 1.6;
        margin: 0;
    }
}

// Persona选项卡
.personas-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;

    .persona-item {
        background-color: rgba(40, 40, 40, 0.6);
        border-radius: 16rpx;
        padding: 15rpx;
        display: flex;
        align-items: center;
        height: 72rpx;

        .persona-details {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .persona-name {
                color: #ffffff;
                font-weight: 500;
                font-size: 0.85em;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 150rpx;
            }

            .persona-level {
                color: #cccccc;
                font-size: 0.8em;
                white-space: nowrap;

                &.special {
                    color: #ff0000;
                    font-weight: bold;
                }
            }
        }
    }
}

// 获取方式选项卡
.acquisition-methods {
    display: flex;
    flex-direction: column;
    gap: 32rpx;

    .method-card {
        background-color: rgba(40, 40, 40, 0.6);
        border-radius: 20rpx;
        padding: 32rpx;
        display: flex;
        gap: 32rpx;
        align-items: center;
        transition: transform 0.2s;

        &.special {
            background: linear-gradient(135deg, rgba(40, 40, 40, 0.6), rgba(80, 10, 10, 0.6));
            border: 2rpx solid rgba(255, 0, 0, 0.3);
        }

        .method-icon {
            width: 100rpx;
            height: 100rpx;
            border-radius: 20rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 0.875em;

            &.talk {
                background-color: #3498db;
            }

            &.fuse {
                background-color: #9b59b6;
            }

            &.card {
                background-color: #2ecc71;
            }
        }

        .method-details {
            flex: 1;

            .method-title {
                color: #ff0000;
                font-weight: 500;
                font-size: 1em;
                margin-bottom: 10rpx;
            }

            .method-value {
                color: #e0e0e0;
                font-size: 0.875em;
            }
        }
    }
}

.empty-state {
    text-align: center;
    color: #888;
    padding: 60rpx;
    background-color: rgba(40, 40, 40, 0.3);
    border-radius: 16rpx;
    font-style: italic;
    font-size: 1em;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
import DetailContainer from './components/detailContainer.vue';
import DetailCard from './components/detailCard.vue';
import type { SkillData } from '@/types/data';
import { pictorialStore } from '@/stores';
import { SKILL_EXTRA_MAP } from '@/constants/skill';
import type { ElemMapEntry } from '@/types/pictorial';
import { onLoad } from '@dcloudio/uni-app';

const props = defineProps<{
    skill_name: string; // 技能名称
}>();
const skill = ref<SkillData>(pictorialStore().skill_map[props.skill_name]);

const elementColor = computed<string>(() => {
    return (
        SKILL_EXTRA_MAP.find((entry: ElemMapEntry) => entry.elem_name === skill.value?.c_element)
            ?.color || '#FFFFFF'
    );
});

const skillCost = computed(() => {
    if (!skill.value?.cost) return '无消耗';
    return skill.value.cost > 100 ? `${skill.value.cost / 100} SP` : `${skill.value.cost}% HP`;
});

// 准备组件数据
const tabs = {
    0: '技能效果',
    1: '可习得Personas',
    2: '获取方式'
};
const badges = [
    {
        text: skill.value?.c_element ? skill.value.c_element : skill.value.element,
        color: elementColor.value
    },
    {
        text: skillCost.value,
        color: '#ff0000'
    }
];

// 导航函数
const navigateToPersona = (personaName: string) => {
    if (personaName) {
        uni.navigateTo({
            url: `/pages/detail/personaDetail?persona_name=${encodeURIComponent(personaName)}`
        });
    }
};

// 处理DetailCard的点击事件
const handleEntryClick = (
    entry: { label: string; value: string; clickable?: boolean },
    index: number
) => {
    if (entry.clickable && entry.value) {
        navigateToPersona(entry.value);
    }
};

// 为技能效果准备数据
const effectData = computed(() => [{ label: '技能效果', value: skill.value?.effect || '无描述' }]);

// 为获取方式准备数据
const acquisitionData = computed(() => {
    const methods = [];

    if (skill.value?.talk) {
        methods.push({
            title: '交涉获得',
            accent: '#3498db',
            data: [
                { label: '获取方式', value: '对话交涉' },
                {
                    label: '获取来源',
                    value: skill.value.talk || '未知',
                    clickable: !!skill.value.talk
                }
            ]
        });
    }

    if (skill.value?.fuse) {
        const source_data = Array.isArray(skill.value.fuse)
            ? skill.value.fuse.map((entry) => ({
                  label: '获取来源',
                  value: entry,
                  clickable: true
              }))
            : [
                  {
                      label: '获取来源',
                      value: skill.value.fuse,
                      clickable: true
                  }
              ];

        methods.push({
            title: '道具化获得',
            accent: '#9b59b6',
            data: [{ label: '获取方式', value: '电刑道具化' }, ...source_data]
        });
    }

    if (skill.value?.card) {
        methods.push({
            title: '其它获得方式',
            accent: '#2ecc71',
            data: [
                { label: '获取方式', value: '其它方式' },
                { label: '获取来源', value: skill.value.card }
            ]
        });
    }

    return methods;
});

onLoad(() => {
    if (!props.skill_name) uni.reLaunch({ url: '/pages/404/404' });
});
</script>

<template>
    <DetailContainer :title="skill.c_name || ''" :badges="badges" :tabs="tabs">
        <!-- 效果选项卡 -->
        <template #tab-0>
            <view class="effect-container">
                <DetailCard title="技能详情" :accent="elementColor" :data="effectData" />
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
                        <view
                            class="persona-name clickable-link"
                            @click="navigateToPersona(persona.toString())"
                        >
                            {{ persona }}
                        </view>
                        <view class="persona-level" v-if="level > 0">Lv.{{ level }}</view>
                        <view class="persona-level special" v-else>天生</view>
                    </view>
                </view>
            </view>
            <view class="empty-state" v-else>没有Persona可以习得此技能</view>
        </template>

        <!-- 获取方式选项卡 -->
        <template #tab-2>
            <view class="acquisition-container">
                <DetailCard
                    v-for="(method, index) in acquisitionData"
                    :key="index"
                    :title="method.title"
                    :accent="method.accent"
                    :data="method.data"
                    @entry-click="handleEntryClick"
                />
                <view class="empty-state" v-if="acquisitionData.length === 0">无特殊获取方式</view>
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
.effect-container {
    display: flex;
    flex-direction: column;
    gap: 30rpx;
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
.acquisition-container {
    display: flex;
    flex-direction: column;
    gap: 32rpx;
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

// 可点击链接样式
.clickable-link {
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #ff5050 !important;
        text-shadow: 0 0 8rpx rgba(255, 80, 80, 0.6);
        transform: scale(1.02);
    }

    &:active {
        color: #ff0000 !important;
        transform: scale(0.98);
    }
}
</style>

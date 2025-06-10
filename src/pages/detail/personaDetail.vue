<script setup lang="ts">
import { ref, computed } from 'vue';
import { pictorialStore } from '@/stores';
import { SKILL_ELEM_MAP, SKILL_INHERIT_MAP } from '@/constants/skill';
import type { PersonaData } from '@/types/data';
import DetailContainer from './components/detailContainer.vue';
import DetailCard from './components/detailCard.vue';
import { onLoad } from '@dcloudio/uni-app';

const props = defineProps<{
    persona_name: string;
}>();

const persona = ref<PersonaData>(pictorialStore().persona_map[props.persona_name]);

// 为DetailContainer组件准备数据
const badges = computed(() => [
    { text: persona.value.arcana, color: '#c0392b' },
    { text: `Lv.${persona.value.level}`, color: '#2c3e50' }
]);

const tabs = {
    0: '基本信息',
    1: '能力值',
    2: '属性克制',
    3: '技能列表',
    4: '技能继承'
};

const getStatLabel = (index: number) => {
    const labels = ['力量', '魔力', '耐力', '敏捷', '幸运'];
    return labels[index];
};

// 导航函数
const navigateToSkill = (skillName: string) => {
    console.log(skillName);
    if (skillName) {
        uni.navigateTo({
            url: `/pages/detail/skillDetail?skill_name=${skillName}`
        });
    }
};

const navigateToItem = (itemName: string) => {
    if (itemName) {
        uni.navigateTo({
            url: `/pages/detail/itemDetail?item_name=${encodeURIComponent(itemName)}`
        });
    }
};

// 处理DetailCard的点击事件
const handleItemClick = (
    entry: { label: string; value: string; clickable?: boolean },
    index: number
) => {
    if (entry.label === '普通' && persona.value.item) {
        if (persona.value.item_type === '技能卡') {
            navigateToSkill(persona.value.item);
        } else {
            navigateToItem(persona.value.item);
        }
    } else if (entry.label === '特殊' && persona.value.itemr) {
        if (persona.value.item_type === '技能卡') {
            navigateToSkill(persona.value.itemr);
        } else {
            navigateToItem(persona.value.itemr);
        }
    }
};
const handleTraitClick = () => {
    if (persona.value.trait) {
        uni.navigateTo({
            url: `/pages/detail/skillDetail?skill_name=${persona.value.trait}`
        });
    }
};

onLoad(() => {
    if (!props.persona_name) uni.reLaunch({ url: '/pages/404/404' });
});
</script>

<template>
    <DetailContainer
        :title="persona.name || '未知角色'"
        :badges="badges"
        :tabs="tabs"
        :avatar="persona.img_url"
    >
        <!-- 基本信息选项卡 -->
        <template #tab-0>
            <view class="basic-info-container">
                <DetailCard
                    title="特性信息"
                    :data="[
                        {
                            label: '特性',
                            value: persona.trait || '',
                            clickable: !!persona.trait,
                        },
                        ...(persona.area ? [{ label: '位置', value: persona.area }] : [])
                    ]"
                    @item-click="handleTraitClick"
                />

                <DetailCard
                    title="道具化"
                    :data="[
                        { label: '道具类型', value: persona.item_type || '' },
                        {
                            label: '普通',
                            value: persona.item || '',
                            clickable: !!persona.item
                        },
                        {
                            label: '特殊',
                            value: persona.itemr || '',
                            clickable: !!persona.itemr
                        }
                    ]"
                    @item-click="handleItemClick"
                />
            </view>
        </template>

        <!-- 能力值选项卡 -->
        <template #tab-1>
            <view class="stats-container">
                <view class="stat-bars">
                    <view
                        v-for="(stat, index) in persona.stats"
                        :key="index"
                        class="stat-bar-container"
                        :style="{ animationDelay: `${index * 0.15}s` }"
                    >
                        <view class="stat-icon" :class="`stat-icon-${index}`">
                            <text class="stat-symbol">{{ getStatLabel(index)[0] }}</text>
                        </view>
                        <text class="stat-label">{{ getStatLabel(index) }}</text>
                        <view class="stat-bar">
                            <view
                                class="stat-fill"
                                :style="{
                                    '--width': `${(stat / 70) * 100}%`,
                                    animationDelay: `${0.3 + index * 0.15}s`
                                }"
                            >
                                <view class="stat-glow" v-if="stat > 50"></view>
                            </view>
                            <text class="stat-value">
                                {{ stat }}
                                <span class="max-value">/70</span>
                            </text>
                        </view>
                    </view>
                </view>
            </view>
        </template>

        <!-- 属性克制选项卡 -->
        <template #tab-2>
            <view class="elemental-container">
                <view class="table-wrapper">
                    <view class="table-grid">
                        <view class="table-header elemental-grid">
                            <view
                                v-for="{ id, elem_name, color } in SKILL_ELEM_MAP"
                                :key="id"
                                class="elem-cell"
                                :style="{ color }"
                            >
                                {{ elem_name }}
                            </view>
                        </view>
                        <view class="table-row elemental-grid">
                            <view
                                v-for="(resistance, index) in persona.elems"
                                :key="index"
                                class="elem-cell result-cell"
                            >
                                {{ resistance }}
                            </view>
                        </view>
                    </view>
                </view>

                <view class="elemental-legend">
                    <view class="legend-item">
                        <text class="legend-symbol">弱</text>
                        <text class="legend-text">弱点 (造成额外伤害)</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">-</text>
                        <text class="legend-text">普通</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">耐</text>
                        <text class="legend-text">耐性 (减少伤害)</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">反</text>
                        <text class="legend-text">反射攻击</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">吸</text>
                        <text class="legend-text">吸收为HP</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">无</text>
                        <text class="legend-text">免疫</text>
                    </view>
                </view>
            </view>
        </template>

        <!-- 技能列表选项卡 -->
        <template #tab-3>
            <view class="skills-scroll">
                <view class="skills-grid">
                    <view v-for="(level, skill) in persona.skills" :key="skill" class="skill-row">
                        <text
                            class="skill-name clickable-link"
                            @click="navigateToSkill(skill.toString())"
                        >
                            {{ skill }}
                        </text>
                        <text class="skill-level">{{ level > 0 ? `Lv.${level}` : '天生' }}</text>
                    </view>
                </view>
            </view>
        </template>

        <!-- 技能继承选项卡 -->
        <template #tab-4>
            <view class="inherit-container">
                <view class="table-wrapper">
                    <view class="table-grid">
                        <view class="table-header inherit-grid">
                            <view
                                v-for="{ id, elem_name, color } in SKILL_INHERIT_MAP"
                                :key="id"
                                class="elem-cell"
                                :style="{ color }"
                            >
                                {{ elem_name }}
                            </view>
                        </view>
                        <view class="table-row inherit-grid">
                            <view
                                v-for="(is_inherit, index) in persona.inherit_elems"
                                :key="index"
                                class="elem-cell result-cell"
                            >
                                {{ is_inherit }}
                            </view>
                        </view>
                    </view>
                </view>

                <view class="inherit-legend">
                    <view class="legend-item">
                        <text class="legend-symbol">○</text>
                        <text class="legend-text">可继承</text>
                    </view>
                    <view class="legend-item">
                        <text class="legend-symbol">×</text>
                        <text class="legend-text">不可继承</text>
                    </view>
                </view>
            </view>
        </template>
    </DetailContainer>
</template>

<style lang="scss" scoped>
@keyframes slideIn {
    from {
        transform: translateX(-20rpx);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fillBar {
    from {
        width: 0;
    }

    to {
        width: var(--width, 0);
    }
}

@keyframes glowEffect {
    0% {
        left: -100%;
    }

    40% {
        left: 100%;
    }

    60% {
        left: 100%;
    }

    100% {
        left: -100%;
    }
}

// 基本信息样式
.basic-info-container {
    display: flex;
    flex-direction: column;
    gap: 30rpx;

    .persona-image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20rpx;

        .persona-image {
            width: 70%;
            max-width: 400rpx;
            height: auto;
            border-radius: 15rpx;
            border: 3rpx solid rgba(255, 0, 0, 0.7);
            box-shadow: 0 0 30rpx rgba(255, 0, 0, 0.4);
            transition: all 0.3s;

            &:hover {
                box-shadow: 0 0 40rpx rgba(255, 0, 0, 0.6);
            }
        }
    }
}

// 能力值样式

.stats-container {
    .stat-bars {
        display: flex;
        flex-direction: column;
        gap: 30rpx;
        padding: 10rpx;
    }

    .stat-bar-container {
        display: flex;
        align-items: center;
        gap: 20rpx;
        padding: 10rpx 15rpx;
        border-radius: 8rpx;
        background-color: rgba(30, 30, 30, 0.5);
        box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
        transform: translateX(-20rpx);
        opacity: 0;
        animation: slideIn 0.5s ease-out forwards;

        .stat-icon {
            width: 50rpx;
            height: 50rpx;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 10rpx rgba(255, 0, 0, 0.3);

            // 力量
            &-0 {
                background: linear-gradient(135deg, #ff5e3a, #ff2a68);
            }

            // 魔力
            &-1 {
                background: linear-gradient(135deg, #4158d0, #c850c0);
            }

            // 耐力
            &-2 {
                background: linear-gradient(135deg, #43e97b, #38f9d7);
            }

            // 敏捷
            &-3 {
                background: linear-gradient(135deg, #fa71cd, #c471f5);
            }

            // 幸运
            &-4 {
                background: linear-gradient(135deg, #ffd700, #ffaa00);
            }

            .stat-symbol {
                color: white;
                font-size: 24rpx;
                font-style: normal;
                font-weight: bold;
            }
        }

        .stat-label {
            width: 100rpx;
            color: #ffffff;
            font-size: 30rpx;
            font-weight: 500;
            text-shadow: 1rpx 1rpx 3rpx rgba(0, 0, 0, 0.7);
        }

        .stat-bar {
            flex: 1;
            height: 40rpx;
            background-color: rgba(20, 20, 20, 0.8);
            border-radius: 20rpx;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 1rpx 5rpx rgba(0, 0, 0, 0.5);

            .stat-fill {
                height: 100%;
                border-radius: 20rpx;
                background: linear-gradient(90deg, #ff0000, #ff5050);
                width: 0;
                box-shadow: 0 0 8rpx rgba(255, 0, 0, 0.5);
                animation: fillBar 1s ease forwards;
                position: relative;
                overflow: hidden;

                .stat-glow {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 40%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 215, 0, 0.4),
                        transparent
                    );
                    animation: glowEffect 8s infinite;
                }
            }

            .stat-value {
                position: absolute;
                right: 20rpx;
                top: 50%;
                transform: translateY(-50%);
                font-size: 28rpx;
                color: #ffffff;
                text-shadow: 1rpx 1rpx 5rpx rgba(0, 0, 0, 0.8);
                font-weight: bold;

                .max-value {
                    opacity: 0.5;
                    font-size: 24rpx;
                    font-weight: normal;
                }
            }
        }
    }
}

// 属性克制与技能继承表公共样式
.table-wrapper {
    overflow-x: hidden;
    margin-bottom: 30rpx;

    .table-grid {
        width: 100%;
        border-radius: 10rpx;
        overflow: hidden;
        border: 1rpx solid rgba(255, 0, 0, 0.3);

        .table-header,
        .table-row {
            display: grid;
            color: white;
        }

        .table-header {
            background-color: rgba(40, 40, 40, 0.8);
        }

        .elemental-grid {
            grid-template-columns: repeat(10, 1fr);
        }

        .inherit-grid {
            grid-template-columns: repeat(12, 1fr);
        }

        .elem-cell {
            padding: 15rpx 10rpx;
            text-align: center;
            font-weight: bold;
            font-size: 24rpx;
        }

        .result-cell {
            background-color: rgba(30, 30, 30, 0.6);
            border-top: 1rpx solid rgba(255, 255, 255, 0.1);
            font-size: 26rpx;
        }
    }
}

// 属性的图例样式
.elemental-legend,
.inherit-legend {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
    margin-top: 30rpx;

    .legend-item {
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: 10rpx;

        .legend-symbol {
            color: #ff0000;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .legend-text {
            color: #cccccc;
            font-size: 0.8rem;
        }
    }
}

// 技能列表样式
.skills-scroll {
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20rpx;
        max-height: 400rpx;

        .skill-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15rpx 20rpx;
            background-color: rgba(40, 40, 40, 0.6);
            border-radius: 10rpx;
            border-left: 3rpx solid #ff0000;
            transition: all 0.2s;

            &:hover {
                background-color: rgba(60, 60, 60, 0.6);
            }

            .skill-name {
                flex: 3;
                color: #ffffff;
                font-size: 26rpx;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .skill-level {
                flex: 1;
                color: #ff0000;
                font-size: 24rpx;
                background-color: rgba(0, 0, 0, 0.3);
                padding: 5rpx 15rpx;
                border-radius: 20rpx;
            }
        }
    }
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

<template>
    <P5rBackground>
        <view class="persona-card">
            <!-- Header Section -->
            <view class="header-section">
                <view class="header-left">
                    <view class="name-group">
                        <text class="persona-c-name">{{
                            persona.c_name }}</text>
                        <text class="persona-name">（{{
                            persona.name }}）</text>
                    </view>
                    <view class="level-arcana-group">
                        <text class="persona-level">Lv. {{
                            persona.level }}</text>
                        <text class="persona-arcana">[{{
                            persona.arcana }}]</text>
                    </view>
                    <view class="trait-group">
                        <text class="trait-label">特性:</text>
                        <text class="trait-value">{{
                            persona.trait }}</text>
                    </view>
                </view>
                <view class="header-right">
                    <!-- Placeholder for persona image -->
                    <image
                        class="persona-image"
                        :src="persona.img_url"
                        mode="widthFix"
                    />
                </view>
            </view>

            <!-- Stats Section -->
            <view class="stats-section">
                <view class="section-title">能力值
                    (stats)</view>
                <view class="stat-bars">
                    <view
                        v-for="(stat, index) in persona.stats"
                        :key="index"
                        class="stat-bar-container"
                    >
                        <text class="stat-label">{{
                            getStatLabel(index) }}：</text>
                        <view class="stat-bar">
                            <view
                                class="stat-fill"
                                :style="{ width: `${(stat / 70) * 100}%` }"
                            ></view>
                            <text class="stat-value">{{ stat
                                }}/70</text>
                        </view>
                    </view>
                </view>
            </view>

            <!-- Items Section -->
            <view class="items-section">
                <view class="section-title">道具化</view>
                <view class="items-content">
                    <view class="item-row">
                        <text class="item-label">普通:</text>
                        <text class="item-value">{{
                            persona.item }}</text>
                    </view>
                    <view class="item-row">
                        <text class="item-label">特殊:</text>
                        <text class="item-value">{{
                            persona.itemr }}</text>
                    </view>
                </view>
            </view>

            <!-- Elemental Table -->
            <view class="elemental-table">
                <view class="section-title">属性克制表</view>
                <view class="table-grid">
                    <view class="table-header">
                        <view
                            v-for="(color, elem) in elementTypes"
                            :key="elem"
                            class="elem-cell"
                            :style="{ color: color }"
                        >
                            {{ elem }}
                        </view>
                    </view>
                    <view class="table-row">
                        <view
                            v-for="(resistance, index) in persona.elems"
                            :key="index"
                            class="elem-cell"
                        >
                            {{ resistance }}
                        </view>
                    </view>
                </view>
            </view>

            <!-- Skills Table -->
            <view class="skills-table">
                <view class="section-title">技能表</view>
                <view class="skills-grid">
                    <view
                        v-for="(level, skill) in persona.skills"
                        :key="skill"
                        class="skill-row"
                    >
                        <text class="skill-name">{{ skill
                            }}</text>
                        <text class="skill-level">{{ level >
                            0 ? `Lv.${level}` : '天生'
                            }}</text>
                    </view>
                </view>
            </view>
        </view>
    </P5rBackground>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { personaStore } from '@/stores'
import { PersonaData } from '@/types/data'

const props = defineProps<{
    persona_name: string
}>()

//   const persona = ref<PersonaData>(personaStore().persona_map[props.persona_name])
const persona = ref({
    "inherits": "Curse",
    "item": "百万吨腰带",
    "itemr": "神手腰带",
    "level": 75,
    "arcana": "审判",
    "elems": ["吸", "吸", "-", "-", "-", "-", "-", "-", "耐", "吸"],
    "skills": {
        "玛哈布芙达因": 0,
        "百万吨袭击": 0,
        "不屈斗志": 0,
        "闪光炸弹": 78,
        "异常状态成功率UP": 79,
        "物理吸收": 80,
        "巨人之战": 81
    },
    "stats": [51, 42, 58, 38, 43],
    "trait": "Mouth of Savoring",
    "name": "Abaddon",
    "c_name": "阿巴顿",
    "img_url": "https://patchwiki.biligame.com/images/persona/thumb/6/6b/i2cg4qrtyst7ahmep0l200tfhhvi9bv.png/60px-P5R_%E9%98%BF%E5%B7%B4%E9%A1%BF%E5%A4%B4%E5%83%8F.png"
})
// const elementTypes = ['物', '枪', '火', '冰', '电', '风', '念', '核', '祝', '咒']
const elementTypes = {
    '物': '#EF9710',
    '枪': '#EF9710',
    '火': '#ED1F21',
    '冰': '#1E90FF',
    '电': '#FFD700',
    '风': '#00FF7F',
    '念': '#FF69B4',
    '核': '#3CE2DA',
    '祝': '#F4F7AF',
    '咒': '#E3002F',
}

const getStatLabel = (index: number) => {
    const labels = ['力量', '魔力', '耐力', '敏捷', '幸运']
    return labels[index]
}
</script>

<style>
page {
    display: flex;
    justify-content: center;
    background-color: #000;
}
</style>

<style lang="scss" scoped>
.persona-card {
    padding: 40rpx;
    color: #ffffff;
    gap: 40rpx;
    display: flex;
    flex-direction: column;
    background-color: #111; // 更深色调
}

.header-section {
    display: flex;
    justify-content: space-between;

    .header-left {
        display: flex;
        flex-direction: column;
        justify-items: center;
        /* Align items to the bottom */
        width: 50vw;
        height: 15vh;
        gap: 8rpx;

        .name-group {
            align-items: end;
            gap: 8rpx;

            .persona-c-name {
                font-size: 24px;
                font-weight: bold;
                color: #ff0000;
                text-align: center;
                animation: blink 4s infinite linear;
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.3;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }

            .persona-name {
                font-size: 16px;
                color: #cccccc;
                text-align: center;
            }
        }

        .level-arcana-group {
            gap: 8px;

            .persona-level {
                font-size: 20px;
                color: #ffffff;
            }

            .persona-arcana {
                font-size: 16px;
                color: #cccccc;
            }
        }

        .trait-group {
            flex: 1;
            gap: 8px;

            .trait-label {
                font-size: 16px;
                color: #cccccc;
            }

            .trait-value {
                font-size: 16px;
                color: #ffffff;
            }
        }
    }

    .header-right {
        border-radius: 8px;
        border: 2px solid #ff0000;
        box-shadow: 0 4px 8px rgba(204, 89, 89, 0.848);
        background: linear-gradient(145deg, #d54242, #880303);
        .persona-image {
            width: 30vw;
            border-radius: 8px;
        }
    }
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10rpx;
    color: #c0392b; // 红色标题
}

.stats-section {
    .stat-bars {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .stat-bar-container {
        display: flex;
        align-items: end;
        gap: 12px;
        height: 45rpx;

        .stat-label {
            width: 60px;
            color: #cccccc;
        }

        .stat-bar {
            flex: 1;
            height: 100%;
            background-color: #3a3a3a;
            border-radius: 4px;
            position: relative;
            overflow: hidden;

            .stat-fill {
                height: 100%;
                background-color: #4a90e2;
                transition: width 0.3s ease;
                background-color: #c0392b; // 进度条使用红色
            }

            .stat-value {
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
                color: #ffffff;
            }
        }
    }
}

.items-section {
    .items-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .item-row {
        display: flex;
        gap: 12px;

        .item-label {
            width: 60px;
            color: #cccccc;
        }

        .item-value {
            color: #ffffff;
        }
    }
}

.elemental-table {
    .table-grid {
        border: 1px solid #3a3a3a;
        border-radius: 4px;
    }

    .table-header,
    .table-row {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }

    .elem-cell {
        padding: 8px;
        text-align: center;
        border: 1px solid #3a3a3a;
    }
}

.skills-table {
    .skills-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    .skill-row {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        background-color: #3a3a3a;
        border-radius: 4px;
        background-color: #1a1a1a; // 略深背景
        border: 1px solid #c0392b;

        .skill-name {
            color: #ffffff;
        }

        .skill-level {
            color: #cccccc;
        }
    }
}
</style>
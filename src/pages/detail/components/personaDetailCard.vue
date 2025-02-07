<template>
    <view class="persona-card">
        <view class="left-section">
            <text class="persona-c-name">{{ persona.c_name
                }}</text>
            <text class="persona-name">{{ persona.name
                }}</text>
            <text class="persona-level">Lv. {{ persona.level
                }}</text>
            <text class="persona-arcana">{{ persona.arcana
                }}</text>
        </view>
        <view class="center-section">
            <view class="chart_box">
                <!-- 使用 qiun-data-charts 组件替代 canvas -->
                <qiun-data-charts
                    type="radar"
                    :chartData="chartData"
                    :opts="chartOpts"
                ></qiun-data-charts>
            </view>
            <view class="elemental-resistances">
                <view
                    v-for="(elem, index) in persona.elems"
                    :key="index"
                    class="resistance-icon"
                >
                    {{ getResistanceIcon(elem) }}
                </view>
            </view>
        </view>
        <view class="right-section">
            <view
                v-for="(level, skill) in persona.skills"
                :key="skill"
                class="skill-item"
            >
                <text class="skill-name">{{ skill }}</text>
                <text
                    class="skill-level"
                    v-if="level > 0"
                >Lv. {{ level }}</text>
            </view>
        </view>
        <view class="bottom-section">
            <view
                v-for="(stat, index) in persona.stats"
                :key="index"
                class="stat-bar"
            >
                <view
                    class="stat-fill"
                    :style="{ width: `${stat / 99 * 100}%` }"
                ></view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
    persona: {
        type: Object,
        required: true
    }
})

const chartData = ref({})

const getChartData = () => {
    setTimeout(() => {
        chartData.value = {
            categories: ['力量', '魔力', '耐力', '速度', '运气'],
            series: [{
                name: 'Stats',
                data: props.persona.stats
            }],
        }
    }, 500);
}
const chartOpts = ref({
    color: ["#ff1111"],
    padding: [5, 5, 5, 5],
    dataLabel: true,
    enableScroll: false,
    legend: {
        show: true,
        position: 'top',
        lineHeight: 25
    },
    extra: {
        radar: {
            gridType: 'radar',
            gridColor: '#CCCCCC',
            gridCount: 4,
            opacity: 0.2,
            max: 100,
            labelShow: true,
            labelColor: '#ffffff',
            border: true
        }
    }
})
onMounted(() => {
    getChartData()
})

const getResistanceIcon = (resistance: string) => {
    const icons: { [key: string]: string } = {
        '吸': '↑',
        '耐': '○',
        '-': '—',
        '弱': '↓'
    };
    return icons[resistance] || resistance;
}
</script>

<style scoped lang="scss">
.persona-card {
    background-color: #0a0a0a;
    color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .left-section,
    .center-section,
    .right-section {
        display: flex;
        flex-direction: column;
    }

    .left-section {
        .persona-name {
            font-size: 18px;
            color: #cccccc;
        }

        .persona-c-name {
            font-size: 24px;
            font-weight: bold;
            color: #ff0000;
            animation: pulse 2s infinite;

        }

        .persona-level,
        .persona-arcana {
            font-size: 16px;
            color: #ffffff;
        }
    }

    .center-section {
        .chart_box {
            width: 80%;
            height: 400rpx;
        }

        .elemental-resistances {
            display: flex;
            justify-content: space-around;
            margin-top: 10px;

            .resistance-icon {
                font-size: 20px;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #ff0000;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }
        }
    }

    .right-section {
        .skill-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;

            .skill-name {
                color: #ff0000;
            }

            .skill-level {
                color: #cccccc;
            }
        }
    }

    .bottom-section {
        display: flex;
        justify-content: space-between;

        .stat-bar {
            width: 18%;
            height: 10px;
            background-color: #333333;
            border-radius: 5px;
            overflow: hidden;

            .stat-fill {
                height: 100%;
                background-color: #ff0000;
                transition: width 0.3s ease-in-out;
            }
        }
    }

    /* Add micro-animations */
    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
}
</style>

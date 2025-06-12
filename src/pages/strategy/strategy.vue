<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getStrategyMainDataAPI } from '@/services/strategy';
import type { StrategyMainData } from '@/types/strategy';
import strategyTabBar from './components/strategyTabBar.vue';
import strategyContent from './components/strategyContent.vue';

// 定义组件接收的参数
const props = defineProps<{
    type: string;
}>();
console.log(props.type);

// 标记当前选中的标签索引
const navIndex = ref(0);
// 标签栏数据
const tabBars = ref<StrategyMainData[]>([]);
// 检查数据接收, 用来防止数据未加载完成时渲染
const valueRecord = ref(false);

// 检查索引
function checkIndex(index: number): void {
    navIndex.value = index;
}

// 获取主要数据
const getStrategyMainData = async () => {
    const res = await getStrategyMainDataAPI(props.type);
    tabBars.value = res.result;
    valueRecord.value = true;
}

onLoad(async () => {
    await getStrategyMainData();
})
</script>

<template>
    <!--自定义标签栏组件-->
    <strategyTabBar
        :navIndex="navIndex"
        :tabBars="tabBars"
        @checkIndex="checkIndex"
        class="tab-bar"
    />

    <P5rBackground class="background-animation">
        <!--自定义内容组件-->
        <view v-if="valueRecord">
            <strategy-content
                :navIndex="navIndex"
                :tabBars="tabBars"
            />
        </view>
    </P5rBackground>
</template>

<style>
page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    position: relative;
}

</style>

<style scoped>
/* 固定标签栏 */
.tab-bar {
    width: 100%;
}

.background-animation {
    flex: 1;
}

/* 穿透样式，使内部组件不居中排版 */
.background-animation :deep(.mainbox) {
    justify-content: flex-start;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import strategyTabbar from './components/strategyTabbar.vue';
import strategyContent from './components/strategyContent.vue';
import { StrategyMainData } from '@/types/strategy';
import { getStrategyMainDataAPI } from '@/services/strategy';

// 标记当前选中的标签索引
const navIndex = ref(0);
// 标记详情是否折叠
const collapseRecord = ref<boolean[]>([]);
// 标签栏数据
const tabBars = ref<StrategyMainData[]>([]);
// 检查数据接收, 用来防止数据未加载完成时渲染
const valueRecord = ref(false);

function checkIndex(index: number): void {
    navIndex.value = index;
    collapseRecord.value.fill(false);
    collapseRecord.value[index] = true;
}

const getStrategyMainData = async () => {
    const res = await getStrategyMainDataAPI();
    tabBars.value = res.result;
    collapseRecord.value = tabBars.value.map(() => false);
    collapseRecord.value[navIndex.value] = true;

    valueRecord.value = true;
}
onLoad(async () => {
    await getStrategyMainData();
})
</script>

<template>
    <!--自定义标签栏组件-->
    <strategyTabbar
        :navIndex="navIndex"
        :tabBars="tabBars"
        @checkIndex="checkIndex"
    />

    <P5rBackground class="background-animation">
        <!--自定义内容组件-->
        <view v-if="valueRecord">
        <strategyContent
            :navIndex="navIndex"
            :tabBars="tabBars"
            :collapseRecord="collapseRecord"
        /></view>
    </P5rBackground>
</template>

<style>
page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
}
</style>

<style scoped>
.background-animation {
    flex: 1;
}

.background-animation :deep(.mainbox) {
    justify-content: flex-start;
}
</style>
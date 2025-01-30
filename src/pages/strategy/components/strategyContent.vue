<template>
    <view class="content">
        <img
            :src="tabBars[navIndex].image"
            alt="Tab Image"
            class="tab-image"
        />
        <uni-collapse
            class="collapsible"
            v-for="(tabBar, index) in tabBars"
            :key="index"
            @change="handleChange"
        >
            <uni-collapse-item
                v-for="item in tabBar.content"
                v-show="collapseRecord[index]"
                :key="item.type"
                :name="item.type"
                :title="item.title"
                class="collapsible-item"
            >
                <view class="collapsible-content">
                    {{ item.text }}
                </view>
                <strategy-table
                    v-if="isActive(item.type)"
                    :tableText="item.table"
                />
            </uni-collapse-item>
        </uni-collapse>
    </view>
</template>

<script lang='ts'>
export default {
    options: {
        styleIsolation: 'shared', // 解除样式隔离
    }
}
</script>

<script setup lang="ts">
import strategyTable from './strategyTable.vue';
import { StrategyMainData } from '@/types/strategy';
import { defineProps, ref } from 'vue';
const props = defineProps<{
    navIndex: number;
    tabBars: StrategyMainData[];
    collapseRecord: boolean[];
}>();

const activeTableNames = ref<string[]>([]); // 当前展开的table面板

// 方法：判断面板是否展开
const isActive = (name: string) => {
  return activeTableNames.value.includes(name);
};

// 事件：面板切换时触发
const handleChange = (names: string[]) => {
  activeTableNames.value = Array.from(new Set([...activeTableNames.value, ...names]));
  console.log('当前展开的面板：', names);
};
</script>


<style scoped lang="scss">
.content {
    width: 100vw;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tab-image {
    max-width: 100%;
    height: 30vh;
    color: #ff0000;
    flex: 1 0 auto;
    background-color: #000000;
    border: 2px solid #ff0000;
}

.collapsible {
    width: 100%;

    .collapsible-item {
        background-color: #000000;

        :deep(.uni-collapse-item__title-box) {
            background-color: #000000;
            color: #ff1111;
        }

        :deep(.uni-collapse-item__wrap) {
            background-color: #000000;
        }

        :deep(.uni-collapse-item__title.uni-collapse-item-border) {
            border-bottom: #ff1111 1px solid;
        }

        :deep(.uni-collapse-item__wrap-content.uni-collapse-item--border) {
            border-bottom: none;
        }
    }
}

.collapsible-content {
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff0000;
    white-space: pre-wrap;
}
</style>
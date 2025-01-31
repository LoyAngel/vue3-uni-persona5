<template>
    <view class="content">
        <img
            :src="tabBars[navIndex].image"
            alt="Tab Image"
            class="main-image"
        />
        <uni-collapse
            class="collapsible"
            v-for="(tabBar, index) in tabBars"
            :key="index"
            @change="handleChange"
        >
            <uni-collapse-item
                v-for="item in tabBar.content"
                v-show="index == navIndex"
                :key="item.type"
                :name="item.type"
                class="collapsible-item"
            >
                <template v-slot:title>
                    <view class="title-box">
                        <image
                            v-if="item.image"
                            :src="item.image"
                            class="title-image"
                            mode="aspectFit"
                        />
                        <view class="title-content">{{ item.title }}</view>
                    </view>
                </template>
                <view
                    class="collapsible-text"
                    v-show="item.text"
                >
                    {{ item.text }}
                </view>
                <strategy-table
                    v-if="isActive(item.type) && item.table"
                    :tableText="item.table"
                    class="collapsible-table"
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
}>();

// 当前展开的table面板
const activeTableNames = ref<string[]>([]);
// 方法：判断面板是否展开
const isActive = (name: string) => {
    return activeTableNames.value.includes(name);
};
// 事件：面板切换时触发
const handleChange = (names: string[]) => {
    activeTableNames.value = Array.from(new Set([...activeTableNames.value, ...names]));
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

.main-image {
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

        :deep(.uni-collapse-item__wrap) {
            background-color: #000000;
        }

        :deep(.uni-collapse-item__title.uni-collapse-item-border) {
            border-bottom: #ff1111 1px solid;
        }

        :deep(.uni-collapse-item__wrap-content.uni-collapse-item--border) {
            border-bottom: #ff1111 1px solid;
        }
 }
}

.collapsible-text {
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff0000;
    white-space: pre-wrap;
}

.collapsible-table {
    padding: 10rpx;
}

// title样式
.title-box {
    height: 7vh;
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: flex-start; /* 水平左对齐 */
  background-color: #000; /* 背景颜色为黑色 */
}

.title-image {
  width: 13vw; /* 图片宽度为屏幕宽度的 10% */
  max-width: 6vh;
  padding: 25rpx;
}

.title-content {
  color: #ff0000; /* 标题文字颜色为红色 */
  font-weight: bold; /* 加粗文字 */
  font-size: 1rem; /* 设置文字大小 */
  margin: auto;
}
</style>
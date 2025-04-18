<script lang='ts'>
export default {
    options: {
        styleIsolation: 'shared', // 解除样式隔离
    }
}
</script>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    tableText: string;
}>();
// 解析表头数据
const fieldData = props.tableText
    .trim()
    .split('\n')[0]
    .split('\t');
// 解析表体数据
const tableData = props.tableText
    .trim()
    .split('\n')
    .slice(1)
    .map((line) => {
        const obj:Record<string, string> = {};
        line.split('\t').forEach((item, index) => {
            obj[fieldData[index]] = item.replaceAll('\\seq', '\n');
        });
        return obj;
    });
</script>

<template>
    <view class="container">
        <uni-table stripe>
            <!-- 表头列循环 -->
            <uni-tr>
                <uni-th
                    v-for="(header, index) in fieldData"
                    :key="index"
                    width="20"
                    align="center"
                >{{ header }}</uni-th>
            </uni-tr>
            <!-- 表体数据循环 -->
            <uni-tr
                v-for="(item, index) in tableData"
                :key="index"
            >
                <uni-td
                    v-for="(value, key) in item"
                    :key="key"
                    align="center"
                    class="table-td"
                >{{ value }}</uni-td>
            </uni-tr>
        </uni-table>
    </view>
</template>

<style scoped lang="scss">
.container {
    width: 95%;
    margin: 0 auto;
    white-space: pre-wrap;

    :deep(.uni-table) {
        background-color: #000; // 修改背景色为黑色
        border-radius: 10px; // 改圆角

        // 改表头字体样式
        .uni-table-th,
        .uni-table-th-content {
            color: #ff0000; // 修改字体颜色为红色
            font-size: 26rpx;
            font-weight: bold; // 加粗字体
        }

        // 改表内容字体样式
        .uni-table-td {
            color: #ffffff; // 修改字体颜色为白色
            font-size: 24rpx;
        }

        // 改分割线
        .uni-table-th,
        .uni-table-td {
            border-bottom: 1px solid #ff0000; // 修改分割线颜色为红色
            border-top: 1px solid #ff0000; // 修改分割线颜色为红色
            // border-left: 1px solid #fff; 
            // border-right: 1px solid #fff;
        }


    }
}
</style>

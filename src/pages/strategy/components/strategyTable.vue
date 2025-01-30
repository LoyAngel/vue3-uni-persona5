<template>
    <view class="container">
        <uni-table stripe>
            <uni-tr>
                <uni-th
                    width="15"
                    align="center"
                >RANK</uni-th>
                <uni-th
                    width="25"
                    align="center"
                >解锁技能名称</uni-th>
                <uni-th
                    width="60"
                    align="center"
                >简介</uni-th>
            </uni-tr>
            <uni-tr
                v-for="(item, index) in tableData"
                :key="index"
            >
                <uni-td align="center">{{ item.rank
                    }}</uni-td>
                <uni-td align="center">{{ item.skill
                    }}</uni-td>
                <uni-td align="center">{{ item.description
                    }}</uni-td>
            </uni-tr>
        </uni-table>
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
import { defineProps } from 'vue';

const props = defineProps<{
    tableText: string;
}>();

const tableData = props.tableText
    .trim()
    .split('\n')
    .slice(1)
    .map((line) => {
        const [rank, skill, description] = line.split('\t');
        return { rank, skill, description };
    });
</script>

<style scoped lang="scss">
.container {
    width: 95%;
    margin: 10rpx auto;

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
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;

        }


    }
}
</style>

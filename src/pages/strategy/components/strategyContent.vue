<template>
    <view class="content">
        <img
            :src="tabBars[navIndex].image"
            alt="Tab Image"
            class="tab-image"
        />
        <uni-collapse class="collapsible">
            <uni-collapse-item
                :title="tabBars[navIndex].name"
                :isCollapsed="isCollapsed"
                @click="$emit('toggleCollapse')"
                class="collapsible-item"
            >
                <view class="collapsible-content">
                    {{ tabBars[navIndex].details }}
                </view>
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
import { defineProps } from 'vue';
interface TabBarItem {
    name: string;
    id: string;
    image: string;
    details: string;
}
const props = defineProps<{
    navIndex: number;
    tabBars: TabBarItem[];
    isCollapsed: boolean;
}>();
</script>


<style scoped lang="scss">
.content {
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
        :deep(.uni-collapse-item__title-box){
            background-color: #000000;
            color: #ff1111;
        }
        :deep(.uni-collapse-item__wrap){
            background-color: #000000;
        }
        :deep(.uni-collapse-item__title.uni-collapse-item-border){
            border-bottom: #ff1111 1px solid;
        }
        :deep(.uni-collapse-item__wrap-content.uni-collapse-item--border){
            border-bottom: none
        }
    }
}

.collapsible-content {
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ff0000;
}
</style>
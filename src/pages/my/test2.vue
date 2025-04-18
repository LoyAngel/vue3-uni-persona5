<template>
    <scroll-view scroll-y @scroll="onScroll" style="height: 100vh;">
        <view :style="{ height: totalHeight + 'rpx', position: 'relative'}">
            <view :style="{ position: 'absolute', left: 0, width: '100%', top: top + 'rpx'  }">
                <view class="item" v-for="(item, index) in showList" :key="index" :style="{ height: item.scroll_height + 'rpx' }">
                    {{ item.content }}
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const listAll = ref([])        // 所有数据
const showList = ref([])       // 可视区域显示的数据
const showNum = ref(20)        // 每次加载的数量
const top = ref(0)             // 偏移量，因为只渲染可视区域的数据，所以需要一个偏移量将可视区域的数据向下偏移
const scrollTop = ref(0)       // 卷起的高度
const startIndex = ref(0)      // 可视区域第一条数据的索引
const endIndex = ref(0)        // 可视区域最后一条数据后面那条数据的索引
const itemOffset = ref([])      // 每一条数据的偏移量

// 总高度，用占位元素撑开scroll-view，使scroll-view的滚动条与完整列表的滚动条一致
const totalHeight = computed(() => {
    if (listAll.value.length === 0) return 0
    return itemOffset.value[listAll.value.length - 1] + listAll.value[listAll.value.length - 1].scroll_height
})

function getAllList() {
    let currentOffset = 0
    for (let i = 0; i < 100; i++) {
        const scroll_height = randomInt(100, 500)
        listAll.value.push({
            scroll_height,
            content: `我是第${i}号仙人掌柜，我的高度是${scroll_height}rpx`,
        })
        itemOffset.value.push(currentOffset)
        currentOffset += scroll_height
    }
}

function getShowList() {
    let start = 0
    let end = listAll.value.length - 1

    // 二分查找找到最后一个小于等于scrollTop的元素
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (itemOffset.value[mid] <= scrollTop.value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    startIndex.value = Math.max(0, end);
    endIndex.value = Math.min(listAll.value.length, startIndex.value + showNum.value);
    showList.value = listAll.value.slice(startIndex.value, endIndex.value)
    top.value = startIndex.value > 0 ? itemOffset.value[startIndex.value] : 0
}


function onScroll(e) {
    scrollTop.value = e.detail.scrollTop * (750 / uni.getSystemInfoSync().windowWidth)
    getShowList()
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

onMounted(() => {
    getAllList()
    getShowList()
})
</script>

<style scoped lang="scss">
.item {
    padding: 5rpx;
    color: #666;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid red;

}
</style>

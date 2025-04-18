<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getIndexBannerAPI, getIndexTitleListAPI } from '@/services/index';
import { ref } from 'vue';
import { IndexBannerData, IndexTitleData } from '@/types/index';
import indexSwiper from './components/indexSwiper.vue';
import indexCategory from './components/indexCategory.vue';
import P5rNavbar from '@/components/P5rNavbar.vue';

const bannerList = ref<IndexBannerData[]>([]);
const indexList = ref<IndexTitleData[]>([]);
const getIndexBannerData = async () => {
    const res = await getIndexBannerAPI();
    bannerList.value = res.result
}
const getIndexListData = async () => {
    const res = await getIndexTitleListAPI();
    indexList.value = res.result
}

onLoad(() => {
    getIndexBannerData();
    getIndexListData();
})
</script>

<template>
    <!-- 自定义导航栏 -->
    <P5rNavbar />
    <!-- 自定义动画背景 -->
    <P5rBackground class="background">
        <!-- 自定义轮播图 -->
        <index-swiper :list="bannerList" />
        <!-- 自定义标题 -->
        <index-category :list="indexList" />
    </P5rBackground>
</template>


<style>
page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>

<style scoped lang="scss">
// 新增样式以确保内容在背景之上
.background{
    flex: 1;
    box-sizing: border-box;
}
</style>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBannerAPI, getTitleListAPI } from '@/services/index';
import { ref } from 'vue';
import { BannerItem, TitleItem } from '@/types/home';
import indexNavbar from './components/indexNavbar.vue';
import indexSwiper from './components/indexSwiper.vue';
import indexCategory from './components/indexCategory.vue';
import indexBackground from './components/indexBackground.vue';

const bannerList = ref<BannerItem[]>([]);
const titleList = ref<TitleItem[]>([]);
const getHomeBannerData = async () => {
    const res = await getHomeBannerAPI();
    console.log(res);
    bannerList.value = res.result;
}
const getTitleListData = async () => {
    const res = await getTitleListAPI();
    console.log(res);
    titleList.value = res.result;
}

onLoad(() => {
    getHomeBannerData();
    getTitleListData();
})
</script>

<template>
    <!-- 自定义导航栏 -->
    <index-navbar />
    <!-- 自定义动画背景 -->
    <index-background class="background-animation">
        <!-- 自定义轮播图 -->
        <index-swiper :list="bannerList" />
        <!-- 自定义标题 -->
        <index-category :list="titleList" />
    </index-background>
</template>

<style lang="scss">
page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

// 新增样式以确保内容在背景之上
.background-animation {
    flex: 1;
    box-sizing: border-box;
}
</style>

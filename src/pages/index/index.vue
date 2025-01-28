<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBannerAPI } from '@/services/index';
import { ref } from 'vue';
import { IndexBannerData } from '@/types';
import indexNavbar from './components/indexNavbar.vue';
import indexSwiper from './components/indexSwiper.vue';
import indexCategory from './components/indexCategory.vue';

const bannerList = ref<IndexBannerData[]>([]);
const getHomeBannerData = async () => {
    const res = await getHomeBannerAPI();
    console.log(res);
    bannerList.value = res.result;
}

onLoad(() => {
    getHomeBannerData();
})
</script>

<template>
    <!-- 自定义导航栏 -->
    <index-navbar />
    <!-- 自定义动画背景 -->
    <P5rBackground class="background">
        <!-- 自定义轮播图 -->
        <index-swiper :list="bannerList" />
        <!-- 自定义标题 -->
        <index-category/>
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

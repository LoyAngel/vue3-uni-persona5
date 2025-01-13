<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBannerAPI } from '@/services/index';
import { ref } from 'vue';
import { BannerItem } from '@/types/home';
import indexNavbar from './components/indexNavbar.vue';
import indexSwiper from './components/indexSwiper.vue';

const bannerList = ref<BannerItem[]>([]);
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
    <!--自定义导航栏-->
    <index-navbar />
    <!--自定义轮播图-->
    <index-swiper :list="bannerList" />
    <view class="content">COOP攻略（全事件白金...、解禁条件、人格指数上升、优先级推荐）</view>
    <view class="content">解答猜谜（课堂问答、猜字谜、电视猜谜）</view>
    <view class="content">人格面具合成范式</view>
</template>

<style lang="scss">

</style>

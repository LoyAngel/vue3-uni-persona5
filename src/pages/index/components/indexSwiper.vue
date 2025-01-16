<script setup lang="ts">
import { BannerItem } from '@/types/home';
import { ref } from 'vue'
const activeIndex = ref(0)

// 当 swiper 下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail.current
}
// 定义 props 接收
defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" @change="onChange" class="swiper">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
.carousel {
  height: 500rpx;
  width: 98vw;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper{
    border: 2px solid #ff0000;
    border-radius: 10px;
    height: 85%;
    width: 100%;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: #9f2011;
    }
    .active {
      background-color: #ff0000;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
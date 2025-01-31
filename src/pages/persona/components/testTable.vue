<template>
                    <view class="title-box">
                        <image
                            src="https://patchwiki.biligame.com/images/persona/thumb/e/e8/hfxp38a3n3pqt8vzll93ou1u7koajpr.png/100px-P5R_%E9%9B%A8%E5%AE%AB%E8%8E%B2%E5%A4%B4%E5%83%8F.png"
                            class="title-image"
                            mode="aspectFit"
                        />
                        <view class="title-text">test title</view>
                    </view>
</template>

<script setup></script>

<style scoped>
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
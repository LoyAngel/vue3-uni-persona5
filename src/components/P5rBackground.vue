<script setup>

</script>

<template>
    <div class="mainbox">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <slot></slot>
    </div>
</template>

<style scoped>
.mainbox {
    width: 100vw;
    height: 100%;
    position: relative;
    /* 超出隐藏需要加上 */
    overflow: hidden;
    background-color: #000; /* 设置主容器背景为黑色 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content {
    width: 320px;
    height: 320px;
    line-height: 320px;
    text-align: center;
    background-color: #000; /* 设置内容背景为黑色 */
    color: #FF0000; /* 设置文本颜色为红色 */
}

.line {
    /* 结合外层元素的相对定位 */
    position: absolute;
    z-index: 10;
}

.line:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    /* 加上渐变效果，方可形成拖尾效果 */
    background: linear-gradient(90deg, transparent, red); /* 修改渐变为红色 */
    animation: animate1 8s linear infinite;
}

/* 分别控制其上下左右的定位距离，从而形成线条跟随效果 */
@keyframes animate1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.line:nth-child(2) {
    top: -100%;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, red); /* 修改渐变为红色 */
    animation: animate2 8s linear infinite;
    /* 注意要加上延时触发动画效果，这样线条才会依次触发 */
    animation-delay: 2s;
}

@keyframes animate2 {
    0% {
        top: -100%;
    }

    50%,
    100% {
        top: 100%;
    }
}

.line:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    background: linear-gradient(270deg, transparent, red); /* 修改渐变为红色 */
    animation: animate3 8s linear infinite;
    animation-delay: 4s;
}

@keyframes animate3 {
    0% {
        right: -100%;
        height: 3px;
    }

    50%,
    100% {
        height: 2px;
        right: 100%;
    }
}

.line:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(360deg, transparent, red); /* 修改渐变为红色 */
    animation: animate4 8s linear infinite;
    animation-delay: 6s;
}

@keyframes animate4 {
    0% {
        bottom: -100%;
    }

    50%,
    100% {
        bottom: 100%;
    }
}
</style>
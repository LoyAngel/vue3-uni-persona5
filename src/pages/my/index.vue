<script setup lang="ts">
import { testStore } from '@/stores';

const store = testStore();
</script>

<template>
    <view class="my">
        <view>Hellow world</view>
        <view>
            <text>{{ store.test}}</text>
        </view>
        <button
            hover-class="button-hover"
            @tap="
                store.setProfile(
                    {
                        name: '张三',
                        age: 18,})
            "
            size="mini"
            plain
            type="primary"
        >
           保存信息 
        </button>
        <button
            hover-class="button-hover"
            @tap="
                store.clearProfile()
            "
            size="mini"
            plain
            type="primary"
        >
            清除信息
        </button>
    </view>
</template>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
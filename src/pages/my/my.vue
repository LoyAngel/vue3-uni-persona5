<script setup lang="ts">
import { testStore } from '@/stores';
import {http} from '@/utils/http';

const store = testStore();
const getdata = async () => {
    const res = await http<string[]>({
        url: '/test',
        success: (res) => {
            console.log(res);
        },
        fail: (err) => {
            console.log(err);
        }
    })
    console.log(res);
};
</script>

<template>
    <view class="my">
        <view>Hellow world</view>
        <view>
            <text>{{ store.test }}</text>
        </view>
        <button
            hover-class="button-hover"
            @tap="
                store.setProfile(
                    {
                        name: '张三',
                        age: 18,
                        token: '123456'
                    })
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
        <button
            hover-class="button-hover"
            @tap="getdata"
            size="mini"
            plain
            type="primary"
        >
            获取数据
        </button>
    </view>
</template>

<style scoped>
.my {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.button-hover {
    background-color: #f0f0f0;
}
button{
    margin: 1vw;
}
</style>
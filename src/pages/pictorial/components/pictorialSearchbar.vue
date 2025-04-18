<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

// 新增定义的 props 和 emits
const props = defineProps<{ search_query: string }>();
const emit = defineEmits<
    {(e: 'update:search_query', value: string): void;}
>();

const search_query_ref = ref('');

const handleSearch = (value:any) => {
    emit('update:search_query', value);
};
</script>

<template>
    <view class="navbar">
        <!-- 搜索条 -->
        <uni-search-bar
            v-model="search_query_ref"
            @input="handleSearch"
            placeholder="搜索面具"
            :radius="32"
            :bg-color="'#ff8080'"
            :text-color="'#000'"
        />
    </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
    background-color: red;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
}
</style>
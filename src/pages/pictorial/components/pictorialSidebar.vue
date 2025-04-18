<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { arcanaStore } from '@/stores';
const props = defineProps<{ selected_category: string }>();
const emit = defineEmits(['update:selected_category']);

const menuEntries = arcanaStore().arcana_map;
const selected_category_ref = ref(props.selected_category);

const handleFilter = (category: string) => {
    selected_category_ref.value = category;
    emit('update:selected_category', category);
};
</script>

<template>
    <scroll-view
        class="sidebar"
        scroll-y
    >
        <view
            v-for="entry in menuEntries"
            :key="entry.id"
            class="menu-entry"
            :class="{ 'menu-entry-selected': selected_category_ref === entry.arcana_name }"
            @click="handleFilter(entry.arcana_name)"
        >
            <text class="icon">{{ entry.icon }}</text>
            <text class="text">{{ entry.arcana_name }}</text>
        </view>
    </scroll-view>
</template>

<style scoped>
.sidebar {
    width: 25vw;
    background-color: #000000;
    border-right: 2rpx solid #FF0000;
    height: 100%;
}

.menu-entry {
    display: flex;
    align-items: center;
    padding: 30rpx 20rpx;
    color: #ffffff;
    border-bottom: 2rpx solid rgba(255, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.menu-entry-selected {
    background-color: #FF0000;
}

.menu-item-hover {
    background-color: #FF0000;
}

.icon {
    font-size: 32rpx;
    margin-right: 16rpx;
}

.text {
    font-size: 28rpx;
    font-weight: 500;
}
</style>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps<{ selected_category: string }>();
const emit = defineEmits(['update:selected_category']);

const menuItems = [
    { id: 1, arcana_name: '全部', icon: '🔍' },
    { id: 2, arcana_name: '审判', icon: '👨‍⚖️' },
    { id: 3, arcana_name: '战车', icon: '🚗' },
    { id: 4, arcana_name: '死神', icon: '💀' },
    { id: 5, arcana_name: '女皇', icon: '👸' },
    { id: 6, arcana_name: '恋人', icon: '💑' },
    { id: 7, arcana_name: '顾问官', icon: '🧠' },
    { id: 8, arcana_name: '恶魔', icon: '😈' },
    { id: 9, arcana_name: '正义', icon: '⚖️' },
    { id: 10, arcana_name: '教皇', icon: '👴' },
    { id: 11, arcana_name: '女教皇', icon: '👵' },
    { id: 12, arcana_name: '隐者', icon: '🧙' },
    { id: 13, arcana_name: '节制', icon: '🍹' },
    { id: 14, arcana_name: '愚者', icon: '🤪' },
    { id: 15, arcana_name: '太阳', icon: '☀️' },
    { id: 16, arcana_name: '信仰', icon: '🙏' },
    { id: 17, arcana_name: '命运', icon: '🎲' },
    { id: 18, arcana_name: '倒吊人', icon: '🙃' },
    { id: 19, arcana_name: '皇帝', icon: '👑' },
    { id: 20, arcana_name: '塔', icon: '🗼' },
    { id: 21, arcana_name: '月亮', icon: '🌙' },
    { id: 22, arcana_name: '魔术师', icon: '🎩' },
    { id: 23, arcana_name: '力量', icon: '💪' },
    { id: 24, arcana_name: '星星', icon: '⭐' },
    { id: 25, arcana_name: '世界', icon: '🌍' },
];
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
            v-for="item in menuItems"
            :key="item.id"
            class="menu-item"
            :class="{ 'menu-item-selected': selected_category_ref === item.arcana_name }"
            @click="handleFilter(item.arcana_name)"
        >
            <text class="icon">{{ item.icon }}</text>
            <text class="text">{{ item.arcana_name }}</text>
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

.menu-item {
    display: flex;
    align-items: center;
    padding: 30rpx 20rpx;
    color: #ffffff;
    border-bottom: 2rpx solid rgba(255, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.menu-item-selected {
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
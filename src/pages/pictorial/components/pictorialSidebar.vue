<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { arcanaStore } from '@/stores';
import { ecolorStore } from '@/stores';
import { ArcanaMapItem, InheritMapItem } from '@/types/pictorial';

const props = defineProps<{
    selected_category: string,
    current_tab_type: string
}>();
const emit = defineEmits<{
    (e: 'update:selected_category', value: string): void;
}>();

const menuEntries = computed(() => {
    if (props.current_tab_type === 'persona') {
        return arcanaStore().arcana_map;
    } else if (props.current_tab_type === 'skill') {
        const all_skill_type: InheritMapItem = {id: 0, inherit_name: '全部', color: '#ffffff'};
        return [all_skill_type, ...ecolorStore().inherit_map];
    }
    return [];
});

const getName = (entry: ArcanaMapItem | InheritMapItem) => {
    if (props.current_tab_type === 'persona') {
        return (entry as ArcanaMapItem).arcana_name;
    } else if (props.current_tab_type === 'skill') {
        return (entry as InheritMapItem).inherit_name
    }

    return '';
};

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
            :class="{ 'selected': selected_category_ref === getName(entry) }"
            @click="handleFilter(getName(entry))"
        >
            <text
                class="icon"
                v-if="'icon' in entry"
            >{{ entry.icon }}</text>
            <text
                class="text"
                :style="'color' in entry ? { 'color': entry.color, 'font-size': '36rpx'} : undefined"
            >{{ getName(entry) }}</text>
        </view>
    </scroll-view>
</template>

<style scoped lang="scss">
.sidebar {
    width: 25vw;
    background-color: #000000;
    border-right: 2rpx solid #FF0000;
    height: 100%;

    .menu-entry {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30rpx 20rpx;
        color: #ffffff;
        border-bottom: 2rpx solid rgba(255, 0, 0, 0.2);
        transition: all 0.3s ease;

        &.selected {
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
    }
}
</style>
<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { SKILL_EXTRA_MAP } from '@/constants/skill';
import { PERSONA_ARCANA_MAP } from '@/constants/persona';
import { ITEM_CATEGORY_MAP } from '@/constants/item';
import type { ArcanaMapEntry, ItemTypeEntry, ElemMapEntry } from '@/types/pictorial';

const props = defineProps<{
    selected_category: string;
    current_tab_type: string;
}>();
const emit = defineEmits<{
    (e: 'update:selected_category', value: string): void;
}>();

const menuEntries = computed(() => {
    if (props.current_tab_type === 'persona') {
        return PERSONA_ARCANA_MAP;
    } else if (props.current_tab_type === 'skill') {
        return SKILL_EXTRA_MAP;
    } else if (props.current_tab_type === 'item') {
        return ITEM_CATEGORY_MAP;
    }
    return [];
});

const getName = (entry: ArcanaMapEntry | ElemMapEntry | ItemTypeEntry) => {
    if (props.current_tab_type === 'persona') {
        return (entry as ArcanaMapEntry).arcana_name;
    } else if (props.current_tab_type === 'skill') {
        return (entry as ElemMapEntry).elem_name;
    } else if (props.current_tab_type === 'item') {
        return (entry as ItemTypeEntry).type_name;
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
    <scroll-view class="sidebar" scroll-y>
        <view
            v-for="entry in menuEntries"
            :key="entry.id"
            class="menu-entry"
            :class="{ selected: selected_category_ref === getName(entry) }"
            @click="handleFilter(getName(entry))"
        >
            <text class="icon" v-if="'icon' in entry">{{ entry.icon }}</text>
            <text class="text" :style="'color' in entry ? { color: entry.color } : undefined">
                {{ getName(entry) }}
            </text>
        </view>
    </scroll-view>
</template>

<style scoped lang="scss">
.sidebar {
    width: 25vw;
    background-color: #000000;
    border-right: 2rpx solid #ff0000;
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
            background-color: #ff0000;
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

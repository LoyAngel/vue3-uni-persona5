<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { SkillData } from '@/types/data';
import SkillItem from './components/SkillItem.vue';
import PictorialSidebar from './components/pictorialSidebar.vue';

const props = defineProps<{
    filtered_skills: SkillData[];
    selected_category: string;
}>();
const emit = defineEmits(['update:selected_category']);
const selected_category_computed = computed({
    get: () => props.selected_category,
    set: (value: string) => {
        emit('update:selected_category', value);
    }
});
</script>

<template>
    <PictorialSidebar
        v-model:selected_category="selected_category_computed"
    />
    <scroll-view
        class="content"
        scroll-y
        :show-scrollbar="false"
    >
        <view
            v-if="filtered_skills.length === 0"
            class="empty-view"
        >
            无搜索结果
        </view>
        <SkillItem
            v-else
            v-for="skill_entry in filtered_skills"
            :key="skill_entry.name"
            :skill="skill_entry"
            :img="''"
        />
    </scroll-view>
</template>

<style scoped lang="scss">
.content {
    flex: 1;
    padding: 32rpx;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #000000;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;

    .empty-view {
        text-align: center;
        color: #ffffff;
        font-size: 32rpx;
        padding: 32rpx;
    }
}
</style> 
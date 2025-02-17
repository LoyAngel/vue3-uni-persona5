<template>
    <input
        type="text"
        v-model="countComputed"
    />
    <view>{{ countComputed }}</view>
</template>
<script setup>
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps(["count"]);
const emit = defineEmits(["update:count"]);
const countComputed = computed({
    get: () => props.count,
    set: (value) => emit("update:count", value),
});
</script>
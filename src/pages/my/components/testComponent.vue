<template>
    <button
        @click="navigate('/pages/detail/skillDetail')"
    >Click me</button>
    <button
        @click="navigate('/pages/detail/itemDetail')"
    >Click me</button>
    <button
        @click="navigate('/pages/my/test2')"
    >
    Click me</button>
</template>

<script setup lang="ts">
const navigate = (url: string) => {
    uni.navigateTo({ url });
}
</script>
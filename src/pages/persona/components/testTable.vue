<template>
  <view>
    <uni-collapse v-model="activeNames" @change="handleChange">
      <uni-collapse-item 
        v-for="(item, index) in collapseItems" 
        :key="index"
        :name="item.name"
        :title="item.title"
      >
        <!-- 动态渲染内部内容 -->
        <view v-if="isActive(item.name)" class="collapse-content">
          {{ item.content }}
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 数据
const activeNames = ref([]); // 当前展开的面板
const collapseItems = ref([
  {
    name: '0',
    title: '面板 1',
    content: '这是面板 1 的内容，点击会动态渲染'
  },
  {
    name: '1',
    title: '面板 2',
    content: '这是面板 2 的内容，点击会动态渲染'
  },
  {
    name: '2',
    title: '面板 3',
    content: '这是面板 3 的内容，点击会动态渲染'
  }
]);

// 方法：判断面板是否展开
const isActive = (name) => {
  return activeNames.value.includes(name);
};

// 事件：面板切换时触发
const handleChange = (names) => {
  activeNames.value = names;
  console.log('当前展开的面板：', names);
};
</script>

<style scoped>
.collapse-content {
  padding: 20px;
  color: #666;
}
</style>
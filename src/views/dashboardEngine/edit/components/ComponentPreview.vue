<template>
  <div class="flex-auto h-full p-4">
    <div
      v-for="(component, index) in components"
      :key="index"
      class="border-orange-400 rounded-md p-4 cursor-drag"
      :class="{ 'border-2': activeIndex === index }"
      @click="emit('click-component', index)"
      >Component type: {{ component.type }}</div
    >
  </div>
</template>
<script lang="ts" setup>
  defineProps({
    loading: {
      type: Boolean,
    },
    components: {
      type: Array,
    },
    activeIndex: {
      type: Number,
    },
  });

  const emit = defineEmits(['click-component']);
</script>

<style lang="less" scoped>
  .component-preview {
    flex: auto;
    height: 100%;
  }
</style>

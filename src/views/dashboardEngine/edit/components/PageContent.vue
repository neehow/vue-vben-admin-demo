<template>
  <div class="page-content p-4">
    <div v-for="(component, index) in components" :key="index"
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
  });
</script>

<style lang="less" scoped>
  .page-content {
    flex: auto;
    height: 100%;
  }
</style>

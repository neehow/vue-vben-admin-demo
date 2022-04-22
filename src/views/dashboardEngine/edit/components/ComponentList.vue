<template>
  <div class="component-list"> component list </div>
</template>
<script lang="ts" setup>
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style lang="less" scoped>
  .component-list {
    height: 100%;
  }
</style>

<template>
  <div class="page-content"> page content </div>
</template>
<script lang="ts" setup>
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style lang="less" scoped>
  .page-content {
    flex: auto;
    height: 100%;
  }
</style>

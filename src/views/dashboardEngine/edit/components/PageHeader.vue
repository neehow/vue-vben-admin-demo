<template>
  <div class="md:flex page-header">
    <div class="left">编辑门户</div>
  </div>
</template>
<script lang="ts" setup>
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style lang="less" scoped>
  .page-header {
    box-shadow: 0 4px 6px #0c1f500a;
    z-index: 100;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      padding-left: 1em;
    }
  }
</style>

<template>
  <div class="component-list">
    <div class="flex justify-center items-center py-3 cursor-pointer">
      <Icon icon="ion:bar-chart" size="24" />
    </div>
    <div class="flex justify-center items-center py-3 cursor-pointer">
      <Icon icon="ion:filter-outline" size="24" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from '/@/components/Icon';

  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style lang="less" scoped>
  .component-list {
    width: 66px;
    height: 100%;
    border-right: 1px solid #e6e6e6;
    background-color: #fff;
  }
</style>

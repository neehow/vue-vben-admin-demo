<template>
  <div class="component-list">
    <div
      @click="onAddComponent(0)"
      class="flex justify-center items-center py-3 mb-2 cursor-pointer"
    >
      <Tooltip placement="right">
        <template #title>报表</template>
        <Icon icon="ion:bar-chart" size="24" />
      </Tooltip>
    </div>
    <div @click="onAddComponent(1)" class="flex justify-center items-center py-3 cursor-pointer">
      <Tooltip placement="right">
        <template #title>筛选</template>
        <Icon icon="ion:filter-outline" size="24" />
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Icon } from '/@/components/Icon';
  import { Tooltip } from 'ant-design-vue';

  defineProps({
    loading: {
      type: Boolean,
    },
  });

  const emit = defineEmits(['add-component']);

  const onAddComponent = (type) => {
    emit('add-component', type);
  };
</script>

<style lang="less" scoped>
  .component-list {
    width: 66px;
    height: 100%;
    border-right: 1px solid #e6e6e6;
    background-color: #fff;
  }
</style>

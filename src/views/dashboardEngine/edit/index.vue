<template>
  <div>
    <PageHeader />

    <div class="main">
      <ComponentList />
      <PageContent />
      <ComponentSetting />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import PageHeader from './components/PageHeader.vue';
  import ComponentList from './components/ComponentList.vue';
  import ComponentSetting from './components/ComponentSetting.vue';
  import PageContent from './components/PageContent.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
<style lang="less" scoped>
  .main {
    display: flex;
  }
</style>

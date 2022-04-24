<template>
  <div class="edit-page">
    <PageHeader />

    <div class="main flex">
      <ComponentList @add-component="onAddComponent" />
      <PageContent :components="components" />
      <ComponentSetting :componentConfig="{}" />
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

  const components = ref([]);
  const onAddComponent = (type) => {
    components.value.push({
      type,
    });
    console.log(components);
  };
</script>
<style lang="less" scoped>
  .edit-page {
    height: 100%;
  }

  .main {
    height: calc(100% - 60px);
  }
</style>

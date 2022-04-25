<template>
  <div class="edit-page">
    <PageHeader />

    <div class="main flex">
      <ComponentList @add-component="onAddComponent" />
      <ComponentPreview
        :components="components"
        @click-component="onClickComponent"
        :activeIndex="activeIndex"
      />
      <ComponentSetting :componentConfig="{}" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import PageHeader from './components/PageHeader.vue';
  import ComponentList from './components/ComponentList.vue';
  import ComponentSetting from './components/ComponentSetting.vue';
  import ComponentPreview from './components/ComponentPreview.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);

  const components = ref([]);
  const activeIndex = ref(-1);

  function onAddComponent(type) {
    components.value.push({
      type,
    });

    activeIndex.value = components.value.length - 1;
    console.log(components);
  }

  function onClickComponent(index) {
    activeIndex.value = index;
  }
</script>
<style lang="less" scoped>
  .edit-page {
    height: 100%;
  }

  .main {
    height: calc(100% - 60px);
  }
</style>

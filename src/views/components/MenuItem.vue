<script setup>
// import { ref, reactive } from "vue";

const props = defineProps({
  data: {
    required: true,
    type: Object
  }
});

</script>

<template>
  <el-sub-menu v-if="props.data.children && props.data.children.length" :index="props.data.path">
    <template #title>
      <el-icon v-if="props.data.icon">
        <component :is="props.data.icon"></component>
      </el-icon>
      <span>{{ props.data.meta.title[0] }}</span>
    </template>

    <MenuItem v-for="item in props.data.children" :key="item.path" :data="item" />
  </el-sub-menu>


  <el-menu-item v-else :index="props.data.path">
    <el-icon v-if="props.data.icon">
      <component :is="props.data.icon"></component>
    </el-icon>
    <span>{{ props.data.meta.title[props.data.meta.title.length - 1] }}</span>
  </el-menu-item>
</template>

<style scoped>
:deep(.el-sub-menu__title) {
  border-radius: 7px;
  height: 46px !important;
}

:deep(.el-sub-menu__title:hover) {
  background-color: #007aff;
  color: #ffffff;
}

.el-sub-menu .el-menu-item {
  padding-left: 60px !important;
}

.el-menu-item {
  margin: 3px 0;
  border-radius: 7px;
  height: 46px !important;
}

.el-menu-item:hover {
  background-color: #007aff;
  color: #ffffff;
}

.el-menu-item.is-active,
.el-menu-item:hover {
  background-color: #007aff;
  color: #ffffff;
}
</style>

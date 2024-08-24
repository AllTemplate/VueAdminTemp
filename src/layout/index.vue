<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider>
      <Menu />
    </n-layout-sider>
    <n-layout>
      <Header />
      <n-layout-content content-style="padding: 24px;">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Menu from "./components/menu/index.vue";
import Header from "./components/header/index.vue";
import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
</script>

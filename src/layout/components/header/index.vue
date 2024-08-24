<template>
  <n-layout-header>
    <div class="flex items-center gap-x-10px h-80px">
      <div>
        <n-icon :component="Menu" class="cursor-pointer" />
      </div>
      <n-breadcrumb>
        <n-breadcrumb-item v-for="item in breadcrumbs">
          <RouterLink :to="item.name as string">
            {{ item.text }}
          </RouterLink>
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader, NBreadcrumb, NBreadcrumbItem, NIcon } from "naive-ui";
import { Menu } from "@vicons/ionicons5";
import { useRoute, RouterLink } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.matched.map((item) => {
    return {
      text: item.meta.name,
      name: item.name,
    };
  });
});
console.log(breadcrumbs);
</script>

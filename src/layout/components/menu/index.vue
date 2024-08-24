<template>
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    :value="currentValue"
  />
</template>

<script lang="ts" setup>
import type { Component } from "vue";
import { computed, h } from "vue";
import { NIcon, NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
} from "@vicons/ionicons5";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const currentValue = computed(() => route.name as string);

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: "鱼",
    key: "fish",
    icon: renderIcon(FishIcon),
    children: [
      {
        label: "红烧",
        key: "braise",
        children: [
          {
            label: "加辣",
            key: "spicy",
          },
        ],
      },
      {
        label: "清蒸",
        key: "steamed",
        children: [
          {
            label: "不要葱",
            key: "no-green-onion",
          },
        ],
      },
    ],
  },
  {
    label: "用户管理",
    key: "page-paw",
    icon: renderIcon(PawIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "home",
              },
            },
            { default: () => "主页" }
          ),
        key: "home",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "test",
              },
            },
            { default: () => "测试" }
          ),
        key: "test",
      },
    ],
  },
];

const defaultExpandedKeys = ["fish", "braise"];
</script>

<style scoped>
:deep(.n-menu-item-content--selected::before) {
  left: 0;
  border-left: 5px solid #1eb384;
}
</style>

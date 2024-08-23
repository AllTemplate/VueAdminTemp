<template>
  <div class="w-full h-full flex">
    <aside class="w-150px h-full">1</aside>
    <main class="w-full h-full">
      2
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

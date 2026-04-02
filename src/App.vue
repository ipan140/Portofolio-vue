<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue';
import LeftSidebar from './components/layout/LeftSidebar.vue';
import RightContent from './components/layout/RightContent.vue';
</script>

<template>
  <div class="max-w-[1000px] mx-auto my-4 md:my-8 px-4">
    <div
      class="bg-surface-bg dark:bg-surface-bg-dark rounded-xl overflow-hidden border border-surface-border dark:border-surface-border-dark shadow-sm">
      <TopBar />

      <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 p-3">
        <LeftSidebar />
        <RightContent />
      </div>
    </div>
  </div>
</template>
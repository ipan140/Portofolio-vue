<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue';
import LeftSidebar from './components/layout/LeftSidebar.vue';
import RightContent from './components/layout/RightContent.vue';
import Footer from './components/layout/Footers.vue';
</script>

<template>
  <div class="relative min-h-screen bg-surface-bg dark:bg-surface-bg-dark p-0 md:p-4 transition-colors duration-200 overflow-x-hidden">
    
    <!-- Blueprint Grid Pattern across the entire outer background -->
    <div class="global-grid-pattern fixed inset-0 pointer-events-none z-0"></div>

    <div
      class="relative z-10 max-w-[1440px] mx-auto bg-surface-bg/95 dark:bg-surface-bg-dark/95 border border-surface-border dark:border-surface-border-dark shadow-sm md:rounded-xl overflow-hidden backdrop-blur-2xs">

      <TopBar />

      <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-[12px] p-[12px]">
        <LeftSidebar />
        <RightContent />
      </div>

      <Footer />
    </div>
  </div>
</template>

<style>
/* Global Blueprint Grid Pattern for the outer background */
.global-grid-pattern {
  background-size: 24px 24px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px);
}

.dark .global-grid-pattern,
[data-theme='dark'] .global-grid-pattern,
[data-theme='dracula'] .global-grid-pattern,
[data-theme='procyon'] .global-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
}
</style>
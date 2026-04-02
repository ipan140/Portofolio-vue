<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue';
import LeftSidebar from './components/layout/LeftSidebar.vue';
import RightContent from './components/layout/RightContent.vue';
import Footer from './components/layout/Footers.vue'; // <-- Tambahkan ini
</script>

<template>
  <div class="min-h-screen bg-surface-bg dark:bg-surface-bg-dark p-0 md:p-4 transition-colors duration-200">

    <div
      class="max-w-[1440px] mx-auto bg-surface-bg dark:bg-surface-bg-dark border border-surface-border dark:border-surface-border-dark shadow-sm md:rounded-xl overflow-hidden">

      <TopBar />

      <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-[12px] p-[12px]">
        <LeftSidebar />
        <RightContent />
      </div>

      <Footer />
    </div>
  </div>
</template>
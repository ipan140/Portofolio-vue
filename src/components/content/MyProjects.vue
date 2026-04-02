<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-desktop text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">My Projects Library</h3>
                <p class="text-[11px] text-text-muted">Scrolling through {{ projects.length }} projects</p>
            </div>
        </div>

        <VirtualScroller :items="projects" :itemSize="100" showLoader :delay="250"
            class="border border-surface-border dark:border-surface-border-dark rounded-xl"
            style="width: 100%; height: 400px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex items-center gap-4 p-3 border-b border-surface-border dark:border-surface-border-dark last:border-b-0',
                    { 'bg-surface-bg/50 dark:bg-white/5': options.odd }]" style="height: 100px">

                    <div
                        class="w-20 h-16 bg-gray-200 dark:bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <i class="pi pi-image text-text-muted opacity-30"></i>
                    </div>

                    <div class="flex flex-col gap-1 overflow-hidden">
                        <h4 class="text-[12px] font-bold text-brand-pink truncate">{{ item.name }}</h4>
                        <p class="text-[10px] text-text-muted line-clamp-2 leading-relaxed">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </template>

            <template v-slot:loader="{ options }">
                <div :class="['flex items-center gap-4 p-3 border-b border-surface-border dark:border-surface-border-dark',
                    { 'bg-surface-bg/50 dark:bg-white/5': options.odd }]" style="height: 100px">

                    <Skeleton shape="rectangle" width="80px" height="64px" class="rounded-lg shrink-0" />

                    <div class="flex-1">
                        <Skeleton width="40%" height="1rem" class="mb-2" />
                        <Skeleton width="90%" height="0.7rem" class="mb-1" />
                        <Skeleton width="70%" height="0.7rem" />
                    </div>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VirtualScroller from 'primevue/virtualscroller';
import Skeleton from 'primevue/skeleton';

// Simulasi data proyek yang sangat banyak (1000 item)
const projects = ref(Array.from({ length: 1000 }).map((_, i) => ({
    name: `Project Analytics System #${i + 1}`,
    description: 'A professional dashboard system built with Vue 3, PrimeVue, and Tailwind CSS for real-time monitoring and data management.'
})));
</script>

<style scoped>
/* Mempercantik scrollbar di dalam VirtualScroller agar sesuai tema */
:deep(.p-virtualscroller::-webkit-scrollbar) {
    width: 6px;
}

:deep(.p-virtualscroller::-webkit-scrollbar-thumb) {
    background: var(--border-color);
    border-radius: 10px;
}
</style>
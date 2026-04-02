<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-pencil text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">My Articles</h3>
                <p class="text-[11px] text-text-muted">Recent insights and tutorials</p>
            </div>
        </div>

        <VirtualScroller :items="articles" :itemSize="80" showLoader :delay="200" class="border-none bg-transparent"
            style="width: 100%; height: 320px">
            <template v-slot:item="{ item, options }">
                <div :class="['group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-surface-border dark:hover:border-surface-border-dark hover:bg-surface-hover/50 transition-all cursor-pointer mx-1',
                    { 'bg-surface-bg/30 dark:bg-white/5': options.odd }]" style="height: 80px">

                    <div
                        class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-brand-pink/10 transition-colors">
                        <i class="pi pi-book text-text-muted group-hover:text-brand-pink transition-colors"></i>
                    </div>

                    <div class="flex flex-col gap-1 overflow-hidden">
                        <h4
                            class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors leading-snug line-clamp-2">
                            {{ item.title }}
                        </h4>
                        <div class="flex items-center gap-2 text-[10px] text-text-muted">
                            <i class="pi pi-calendar text-[9px]"></i>
                            <span>{{ item.date }}</span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:loader="{ options }">
                <div :class="['flex items-center gap-4 p-3 mx-1', { 'bg-surface-bg/30 dark:bg-white/5': options.odd }]"
                    style="height: 80px">
                    <Skeleton shape="rectangle" width="48px" height="48px" class="rounded-lg shrink-0" />
                    <div class="flex-1">
                        <Skeleton width="85%" height="1rem" class="mb-2" />
                        <Skeleton width="40%" height="0.7rem" />
                    </div>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VirtualScroller from 'primevue/virtualscroller';
import Skeleton from 'primevue/skeleton';
const articles = ref([
    {
        title: 'Understanding Model Context Protocol (MCP): Bridging LLMs and the Real World',
        date: 'about 1 month ago'
    },
    {
        title: 'Building Scalable UI with Vue 3 and Tailwind CSS v4',
        date: '2 months ago'
    },
    {
        title: 'Mastering PrimeVue for Professional Admin Dashboards',
        date: '3 months ago'
    },
    {
        title: 'Designing Accessible Web Components for Modern Portfolios',
        date: '4 months ago'
    }
]);
</script>

<style scoped>
:deep(.p-virtualscroller::-webkit-scrollbar) {
    width: 4px;
}

:deep(.p-virtualscroller::-webkit-scrollbar-thumb) {
    background: var(--border-color);
    border-radius: 10px;
}
</style>
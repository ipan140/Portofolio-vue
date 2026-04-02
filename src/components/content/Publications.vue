<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-file text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">Publications</h3>
                <p class="text-[11px] text-text-muted">Research papers and conference articles</p>
            </div>
        </div>

        <VirtualScroller :items="publications" :itemSize="120" showLoader :delay="200"
            class="border-none bg-transparent" style="width: 100%; height: 260px">
            <template v-slot:item="{ item, options }">
                <div :class="['group p-4 rounded-xl border border-surface-border dark:border-surface-border-dark flex flex-col gap-2 hover:border-brand-pink/50 transition-all cursor-default mb-2 mx-1',
                    { 'bg-surface-bg/30 dark:bg-white/5': options.odd }]" style="height: 110px">

                    <div class="text-center">
                        <h4
                            class="text-[11px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors truncate">
                            {{ item.title }}
                        </h4>
                        <p class="text-[9px] font-semibold text-brand-blue dark:text-blue-400 mt-0.5">
                            {{ item.publisher }}
                        </p>
                        <p class="text-[8px] text-text-muted">
                            {{ item.authors }}
                        </p>
                    </div>

                    <p class="text-[9px] text-text-muted leading-relaxed text-center italic line-clamp-2">
                        "{{ item.abstract }}"
                    </p>
                </div>
            </template>

            <template v-slot:loader>
                <div class="p-4 border border-surface-border dark:border-surface-border-dark rounded-xl mb-2 mx-1"
                    style="height: 110px">
                    <div class="flex flex-col items-center gap-2">
                        <Skeleton width="60%" height="0.8rem" />
                        <Skeleton width="30%" height="0.6rem" />
                        <Skeleton width="80%" height="1.5rem" class="mt-1" />
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

// Data simulasi publikasi
const publications = ref([
    {
        title: 'Adaptive UI Systems in Modern Web Frameworks',
        publisher: 'International Journal of Software Engineering',
        authors: 'Ivano Rossi, Jane Smith',
        abstract: 'Exploring the impact of atomic CSS on large scale admin dashboard performance and maintenance.'
    },
    {
        title: 'LLM Integration in Local Business Branding',
        publisher: 'Design & Tech Conference 2026',
        authors: 'Ivano Rossi, John Doe',
        abstract: 'A case study on automating packaging mockups using generative AI for local MSMEs.'
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
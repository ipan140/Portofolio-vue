<script setup lang="ts">
import { ref } from 'vue';
import VirtualScroller from 'primevue/virtualscroller';
import Skeleton from 'primevue/skeleton';

const publications = ref([
    {
        title: 'Rancang Bangun Aplikasi Monitoring Studi Kasus Smart Urban Farming RFC (Rooftop Farming Center) Telkom University Surabaya Berbasis Website Menggunakan Metode Extreme Programing',
        publisher: 'Telkom University Open Library',
        authors: 'Ivano Rossi Sugiyanto',
        type: 'Karya Ilmiah - Skripsi (S1) - Reference',
        subject: 'Tugas Akhir',
        code: '25.04.2688',
        abstract: 'Penelitian ini bertujuan untuk merancang dan mengembangkan aplikasi monitoring berbasis web untuk sistem pertanian Urban Farming yang diterapkan pada Rooftop Farming Center (RFC) Telkom University Surabaya.',
        url: 'https://openlibrary.telkomuniversity.ac.id/home/catalog/id/236432',
    },
]);
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-file text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main">Publications</h3>
                <p class="text-[11px] text-text-muted">Research papers and academic works</p>
            </div>
        </div>

        <VirtualScroller :items="publications" :itemSize="160" showLoader :delay="200" class="border-none bg-transparent pr-2 
                   [&::-webkit-scrollbar]:w-1 
                   [&::-webkit-scrollbar-track]:bg-transparent 
                   [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] 
                   [&::-webkit-scrollbar-thumb]:rounded-full 
                   dark:[&::-webkit-scrollbar-thumb]:bg-[#475569]" style="width: 100%; height: 260px">
            <template #item="{ item, options }">
                <div :class="[
                    'group p-4 rounded-xl border border-surface-border dark:border-surface-border-dark flex flex-col gap-2 hover:border-brand-pink/50 transition-all cursor-default mb-2 mx-1',
                    { 'bg-surface-bg/30 dark:bg-white/5': options.odd }
                ]" style="height: 150px">
                    <h4
                        class="text-[10px] font-bold text-text-main group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                        {{ item.title }}
                    </h4>

                    <div class="flex flex-col gap-0.5">
                        <p class="text-[9px] font-semibold text-brand-blue dark:text-blue-400">
                            {{ item.publisher }}
                        </p>
                        <p class="text-[9px] text-text-muted">
                            {{ item.authors }}
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-x-3 gap-y-0.5">
                        <span class="text-[8px] text-text-muted">
                            <span class="font-semibold">Jenis:</span> {{ item.type }}
                        </span>
                        <span class="text-[8px] text-text-muted">
                            <span class="font-semibold">Subjek:</span> {{ item.subject }}
                        </span>
                        <span class="text-[8px] text-text-muted">
                            <span class="font-semibold">Kode:</span> {{ item.code }}
                        </span>
                    </div>

                    <p class="text-[8px] text-text-muted leading-relaxed italic line-clamp-2">
                        "{{ item.abstract }}"
                    </p>

                    <a v-if="item.url" :href="item.url" target="_blank"
                        class="inline-flex items-center gap-1 text-[8px] font-medium text-brand-pink hover:underline w-fit mt-auto">
                        Lihat publikasi
                        <i class="pi pi-external-link text-[7px]"></i>
                    </a>
                </div>
            </template>

            <template #loader>
                <div class="p-4 border border-surface-border dark:border-surface-border-dark rounded-xl mb-2 mx-1"
                    style="height: 150px">
                    <div class="flex flex-col gap-2">
                        <Skeleton width="80%" height="0.8rem" />
                        <Skeleton width="40%" height="0.6rem" />
                        <Skeleton width="60%" height="0.6rem" />
                        <Skeleton width="90%" height="1.2rem" class="mt-1" />
                    </div>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>
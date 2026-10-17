<script setup lang="ts">
import { ref } from 'vue';

interface PublicationLink {
    label: string;
    url: string;
}

interface Publication {
    title: string;
    publisher: string;
    authors: string;
    type: string;
    subject?: string;
    code?: string;
    volume?: string;
    indexing?: string;
    publishDate?: string;
    abstract: string;
    links: PublicationLink[];
}

const publications = ref<Publication[]>([
    {
        title: 'Rancang Bangun Aplikasi Monitoring Studi Kasus Smart Urban Farming RFC (Rooftop Farming Center) Telkom University Surabaya Berbasis Website Menggunakan Metode Extreme Programing',
        publisher: 'eProceedings of Engineering (Telkom University)',
        authors: 'Ivano Rossi Sugiyanto, Adzanil Rachmadhi Putra, Berlian Rahmy Lidiawaty',
        type: 'Artikel Ilmiah / Conference Proceeding',
        volume: 'Vol. 12 No. 6 (2025): Desember 2025',
        indexing: 'Garuda (Kemdiktisaintek)',
        publishDate: '29 Des 2025',
        abstract: 'Penelitian ini berfokus pada rancang bangun aplikasi monitoring berbasis website untuk mendukung operasional Smart Urban Farming di Rooftop Farming Center (RFC) Telkom University Surabaya dengan metode agile Extreme Programming.',
        links: [
            {
                label: 'eProceedings of Engineering',
                url: 'https://openlibrarypublications.telkomuniversity.ac.id/index.php/engineering/en/article/view/28912'
            },
            {
                label: 'Garuda Kemdiktisaintek',
                url: 'https://garuda.kemdiktisaintek.go.id/documents/detail/5930115'
            }
        ]
    },
    {
        title: 'Rancang Bangun Aplikasi Monitoring Studi Kasus Smart Urban Farming RFC (Rooftop Farming Center) Telkom University Surabaya Berbasis Website Menggunakan Metode Extreme Programing',
        publisher: 'Telkom University Open Library',
        authors: 'Ivano Rossi Sugiyanto',
        type: 'Karya Ilmiah - Skripsi (S1)',
        subject: 'Tugas Akhir',
        code: '25.04.2688',
        publishDate: '2025',
        abstract: 'Dokumen tugas akhir skripsi resmi mengenai perancangan dan implementasi aplikasi pemantauan terpusat untuk sistem pertanian dan telemetri IoT pada Rooftop Farming Center (RFC) Telkom University Surabaya.',
        links: [
            {
                label: 'Telkom University Open Library Catalog',
                url: 'https://openlibrary.telkomuniversity.ac.id/home/catalog/id/236432'
            }
        ]
    }
]);
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <!-- Header -->
        <div class="flex items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <i class="pi pi-file text-brand-pink text-[18px]"></i>
                </div>
                <div>
                    <h3 class="text-[14px] font-bold text-text-main flex items-center gap-2">
                        Publications
                        <span class="text-[10px] text-text-muted font-normal">({{ publications.length }})</span>
                    </h3>
                    <p class="text-[11px] text-text-muted">Research papers, journal proceedings & academic works</p>
                </div>
            </div>
        </div>

        <!-- Publications List -->
        <div class="flex flex-col gap-4">
            <div
                v-for="(item, idx) in publications"
                :key="idx"
                class="group p-4 sm:p-5 rounded-xl border border-surface-border dark:border-surface-border-dark flex flex-col gap-2.5 hover:border-brand-pink/50 transition-all bg-white/20 dark:bg-white/5"
            >
                <!-- Title -->
                <h4
                    class="text-[12px] sm:text-[13px] font-bold text-text-main group-hover:text-brand-pink transition-colors leading-relaxed">
                    {{ item.title }}
                </h4>

                <!-- Publisher & Authors -->
                <div class="flex flex-col gap-0.5">
                    <p class="text-[11px] font-semibold text-brand-blue dark:text-blue-400 leading-normal flex items-center gap-1.5">
                        <i class="pi pi-book text-[11px]"></i>
                        {{ item.publisher }}
                    </p>
                    <p class="text-[10px] text-text-muted leading-normal flex items-center gap-1.5">
                        <i class="pi pi-users text-[10px]"></i>
                        {{ item.authors }}
                    </p>
                </div>

                <!-- Metadata Badges -->
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="text-[9px] bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded text-text-muted">
                        <span class="font-semibold text-text-main">Jenis:</span> {{ item.type }}
                    </span>
                    <span v-if="item.volume" class="text-[9px] bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded text-text-muted">
                        <span class="font-semibold text-text-main">Edisi:</span> {{ item.volume }}
                    </span>
                    <span v-if="item.indexing" class="text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-medium">
                        <i class="pi pi-check-circle text-[8px] mr-1"></i>
                        Terindeks: {{ item.indexing }}
                    </span>
                    <span v-if="item.subject" class="text-[9px] bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded text-text-muted">
                        <span class="font-semibold text-text-main">Subjek:</span> {{ item.subject }}
                    </span>
                    <span v-if="item.code" class="text-[9px] bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded text-text-muted">
                        <span class="font-semibold text-text-main">Kode:</span> {{ item.code }}
                    </span>
                    <span v-if="item.publishDate" class="text-[9px] bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded text-text-muted">
                        <span class="font-semibold text-text-main">Tanggal:</span> {{ item.publishDate }}
                    </span>
                </div>

                <!-- Abstract -->
                <p class="text-[10px] text-text-muted leading-relaxed italic">
                    "{{ item.abstract }}"
                </p>

                <!-- Links Action Buttons -->
                <div class="flex flex-wrap items-center gap-2 pt-1.5">
                    <a
                        v-for="link in item.links"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        class="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-brand-pink/10 hover:bg-brand-pink/20 text-brand-pink transition-all border border-brand-pink/20 hover:scale-[1.02]"
                    >
                        <span>{{ link.label }}</span>
                        <i class="pi pi-external-link text-[8px]"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
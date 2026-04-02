<script setup>
import { ref } from 'vue';
import VirtualScroller from 'primevue/virtualscroller';

// Data project + image
const projects = ref([
    {
        name: 'Sistem Monitoring Website RFC',
        description: 'Final project website monitoring system for Smart Urban Farming RFC Telkom University Surabaya.',
        image: 'https://images.unsplash.com/photo-1581091870622-1e7b1c6a3a3c'
    },
    {
        name: 'Capstone Project',
        description: 'Group project divided into UI/UX and development roles. Focus on business process flow.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d'
    },
    {
        name: 'Internship Maxy Academy',
        description: 'Independent Study program focusing on UI/UX design and real-world case study.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    },
    {
        name: 'E-commerce elektrik',
        description: 'Case study to build an electronic e-commerce system based on user needs.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    },
    {
        name: 'Hackaton 2',
        description: 'Hackathon project creating application using UI/UX approach.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
    },
    {
        name: 'Hackaton 1',
        description: 'Initial hackathon experience building UI/UX solution.',
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9'
    },
    {
        name: 'Capstone Project Gofarm',
        description: 'Role as UI/UX Designer and Frontend Developer.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
    },
    {
        name: 'Competition Mobile Portal LMS',
        description: 'UI/UX Design competition project for LMS mobile portal.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
    },
    {
        name: 'HCI Project',
        description: 'HCI project focused on MSME E-Commerce case study.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
    }
]);
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors"
    >
        <!-- Header -->
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-desktop text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main">My Projects Library</h3>
                <p class="text-[11px] text-text-muted">
                    Scrolling through {{ projects.length }} projects
                </p>
            </div>
        </div>

        <!-- Virtual Scroller -->
        <VirtualScroller
            :items="projects"
            :itemSize="100"
            class="border border-surface-border dark:border-surface-border-dark rounded-xl"
            style="width: 100%; height: 400px"
        >
            <template v-slot:item="{ item, options }">
                <div
                    :class="[
                        'flex items-center gap-4 p-3 border-b border-surface-border dark:border-surface-border-dark last:border-b-0',
                        { 'bg-surface-bg/50 dark:bg-white/5': options.odd }
                    ]"
                    style="height: 100px"
                >
                    <!-- IMAGE (FIXED) -->
                    <img
                        :src="item.image"
                        alt="project"
                        class="w-20 h-16 object-cover rounded-lg shrink-0"
                    />

                    <!-- Content -->
                    <div class="flex flex-col gap-1 overflow-hidden">
                        <h4 class="text-[12px] font-bold text-brand-pink truncate">
                            {{ item.name }}
                        </h4>
                        <p class="text-[10px] text-text-muted line-clamp-2 leading-relaxed">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<style scoped>
:deep(.p-virtualscroller::-webkit-scrollbar) {
    width: 6px;
}

:deep(.p-virtualscroller::-webkit-scrollbar-thumb) {
    background: var(--border-color);
    border-radius: 10px;
}
</style>
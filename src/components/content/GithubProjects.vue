<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-github text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">Github Projects</h3>
                <p class="text-[11px] text-text-muted">Showcasing featured repositories</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div v-for="repo in repositories" :key="repo.name"
                class="group p-4 rounded-xl border border-surface-border dark:border-surface-border-dark bg-white/20 dark:bg-white/5 hover:border-brand-pink/50 hover:shadow-md transition-all flex flex-col justify-between gap-3">

                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <i class="pi pi-book text-[10px] text-text-muted"></i>
                        <span
                            class="text-[11px] font-bold text-brand-blue dark:text-blue-400 group-hover:underline cursor-pointer">
                            {{ repo.name }}
                        </span>
                    </div>

                    <p class="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                        {{ repo.description }}
                    </p>
                </div>

                <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center gap-3 text-[9px] text-text-muted">
                        <span class="flex items-center gap-1">
                            <i class="pi pi-star-fill text-yellow-500 text-[8px]"></i> {{ repo.stars }}
                        </span>
                        <span class="flex items-center gap-1">
                            <i class="pi pi-directions text-[9px]"></i> {{ repo.forks }}
                        </span>
                    </div>

                    <div class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: repo.langColor }"></span>
                        <span class="text-[9px] text-text-muted">{{ repo.language }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Data array agar kode lebih rapi dan mudah ditambah/kurangi
const repositories = [
    {
        name: 'gitprofile',
        description: 'Create and publish a dynamic portfolio by just providing your GitHub username.',
        stars: '2,215',
        forks: '2,136',
        language: 'TypeScript',
        langColor: '#3178c6'
    },
    {
        name: 'ezfolio',
        description: 'Open Source Portfolio/Resume CMS built using Laravel, React and Ant Design.',
        stars: '251',
        forks: '86',
        language: 'PHP',
        langColor: '#4F5D95'
    },
    {
        name: 'reactive-button',
        description: '3D animated react button component with progress bar.',
        stars: '137',
        forks: '21',
        language: 'CSS',
        langColor: '#563d7c'
    },
    {
        name: 'OneClick',
        description: 'Navigate to your favorite actions on websites you love with just one click.',
        stars: '96',
        forks: '20',
        language: 'JavaScript',
        langColor: '#f1e05a'
    }
];
</script>
<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-file text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">Publications</h3>
                <p class="text-[11px] text-text-muted">Showcasing 2 publications</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div
                class="group border border-surface-border dark:border-surface-border-dark rounded-xl p-4 flex flex-col gap-3 hover:border-brand-pink/50 transition-all cursor-default">
                <div class="text-center">
                    <h4
                        class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors">
                        Publication Title
                    </h4>
                    <p class="text-[10px] font-semibold text-brand-blue dark:text-blue-400 mt-1">
                        Journal Name
                    </p>
                    <p class="text-[9px] text-text-muted mt-0.5">
                        Author, John Doe, Jane Smith
                    </p>
                </div>
                <p class="text-[10px] text-text-muted leading-relaxed text-center italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua."
                </p>
            </div>

            <div
                class="group border border-surface-border dark:border-surface-border-dark rounded-xl p-4 flex flex-col gap-3 hover:border-brand-pink/50 transition-all cursor-default">
                <div class="text-center">
                    <h4
                        class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors">
                        Publication Title
                    </h4>
                    <p class="text-[10px] font-semibold text-brand-blue dark:text-blue-400 mt-1">
                        Conference Name
                    </p>
                    <p class="text-[9px] text-text-muted mt-0.5">
                        Author, John Doe, Jane Smith
                    </p>
                </div>
                <p class="text-[10px] text-text-muted leading-relaxed text-center italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua."
                </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Menggunakan PrimeIcons pi-file
</script>
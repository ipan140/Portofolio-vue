<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-pencil text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">My Articles</h3>
                <p class="text-[11px] text-text-muted">Recent posts</p>
            </div>
        </div>

        <div class="flex flex-col gap-3">

            <div
                class="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-surface-border dark:hover:border-surface-border-dark hover:bg-white/50 dark:hover:bg-white/5 transition-all cursor-pointer">
                <div
                    class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-brand-pink/10 transition-colors">
                    <i class="pi pi-book text-text-muted group-hover:text-brand-pink transition-colors"></i>
                </div>

                <div class="flex flex-col gap-1">
                    <h4
                        class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors leading-snug">
                        Understanding Model Context Protocol (MCP): Bridging LLMs and the Real World
                    </h4>
                    <div class="flex items-center gap-2 text-[10px] text-text-muted">
                        <i class="pi pi-calendar text-[9px]"></i>
                        <span>about 1 month ago</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Menggunakan PrimeIcons pi-pencil, pi-book, pi-calendar
</script>
<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <i class="pi pi-desktop text-brand-pink text-[18px]"></i>
            </div>
            <div>
                <h3 class="text-[14px] font-bold text-text-main dark:text-white">My Projects</h3>
                <p class="text-[11px] text-text-muted">Showcasing featured projects</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div
                class="group border border-surface-border dark:border-surface-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-brand-pink/50 transition-all bg-white/30 dark:bg-black/10">
                <h4
                    class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors">
                    UHSadmin System
                </h4>

                <div
                    class="my-3 w-full aspect-video bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-2xl border border-dashed border-surface-border dark:border-surface-border-dark group-hover:bg-brand-pink/5 transition-colors">
                    <i class="pi pi-image text-text-muted opacity-50"></i>
                </div>

                <p class="text-[10px] text-text-muted leading-relaxed">
                    Building admin profiles, Roster UI, and Booking UI using Vue.js and PrimeVue library.
                </p>
            </div>

            <div
                class="group border border-surface-border dark:border-surface-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-brand-pink/50 transition-all bg-white/30 dark:bg-black/10">
                <h4
                    class="text-[12px] font-bold text-text-main dark:text-gray-100 group-hover:text-brand-pink transition-colors">
                    Gedang Krenyes Brand
                </h4>

                <div
                    class="my-3 w-full aspect-video bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-2xl border border-dashed border-surface-border dark:border-surface-border-dark group-hover:bg-brand-pink/5 transition-colors">
                    <i class="pi pi-palette text-text-muted opacity-50"></i>
                </div>

                <p class="text-[10px] text-text-muted leading-relaxed">
                    Designing logo identity and professional packaging mockups for local snack brand.
                </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Menggunakan PrimeIcons pi-desktop, pi-image, pi-palette
</script>
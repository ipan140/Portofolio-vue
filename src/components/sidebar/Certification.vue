<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2">
        <div class="text-[12px] font-bold mb-4 text-text-main dark:text-white flex items-center gap-2">
            <i class="pi pi-verified text-brand-pink text-[14px]"></i>
            Certification
        </div>

        <div class="relative pl-6 pb-2 group">
            <div
                class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark group-last:hidden">
            </div>

            <div
                class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark">
            </div>

            <div class="flex flex-col gap-0.5">
                <span class="text-[9px] text-text-muted font-medium">March 2022</span>
                <h4 class="text-[10px] font-bold text-text-main dark:text-gray-100">Sertifikasi Ipsum</h4>
                <p class="text-[9px] text-text-muted leading-relaxed">Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Menggunakan PrimeIcons yang sudah di-import di main.ts
</script>
<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2">
        <div class="text-[12px] font-bold mb-4 text-text-main flex items-center gap-2">
            <i class="pi pi-graduation-cap text-brand-pink text-[14px]"></i>
            Education
        </div>

        <div class="flex flex-col">

            <!-- UNIVERSITAS TELKOM -->
            <div class="relative pl-6 pb-4 group">
                <div
                    class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark group-last:hidden">
                </div>
                <div
                    class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark z-10">
                </div>

                <div class="flex flex-col gap-0.5">
                    <span class="text-[9px] text-brand-pink font-bold tracking-wide uppercase">Jan 2021 – Oktober 2025</span>
                    <h4 class="text-[10px] font-bold text-text-main">Sistem Informasi</h4>
                    <p class="text-[9px] text-text-muted leading-relaxed">Universitas Telkom</p>
                    <p class="text-[9px] text-text-muted leading-relaxed">IPK: 3.47</p>
                    <div class="flex flex-wrap gap-1 mt-1">
                        <span class="text-[8px] bg-brand-pink/10 text-brand-pink px-1.5 py-0.5 rounded-full">Trello</span>
                        <span class="text-[8px] bg-brand-pink/10 text-brand-pink px-1.5 py-0.5 rounded-full">CSS</span>
                        <span class="text-[8px] bg-brand-pink/10 text-brand-pink px-1.5 py-0.5 rounded-full">+17 keahlian</span>
                    </div>
                </div>
            </div>

            <!-- SMA WACHID HASYIM 2 TAMAN -->
            <div class="relative pl-6 pb-2 group">
                <div
                    class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark group-last:hidden">
                </div>
                <div
                    class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark z-10">
                </div>

                <div class="flex flex-col gap-0.5">
                    <span class="text-[9px] text-text-muted font-medium">Jan 2017 – Jan 2020</span>
                    <h4 class="text-[10px] font-bold text-text-main">Learning Sciences</h4>
                    <p class="text-[9px] text-text-muted leading-relaxed">SMA Wachid Hasyim 2 Taman</p>
                    <p class="text-[9px] text-text-muted leading-relaxed">IPK: 89.9</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// PrimeIcons sudah terintegrasi melalui main.ts
</script>
<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2">
        <div class="text-[12px] font-bold mb-4 text-text-main flex items-center gap-2">
            <i class="pi pi-briefcase text-brand-pink text-[14px]"></i>
            Experience
        </div>

        <div class="flex flex-col">

            <div class="relative pl-6 pb-4 group">
                <div
                    class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark group-last:hidden">
                </div>

                <div
                    class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark z-10">
                </div>

                <div class="flex flex-col gap-0.5">
                    <span class="text-[9px] text-brand-pink font-bold tracking-wide uppercase">September 2021 –
                        Present</span>
                    <h4 class="text-[10px] font-bold text-text-main ">Position Name</h4>
                    <p class="text-[9px] text-text-muted leading-relaxed">Company Name</p>
                </div>
            </div>

            <div class="relative pl-6 pb-2 group">
                <div
                    class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark group-last:hidden">
                </div>
                <div
                    class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark z-10">
                </div>

                <div class="flex flex-col gap-0.5">
                    <span class="text-[9px] text-text-muted font-medium">July 2019 – August 2021</span>
                    <h4 class="text-[10px] font-bold text-text-main ">Position Name</h4>
                    <p class="text-[9px] text-text-muted leading-relaxed">Company Name</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// PrimeIcons pi-briefcase
</script>
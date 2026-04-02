<script setup lang="ts">
import Tag from 'primevue/tag';

// Kita buat data dalam bentuk objek agar setiap skill punya icon masing-masing
const skills = [
    { name: 'PHP', icon: 'pi pi-code' },
    { name: 'Laravel', icon: 'pi pi-server' },
    { name: 'JavaScript', icon: 'pi pi-bolt' },
    { name: 'Vue.js', icon: 'pi pi-vimeo' },
    { name: 'PrimeVue', icon: 'pi pi-prime' },
    { name: 'Tailwind', icon: 'pi pi-palette' }
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2 transition-colors duration-300">
        <h3 class="text-[12px] font-bold mb-3 text-text-main flex items-center gap-2">
            <i class="pi pi-database text-brand-pink text-[14px]"></i>
            Tech Stack
        </h3>

        <div class="flex flex-wrap gap-1.5">
            <Tag v-for="skill in skills" :key="skill.name"
                class="!bg-brand-pink !text-white !text-[9px] !px-2.5 !py-1 !rounded-full !border-none flex items-center gap-1.5 shadow-sm">
                <template #icon>
                    <i :class="[skill.icon, 'text-[8px]']"></i>
                </template>
                <span class="font-bold tracking-wide">{{ skill.name }}</span>
            </Tag>
        </div>
    </div>
</template>
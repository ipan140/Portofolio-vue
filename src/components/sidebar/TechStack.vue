<script setup lang="ts">
import Tag from 'primevue/tag';

const skills = ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'PrimeVue', 'Tailwind'];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2">
        <h3 class="text-[12px] font-semibold mb-2">Tech Stack</h3>
        <div class="flex flex-wrap gap-1">
            <Tag v-for="skill in skills" :key="skill" :value="skill"
                class="!bg-brand-pink !text-white !text-[9px] !px-2 !py-0.5 !rounded-full" />
        </div>
    </div>
</template>
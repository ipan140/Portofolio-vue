<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark text-center">
        <Avatar label="AA" size="xlarge" shape="circle"
            class="!bg-brand-pink !text-white !font-bold !w-16 !h-16 mx-auto" />

        <h2 class="text-sm font-bold mt-2 text-text-main dark:text-white">Ariful Alam</h2>
        <p class="text-[10px] text-text-muted leading-relaxed mb-3">
            Sr. Software Engineer | Distributed Systems Specialist
        </p>

        <Button label="Download Resume" icon="pi pi-download" outlined
            class="!text-[10px] !py-1 !px-3 !border-surface-border dark:!border-surface-border-dark !text-text-main dark:!text-gray-300" />

        <hr class="my-3 border-surface-border dark:border-surface-border-dark">

        <div class="text-left space-y-1.5 text-[10px]">
            <div class="flex justify-between items-center">
                <span class="text-text-muted">📍 Based In</span>
                <span class="font-medium">Bangladesh</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-text-muted">⬡ GitHub</span>
                <span class="font-medium text-brand-blue">arif9m</span>
            </div>
        </div>
    </div>
</template>
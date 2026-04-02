<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

// Data sosial media Ivano Rossi Sugiyanto yang diperbarui
const socials = [
    { label: 'Based In', value: 'Surabaya, Indonesia', icon: 'pi-map-marker', color: '' },
    { label: 'GitHub', value: 'ivanorossi', icon: 'pi-github', color: 'text-brand-blue' },
    { label: 'LinkedIn', value: 'ivano-rossi', icon: 'pi-linkedin', color: 'text-brand-blue' },
    { label: 'X (Twitter)', value: 'ivanorossi_x', icon: 'pi-twitter', color: '' },
    { label: 'Facebook', value: 'Ivano Rossi', icon: 'pi-facebook', color: 'text-brand-blue' },
    { label: 'Instagram', value: '@ivanorossi', icon: 'pi-instagram', color: '' },
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark text-center">
        <Avatar label="IS" size="xlarge" shape="circle"
            class="!bg-brand-pink !text-white !font-bold !w-16 !h-16 mx-auto" />

        <h2 class="text-sm font-bold mt-2 text-text-main dark:text-white">Ivano Rossi Sugiyanto</h2>
        <p class="text-[10px] text-text-muted leading-relaxed mb-3">
            UI/UX Designer | Fullstack Developer | Telkom University Graduate
        </p>

        <Button label="Download Resume" icon="pi pi-download" outlined
            class="!text-[10px] !py-1 !px-3 !border-surface-border dark:!border-surface-border-dark !text-text-main dark:!text-gray-300 w-full" />

        <hr class="my-3 border-surface-border dark:border-surface-border-dark">

        <div class="text-left space-y-2">
            <div v-for="social in socials" :key="social.label" class="flex justify-between items-center text-[10px]">

                <div class="flex items-center gap-2 text-text-muted">
                    <i :class="['pi', social.icon, 'text-[11px]']"></i>
                    <span>{{ social.label }}</span>
                </div>

                <span
                    :class="['font-medium truncate max-w-[120px]', social.color || 'text-text-main dark:text-gray-200']">
                    {{ social.value }}
                </span>
            </div>
        </div>
    </div>
</template>
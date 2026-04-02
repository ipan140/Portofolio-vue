<script setup lang="ts">
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

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
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark text-center shadow-sm transition-colors duration-300">
        <Avatar label="IS" size="xlarge" shape="circle"
            class="!bg-brand-pink !text-white !font-bold !w-16 !h-16 mx-auto mb-3" />

        <h2 class="text-sm font-bold text-text-main">Ivano Rossi Sugiyanto</h2>
        <p class="text-[10px] text-text-muted leading-relaxed mb-4">
            UI/UX Designer | Fullstack Developer | Telkom University Graduate
        </p>

        <a href="/path-to-your-resume.pdf" download class="block no-underline">
            <div
                class="group flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-surface-border dark:border-surface-border-dark hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-300 cursor-pointer">
                <div class="flex items-center gap-3">
                    <div
                        class="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink transition-colors">
                        <i class="pi pi-file-pdf text-brand-pink group-hover:text-white text-[14px]"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] font-bold text-text-main m-0">Curriculum Vitae</p>
                        <p class="text-[8px] text-text-muted m-0 uppercase tracking-wider">Download PDF • 2MB</p>
                    </div>
                </div>
                <i class="pi pi-download text-text-muted group-hover:text-brand-pink text-[12px] pr-1"></i>
            </div>
        </a>

        <hr class="my-4 border-surface-border dark:border-surface-border-dark">

        <div class="text-left space-y-2.5">
            <div v-for="social in socials" :key="social.label" class="flex justify-between items-center text-[10px]">
                <div class="flex items-center gap-2 text-text-muted">
                    <i :class="['pi', social.icon, 'text-[11px]']"></i>
                    <span>{{ social.label }}</span>
                </div>
                <span :class="['font-medium truncate max-w-[120px]', social.color || 'text-text-main']">
                    {{ social.value }}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const socials = [
    { label: 'LinkedIn', value: 'ivano-rossi-sugiyanto', url: 'https://linkedin.com/in/ivano-rossi-sugiyanto', icon: 'pi-linkedin', color: 'hover:text-brand-blue' },
    { label: 'GitHub', value: 'ipan140', url: 'https://github.com/ipan140', icon: 'pi-github', color: 'hover:text-brand-pink' },
    { label: 'Instagram', value: '@ipanrossi', url: 'https://instagram.com/ipanrossi', icon: 'pi-instagram', color: 'hover:text-brand-pink' },
    { label: 'X', value: 'ivanorossi_x', url: 'https://twitter.com/ivanorossi_x', icon: 'pi-twitter', color: 'hover:text-brand-blue' },
];
</script>

<template>
    <footer class="mt-4 pb-8 px-4">
        <div
            class="border-t border-surface-border dark:border-surface-border-dark pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <!-- LEFT -->
            <div class="text-[10px] text-text-muted font-medium">
                © 2026 <span class="text-brand-pink">Ivano Rossi</span>. Built with Vue 3 & Tailwind v4.
            </div>

            <!-- STATUS -->
            <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-[10px] text-text-muted tracking-wide uppercase font-bold">
                    Available for projects
                </span>
            </div>

            <!-- SOCIALS (DINAMIS) -->
            <div class="flex items-center gap-4">
                <a v-for="social in socials"
                   :key="social.label"
                   :href="social.url"
                   target="_blank"
                   class="text-text-muted transition-colors"
                   :class="social.color">
                    <i :class="['pi', social.icon, 'text-[14px]']"></i>
                </a>
            </div>

        </div>
    </footer>
</template>
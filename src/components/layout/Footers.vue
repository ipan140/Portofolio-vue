<template>
    <footer class="mt-4 pb-8 px-4">
        <div
            class="border-t border-surface-border dark:border-surface-border-dark pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <div class="text-[10px] text-text-muted font-medium">
                © 2026 <span class="text-brand-pink">Ivano Rossi</span>. Built with Vue 3 & Tailwind v4.
            </div>

            <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-[10px] text-text-muted tracking-wide uppercase font-bold">Available for
                    projects</span>
            </div>

            <div class="flex items-center gap-4">
                <a href="#" class="text-text-muted hover:text-brand-pink transition-colors">
                    <i class="pi pi-github text-[14px]"></i>
                </a>
                <a href="#" class="text-text-muted hover:text-brand-blue transition-colors">
                    <i class="pi pi-linkedin text-[14px]"></i>
                </a>
                <a href="#" class="text-text-muted hover:text-brand-pink transition-colors">
                    <i class="pi pi-instagram text-[14px]"></i>
                </a>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">
// PrimeIcons: pi-github, pi-linkedin, pi-instagram
</script>
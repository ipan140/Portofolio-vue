<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleDark = () => {
    isDark.value = !isDark.value;

    // Standar Tailwind: class 'dark' diletakkan di elemen <html> atau <body>
    if (isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Opsional: Cek preferensi sistem saat halaman pertama dimuat
onMounted(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    }
});
</script>

<template>
    <div
        class="flex items-center justify-between px-4 py-2 bg-surface-card dark:bg-surface-card-dark border-b border-surface-border dark:border-surface-border-dark transition-colors duration-200">
        <span class="text-[10px] font-bold uppercase tracking-widest text-text-muted">
            Theme
        </span>

        <div class="flex items-center gap-3">
            <span class="text-[10px] font-medium text-text-muted">
                {{ isDark ? 'Dark' : 'Procyon' }}
            </span>

            <button @click="toggleDark"
                class="flex items-center gap-2 px-3 py-1.5 text-[10px] font-semibold rounded-md border border-surface-border dark:border-surface-border-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-all active:scale-95 text-text-main dark:text-gray-200">
                <span>{{ isDark ? '☀' : '☽' }}</span>
                <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>
        </div>
    </div>
</template>
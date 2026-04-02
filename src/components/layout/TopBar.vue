<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Select from 'primevue/select';

// Interface untuk TypeScript agar tidak error strict mode
interface PrimaryColor {
    name: string;
    value: string;
}

interface SurfaceTheme {
    name: string;
    value: string;
    theme: string;
}

// 1. Data Warna Primary
const primaryColors = ref<PrimaryColor[]>([
    { name: 'Emerald', value: '#10b981' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Lime', value: '#84cc16' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Fuchsia', value: '#d946ef' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Rose', value: '#f43f5e' }
]);

// 2. Data Warna Surface
const surfaceColors = ref<SurfaceTheme[]>([
    { name: 'Light', value: '#eef0f4', theme: 'light' },
    { name: 'Dark', value: '#0f1117', theme: 'dark' },
    { name: 'Cupcake', value: '#faf7f5', theme: 'cupcake' },
    { name: 'Dracula', value: '#282a36', theme: 'dracula' },
    { name: 'Procyon', value: '#0b0f19', theme: 'procyon' }
]);

// State
const activePrimary = ref<PrimaryColor>(primaryColors.value[14]!); // Pink
const activeSurface = ref<SurfaceTheme>(surfaceColors.value[0]!); // Light

// 3. Fungsi Apply Primary Color
const applyPrimary = () => {
    const color = activePrimary.value;
    if (!color) return;

    document.documentElement.style.setProperty('--theme-primary', color.value);
    localStorage.setItem('primary-color', JSON.stringify(color));
};

// 4. Fungsi Apply Surface Theme
const applySurface = () => {
    const surface = activeSurface.value;
    if (!surface) return;

    document.documentElement.setAttribute('data-theme', surface.theme);

    const darkThemes = ['dark', 'dracula', 'procyon'];
    if (darkThemes.includes(surface.theme)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('surface-theme', JSON.stringify(surface));
};

// 5. Load preferensi saat halaman dimuat
onMounted(() => {
    const savedPrimary = localStorage.getItem('primary-color');
    const savedSurface = localStorage.getItem('surface-theme');

    if (savedPrimary) {
        const parsed = JSON.parse(savedPrimary);
        // Pastikan warna yang di-load ada di dalam list (menghindari error referensi)
        const found = primaryColors.value.find(c => c.name === parsed.name);
        if (found) {
            activePrimary.value = found;
            applyPrimary();
        }
    } else {
        applyPrimary();
    }

    if (savedSurface) {
        const parsed = JSON.parse(savedSurface);
        const found = surfaceColors.value.find(s => s.theme === parsed.theme);
        if (found) {
            activeSurface.value = found;
            applySurface();
        }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        activeSurface.value = surfaceColors.value[1]!;
        applySurface();
    }
});
</script>

<template>
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3 bg-surface-card dark:bg-surface-card-dark border-b border-surface-border dark:border-surface-border-dark transition-colors duration-300 gap-4">

        <div class="flex items-center gap-2 shrink-0">
            <i class="pi pi-palette text-[12px]" :style="{ color: activePrimary?.value }"></i>
            <span class="text-[10px] font-bold uppercase tracking-widest text-text-main dark:text-gray-200">
                Theme Configurator
            </span>
        </div>

        <div class="flex flex-wrap items-center gap-4 sm:gap-6">

            <div class="flex items-center gap-2">
                <span class="text-[10px] font-medium text-text-muted">Surface:</span>
                <Select v-model="activeSurface" :options="surfaceColors" optionLabel="name"
                    class="w-[120px] !border-surface-border dark:!border-surface-border-dark !bg-transparent hover:!bg-gray-50 dark:hover:!bg-white/5 transition-all shadow-sm"
                    @change="applySurface">

                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-600"
                                :style="{ backgroundColor: slotProps.value.value }"></div>
                            <span class="text-[11px] font-bold text-text-main dark:text-gray-200">
                                {{ slotProps.value.name }}
                            </span>
                        </div>
                    </template>

                    <template #option="slotProps">
                        <div class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full border border-gray-300 dark:border-gray-600"
                                :style="{ backgroundColor: slotProps.option.value }"></div>
                            <span class="text-[11px] text-text-main dark:text-gray-200">
                                {{ slotProps.option.name }}
                            </span>
                        </div>
                    </template>
                </Select>
            </div>

            <div class="flex items-center gap-2">
                <span class="text-[10px] font-medium text-text-muted">Color:</span>
                <Select v-model="activePrimary" :options="primaryColors" optionLabel="name"
                    class="w-[115px] !border-surface-border dark:!border-surface-border-dark !bg-transparent hover:!bg-gray-50 dark:hover:!bg-white/5 transition-all shadow-sm"
                    @change="applyPrimary">

                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: slotProps.value.value }">
                            </div>
                            <span class="text-[11px] font-bold text-text-main dark:text-gray-200">
                                {{ slotProps.value.name }}
                            </span>
                        </div>
                    </template>

                    <template #option="slotProps">
                        <div class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: slotProps.option.value }">
                            </div>
                            <span class="text-[11px] text-text-main dark:text-gray-200">
                                {{ slotProps.option.name }}
                            </span>
                        </div>
                    </template>
                </Select>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Menjaga ukuran Select tetap compact */
:deep(.p-select-label) {
    padding: 0.35rem 0.6rem !important;
}

:deep(.p-select-dropdown) {
    width: 2rem !important;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Select from 'primevue/select';

interface PrimaryColor {
    name: string;
    value: string;
}

interface SurfaceTheme {
    name: string;
    value: string;
    theme: string;
}

// PRIMARY COLORS (Popular developer, pastel & maroon palettes)
const primaryColors = ref<PrimaryColor[]>([
    { name: 'Emerald', value: '#10b981' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Lime', value: '#84cc16' },
    { name: 'Matrix Green', value: '#00ff66' },
    { name: 'Pastel Mint', value: '#6ee7b7' },
    { name: 'Sage Green', value: '#84a98c' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Neon Cyan', value: '#00f0ff' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Pastel Sky', value: '#7dd3fc' },
    { name: 'VS Code Blue', value: '#007acc' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Nord Frost', value: '#88c0d0' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Tokyo Purple', value: '#bb9af7' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Pastel Lavender', value: '#c084fc' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Catppuccin Mauve', value: '#cba6f7' },
    { name: 'Fuchsia', value: '#d946ef' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Pastel Pink', value: '#f472b6' },
    { name: 'Pastel Rose', value: '#fda4af' },
    { name: 'Dracula Pink', value: '#ff79c6' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Sunset Coral', value: '#fb7185' },
    { name: 'Maroon', value: '#800020' },
    { name: 'Wine Burgundy', value: '#881337' },
    { name: 'Crimson Red', value: '#b91c1c' },
    { name: 'Coral Red', value: '#ff5370' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Pastel Peach', value: '#fb923c' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Pastel Lemon', value: '#fde047' },
    { name: 'Synthwave Yellow', value: '#ffe600' }
]);

// SURFACE THEMES (Grouped by Light and Dark)
const surfaceColors = ref([
    {
        label: 'Light',
        items: [
            { name: 'Light (Default)', value: '#ffffff', theme: 'light' },
            { name: 'GitHub Light', value: '#f6f8fa', theme: 'github-light' },
            { name: 'Sakura Pastel', value: '#fff5f7', theme: 'sakura-pastel' },
            { name: 'Rosé Pine Dawn', value: '#faf4ed', theme: 'rose-pine-dawn' },
            { name: 'Mint Pastel', value: '#f0fdf4', theme: 'mint-pastel' },
            { name: 'Catppuccin Latte', value: '#eff1f5', theme: 'catppuccin-latte' },
            { name: 'Nord Snow', value: '#eceff4', theme: 'nord-snow' },
            { name: 'Cupcake', value: '#faf7f5', theme: 'cupcake' }
        ]
    },
    {
        label: 'Dark',
        items: [
            { name: 'Dark (Default)', value: '#0f1117', theme: 'dark' },
            { name: 'Maroon Velvet', value: '#240e15', theme: 'maroon' },
            { name: 'One Dark Pro', value: '#282c34', theme: 'one-dark' },
            { name: 'Tokyo Night', value: '#1a1b26', theme: 'tokyo-night' },
            { name: 'Rosé Pine', value: '#1f1d2e', theme: 'rose-pine' },
            { name: 'Monokai Pro', value: '#2d2a2e', theme: 'monokai-pro' },
            { name: 'Catppuccin Mocha', value: '#1e1e2e', theme: 'catppuccin-mocha' },
            { name: 'Everforest', value: '#2d353b', theme: 'everforest' },
            { name: 'Nord Dark', value: '#2e3440', theme: 'nord' },
            { name: 'Dracula', value: '#282a36', theme: 'dracula' },
            { name: 'Night Owl', value: '#011627', theme: 'night-owl' },
            { name: 'SynthWave \'84', value: '#262335', theme: 'synthwave' },
            { name: 'Gruvbox', value: '#282828', theme: 'gruvbox' },
            { name: 'Solarized Dark', value: '#073642', theme: 'solarized-dark' },
            { name: 'Procyon', value: '#0b0f19', theme: 'procyon' }
        ]
    }
]);

const activePrimary = ref(primaryColors.value[21]!);
const activeSurface = ref(surfaceColors.value[0].items[0]!);

// APPLY
const applyPrimary = () => {
    document.documentElement.style.setProperty('--theme-primary', activePrimary.value.value);
    localStorage.setItem('primary-color', JSON.stringify(activePrimary.value));
};

const applySurface = () => {
    const surface = activeSurface.value;

    document.documentElement.setAttribute('data-theme', surface.theme);

    const darkThemes = [
        'dark', 'dracula', 'procyon',
        'one-dark', 'tokyo-night', 'catppuccin-mocha',
        'nord', 'night-owl', 'synthwave', 'gruvbox',
        'maroon', 'rose-pine', 'monokai-pro', 'everforest', 'solarized-dark'
    ];
    document.documentElement.classList.toggle('dark', darkThemes.includes(surface.theme));

    localStorage.setItem('surface-theme', JSON.stringify(surface));
};

// LOAD
onMounted(() => {
    const savedPrimary = localStorage.getItem('primary-color');
    const savedSurface = localStorage.getItem('surface-theme');

    if (savedPrimary) {
        activePrimary.value = JSON.parse(savedPrimary);
        applyPrimary();
    } else {
        applyPrimary();
    }

    if (savedSurface) {
        activeSurface.value = JSON.parse(savedSurface);
        applySurface();
    }
});
</script>

<template>
    <div
        class="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 md:py-3 bg-surface-card dark:bg-surface-card-dark border-b border-surface-border dark:border-surface-border-dark transition-colors duration-300 gap-4">

        <!-- HEADER -->
        <div class="flex items-center gap-2.5 shrink-0">
            <i class="pi pi-palette text-[13px]" :style="{ color: activePrimary?.value }"></i>
            <span class="text-[11px] md:text-[10px] font-bold uppercase tracking-widest">
                Theme Configurator
            </span>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center w-full md:w-auto gap-3 sm:gap-5">

            <!-- SURFACE -->
            <div class="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                <span class="text-[11px] md:text-[10px] font-semibold shrink-0">Surface:</span>

                <Select
                    v-model="activeSurface"
                    :options="surfaceColors"
                    optionLabel="name"
                    optionGroupLabel="label"
                    optionGroupChildren="items"
                    class="flex-1 sm:flex-none sm:w-[135px] !border-transparent hover:!border-gray-300 dark:hover:!border-gray-600 !bg-transparent hover:!bg-gray-100 dark:hover:!bg-white/5 transition-all"
                    @change="applySurface"
                >

                    <!-- HEADER DROPDOWN -->
                    <template #header>
                        <div class="px-3 py-2 text-[10px] font-semibold text-text-muted">
                            Available Themes
                        </div>
                    </template>

                    <!-- GROUP -->
                    <template #optiongroup="slotProps">
                        <div class="px-3 py-1 text-[9px] font-bold text-text-muted uppercase">
                            {{ slotProps.option.label }}
                        </div>
                    </template>

                    <!-- OPTION -->
                    <template #option="slotProps">
                        <div class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition">
                            <div class="w-3 h-3 rounded-full border"
                                :style="{ backgroundColor: slotProps.option.value }"></div>
                            <span class="text-[11px] text-text-main">
                                {{ slotProps.option.name }}
                            </span>
                        </div>
                    </template>

                    <!-- VALUE -->
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-2.5">
                            <div class="w-3 h-3 rounded-full border"
                                :style="{ backgroundColor: slotProps.value.value }"></div>
                            <span class="text-[12px] md:text-[11px] text-text-main">
                                {{ slotProps.value.name }}
                            </span>
                        </div>
                    </template>

                </Select>
            </div>

            <div class="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700"></div>

            <!-- PRIMARY -->
            <div class="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                <span class="text-[11px] md:text-[10px] font-semibold shrink-0">Color:</span>

                <Select
                    v-model="activePrimary"
                    :options="primaryColors"
                    optionLabel="name"
                    class="flex-1 sm:flex-none sm:w-[135px] !border-transparent hover:!border-gray-300 dark:hover:!border-gray-600 !bg-transparent hover:!bg-gray-100 dark:hover:!bg-white/5 transition-all"
                    @change="applyPrimary"
                >

                    <!-- HEADER -->
                    <template #header>
                        <div class="px-3 py-2 text-[10px] font-semibold text-text-muted">
                            Pick Color
                        </div>
                    </template>

                    <!-- OPTION -->
                    <template #option="slotProps">
                        <div class="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition">
                            <div class="w-3 h-3 rounded-full"
                                :style="{ backgroundColor: slotProps.option.value }"></div>
                            <span class="text-[11px] text-text-main">
                                {{ slotProps.option.name }}
                            </span>
                        </div>
                    </template>

                    <!-- VALUE -->
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-2.5">
                            <div class="w-3 h-3 rounded-full"
                                :style="{ backgroundColor: slotProps.value.value }"></div>
                            <span class="text-[12px] md:text-[11px] text-text-main">
                                {{ slotProps.value.name }}
                            </span>
                        </div>
                    </template>

                </Select>
            </div>

        </div>
    </div>
</template>

<style scoped>
:deep(.p-select-dropdown) {
    color: #111827 !important;
    width: 1.8rem !important;
}

.dark :deep(.p-select-dropdown) {
    color: #ffffff !important;
}

:deep(.p-select) {
    box-shadow: none !important;
}

/* BONUS: biar dropdown lebih clean */
:deep(.p-select-panel) {
    border-radius: 10px;
    padding: 4px;
}
</style>
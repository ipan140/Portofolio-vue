<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        <div class="flex items-center justify-between mb-5">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <i class="pi pi-github text-brand-pink text-[18px]"></i>
                </div>
                <div>
                    <h3 class="text-[14px] font-bold text-text-main">Github Projects</h3>
                    <p class="text-[11px] text-text-muted">{{ repositories.length }} Repositories Found</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-2 custom-scroll">

            <template v-if="loading">
                <div v-for="i in 4" :key="i"
                    class="p-4 border border-surface-border dark:border-surface-border-dark rounded-xl animate-pulse">
                    <div class="h-3 bg-gray-200 dark:bg-white/10 w-1/2 mb-3 rounded"></div>
                    <div class="h-2 bg-gray-200 dark:bg-white/10 w-full mb-2 rounded"></div>
                </div>
            </template>

            <template v-else>
                <div v-for="repo in repositories" :key="repo.id"
                    class="group p-4 rounded-xl border border-surface-border dark:border-surface-border-dark bg-white/20 dark:bg-white/5 hover:border-brand-pink/50 transition-all flex flex-col justify-between gap-3 shadow-sm">

                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <i class="pi pi-book text-[10px] text-text-muted"></i>
                            <a :href="repo.html_url" target="_blank"
                                class="text-[11px] font-bold text-brand-blue dark:text-blue-400 group-hover:underline">
                                {{ repo.name }}
                            </a>
                        </div>
                        <p class="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                            {{ repo.description || 'Project description not provided.' }}
                        </p>
                    </div>

                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center gap-3 text-[9px] text-text-muted">
                            <span class="flex items-center gap-1">
                                <i class="pi pi-star-fill text-yellow-500 text-[8px]"></i> {{ repo.stargazers_count }}
                            </span>
                            <span class="flex items-center gap-1">
                                <i class="pi pi-directions text-[9px]"></i> {{ repo.forks_count }}
                            </span>
                        </div>
                        <div v-if="repo.language" class="flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full"
                                :style="{ backgroundColor: getLangColor(repo.language) }"></span>
                            <span class="text-[9px] text-text-muted">{{ repo.language }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const repositories = ref<any[]>([]);
const loading = ref(true);

const getLangColor = (lang: string) => {
    const colors: Record<string, string> = {
        // Web Development
        TypeScript: '#3178c6',
        JavaScript: '#f1e05a',
        Vue: '#41b883',
        React: '#61dafb',
        Angular: '#dd0031',
        PHP: '#4F5D95',
        Laravel: '#ff2d20',
        HTML: '#e34c26',
        CSS: '#563d7c',
        SCSS: '#c6538c',
        Sass: '#a53b70',
        Tailwind: '#38bdf8',

        // Backend & Systems
        'C#': '#178600',
        Java: '#b07219',
        Python: '#3572A5',
        'C++': '#f34b7d',
        C: '#555555',
        Go: '#00ADD8',
        Rust: '#dea584',
        Ruby: '#701516',
        Kotlin: '#A97BFF',
        Swift: '#F05138',
        Dart: '#00B4AB',
        Shell: '#89e051',
        PowerShell: '#012456',
        SQL: '#e38c00',
        'Jupyter Notebook': '#DA5B0B',
        Markdown: '#083fa1',
        Lua: '#000080',
        Docker: '#384d54',
        Arduino: '#bd79d1',
        JSON: '#292929',
        YAML: '#cb171e',
        XML: '#0060ac'
    };
    return colors[lang] || '#8b949e';
};

const fetchRepos = async () => {
    try {
        const response = await fetch('https://api.github.com/users/ipan140/repos?sort=updated');
        const data = await response.json();
        repositories.value = data;
    } catch (error) {
        console.error("Error:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchRepos);
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
    width: 5px;
}

.custom-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background: #e2e4e9;
    border-radius: 10px;
}

.dark .custom-scroll::-webkit-scrollbar-thumb {
    background: #252a36;
}
</style>
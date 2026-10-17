<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <i class="pi pi-github text-brand-pink text-[18px]"></i>
                </div>
                <div>
                    <h3 class="text-[14px] font-bold text-text-main">Github Projects</h3>
                    <p class="text-[11px] text-text-muted">
                        {{ loading ? 'Loading repositories...' : `${filteredRepositories.length} Public Repositories (Lifetime)` }}
                    </p>
                </div>
            </div>

            <!-- Search / Filter input -->
            <div class="flex items-center gap-2">
                <div class="relative">
                    <i class="pi pi-search absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted"></i>
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search repository..."
                        class="pl-7 pr-3 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-surface-border dark:border-surface-border-dark text-[11px] text-text-main placeholder:text-text-muted focus:outline-none focus:border-brand-pink transition-colors w-36 sm:w-44"
                    />
                </div>
            </div>
        </div>

        <!-- Repository Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2 custom-scroll">

            <template v-if="loading">
                <div v-for="i in 6" :key="i"
                    class="p-4 border border-surface-border dark:border-surface-border-dark rounded-xl animate-pulse">
                    <div class="h-3 bg-gray-200 dark:bg-white/10 w-1/2 mb-3 rounded"></div>
                    <div class="h-2 bg-gray-200 dark:bg-white/10 w-full mb-2 rounded"></div>
                </div>
            </template>

            <template v-else-if="filteredRepositories.length === 0">
                <div class="col-span-full py-8 text-center text-text-muted text-[11px]">
                    <i class="pi pi-search text-2xl mb-2 opacity-50 block"></i>
                    Tidak ada repositori publik yang cocok dengan "{{ searchQuery }}".
                </div>
            </template>

            <template v-else>
                <div v-for="repo in filteredRepositories" :key="repo.id"
                    class="group p-4 rounded-xl border border-surface-border dark:border-surface-border-dark bg-white/20 dark:bg-white/5 hover:border-brand-pink/50 transition-all flex flex-col justify-between gap-3 shadow-sm">

                    <div>
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <div class="flex items-center gap-2 min-w-0">
                                <i class="pi pi-book text-[11px] text-text-muted group-hover:text-brand-pink transition-colors"></i>
                                <a :href="repo.html_url" target="_blank"
                                    class="text-[11px] font-bold text-brand-blue dark:text-blue-400 group-hover:underline truncate">
                                    {{ repo.name }}
                                </a>
                            </div>

                            <a :href="repo.html_url" target="_blank"
                                class="text-text-muted hover:text-brand-pink transition-colors shrink-0">
                                <i class="pi pi-external-link text-[10px]"></i>
                            </a>
                        </div>

                        <p class="text-[10px] text-text-muted leading-relaxed line-clamp-2">
                            {{ repo.description || 'Project description not provided.' }}
                        </p>
                    </div>

                    <div class="flex items-center justify-between mt-2 pt-2 border-t border-surface-border/40 dark:border-surface-border-dark/40">
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
import { ref, computed, onMounted } from 'vue';

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
}

const username = 'ipan140';
const repositories = ref<Repository[]>([]);
const loading = ref(true);
const searchQuery = ref('');

const filteredRepositories = computed(() => {
    if (!searchQuery.value.trim()) return repositories.value;
    const q = searchQuery.value.toLowerCase();
    return repositories.value.filter(repo =>
        repo.name.toLowerCase().includes(q) ||
        (repo.description && repo.description.toLowerCase().includes(q)) ||
        (repo.language && repo.language.toLowerCase().includes(q))
    );
});

const getLangColor = (lang: string) => {
    const colors: Record<string, string> = {
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
        Flutter: '#02569B',
        Blade: '#f05340',
        Shell: '#89e051',
        PowerShell: '#012456',
        SQL: '#e38c00',
        'Jupyter Notebook': '#DA5B0B',
        Docker: '#384d54'
    };
    return colors[lang] || '#8b949e';
};

// Fetch ALL lifetime public repositories with pagination
const fetchLifetimeRepos = async () => {
    const cacheKey = `gh_public_repos_${username}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
                repositories.value = parsed;
                loading.value = false;
            }
        } catch {
            // ignore cache parse error
        }
    }

    try {
        const allRepos: Repository[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated`);
            if (!response.ok) break;
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                allRepos.push(...data);
                if (data.length < 100) {
                    hasMore = false;
                } else {
                    page++;
                }
            } else {
                hasMore = false;
            }
        }

        if (allRepos.length > 0) {
            repositories.value = allRepos;
            localStorage.setItem(cacheKey, JSON.stringify(allRepos));
        }
    } catch (error) {
        console.error("Error fetching lifetime repositories:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchLifetimeRepos);
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
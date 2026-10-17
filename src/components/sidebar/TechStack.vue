<script setup lang="ts">
import { markRaw } from 'vue';
import Tag from 'primevue/tag';

import {
    DiJavascript1, DiReact, DiHtml5, DiCss3, DiPython,
    DiBootstrap, DiGit, DiGo, DiLaravel, DiMysql,
    DiPostgresql, DiTrello
} from 'vue-icons-plus/di';

import {
    SiTypescript, SiDart, SiFigma, SiFirebase,
    SiFlutter, SiNextdotjs, SiNpm, SiSlack, SiVuedotjs,
    SiNestjs, SiDocker, SiJira, SiJenkins, SiPostman,
    SiDotnet, SiCsharp, SiAstro, SiDjango, SiFastapi,
    SiTailwindcss, SiPhp, SiMongodb, SiRedis, SiRabbitmq,
    SiAnthropic
} from 'vue-icons-plus/si';

import { TbBrandReactNative, TbSparkles } from 'vue-icons-plus/tb';
import { VscCode } from 'vue-icons-plus/vsc';

interface Skill {
    name: string;
    icon: any;
}

const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', icon: markRaw(DiJavascript1) },
    { name: 'TypeScript', icon: markRaw(SiTypescript) },
    { name: 'React', icon: markRaw(DiReact) },
    { name: 'React Native', icon: markRaw(TbBrandReactNative) },
    { name: 'Vue.js', icon: markRaw(SiVuedotjs) },
    { name: 'Next.js', icon: markRaw(SiNextdotjs) },
    { name: 'Astro', icon: markRaw(SiAstro) },
    { name: 'HTML5', icon: markRaw(DiHtml5) },
    { name: 'CSS3', icon: markRaw(DiCss3) },
    { name: 'Tailwind CSS', icon: markRaw(SiTailwindcss) },
    { name: 'Bootstrap', icon: markRaw(DiBootstrap) },
    { name: 'Flutter', icon: markRaw(SiFlutter) },
    { name: 'Dart', icon: markRaw(SiDart) },
    { name: 'Figma', icon: markRaw(SiFigma) },

    // Backend & Database
    { name: 'NestJS', icon: markRaw(SiNestjs) },
    { name: 'Node.js', icon: markRaw(DiJavascript1) },
    { name: 'PHP', icon: markRaw(SiPhp) },
    { name: 'Laravel', icon: markRaw(DiLaravel) },
    { name: 'Python', icon: markRaw(DiPython) },
    { name: 'Django', icon: markRaw(SiDjango) },
    { name: 'FastAPI', icon: markRaw(SiFastapi) },
    { name: 'Go', icon: markRaw(DiGo) },
    { name: '.NET', icon: markRaw(SiDotnet) },
    { name: 'C#', icon: markRaw(SiCsharp) },
    { name: 'MongoDB', icon: markRaw(SiMongodb) },
    { name: 'MySQL', icon: markRaw(DiMysql) },
    { name: 'PostgreSQL', icon: markRaw(DiPostgresql) },
    { name: 'Redis', icon: markRaw(SiRedis) },
    { name: 'RabbitMQ', icon: markRaw(SiRabbitmq) },
    { name: 'Firebase', icon: markRaw(SiFirebase) },

    // Tools & AI
    { name: 'Claude', icon: markRaw(SiAnthropic) },
    { name: 'Antigravity', icon: markRaw(TbSparkles) },
    { name: 'OpenCode', icon: markRaw(VscCode) },
    { name: 'Docker', icon: markRaw(SiDocker) },
    { name: 'Git', icon: markRaw(DiGit) },
    { name: 'Jenkins', icon: markRaw(SiJenkins) },
    { name: 'Postman', icon: markRaw(SiPostman) },
    { name: 'Jira', icon: markRaw(SiJira) },
    { name: 'Trello', icon: markRaw(DiTrello) },
    { name: 'Slack', icon: markRaw(SiSlack) },
    { name: 'npm', icon: markRaw(SiNpm) },
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2 transition-colors duration-300">
        
        <!-- Header -->
        <div class="mb-3">
            <div class="flex items-center justify-between">
                <h3 class="text-[12px] font-bold text-text-main flex items-center gap-2">
                    <i class="pi pi-database text-brand-pink text-[14px]"></i>
                    Tech Stack & Software
                </h3>
                <span class="text-[10px] text-text-muted font-normal">({{ skills.length }})</span>
            </div>
            <p class="text-[9px] text-text-muted mt-0.5">Technologies, tools & frameworks I work with</p>
        </div>

        <!-- Skills Pills Container -->
        <div class="flex flex-wrap gap-1.5 max-h-[240px] overflow-y-auto pr-1.5 custom-scroll">
            <Tag v-for="skill in skills" :key="skill.name"
                class="!bg-brand-pink !text-white !rounded-full !border-none shadow-xs !px-2.5 !py-1 transition-all duration-200 hover:scale-105 select-none">

                <div class="flex items-center gap-1.5">
                    <component :is="skill.icon" class="w-[13px] h-[13px] flex-shrink-0" />
                    <span class="text-[10px] font-semibold tracking-normal leading-tight whitespace-nowrap">
                        {{ skill.name }}
                    </span>
                </div>
            </Tag>
        </div>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.custom-scroll::-webkit-scrollbar {
    width: 4px;
}
.custom-scroll::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 9999px;
}
.dark .custom-scroll::-webkit-scrollbar-thumb,
[data-theme='dark'] .custom-scroll::-webkit-scrollbar-thumb,
[data-theme='dracula'] .custom-scroll::-webkit-scrollbar-thumb,
[data-theme='procyon'] .custom-scroll::-webkit-scrollbar-thumb {
    background: #475569;
}
</style>
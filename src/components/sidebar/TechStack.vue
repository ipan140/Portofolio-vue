<script setup lang="ts">
import { markRaw } from 'vue';
import Tag from 'primevue/tag';

import {
    DiJavascript1, DiReact, DiHtml5, DiCss3, DiPython,
    DiBootstrap, DiGit, DiGo, DiLaravel, DiMysql,
    DiPostgresql, DiTrello
} from 'vue-icons-plus/di';

import {
    SiTypescript, SiCplusplus, SiDart, SiFigma, SiFirebase,
    SiFlutter, SiNextdotjs, SiNpm, SiSlack, SiVuedotjs,
    SiNestjs, SiDocker, SiJira, SiJenkins, SiPostman,
    SiDotnet, SiCsharp, SiAstro, SiDjango, SiFastapi,
    SiTailwindcss
} from 'vue-icons-plus/si';

const skills = [
    { name: 'JavaScript', icon: markRaw(DiJavascript1) },
    { name: 'TypeScript', icon: markRaw(SiTypescript) },
    { name: 'React', icon: markRaw(DiReact) },
    { name: 'Vue.js', icon: markRaw(SiVuedotjs) },
    { name: 'Next.js', icon: markRaw(SiNextdotjs) },
    { name: 'NestJS', icon: markRaw(SiNestjs) },
    { name: 'Astro', icon: markRaw(SiAstro) },
    { name: 'HTML5', icon: markRaw(DiHtml5) },
    { name: 'CSS3', icon: markRaw(DiCss3) },
    { name: 'Tailwind CSS', icon: markRaw(SiTailwindcss) },
    { name: 'Bootstrap', icon: markRaw(DiBootstrap) },
    { name: 'Python', icon: markRaw(DiPython) },
    { name: 'Django', icon: markRaw(SiDjango) },
    { name: 'FastAPI', icon: markRaw(SiFastapi) },
    { name: 'Laravel', icon: markRaw(DiLaravel) },
    { name: 'Go', icon: markRaw(DiGo) },
    { name: '.NET', icon: markRaw(SiDotnet) },
    { name: 'C#', icon: markRaw(SiCsharp) },
    { name: 'C++', icon: markRaw(SiCplusplus) },
    { name: 'Dart', icon: markRaw(SiDart) },
    { name: 'Flutter', icon: markRaw(SiFlutter) },
    { name: 'Docker', icon: markRaw(SiDocker) },
    { name: 'Git', icon: markRaw(DiGit) },
    { name: 'Jenkins', icon: markRaw(SiJenkins) },
    { name: 'Postman', icon: markRaw(SiPostman) },
    { name: 'MySQL', icon: markRaw(DiMysql) },
    { name: 'PostgreSQL', icon: markRaw(DiPostgresql) },
    { name: 'Firebase', icon: markRaw(SiFirebase) },
    { name: 'Jira', icon: markRaw(SiJira) },
    { name: 'Trello', icon: markRaw(DiTrello) },
    { name: 'Slack', icon: markRaw(SiSlack) },
    { name: 'Figma', icon: markRaw(SiFigma) },
    { name: 'npm', icon: markRaw(SiNpm) },
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2 transition-colors duration-300">
        <h3 class="text-[12px] font-bold mb-3 text-text-main flex items-center justify-between">
            <span class="flex items-center gap-2">
                <i class="pi pi-database text-brand-pink text-[14px]"></i>
                Tech Stack
            </span>
            <span class="text-[10px] text-text-muted font-normal">({{ skills.length }})</span>
        </h3>

        <div class="flex flex-wrap gap-1.5 max-h-[220px] overflow-y-auto pr-2 
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#475569]">

            <Tag v-for="skill in skills" :key="skill.name"
                class="!bg-brand-pink !text-white !rounded-full !border-none shadow-sm !px-2.5 !py-1 transition-transform hover:scale-105">

                <div class="flex items-center gap-1.5">
                    
                    <component :is="skill.icon" class="w-[14px] h-[14px] flex-shrink-0" />
                    
                    <span class="text-[10px] font-bold tracking-wide leading-none">{{ skill.name }}</span>
                    
                </div>
            </Tag>

        </div>
    </div>
</template>
<script setup lang="ts">
import { markRaw } from 'vue';

import {
    DiJavascript1, DiReact, DiHtml5, DiCss3, DiPython,
    DiBootstrap, DiGit, DiGo, DiLaravel, DiMysql,
    DiPostgresql, DiTrello
} from 'vue-icons-plus/di';

import {
    SiTypescript, SiCplusplus, SiDart, SiFigma, SiFirebase,
    SiFlutter, SiNextdotjs, SiNpm, SiSlack, SiVuedotjs
} from 'vue-icons-plus/si';

const skills = [
    { name: 'JavaScript', icon: markRaw(DiJavascript1) },
    { name: 'TypeScript', icon: markRaw(SiTypescript) },
    { name: 'React', icon: markRaw(DiReact) },
    { name: 'HTML5', icon: markRaw(DiHtml5) },
    { name: 'CSS3', icon: markRaw(DiCss3) },
    { name: 'Python', icon: markRaw(DiPython) },
    { name: 'Bootstrap', icon: markRaw(DiBootstrap) },
    { name: 'C++', icon: markRaw(SiCplusplus) },
    { name: 'Dart', icon: markRaw(SiDart) },
    { name: 'Figma', icon: markRaw(SiFigma) },
    { name: 'Firebase', icon: markRaw(SiFirebase) },
    { name: 'Flutter', icon: markRaw(SiFlutter) },
    { name: 'Git', icon: markRaw(DiGit) },
    { name: 'Go', icon: markRaw(DiGo) },
    { name: 'Laravel', icon: markRaw(DiLaravel) },
    { name: 'MySQL', icon: markRaw(DiMysql) },
    { name: 'Next.js', icon: markRaw(SiNextdotjs) },
    { name: 'npm', icon: markRaw(SiNpm) },
    { name: 'PostgreSQL', icon: markRaw(DiPostgresql) },
    { name: 'Slack', icon: markRaw(SiSlack) },
    { name: 'Trello', icon: markRaw(DiTrello) },
    { name: 'Vue.js', icon: markRaw(SiVuedotjs) },
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2 transition-colors duration-300">
        <h3 class="text-[12px] font-bold mb-3 text-text-main flex items-center gap-2">
            <i class="pi pi-database text-brand-pink text-[14px]"></i>
            Tech Stack
        </h3>

        <div class="flex flex-wrap gap-1.5 max-h-[200px] overflow-y-auto pr-2 
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#475569]">

            <Tag v-for="skill in skills" :key="skill.name"
                class="!bg-brand-pink !text-white !rounded-full !border-none shadow-sm !px-2.5 !py-1">

                <div class="flex items-center gap-1.5">
                    
                    <component :is="skill.icon" class="w-[14px] h-[14px] flex-shrink-0" />
                    
                    <span class="text-[10px] font-bold tracking-wide leading-none">{{ skill.name }}</span>
                    
                </div>
            </Tag>

        </div>
    </div>
</template>
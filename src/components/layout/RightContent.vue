<script setup lang="ts">
import GithubCalendar from '../content/GithubCalendar.vue';
import GithubProjects from '../content/GithubProjects.vue';
import Publications from '../content/Publications.vue';
import MyProjects from '../content/MyProjects.vue';
</script>

<template>
    <main class="flex flex-col gap-3 min-w-0">
        <GithubCalendar />
        <GithubProjects />
        <Publications />
        <MyProjects />
    </main>
</template>

<style scoped></style>
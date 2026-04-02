<script setup lang="ts">
import GithubProjects from '../content/GithubProjects.vue';
import Publications from '../content/Publications.vue';
import MyProjects from '../content/MyProjects.vue';
import MyArticles from '../content/MyArticles.vue';
</script>

<template>
    <main class="flex flex-col gap-3 min-w-0">
        <GithubProjects />
        <Publications />
        <MyProjects />
        <MyArticles />
    </main>
</template>

<style scoped></style>
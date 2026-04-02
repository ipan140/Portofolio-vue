<script setup lang="ts">
const certifications = [
    {
        id: 1,
        title: 'Belajar Dasar Cloud dan Gen AI di AWS',
        issuer: 'Dicoding Indonesia',
        issued: 'Nov 2025',
        expired: 'Nov 2028',
        credentialId: 'JMZVVODW3ZN9',
        credentialUrl: '#',
        skills: null,
    },
    {
        id: 2,
        title: 'Belajar Dasar Pemrograman JavaScript',
        issuer: 'Dicoding Indonesia',
        issued: 'Okt 2025',
        expired: 'Okt 2028',
        credentialId: 'NVP7JQ32OXR0',
        credentialUrl: '#',
        skills: null,
    },
    {
        id: 3,
        title: 'Belajar Dasar AI',
        issuer: 'Dicoding Indonesia',
        issued: 'Apr 2025',
        expired: 'Apr 2028',
        credentialId: '07Z63EERMZQR',
        credentialUrl: '#',
        skills: null,
    },
    {
        id: 4,
        title: 'Rapid UI/UX Design Study Independen',
        issuer: 'PT Linkdataku Solusi Indonesia',
        issued: 'Feb 2024',
        expired: 'Jul 2024',
        credentialId: null,
        credentialUrl: '#',
        skills: 'UI/UX Design',
    },
];
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-4 border border-surface-border dark:border-surface-border-dark mt-2"
    >
        <!-- Header -->
        <div class="text-[12px] font-bold mb-4 text-text-main flex items-center gap-2">
            <i class="pi pi-verified text-brand-pink text-[14px]"></i>
            Certification
        </div>

        <!-- List -->
        <div
            v-for="(cert, index) in certifications"
            :key="cert.id"
            class="relative pl-6 pb-4"
            :class="{ 'pb-0': index === certifications.length - 1 }"
        >
            <!-- Timeline line -->
            <div
                v-if="index !== certifications.length - 1"
                class="absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-surface-border dark:bg-surface-border-dark"
            ></div>

            <!-- Timeline dot -->
            <div
                class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-brand-pink border-2 border-surface-card dark:border-surface-card-dark"
            ></div>

            <div class="flex flex-col gap-0.5">
                <!-- Tanggal -->
                <span class="text-[9px] text-text-muted font-medium">
                    Diterbitkan {{ cert.issued }}
                    <span v-if="cert.expired">
                        · Berlaku hingga {{ cert.expired }}
                    </span>
                </span>

                <!-- Judul -->
                <h4 class="text-[10px] font-bold text-text-main leading-snug">
                    {{ cert.title }}
                </h4>

                <!-- Penerbit -->
                <p class="text-[9px] text-text-muted">
                    {{ cert.issuer }}
                </p>

                <!-- Credential ID -->
                <p v-if="cert.credentialId" class="text-[9px] text-text-muted">
                    ID kredensial {{ cert.credentialId }}
                </p>

                <!-- Skills -->
                <p v-if="cert.skills" class="text-[9px] text-text-muted">
                    Keterampilan: {{ cert.skills }}
                </p>

                <!-- Tombol -->
                <a
                    v-if="cert.credentialUrl"
                    :href="cert.credentialUrl"
                    target="_blank"
                    class="mt-1.5 inline-flex items-center gap-1 text-[9px] font-medium text-text-main border border-surface-border dark:border-surface-border-dark rounded-full px-2.5 py-1 w-fit hover:bg-surface-border/30 transition-colors"
                >
                    Tampilkan kredensial
                    <i class="pi pi-external-link text-[8px]"></i>
                </a>
            </div>
        </div>
    </div>
</template>
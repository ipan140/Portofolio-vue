<script setup>
import { ref, computed } from 'vue';
import VirtualScroller from 'primevue/virtualscroller';

const searchQuery = ref('');

// Data projects: Unified FE & BE into single entries, using lightweight icons instead of heavy images for zero lag
const projects = ref([
    {
        name: 'Sistem Pengajuan Surat RT/RW',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-building',
        iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500',
        description: 'Platform administrasi mandiri warga RT/RW terpadu. Menggabungkan frontend Astro modern yang cepat dan backend REST API TypeScript yang scalable.',
        tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'REST API']
    },
    {
        name: 'ERP Enterprise Resource Planning System',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-server',
        iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-500',
        description: 'Sistem ERP terpadu untuk otomasi bisnis, inventaris stok, dan manajemen operasional dengan frontend Vue.js interaktif dan backend microservice Go & PHP.',
        tags: ['Vue.js', 'Go (Golang)', 'PHP', 'PostgreSQL', 'MySQL']
    },
    {
        name: 'POS Point of Sale & Dashboard System',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-shopping-bag',
        iconBg: 'bg-brand-pink/15 border-brand-pink/30 text-brand-pink',
        description: 'Sistem kasir dan dashboard manajemen transaksi penjualan POS secara real-time dengan frontend responsif Vue.js dan backend cepat berbasis Go.',
        tags: ['Vue.js', 'Go (Golang)', 'REST API', 'POS Engine']
    },
    {
        name: 'Sistem Informasi PPDB Online',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-graduation-cap',
        iconBg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-500',
        description: 'Penerimaan Peserta Didik Baru (PPDB) online dengan modul pendaftaran calon siswa, verifikasi berkas digital, dan kalkulasi ranking otomatis.',
        tags: ['Vue.js', 'TypeScript', 'REST API', 'MySQL']
    },
    {
        name: 'LinkKerjaku - Jobseeker & Recruitment Portal',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-briefcase',
        iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-500',
        description: 'Portal karir dan pencarian kerja terintegrasi. Menghubungkan pelamar kerja dengan rekruter via filter karir, resume submission, dan backend FastAPI.',
        tags: ['TypeScript', 'FastAPI Python', 'PostgreSQL', 'Blade']
    },
    {
        name: 'E-Commerce Platform & Store',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-shopping-cart',
        iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-500',
        description: 'Sistem e-commerce toko online dengan frontend responsif Vue.js dan backend microservices berbasis Go untuk pemrosesan order dan katalog cepat.',
        tags: ['Vue.js', 'Go (Golang)', 'Redis', 'REST API']
    },
    {
        name: 'System Tracking & Telemetry (FastAPI)',
        type: 'Backend API',
        typeColor: 'purple',
        icon: 'pi pi-map-marker',
        iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500',
        description: 'Backend API pelacakan lokasi dan status logistik real-time dengan asynchronous framework FastAPI Python dan endpoint teroptimasi.',
        tags: ['Python', 'FastAPI', 'Tracking', 'GeoJSON']
    },
    {
        name: 'GIS Location & Mapping Mobile App',
        type: 'Mobile & GIS',
        typeColor: 'blue',
        icon: 'pi pi-compass',
        iconBg: 'bg-teal-500/15 border-teal-500/30 text-teal-500',
        description: 'Aplikasi mobile Geographic Information System (GIS) untuk pemetaan titik koordinat lokasi spasial dan visualisasi peta interaktif.',
        tags: ['Dart', 'Flutter', 'GIS', 'Mobile Map']
    },
    {
        name: 'Aplikasi Buku Kas Keuangan',
        type: 'Web Application',
        typeColor: 'amber',
        icon: 'pi pi-wallet',
        iconBg: 'bg-green-500/15 border-green-500/30 text-green-500',
        description: 'Aplikasi pembukuan kas pemasukan dan pengeluaran keuangan usaha dengan laporan neraca otomatis, grafik arus kas, dan ekspor data.',
        tags: ['PHP', 'MySQL', 'Cashflow', 'Finance']
    },
    {
        name: 'Sakai Enterprise Admin Dashboard',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-objects-column',
        iconBg: 'bg-violet-500/15 border-violet-500/30 text-violet-500',
        description: 'Template dashboard administrasi komprehensif mengintegrasikan PrimeVue Sakai dengan backend Laravel RESTful authentication dan CRUD.',
        tags: ['Vue.js', 'Laravel', 'PrimeVue', 'Admin Panel']
    },
    {
        name: 'Top-Up Game Marketplace Multi-Platform',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-ticket',
        iconBg: 'bg-rose-500/15 border-rose-500/30 text-rose-500',
        description: 'Platform penjualan voucher game dengan dual-backend Laravel & ASP.NET containerized Docker untuk pemrosesan transaksi otomatis.',
        tags: ['Laravel', 'ASP.NET', 'Docker', 'Payment API']
    },
    {
        name: 'Blog Jurnal & Publikasi Platform',
        type: 'Fullstack (FE + BE)',
        typeColor: 'brand',
        icon: 'pi pi-book',
        iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-500',
        description: 'Platform manajemen publikasi artikel dan jurnal teknis dengan antarmuka baca interaktif Vue.js serta backend content service TypeScript.',
        tags: ['Vue.js', 'TypeScript', 'Markdown', 'API']
    },
    {
        name: 'Gemini AI Intelligent Chatbot Suite',
        type: 'AI & Mobile',
        typeColor: 'purple',
        icon: 'pi pi-sparkles',
        iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-500',
        description: 'Asisten percakapan cerdas multi-platform bertenaga Google Gemini AI untuk analisis data percakapan dan asistensi interaktif via Web & Mobile.',
        tags: ['Python', 'Google Gemini API', 'Mobile', 'AI Agent']
    },
    {
        name: 'GoFarm Mobile App (Capstone Project)',
        type: 'Mobile & UI/UX',
        typeColor: 'blue',
        icon: 'pi pi-mobile',
        iconBg: 'bg-lime-500/15 border-lime-500/30 text-lime-500',
        description: 'Solusi mobile agrikultur modern untuk menghubungkan petani lokal langsung ke konsumen. Mencakup riset UI/UX dan implementasi aplikasi mobile.',
        tags: ['JavaScript', 'React Native', 'Figma', 'UI/UX']
    },
    {
        name: 'Smart Urban Farming RFC Monitoring',
        type: 'IoT & Web',
        typeColor: 'green',
        icon: 'pi pi-wifi',
        iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-500',
        description: 'Sistem monitoring website dan telemetri IoT untuk Smart Urban Farming RFC Telkom University guna memantau nutrisi dan suhu secara real-time.',
        tags: ['PHP', 'IoT Integration', 'MySQL', 'Hardware']
    },
    {
        name: 'Interactive Vue Dashboard Analytics',
        type: 'Frontend',
        typeColor: 'blue',
        icon: 'pi pi-chart-bar',
        iconBg: 'bg-sky-500/15 border-sky-500/30 text-sky-500',
        description: 'Dashboard analitik interaktif berbasis Vue.js dengan data visualisasi metrik performa, pemantauan status, dan tata letak responsif modern.',
        tags: ['Vue.js', 'Vite', 'Tailwind CSS', 'Chart.js']
    },
    {
        name: 'Sistem Ujian Sekolah Online (CBT)',
        type: 'Web Application',
        typeColor: 'amber',
        icon: 'pi pi-check-square',
        iconBg: 'bg-orange-500/15 border-orange-500/30 text-orange-500',
        description: 'Platform Computer-Based Testing (CBT) untuk pelaksanaan ujian sekolah secara real-time, manajemen bank soal, dan kalkulasi nilai otomatis.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'CBT Engine']
    },
    {
        name: 'Sistem Antrean Poliklinik & Faskes',
        type: 'Web Application',
        typeColor: 'amber',
        icon: 'pi pi-users',
        iconBg: 'bg-red-500/15 border-red-500/30 text-red-500',
        description: 'Aplikasi antrean faskes poliklinik terstruktur dengan sistem kuota per dokter, pemanggilan nomor tiket, dan status pelayanan real-time.',
        tags: ['Laravel', 'Blade', 'MySQL', 'Queue System']
    },
    {
        name: 'Company Profile Pastijadi Solusindo',
        type: 'Website',
        typeColor: 'blue',
        icon: 'pi pi-globe',
        iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-500',
        description: 'Website company profile resmi korporat yang menampilkan portofolio layanan, keunggulan solusi, dan form kontak konsultasi klien.',
        tags: ['Laravel', 'Blade', 'Tailwind CSS', 'SEO']
    },
    {
        name: 'Sistem Peminjaman Buku Perpustakaan',
        type: 'Web Application',
        typeColor: 'amber',
        icon: 'pi pi-bookmark',
        iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-500',
        description: 'Sistem otomasi perpustakaan untuk katalogisasi buku, pencatatan sirkulasi peminjaman/pengembalian, dan denda keterlambatan.',
        tags: ['PHP', 'MySQL', 'CRUD', 'Reporting']
    },
    {
        name: 'Go Backend RESTful Architecture',
        type: 'Backend API',
        typeColor: 'purple',
        icon: 'pi pi-database',
        iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-500',
        description: 'Eksplorasi implementasi clean architecture, middleware security, otentikasi JWT, dan database ORM pada bahasa Go (Golang).',
        tags: ['Go (Golang)', 'REST API', 'JWT', 'Gorm']
    },
    {
        name: 'TBN National Hackathon Project',
        type: 'Innovation',
        typeColor: 'green',
        icon: 'pi pi-bolt',
        iconBg: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-500',
        description: 'Proyek inovasi kompetitif yang dirancang dan diimplementasikan dalam batas waktu hackathon guna memecahkan tantangan industri digital.',
        tags: ['Laravel', 'UI/UX', 'Hackathon']
    },
    {
        name: 'Interactive Visual Comic Engine',
        type: 'Game Dev',
        typeColor: 'purple',
        icon: 'pi pi-video',
        iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-500',
        description: 'Visual novel dan komik interaktif bercabang dengan alur narasi dinamis berbasis mesin Ren\'Py dan scripting Python.',
        tags: ['Ren\'Py', 'Python', 'Interactive Story']
    },
    {
        name: 'Internship Maxy Academy UI/UX Study',
        type: 'UI/UX Research',
        typeColor: 'blue',
        icon: 'pi pi-palette',
        iconBg: 'bg-pink-500/15 border-pink-500/30 text-pink-500',
        description: 'Program studi independen MSIB batch 6 berfokus pada riset pengguna, perancangan design system, wireframing, dan usability testing.',
        tags: ['Figma', 'UI/UX Design', 'Design Thinking']
    },
    {
        name: 'Python Weather & Utilities Suite',
        type: 'Desktop App',
        typeColor: 'amber',
        icon: 'pi pi-cloud',
        iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-500',
        description: 'Rangkaian aplikasi utilitas harian berbasis Python yang menyajikan prakiraan cuaca real-time dan kalkulator kegiatan terintegrasi.',
        tags: ['Python', 'Weather API', 'Tkinter / GUI']
    }
]);

const filteredProjects = computed(() => {
    if (!searchQuery.value.trim()) return projects.value;
    const q = searchQuery.value.toLowerCase();
    return projects.value.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.type.toLowerCase().includes(q)
    );
});
</script>

<template>
    <div
        class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark transition-colors"
    >
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <i class="pi pi-desktop text-brand-pink text-[18px]"></i>
                </div>
                <div>
                    <h3 class="text-[14px] font-bold text-text-main">My Projects Library</h3>
                    <p class="text-[11px] text-text-muted">
                        Menampilkan {{ filteredProjects.length }} dari {{ projects.length }} projects terkurasi (FE & BE terpadu)
                    </p>
                </div>
            </div>

            <!-- Search Filter -->
            <div class="relative">
                <i class="pi pi-search absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted"></i>
                <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Cari project atau teknologi..."
                    class="pl-7 pr-3 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-surface-border dark:border-surface-border-dark text-[11px] text-text-main placeholder:text-text-muted focus:outline-none focus:border-brand-pink transition-colors w-full sm:w-56"
                />
            </div>
        </div>

        <!-- Virtual Scroller with zero-lag icons -->
        <VirtualScroller
            :items="filteredProjects"
            :itemSize="108"
            class="border border-surface-border dark:border-surface-border-dark rounded-xl"
            style="width: 100%; height: 440px"
        >
            <template v-slot:item="{ item, options }">
                <div
                    :class="[
                        'group flex items-center gap-3.5 p-3 border-b border-surface-border dark:border-surface-border-dark last:border-b-0 transition-colors',
                        { 'bg-surface-bg/40 dark:bg-white/[0.02]': options.odd }
                    ]"
                    style="height: 108px"
                >
                    <!-- Lightweight Theme-Colored Icon Box (Zero-Lag) -->
                    <div
                        :class="[
                            'w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 shadow-2xs',
                            item.iconBg
                        ]"
                    >
                        <i :class="[item.icon, 'text-[22px] sm:text-[24px]']"></i>
                    </div>

                    <!-- Content -->
                    <div class="flex flex-col gap-1 overflow-hidden flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-2">
                            <h4 class="text-[12px] font-bold text-text-main truncate group-hover:text-brand-pink transition-colors">
                                {{ item.name }}
                            </h4>
                            <span
                                :class="[
                                    'text-[8px] font-semibold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider',
                                    item.typeColor === 'brand' ? 'bg-brand-pink/15 text-brand-pink' :
                                    item.typeColor === 'blue' ? 'bg-blue-500/15 text-blue-500' :
                                    item.typeColor === 'green' ? 'bg-emerald-500/15 text-emerald-500' :
                                    item.typeColor === 'purple' ? 'bg-purple-500/15 text-purple-500' :
                                    'bg-amber-500/15 text-amber-500'
                                ]"
                            >
                                {{ item.type }}
                            </span>
                        </div>

                        <p class="text-[10px] text-text-muted line-clamp-2 leading-relaxed">
                            {{ item.description }}
                        </p>

                        <!-- Tech tags -->
                        <div class="flex flex-wrap items-center gap-1 mt-0.5">
                            <span
                                v-for="tag in item.tags"
                                :key="tag"
                                class="text-[8px] font-medium bg-gray-100 dark:bg-white/5 text-text-muted px-1.5 py-0.5 rounded-md"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<style scoped>
:deep(.p-virtualscroller::-webkit-scrollbar) {
    width: 5px;
}

:deep(.p-virtualscroller::-webkit-scrollbar-track) {
    background: transparent;
}

:deep(.p-virtualscroller::-webkit-scrollbar-thumb) {
    background: #cbd5e1;
    border-radius: 9999px;
}

.dark :deep(.p-virtualscroller::-webkit-scrollbar-thumb),
[data-theme='dark'] :deep(.p-virtualscroller::-webkit-scrollbar-thumb),
[data-theme='dracula'] :deep(.p-virtualscroller::-webkit-scrollbar-thumb),
[data-theme='procyon'] :deep(.p-virtualscroller::-webkit-scrollbar-thumb) {
    background: #475569;
}
</style>
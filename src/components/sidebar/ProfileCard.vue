<script setup lang="ts">
const socials = [
    { label: 'Alamat', value: 'Jln. Pondok Trosobo Indah', icon: 'pi-map-marker', color: '' },
    { label: 'Email', value: 'ipanrossi2@gmail.com', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ipanrossi2@gmail.com', icon: 'pi-envelope', color: 'text-brand-blue' },
    { label: 'Telepon', value: '085707344523', url: 'tel:085707344523', icon: 'pi-phone', color: '' },
    { label: 'LinkedIn', value: 'ivano-rossi-sugiyanto', url: 'https://linkedin.com/in/ivano-rossi-sugiyanto', icon: 'pi-linkedin', color: 'text-brand-blue' },
    { label: 'GitHub', value: 'ipan140', url: 'https://github.com/ipan140', icon: 'pi-github', color: 'text-brand-blue' },
    { label: 'X (Twitter)', value: 'ivanorossi_x', url: 'https://twitter.com/ivanorossi_x', icon: 'pi-twitter', color: '' },
    { label: 'Instagram', value: '@ipanrossi', url: 'https://instagram.com/ipanrossi', icon: 'pi-instagram', color: '' },
];

const downloadCV = async () => {
    try {
        const response = await fetch('/img/CVATS_ivano.pdf');
        if (!response.ok) throw new Error('File tidak ditemukan');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV_Ivano_Rossi_Sugiyanto.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Gagal download:', error);
        alert('Gagal mendownload CV, coba lagi!');
    }
};
</script>

<template>
    <div class="bg-surface-card dark:bg-surface-card-dark rounded-xl p-5 border border-surface-border dark:border-surface-border-dark text-center shadow-sm transition-colors duration-300">

        <div class="flex justify-center mb-3">
            <img
                src="/img/img1.jpeg"
                alt="Ivano Rossi Sugiyanto"
                class="w-24 h-24 rounded-full object-cover object-center ring-2 ring-brand-pink"
            />
        </div>

        <h2 class="text-sm font-bold text-text-main">Ivano Rossi Sugiyanto</h2>
        <p class="text-[10px] text-text-muted leading-relaxed mb-4">
            UI/UX Designer | Frontend Developer | Backend Developer | Freelancer | Graphic Designer | Telkom University
            Surabaya Graduate
        </p>

        <button @click="downloadCV" class="block w-full no-underline bg-transparent border-0 p-0 cursor-pointer">
            <div class="group flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-surface-border dark:border-surface-border-dark hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-300">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink transition-colors">
                        <i class="pi pi-file-pdf text-brand-pink group-hover:text-white text-[14px]"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] font-bold text-text-main m-0">Curriculum Vitae</p>
                        <p class="text-[8px] text-text-muted m-0 uppercase tracking-wider">Download PDF</p>
                    </div>
                </div>
                <i class="pi pi-download text-text-muted group-hover:text-brand-pink text-[12px] pr-1"></i>
            </div>
        </button>

        <hr class="my-4 border-surface-border dark:border-surface-border-dark">

        <div class="text-left space-y-2.5">
            <div v-for="social in socials" :key="social.label" class="flex justify-between items-center text-[10px]">
                <div class="flex items-center gap-2 text-text-muted">
                    <i :class="['pi', social.icon, 'text-[11px]']"></i>
                    <span>{{ social.label }}</span>
                </div>
                <a v-if="social.url" :href="social.url" target="_blank"
                    :class="['font-medium truncate max-w-[120px] hover:underline', social.color || 'text-text-main']">
                    {{ social.value }}
                </a>
                <span v-else :class="['font-medium truncate max-w-[120px]', social.color || 'text-text-main']">
                    {{ social.value }}
                </span>
            </div>
        </div>
    </div>
</template>
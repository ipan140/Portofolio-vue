/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: { pink: '#e8417a', pinkDark: '#f0547c', blue: '#4878c0' },
                surface: {
                    light: '#eef0f4', dark: '#0f1117', cardLight: '#f5f6f8',
                    cardDark: '#181c25', borderLight: '#e2e4e9', borderDark: '#252a36'
                }
            },
            fontFamily: { sans: ['DM Sans', 'system-ui', 'sans-serif'] }
        },
    },
    plugins: [],
}
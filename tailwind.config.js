/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // 'gray-20': '#F8F4EB',
                'gray-20': '#23263a',
                // 'gray-20': '#f0f0f0',
                'gray-50': '#EFE6E6',
                'gray-100': '#f5f5f5',
                // 'gray-500': '#5E0000',
                'gray-500': '#f9f9f9',
                'primary-50': '#4b4d5e',
                'primary-100': '#2b2d41',
                'primary-200': '#23263a',
                'primary-250': '#1b1e2e',
                'primary-300': '#FFA6A3',
                'primary-500': '#FF6B66',
                // 'secondary-400': '#FFCD5B',
                // 'secondary-500': '#FFC132',
                'secondary-400': '#12e0c2',
                'secondary-500': '#12f7d6',
                'color-react': '#149eca',
                'color-node': '#448a43',
                'color-laravel': '#ff3326', 
                'color-sql': '#087892', 
                'color-express': '#393937', 
                'color-mongo': '#55ad47', 
            },
            backgroundImage: () => ({
                'gradient-yellowred':
                    'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
                'mobile-home': "url('./assets/HomePageGraphic.png')",
                'hero-pattern': "url('./assets/bg.svg')"
            }),
            fontFamily: {
                dmsans: ['DM Sans', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif']
            },
            content: {
                evolvetext: "url('./assets/EvolveText.png')",
                abstractwaves: "url('./assets/AbstractWaves.png')",
                sparkles: "url('./assets/Sparkles.png')",
                circles: "url('./assets/Circles.png')",
                hero: "url('./assets/bg.svg')"
            }
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1060px'
        }
    },
    plugins: [require('tailwind-scrollbar')]
};

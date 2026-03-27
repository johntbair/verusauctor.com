export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: { light: '#FAFBFC', dark: '#0A0A0F' },
        surface: { light: '#FFFFFF', dark: '#141420' },
        text: { 
          primary: { light: '#0A0A0F', dark: '#F0F0F5' },
          secondary: { light: '#4A4A5A', dark: '#9A9AB0' }
        },
        accent: { light: '#3B82F6', dark: '#60A5FA' },
        border: { light: '#E5E7EB', dark: '#1F1F35' },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

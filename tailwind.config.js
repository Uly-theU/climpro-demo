/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          600: '#2d5be3',
          700: '#1B3A6B',
          800: '#152d52',
          900: '#0e1f3a',
        },
        sun: {
          400: '#fb923c',
          500: '#F97316',
          600: '#ea6000',
        },
        cool: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 20px rgba(27,58,107,0.08)',
        hero: '0 8px 40px rgba(27,58,107,0.18)',
      },
    },
  },
  plugins: [],
}

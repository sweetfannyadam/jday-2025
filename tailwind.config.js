import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This line scans all your components in src
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        ink: '#4A4A4A',
        terracotta: '#E07A5F',
        'muted-blue': '#B4C5D8',
        background: '#F8F5F0',
      },
      fontFamily: {
        handwritten: ['Gaegu', 'cursive'],
        message: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

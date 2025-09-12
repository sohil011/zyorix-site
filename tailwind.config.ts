import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef7ff',
          100: '#d8ecff',
          200: '#b7dbff',
          300: '#8cc4ff',
          400: '#5aa7ff',
          500: '#2a86ff',
          600: '#1868db',
          700: '#1453af',
          800: '#123f84',
          900: '#102f63',
        },
        accent: { 500: '#16a34a' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;

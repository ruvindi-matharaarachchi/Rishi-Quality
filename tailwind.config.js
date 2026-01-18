/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          red: '#dc2626',
          orange: '#f97316',
          black: '#000000',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0d0d0d',
          200: '#000000',
        },
      },
    },
  },
  plugins: [],
}


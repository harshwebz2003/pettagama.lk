/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#F0F5FF',
          100: '#E0EAFF',
          200: '#C7D9FE',
          300: '#A4BCFD',
          400: '#7C96FA',
          500: '#526CF5',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F2A66',
          950: '#0B1A40',
        },
        accent: {
          red: '#DC2626',
          'red-hover': '#B91C1C',
          'red-light': '#FEE2E2',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

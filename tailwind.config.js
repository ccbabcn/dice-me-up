/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: {
          500:'#3b82f6',
          700:'#1d4ed8'
        },
        green: {
          500:'#84cc16',
          700:'##15803d'
        }
    },
      animation: {
      spin: 'spin 1s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        card: '#1e1e1e',
        'card-hover': '#252525',
        primary: '#ff2d55',
        'primary-glow': 'rgba(255, 45, 85, 0.4)',
        secondary: '#ffb81c',
        muted: '#b0b0b0',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideDown: 'slideDown 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}

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
          DEFAULT: '#0053A4',
          light: '#3375B6',
          dark: '#003A73',
        },
        secondary: '#00A4E4',
        neon: {
          blue: '#2563EB',
          purple: '#7C3AED',
          cyan: '#06B6D4',
          pink: '#EC4899',
        },
        dark: {
          bg: '#020617', // Very dark slate/black
          card: '#0F172A',
          surface: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}

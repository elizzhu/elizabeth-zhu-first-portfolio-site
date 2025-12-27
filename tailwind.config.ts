import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F7F7',
        'hero-bg': '#1a1a1a',
        'text-dark': '#1c2122',
        'text-dark-alt': '#1a1b1c',
        'text-light': '#cdcdcd',
      },
      fontFamily: {
        'serif': ['"BBH Bartle"', 'serif'],
        'sans': ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'profile': '40px',
      },
    },
  },
  plugins: [],
}

export default config


import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#10B981',
          gold: '#D97706',
          offwhite: '#F9FAFB',
          deeptext: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;

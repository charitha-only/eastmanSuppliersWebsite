import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf6ef',
        ink: '#171717',
        muted: '#6f6b66',
        line: '#e9e0d7',
        accent: '#ef4f55',
        accentSoft: '#fff0f1'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 23, 23, 0.09)'
      }
    }
  },
  plugins: []
};

export default config;

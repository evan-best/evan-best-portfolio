import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Icons',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#111111',
        secondary: '#f5f5f7',
        accent: '#0071e3',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        type: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        blink: 'blink 1.5s ease-in-out infinite',
        type: 'type 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config; 
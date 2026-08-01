import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"DM Sans"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

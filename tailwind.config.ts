import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"SF Mono"',
          '"SFMono-Regular"',
          '"Menlo"',
          '"Monaco"',
          '"JetBrains Mono"',
          '"Consolas"',
          'monospace',
        ],
      },
      boxShadow: {
        terminal: '0 24px 80px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
} satisfies Config;

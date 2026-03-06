import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Deep forest primary — #1B4332 / #2D6A4F as brand anchors */
        forest: {
          50:  '#eefbf3',
          100: '#d6f5e0',
          200: '#b0eac6',
          300: '#7cd9a5',
          400: '#52B788', /* Löv-accent */
          500: '#2D6A4F', /* Primary mid */
          600: '#1B4332', /* Primary deep */
          700: '#163a2b',
          800: '#122f23',
          900: '#0e251c',
          950: '#071510',
        },
        /* Warm off-white background */
        cream: {
          50:  '#FDFCFA',
          100: '#F8F5F0', /* Primary background */
          200: '#F0EBE3',
          300: '#E5DED3',
          400: '#D4CABF',
        },
        /* Night — deepest greens for dark sections */
        night: {
          50:  '#f0fdf6',
          100: '#dbfce9',
          200: '#baf7d4',
          300: '#84f0b3',
          400: '#47e089',
          500: '#1fc768',
          600: '#13a452',
          700: '#138143',
          800: '#156539',
          900: '#0d2818',
          950: '#041a0e',
        },
        /* Slate-forest for neutral UI elements */
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        /* Accent — amber for CTAs (#E76F00) */
        accent: {
          50:  '#FFF8F0',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#E76F00', /* Primary CTA color */
          700: '#C2610A',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        /* Spectrum — NDVI/multispectral visualization palette */
        spectrum: {
          red:    '#d73027',
          orange: '#fc8d59',
          yellow: '#fee08b',
          lime:   '#d9ef8b',
          green:  '#91cf60',
          deep:   '#1a9850',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

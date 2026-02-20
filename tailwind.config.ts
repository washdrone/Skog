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
        /* Forestry palette — grounded, natural, professional */
        skog: {
          50: '#f4f7f2',
          100: '#e5ebe1',
          200: '#ccd8c5',
          300: '#a6bc9b',
          400: '#7d9c6e',
          500: '#5e804f',
          600: '#49663d',
          700: '#3b5232',
          800: '#31432b',
          900: '#293824',
          950: '#131e10',
        },
        bark: {
          50: '#faf6f1',
          100: '#f0e8db',
          200: '#e0ceb5',
          300: '#cdaf88',
          400: '#bc9363',
          500: '#b07f4c',
          600: '#9a6840',
          700: '#805137',
          800: '#6a4332',
          900: '#58382b',
          950: '#311c15',
        },
        mark: {
          50: '#f7f6f4',
          100: '#edebe5',
          200: '#d9d5cc',
          300: '#c1baab',
          400: '#a89c89',
          500: '#978870',
          600: '#8a7964',
          700: '#736454',
          800: '#605348',
          900: '#50463e',
          950: '#2a2420',
        },
        terrain: {
          50: '#f5f7fa',
          100: '#eaedf3',
          200: '#d0d8e5',
          300: '#a8b8cf',
          400: '#7a93b4',
          500: '#59769c',
          600: '#465e82',
          700: '#3a4d6a',
          800: '#334259',
          900: '#2e394b',
          950: '#1e2532',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'topo-pattern': "url('/images/topo-pattern.svg')",
      },
    },
  },
  plugins: [],
}

export default config

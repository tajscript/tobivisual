import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)'],
        raleway: ['var(--font-raleway)'],
        cute: ['var(--font-cute)'],
      },
      colors: {
        'offgray': '#f1d302',
        'offwhite': '#D9D9D9',
        'yellowGreen': '#A2D729',
        'magenta': '#80475E',
        'flame': '#EE6055'
      }
    },
  },
  plugins: [],
}
export default config

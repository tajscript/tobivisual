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
        raleway: ['var(--font-raleway)']
      },
      colors: {
        'offgray': '#333333',
        'offwhite': '#D9D9D9'
      }
    },
  },
  plugins: [],
}
export default config

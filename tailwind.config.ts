import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      translate: {
        '-50': '-50%',
        '-300': '-300px',
      },
      grayscale: {
        '0.5': '0.5',
      },
      flex: {
        '1': '1 1 0%',
        'auto': '1 1 auto',
        'initial': '0 1 auto',
        'none': 'none',
        '2': '2 2 0%',
        'grow': '1 1 100%',
      },
      screens: {
        'xxs' : '350px',
        'xs' : '400px',
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
        '3xl' : '1920px',
        '4xl' : '2560px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
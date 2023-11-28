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
      screens: {
        'xxs' : '350px',
        'xs' : '400px',
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
        '3xl' : '1920px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config

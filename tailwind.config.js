/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,md,mdx,ts,tsx}',
    './components/**/*.{js,jsx,md,mdx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#219AB3',
      black: '#000000',
      white: '#ffffff',
      lightpink: '#FBA1A1',
      darkpink: '#FF8383',
      lightpurple: '#C8A1FB',
      yellow: '#FBF2A1',
      gray: '#6b7280'
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}
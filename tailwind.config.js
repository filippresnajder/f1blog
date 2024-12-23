/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      formula: ["F1", "sans-serif"],
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

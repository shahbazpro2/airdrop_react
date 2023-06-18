/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#cc10ed',
        "primary-light": "#FFF2F2",
        'secondary': '#181828',
        'dark': '#12131e',
        'light': '#fff2f296'
      }
    },
  },
  plugins: [],
}


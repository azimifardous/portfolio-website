/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#0B0C10",
        'primary': "#66FCF1",
        'secondary': "#45A29E",
        'accent': '#1F2833',
        'myGray': '#C5C6C7'
      },
    },
  },
  plugins: [],
}


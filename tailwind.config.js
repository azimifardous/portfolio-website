/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#2E024E",
        'primary': "#D579FF",
        "secondary": "#D579FF",
        "accent": "#FFFFFF"
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightemerald": "#10b981",
        "sherwood": "#114232",
        "stalelime": "#F7F6BB",
        "ivory": "#FFFFF0",
      },
    },
  },
  plugins: [],
}


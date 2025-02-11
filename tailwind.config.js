/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate": "#1e1e1e",
        "lightemerald": "#10b981",
        "sherwood": "#114232",
        "azure": "#90d7ff",
        "stalelime": "#F7F6BB",
        "ivory": "#FFFFF0",
      },
    },
  },
  plugins: [],
}


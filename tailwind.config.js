/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-background":
          "linear-gradient(to right, #FFFFFF, #F9F9F8, #F2F3F2, #ECECEB, #E5E6E4)",
      },
      colors: {
        "dark-green": "#03312e",
        cinereous: "#92817a",
        almond: "#f1dabf",
        "snow-white": "#fffbff",
        jade: "#04a777",
      },
    },
  },
  plugins: [],
};

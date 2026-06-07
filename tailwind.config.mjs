/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050510",
        secondary: "#aaa6c3",
        accent: "#8d6eff",
        "accent-2": "#6ea8ff",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Poppins"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

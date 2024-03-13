/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#f6f7fa",
        "font-normal": "#616178",
        "font-title": "#1c1c2c",
        primary: "#FF3CC7",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient:
          'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")',
        home: 'url("https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365")',
        hero: "url('/public/images/Hero.jpg')",
      },
      color: {
        "-----------------red--------------------": "red",

        "red-100": "#FFCCCC",
        "red-200": "#FFE5CC",
        "red-300": "#FF6666",
        "red-400": "#FF3333",
        "red-700": "#CC0000",

        "-----------------orange--------------------": "orange",

        "orange-100": "#FFE5CC",
        "orange-200": "#ffcc99",
        "orange-300": "#ffb266",
        "orange-400": "#ff9933",

        "-----------------gray--------------------": "gray",

        "gray-100": "#939EA4",

        "-----------------blue--------------------": "blue",

        "37447E": "#37447E",
        "111B47": "#111B47",
      },
      fontFamily: {
        banana: ["JetskisInSummer", "sans-serif"],
        rough: ["Love Story Rough", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

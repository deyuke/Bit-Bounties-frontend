import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "s": "13px",
        "xs": "11px",
      },
      colors: {
        primary: "#FFA200",
        secondary: "#000000",
        info: "#007ce8",
        success: "#00D68F",
        danger: "#ea5455",
        warning: "#ff9f43",
      },
    },
  },
  plugins: [],
};
export default config;

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
        secondary: "#FFD700",
        tertiary: "#FFA500",
        quaternary: "#FF4500",
        quinary: "#FF6347",
        senary: "#FF0000",
        septenary: "#FF1493",
        octonary: "#FF69B4",
        nonary: "#FFC0CB",
        denary: "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;

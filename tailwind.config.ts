import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--textColor)",
        hoverTextColor: "var(--hoverTextColor)",
        btnBgColor: "var(--btnBgColor)",
        bgbuttonColor: "var(--bgbuttonColor)",
        bgButtonHover: "var(--bgButtonHover)",
        iconColor: "var(--iconColor)"

      },
      fontFamily: {
        inter: ["inter", "serif"],
        righteous: ["righteous", "serif"],
        bebasNeue: ["bebasNeue", "serif"],
        anton: ["anton", "serif"],
        lato: ["lato", "serif"],
        dancingScript: ["dancingScript", "serif"],
        alexBrush: ["alexBrush"]

      },
    },
  },
  plugins: [],
} satisfies Config;

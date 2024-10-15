import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'brand-purple-dark': '#2E2874',
        'brand-purple-light': '#706CE1'
      }
    },
  },
  plugins: [],
} satisfies Config;

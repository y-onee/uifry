import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'clash-display-bold': [
          // 'ClashDisplay-Extralight',
          // 'ClashDisplay-Light',
          // 'ClashDisplay-Regular',
          // 'ClashDisplay-Medium',
          // 'ClashDisplay-Semibold',
          'ClashDisplay-Bold',
          'ClashDisplay-Variable',
          
        ],
        'clash-display-light': [
          // 'ClashDisplay-Extralight',
          'ClashDisplay-Light',
          // 'ClashDisplay-Regular',
          // 'ClashDisplay-Medium',
          // 'ClashDisplay-Semibold',
          // 'ClashDisplay-Bold',
          // 'ClashDisplay-Variable',
          
        ],
        'clash-display-medium': [
          // 'ClashDisplay-Extralight',
          // 'ClashDisplay-Light',
          // 'ClashDisplay-Regular',
          'ClashDisplay-Medium',
          // 'ClashDisplay-Semibold',
          // 'ClashDisplay-Bold',
          // 'ClashDisplay-Variable',
          
        ],
        'clash-display-semibold': [
          // 'ClashDisplay-Extralight',
          // 'ClashDisplay-Light',
          // 'ClashDisplay-Regular',
          // 'ClashDisplay-Medium',
          'ClashDisplay-Semibold',
          // 'ClashDisplay-Bold',
          // 'ClashDisplay-Variable',
          
        ],
        clash: ["var{--font-clash}"],
      },
    },
  },
  plugins: [],
};
export default config;

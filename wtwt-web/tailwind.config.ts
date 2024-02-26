import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        400: '400px',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      colors: {
        primary: {
          main: '#3C70FF',
          subMain: '#6A92FF',
          background: '#F8F8F9',
        },
        text: {
          general: '#1E1E1E',
          inputLabel: '#707070',
          title: '#8F8F8F',
          black: '#000000',
          placeHolder: '#C1C1C1',
        },
        grey: {
          grey1: '#F8F8F9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

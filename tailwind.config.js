import { colors } from './src/constants/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      dark: 'rgb(var(--color-dark) / <alpha-value>)',
      light: 'rgb(var(--color-light) / <alpha-value>)',
      muted: 'rgb(var(--color-muted) / <alpha-value>)',
      info: 'rgb(var(--color-info) / <alpha-value>)',

      background: {
        dark: 'rgb(var(--color-background-dark) / <alpha-value>)',
        light: 'rgb(var(--color-background-light) / <alpha-value>)',
        brand: 'rgb(var(--color-background-brand) / <alpha-value>)',
      },

      brand: {
        0: 'rgb(var(--color-brand-0) / <alpha-value>)',
        1: 'rgb(var(--color-brand-1) / <alpha-value>)',
        2: 'rgb(var(--color-brand-2) / <alpha-value>)',
        3: 'rgb(var(--color-brand-3) / <alpha-value>)',
        4: 'rgb(var(--color-brand-4) / <alpha-value>)',
        5: 'rgb(var(--color-brand-5) / <alpha-value>)',
        6: 'rgb(var(--color-brand-6) / <alpha-value>)',
      },

      body: {
        dark: 'rgb(var(--color-body-dark) / <alpha-value>)',
        light: 'rgb(var(--color-body-light) / <alpha-value>)',
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ':root': {
          '--color-dark': colors.dark,
          '--color-light': colors.light,
          '--color-muted': colors.muted,
          '--color-info': colors.info,

          '--color-background-dark': colors.background.dark,
          '--color-background-light': colors.background.light,
          '--color-background-brand': colors.background.brand,

          '--color-brand-0': colors.brand[0],
          '--color-brand-1': colors.brand[1],
          '--color-brand-2': colors.brand[2],
          '--color-brand-3': colors.brand[3],
          '--color-brand-4': colors.brand[4],
          '--color-brand-5': colors.brand[5],
          '--color-brand-6': colors.brand[6],

          '--color-body-dark': colors.body.dark,
          '--color-body-light': colors.body.light,
        },
      }),
  ],
};

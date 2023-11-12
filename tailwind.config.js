/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      dark: 'rgb(var(--color-dark) / <alpha-value>)',
      light: 'rgb(var(--color-light) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      notify: 'rgb(var(--color-notify) / <alpha-value>)',
      muted: 'rgb(var(--color-muted) / <alpha-value>)',

      accent: {
        dark: 'rgb(var(--accent-dark) / <alpha-value>)',
        light: 'rgb(var(--accent-light) / <alpha-value>)',
      },
      background: {
        dark: 'rgb(var(--background-dark) / <alpha-value>)',
        light: 'rgb(var(--background-light) / <alpha-value>)',
      },
      brand: {
        primary: 'rgb(var(--brand-primary) / <alpha-value>)',
        secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--brand-tertiary) / <alpha-value>)',
        quaternary: 'rgb(var(--brand-quaternary) / <alpha-value>)',
      },
      receiver: {
        dark: 'rgb(var(--receiver-dark) / <alpha-value>)',
        light: 'rgb(var(--receiver-light) / <alpha-value>)',
      },
      sender: {
        dark: 'rgb(var(--sender-dark) / <alpha-value>)',
        light: 'rgb(var(--sender-light) / <alpha-value>)',
      },
    },
  },
};

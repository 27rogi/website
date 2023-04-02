import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: true,
  attributify: false,
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        '"InterVariable"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      headline: ['"RalewayVariable"', '-apple-system', '"Helvetica Neue"', '"Segoe UI"'],
    },
    extend: {
      colors: {
        'villa-green': {
          50: '#e5f7ef',
          100: '#caeee0',
          200: '#afe6d1',
          300: '#92ddc2',
          400: '#73d4b3',
          500: '#4ecba4',
          600: '#43a687',
          700: '#38826a',
          800: '#2d614f',
          900: '#224136',
        },
        gray: {
          50: '#edeff0',
          100: '#d8dbde',
          200: '#b9bec3',
          300: '#a3aab0',
          400: '#848d95',
          500: '#5d656d',
          600: '#4b5258',
          700: '#393e43',
          800: '#272a2e',
          900: '#0c0d0e',
        },
      },
    },
  },
})

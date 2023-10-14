import { defineConfig, presetTypography } from 'unocss'

import { presetWind } from '@unocss/preset-wind'
import { presetForms } from '@julr/unocss-preset-forms'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|md|astro|elm|php|phtml|html)($|\?)/,
      ],
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetWind(),
    presetForms(),
    presetScrollbar(),
    presetScrollbarHide(),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: '\'Inter Variable\'',
      headline: '\'Raleway Variable\'',
    },
    colors: {
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
      villaGreen: {
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
    },
  },
})

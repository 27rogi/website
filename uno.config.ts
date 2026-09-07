import { presetAttributify } from "@unocss/preset-attributify"
// import { presetTypography } from "@unocss/preset-typography"
import presetWind from "@unocss/preset-wind4"
import { createRemToPxProcessor } from "@unocss/preset-wind4/utils"
import transformerDirectives from "@unocss/transformer-directives"
import transformerVariantGroup from "@unocss/transformer-variant-group"
import { defineConfig } from "@unocss/vite"

export default defineConfig({
  postprocess: [
    createRemToPxProcessor(),
  ],
  presets: [
    presetWind(),
    presetAttributify({
      prefix: "u-",
    }),
  ],
  shortcuts: [
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    [/^card-(.*)\/(.*)$/, ([, color, opacity]) => `border border-${color}-200 border-opacity-${opacity} bg-${color}-600 bg-opacity-${Number(opacity) - 10} rounded-md`],
  ],
  theme: {
    colors: {
      "greendark": {
        100: "#abf3e2",
        200: "#56e8c6",
        300: "#1bc49c",
        400: "#0f6f59",
        500: "#041d17",
        600: "#031611",
        700: "#02100d",
        800: "#010b09",
        900: "#010504",
      },
      "greenspring": {
        100: "#c9fdeb",
        200: "#92fcd7",
        300: "#5cfac3",
        400: "#25f8ae",
        500: "#07e194",
        600: "#06b276",
        700: "#048658",
        800: "#03593b",
        900: "#012d1d",
      },
      "testudo-gold": {
        50: "rgb(255 246 229)",
        100: "rgb(255 236 204)",
        200: "rgb(255 218 153)",
        300: "rgb(255 199 102)",
        400: "rgb(255 180 51)",
        500: "rgb(255 162 0)",
        600: "rgb(204 129 0)",
        700: "rgb(153 97 0)",
        800: "rgb(102 65 0)",
        900: "rgb(51 32 0)",
        950: "rgb(36 23 0)",
      },

    },
    font: {
      content: "'Martian Mono', monospace",
      head: "'Roboto Serif', sans-serif",
    },
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})

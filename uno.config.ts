// uno.config.ts
import { presetAttributify } from "@unocss/preset-attributify"
import { presetTypography } from "@unocss/preset-typography"
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
    presetWind({
      preflights: {
        reset: false,
      },
    }),
    presetAttributify({
      prefix: "u-",
    }),
    presetTypography(),
  ],
  shortcuts: [
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    [/^card-(.*)\/(.*)$/, ([, color, opacity]) => `border border-${color}-200 border-opacity-${opacity} bg-${color}-600 bg-opacity-${Number(opacity) - 10} rounded-md`],
    [/^card-highlight-(.*)$/, ([, c]) => `hover:border-${c}-200/50`],
  ],
  theme: {
    colors: {
      brilliantsea: {
        50: "#f0fdfc",
        100: "#C8F4F4",
        200: "#8CE8E8",
        300: "#55DDDD",
        400: "#28C6C6",
        500: "#21A5A5",
        600: "#1B8484",
        700: "#146262",
        800: "#0E4444",
        900: "#072222",
      },
      greendark: {
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
      greenspring: {
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
    },
    font: {
      content: "'Cascadia Code Variable', monospace",
      head: "'Unbounded Variable', sans-serif",
    },
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})

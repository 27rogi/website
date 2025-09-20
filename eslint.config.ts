import antfu from "@antfu/eslint-config"
import sort from "eslint-plugin-sort"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(antfu({
  formatters: true,
  stylistic: {
    indent: 2,
    quotes: "double",
  },
  unocss: true,
  vue: true,
}).append()).append(
  sort.configs["flat/recommended"],
).overrideRules({
  "@stylistic/indent": ["error", 2],
  "@stylistic/quotes": ["error", "double"],
  "sort/imports": "off",
  "vue/component-name-in-template-casing": ["error", "PascalCase"],
  "vue/first-attribute-linebreak": ["warn", {
    multiline: "ignore",
    singleline: "ignore",
  }],
  "vue/singleline-html-element-content-newline": [
    "warn",
    {
      ignores: ["textarea", "pre", "p", "span"],
    },
  ],
})

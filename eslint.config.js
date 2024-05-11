import stylistic from "@stylistic/eslint-plugin";
import unocss from "@unocss/eslint-config/flat";
import sort from "eslint-plugin-sort";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  sort.configs["flat/recommended"],
  unocss,
  {
    ignores: ["node_modules/*"],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/indent": ["error", 2],   
      "@stylistic/quotes": ["error", "double"],
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
      ],
      "vue/singleline-html-element-content-newline": ["warn", {
        ignores: ["textarea", "pre", "p", "span"],
      }],
    },
  },
])

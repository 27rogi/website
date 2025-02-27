import unheadVite from "@unhead/addons/vite";
import viteSVGLoader from "vite-svg-loader";

const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-02",

  css: [
    "@fontsource-variable/martian-mono/wdth.css",
    "@fontsource-variable/unbounded",
    "@unocss/reset/tailwind.css",
  ],

  devtools: {
    enabled: isDev,
    timeline: {
      enabled: true,
    },
  },

  // Module Settings
  /* eslint-disable sort/object-properties */
  eslint: {
    config: {
      stylistic: false,
    },
  },

  experimental: {
    // results in #app-manifest errors in Bun
    appManifest: false,
    crossOriginPrefetch: true,
    typedPages: true,
    // Investigate: Using parcel watcher gives better speed for large projects
    // and works better under windows, according to:
    // https://nuxt.com/docs/guide/going-further/experimental-features#watcher
    watcher: "parcel",
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  i18n: {
    langDir: "locales",
    baseUrl: "rogi.su",
    locales: [
      {
        code: "en",
        language: "en",
        files: [
          "en/general.json",
          "en/pages/index.json",
          "en/pages/projects.json",
        ],
      },
      {
        code: "ru",
        language: "ru",
        files: [
          "ru/general.json",
          "ru/pages/index.json",
          "ru/pages/projects.json",
        ],
      },
    ],
    strategy: "prefix",
    detectBrowserLanguage: false,
    defaultLocale: "en",
    // Reduces downloaded size of the bundle and also
    // and allows to easily detect unstranslated strings
    lazy: true,
    skipSettingLocaleOnNavigate: true,
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },

  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    // Produces few webpack errors on dev when using Bun
    // seems to also cause https://github.com/nuxt-modules/i18n/issues/2800
    // see: https://github.com/oven-sh/bun/issues/8756
    "@nuxtjs/i18n",
    "@unocss/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "nuxt-payload-analyzer",
    // Security headers interfere with devtools and may
    // cause issues for hot reloading
    isDev ? null : "nuxt-security",
    // TODO: implement testing, Bun doesn't support Vitest yet
    // "@nuxt/test-utils/module",
    "floating-vue/nuxt",
  ],

  nitro: {
    compressPublicAssets: true,
    // esbuild: {
    //   options: {
    //     target: "esnext",
    //   },
    // },
    preset: "bun",
  },

  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
    "/api/*": { cache: isDev ? false : { maxAge: 15 * 60 }, cors: true },
  },

  runtimeConfig: {
    ghApiBase: "https://api.github.com",
    ghApiToken: "",
    public: {
      branch: "v3",
      bunver: "",
    },
  },

  typescript: {
    strict: true,
    // Causes some incompatabilities with nuxt-icons
    // typeCheck: true,
  }
  /* eslint-enable sort/object-properties */,

  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    plugins: [
      viteSVGLoader(),
      unheadVite(),
    ],
  }
});
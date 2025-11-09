import viteUnoCSS from "@unocss/vite"
import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"
import viteSVGLoader from "vite-svg-loader"

// eslint-disable-next-line node/prefer-global/process
export const isDev = process.env.NODE_ENV !== "production"

/* eslint-disable sort/object-properties */
export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vueuse/nuxt",
    // TODO: Seems to be buggy when using lightningcss as Vite transformer, using
    // UnoCSS vite plugin seems to be more stable, but needs further investigation
    // "@unocss/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "nuxt-payload-analyzer",
    // Security headers interfere with devtools and may
    // cause issues for hot reloading
    isDev ? null : "nuxt-security",
    // TODO: implement testing, Bun is able to run Vitest now, but stability is unknown
    "@nuxt/test-utils/module",
    "floating-vue/nuxt",
    "@nuxt/content",
  ],

  devtools: {
    // to use devtools with bun use --no-fork flag
    enabled: true,
    timeline: { enabled: true },
  },

  app: {
    pageTransition: {
      name: "fadePage",
      mode: "out-in",
    },
    layoutTransition: {
      name: "fadeLayout",
      mode: "out-in",
    },
  },

  css: [
    "@fontsource-variable/martian-mono",
    "@fontsource-variable/unbounded",
    // UnoCSS Wind4 has preflight reset that breaks lightningcss, using old method until fixed
    "@unocss/reset/tailwind.css",
    "virtual:uno.css",
  ],

  runtimeConfig: {
    ghApiBase: "https://api.github.com",
    ghApiToken: "",
    public: {
      branch: "v3",
      bunver: "",
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/api/*": { cache: isDev ? false : { maxAge: 15 * 60 }, cors: true },
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    crossOriginPrefetch: true,
    typedPages: true,
    // Investigate: Using parcel watcher gives better speed for large projects
    // and works better under windows, according to:
    // https://nuxt.com/docs/guide/going-further/experimental-features#watcher
    watcher: "parcel",
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
  compatibilityDate: "2025-11-08",

  nitro: {
    compressPublicAssets: true,
    preset: "bun",
    minify: true,
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  vite: {
    css: {
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
      transformer: "lightningcss",
    },
    plugins: [
      viteUnoCSS(),
      viteSVGLoader(),
    ],
  },

  typescript: {
    strict: true,
  },

  // Module Settings
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: false,
      },
    },
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
    skipSettingLocaleOnNavigate: true,
    experimental: {
      strictSeo: true,
    },
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },
})

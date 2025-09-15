import viteSVGLoader from "vite-svg-loader";

// eslint-disable-next-line node/prefer-global/process
const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  compatibilityDate: "2025-09-03",

  css: [
    "@fontsource-variable/cascadia-code",
    "@fontsource-variable/unbounded",
    "@unocss/reset/tailwind.css",
  ],
  
  devtools: {
    // to use devtools with bun use --no-fork flag
    enabled: true
  },

  // Module Settings
  /* eslint-disable sort/object-properties */
  eslint: {
    config: {
      standalone: false,
      stylistic: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  experimental: {
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
    skipSettingLocaleOnNavigate: true,
    experimental: {
      strictSeo: true,
    }
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
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "nuxt-payload-analyzer",
    // Security headers interfere with devtools and may
    // cause issues for hot reloading
    isDev ? null : "nuxt-security",
    // TODO: implement testing, Bun doesn't support Vitest yet
    // "@nuxt/test-utils/module",
    "floating-vue/nuxt",
    "@nuxt/test-utils/module"
  ],

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
    ],
  },
});
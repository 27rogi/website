import viteSVGLoader from "vite-svg-loader"

// eslint-disable-next-line node/prefer-global/process
export const isDev = process.env.NODE_ENV !== "production"

/* eslint-disable sort/object-properties */
export default defineNuxtConfig({
  compatibilityDate: "2026-04-16",

  modules: [
    "@nuxt/fonts",
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@pinia/nuxt",
    // @nuxtjs/seo must be loaded before @nuxt/content
    // https://nuxtseo.com/docs/nuxt-seo/migration-guide/v4-to-v5#ensure-correct-module-order
    "@nuxtjs/seo",
    "nuxt-i18n-micro",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "nuxt-payload-analyzer",
    // breaks dev mode, enabled only for production
    isDev ? undefined : "nuxt-security",
    // TODO: implement testing, Bun is able to run Vitest now, but stability is unknown
    // "@nuxt/test-utils/module",
    "@nuxt/content",
    "nuxt-vitalizer",
    "nuxt-elysia",
  ],

  devtools: {
    enabled: true, // windows requires --no-fork flag
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

  runtimeConfig: {
    ghApiBase: "https://api.github.com",
    ghApiToken: "",
    public: {
      branch: "v4",
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/ru": { prerender: true },
    "/reviews": { swr: true },
    "/reviews/**": { swr: 3600 },
    "/projects": { swr: true },
    "/api/*": { cache: isDev ? false : { maxAge: 15 * 60 }, cors: true },
  },

  future: {
    // nuxt v5 became too different from v4, many issues arise currently
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  features: {
    // enabled for vitalizer workaround (https://nuxt.com/modules/vitalizer#stop-render-blocking-css)
    inlineStyles: true,
  },

  experimental: {
    writeEarlyHints: true,
    crossOriginPrefetch: true,
    typedPages: true,
    typescriptPlugin: true,
  },

  nitro: {
    preset: "bun",
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      autoSubfolderIndex: false,
      failOnError: false,
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
      ignore: [
        // ignore duplicating i18n pathes
        /^\/en$/,
        /^\/ru\/(en|ru)/,
      ],
    },
  },

  vite: {
    plugins: [
      viteSVGLoader(),
    ],
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "vue-tippy",
        "date-fns",
        "date-fns/locale",
        "@elysiajs/eden",
      ],
    },
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
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "ru", iso: "ru-RU", dir: "ltr" },
    ],
    defaultLocale: "en",
    translationDir: "i18n/locales",
    meta: true,
    localeCookie: "user-locale", // Required for redirects to work properly
    autoDetectLanguage: false,
    experimental: {
      i18nPreviousPageFallback: true,
    },
  },

  site: {
    name: "rogi#su",
    url: "https://rogi.su",
  },

  ogImage: {
    zeroRuntime: true,
  },

  sitemap: {
    zeroRuntime: true,
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
    domains: ["img.youtube.com", "i.vimeocdn.com"],
    alias: {
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      subsets: [
        "latin-ext",
        "latin",
        "cyrillic",
      ],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },

  vitalizer: {
    disableStylesheets: true,
  },

  // @ts-expect-error: nuxt-security module is disabled in dev mode which results in missing types
  security: {
    // TODO: check why it causes payload errors if enabled
    ssg: false,
    headers: {
      crossOriginEmbedderPolicy: false,
      // firefox fix: https://nuxt-security.vercel.app/advanced/faq#issue-on-firefox-when-using-iframe
      crossOriginOpenerPolicy: false,
      // fix, because default security headers seem to block external cloudflare scripts
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:"],
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
        "script-src-elem": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'unsafe-eval'",
        ],
        "connect-src": [
          "'self'",
          "https:",
        ],
      },
    },
  },
})

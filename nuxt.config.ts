// import viteUnoCSS from "@unocss/vite"
// import browserslist from "browserslist"
// import { browserslistToTargets } from "lightningcss"
import viteSVGLoader from "vite-svg-loader"

// eslint-disable-next-line node/prefer-global/process
export const isDev = process.env.NODE_ENV !== "production"

/* eslint-disable sort/object-properties */
export default defineNuxtConfig({

  features: {
    // reduces CLS (https://kylev.dev/blog/fixing-cumulative-layout-shift-nuxt-3/)
    inlineStyles: false,
  },

  modules: [
    "@nuxt/devtools",
    "@nuxt/eslint",
    "@pinia/nuxt",
    // must be loaded before @nuxt/content
    // https://nuxtseo.com/docs/nuxt-seo/migration-guide/v4-to-v5#ensure-correct-module-order
    "@nuxtjs/seo",
    "nuxt-i18n-micro",
    "@nuxt/image",
    "@vueuse/nuxt",
    // TODO: Seems to be buggy when using lightningcss as Vite transformer, using
    // UnoCSS vite plugin seems to be more stable, but needs further investigation
    "@unocss/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "nuxt-payload-analyzer",
    "nuxt-security",
    // TODO: implement testing, Bun is able to run Vitest now, but stability is unknown
    // "@nuxt/test-utils/module",
    "@nuxt/content",
    // TODO: breaks loading of devtools and other modules on latest Nuxt, investigate later
    // "nuxt-booster",
    "nuxt-vitalizer",
    "nuxt-elysia",
  ],

  // to use devtools with bun on Windows use --no-fork flag
  devtools: {
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
    // "virtual:uno.css",
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
    "/": { prerender: false },
    "/ru": { prerender: true },
    "/en": { prerender: true },
    "/reviews": { swr: true },
    "/reviews/**": { swr: 3600 },
    "/projects": { swr: true },
    "/api/*": { cache: isDev ? false : { maxAge: 15 * 60 }, cors: true },
  },

  future: {
    compatibilityVersion: 5,
    typescriptBundlerResolution: true,
  },

  experimental: {
    // as of Nuxt 4.3.0 this feature breaks DevTools, vue-tippy and other modules
    viteEnvironmentApi: false,
    writeEarlyHints: true,
    crossOriginPrefetch: true,
    typedPages: true,
    // Investigate: Using parcel watcher gives better speed for large projects
    // and works better under windows, according to:
    // https://nuxt.com/docs/guide/going-further/experimental-features#watcher
    // watcher: "parcel",
    typescriptPlugin: true,
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
      // viteUnoCSS(),
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

  sitemap: {
    zeroRuntime: true,
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
    // nuxt-booster requirements
    domains: ["img.youtube.com", "i.vimeocdn.com"],
    alias: {
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    },
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },

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

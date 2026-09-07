// eslint-disable-next-line node/prefer-global/process
export const isDev = process.env.NODE_ENV !== "production"

export default defineNuxtConfig({
  app: {
    layoutTransition: {
      mode: "out-in",
      name: "fadeLayout",
    },
    pageTransition: {
      mode: "out-in",
      name: "fadePage",
    },
  },

  compatibilityDate: "2026-08-13",

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: false,
      },
      standalone: false,
    },
  },

  experimental: {
    typescriptPlugin: true,
    watcher: "builder",
  },

  features: {
    // enabled for vitalizer workaround (https://nuxt.com/modules/vitalizer#stop-render-blocking-css)
    inlineStyles: true,
  },

  fonts: {
    defaults: {
      subsets: [
        "latin-ext",
        "latin",
        "cyrillic",
      ],
      weights: [400, 500, 600, 700, 800, 900],
    },
    providers: {
      adobe: false,
      bunny: false,
      fontshare: false,
      google: false,
      googleicons: false,
    },
  },

  future: {
    compatibilityVersion: 5,
  },

  i18n: {
    // Required for redirects to work properly
    autoDetectLanguage: false,
    defaultLocale: "en",
    localeCookie: "user-locale",
    locales: [
      { code: "en", dir: "ltr", iso: "en-US" },
      { code: "ru", dir: "ltr", iso: "ru-RU" },
    ],
    meta: true,
  },

  icon: {
    clientBundle: {
      scan: { globInclude: ["**\/*.{vue,jsx,tsx,md,mdc,mdx,ts}"] },
    },
    customCollections: [
      {
        dir: "./app/assets/icons",
        prefix: "custom",
      },
    ],
    // mode: "svg",
  },

  modules: [
    "nuxt-i18n-micro",
    "nuxt-elysia",
    "@nuxt/eslint",
    "@nuxt/icon",
    "nuxt-security",
    "@nuxtjs/seo",
    "@nuxt/fonts",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    // breaks many things, also not needed anymore
    // "@nuxtjs/fontaine",
    "nuxt-vitalizer",
    "@nuxt/a11y",
    "@nuxt/hints",
  ],

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      failOnError: false,
      ignore: [
        // ignore duplicating i18n pathes
        /^\/en$/,
        /^\/ru\/(en|ru)/,
      ],
      routes: ["/sitemap.xml", "/robots.txt"],
    },
    preset: "bun",
  },

  ogImage: {
    enabled: false,
  },

  routeRules: {
    "/": { prerender: true },
    "/api/*": { cache: isDev ? false : { maxAge: 15 * 60 }, cors: true },
    "/projects": { swr: true },
    "/ru": { prerender: true },
  },

  runtimeConfig: {
    ghApiBase: "https://api.github.com",
    ghApiToken: "",
    public: {
      branch: "v5",
      webringSlug: "27rogi",
    },
  },

  security: {
    headers: {
      // fix, because default security headers seem to block external cloudflare scripts
      contentSecurityPolicy: {
        "connect-src": [
          "'self'",
          "https:",
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://webring.otomir23.me",
          "https://*.otomir23.me",
        ],
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
      },
      crossOriginEmbedderPolicy: false,
      // firefox fix: https://nuxt-security.vercel.app/advanced/faq#issue-on-firefox-when-using-iframe
      crossOriginOpenerPolicy: false,
    },
    // TODO: check why it causes payload errors if enabled
    ssg: false,
  },

  site: {
    name: "rogi#su",
    url: "https://rogi.party",
  },

  vitalizer: {
    disableStylesheets: true,
  },

  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "vue-tippy",
        "date-fns",
        "date-fns/locale",
        "@elysiajs/eden",
        "@unhead/schema-org/vue",
      ],
    },
  },
})
